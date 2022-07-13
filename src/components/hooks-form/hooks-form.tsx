import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { formStateReducer } from "./lib/form-state-reducer";
import { FormStateType, initialFormStateValues } from "./lib/form-type";
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

  return <div class="hooks_form" ref={myRef}>
    <fieldset>
      <legend>お届けサイクル</legend>
      <div>
        <div>
          <input
            type="radio"
            name="delivery_cycle"
            id="monthly_cycle"
            value="monthly"
            checked={delivery_cycle === 'monthly'}
            onChange={onChange} />
          <label for="monthly_cycle">月ごと</label>
        </div>
        {
          delivery_cycle === 'monthly' && (
            <div>
              <select name="delivery_monthly_cycle" onChange={onChange} value={delivery_monthly_cycle}>
                {
                  Object.keys(deliveryMonthlyCycleOptions)
                    .map((name) => <option value={name}>{deliveryMonthlyCycleOptions[name]}</option>)
                }
              </select>
              <select name="delivery_day" onChange={onChange} value={delivery_day}>
                {
                  Object.keys(deliveryDayOptions)
                    .map((name) => <option value={name}>{deliveryDayOptions[name]}</option>)
                }
              </select>
            </div>
          )
        }
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="delivery_cycle"
            id="weekly_cycle"
            value="weekly"
            checked={delivery_cycle === 'weekly'}
            onChange={onChange} />
          <label for="weekly_cycle">週ごと</label>
        </div>
        {
          delivery_cycle === 'weekly' && (
            <div>
              <select name="delivery_weekly_cycle" onChange={onChange} value={delivery_weekly_cycle}>
                {
                  Object.keys(deliveryWeeklyCycleOptions)
                    .map((name) => <option value={name}>{deliveryWeeklyCycleOptions[name]}</option>)
                }
              </select>
              <select name="delivery_day_of_week" onChange={onChange} value={delivery_day_of_week}>
                {
                  Object.keys(deliveryDayOfWeekOptions)
                    .map((name) => <option value={name}>{deliveryDayOfWeekOptions[name]}</option>)
                }
              </select>
            </div>
          )
        }
      </div>
    </fieldset>

  </div>;
}

register(
  HooksForm,
  'hooks-form',
  [

  ],
  { shadow: false }
);
