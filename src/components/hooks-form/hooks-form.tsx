import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { formStateReducer } from "./lib/form-state-reducer";
import { FormStateType, initialFormStateValues } from "./lib/form-type";
import { InputRadio } from "./ui/input-radio";
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
            <InputRadio
              name="delivery_cycle"
              id="monthly_cycle"
              value="monthly"
              label="月ごと"
              currentValue={delivery_cycle}
              dispatch={dispatch}
            />
          </div>
          {delivery_cycle === "monthly" && (
            <div>
              <Select
                name="delivery_monthly_cycle"
                currentValue={delivery_monthly_cycle}
                options={deliveryMonthlyCycleOptions}
                dispatch={dispatch}
              />
              <Select
                name="delivery_day"
                currentValue={delivery_day}
                options={deliveryDayOptions}
                dispatch={dispatch}
              />
            </div>
          )}
        </div>
        <div>
          <div>
            <InputRadio
              name="delivery_cycle"
              id="weekly_cycle"
              value="weekly"
              label="週ごと"
              currentValue={delivery_cycle}
              dispatch={dispatch}
            />
          </div>
          {delivery_cycle === "weekly" && (
            <div>
              <Select
                name="delivery_weekly_cycle"
                currentValue={delivery_weekly_cycle}
                options={deliveryWeeklyCycleOptions}
                dispatch={dispatch}
              />
              <Select
                name="delivery_day_of_week"
                currentValue={delivery_day_of_week}
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
