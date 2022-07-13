import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { formStateReducer } from "./lib/form-state-reducer";
import { FormStateType, initialFormStateValues } from "./lib/form-type";
import { Select } from "./ui/select";
import {
  deliveryDayOfWeekOptions,
  deliveryDayOptions,
  deliveryMonthlyCycleOptions,
  deliveryWeeklyCycleOptions,
} from "./value-const";

function validateAll(state: FormStateType): boolean {
  if (state.delivery_cycle === '') {
    return false
  }
  return true;
}

type Props = {

};

export const HooksForm = (props: Props) => {

  // Webコンポーネントのインスタンスにアクセス
  const myRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(formStateReducer, initialFormStateValues);
  const {
    delivery_cycle,
    delivery_monthly_cycle,
    delivery_day,
    delivery_weekly_cycle,
    delivery_day_of_week
  } = state;

  const onChange = (e: JSX.TargetedEvent<HTMLInputElement|HTMLSelectElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.dataset.formData = JSON.stringify(state);
      const triggerEvent = new Event('modified')
      myRef.current.dispatchEvent(triggerEvent);
      myRef.current.dataset.valid = validateAll(state) ? 'true' : 'false';
    }
  }, [state, dispatch]);

  return (
    <div class="hooks_form" ref={myRef}>
      <fieldset>
        <legend>お届けサイクル</legend>
        <div>
          <div>
            <input
              type="radio"
              name="delivery_cycle"
              id="monthly_cycle"
              value="monthly"
              checked={delivery_cycle === "monthly"}
              onChange={onChange}
            />
            <label for="monthly_cycle">月ごと</label>
          </div>
          {delivery_cycle === "monthly" && (
            <div>
              <Select
                name="delivery_monthly_cycle"
                value={delivery_monthly_cycle}
                options={deliveryMonthlyCycleOptions}
                dispatch={dispatch}
              />
              <Select
                name="delivery_day"
                value={delivery_day}
                options={deliveryDayOptions}
                dispatch={dispatch}
              />
            </div>
          )}
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="delivery_cycle"
              id="weekly_cycle"
              value="weekly"
              checked={delivery_cycle === "weekly"}
              onChange={onChange}
            />
            <label for="weekly_cycle">週ごと</label>
          </div>
          {delivery_cycle === "weekly" && (
            <div>
              <Select
                name="delivery_weekly_cycle"
                value={delivery_weekly_cycle}
                options={deliveryWeeklyCycleOptions}
                dispatch={dispatch}
              />
              <Select
                name="delivery_day_of_week"
                value={delivery_day_of_week}
                options={deliveryDayOfWeekOptions}
                dispatch={dispatch}
              />
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
}

register(
  HooksForm,
  'hooks-form',
  [

  ],
  { shadow: false }
);
