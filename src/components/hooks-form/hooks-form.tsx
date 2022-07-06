import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef, useState } from "preact/hooks";
import { deliveryDayOfWeekOptions, deliveryDayOptions, deliveryMonthlyCycleOptions, deliveryWeeklyCycleOptions } from "./value-const";

type StateType = {
  [key: string]: string;
};

type InitialStateType = {
  delivery_cycle: string;
  delivery_monthly_cycle: string;
  delivery_day: string;
  delivery_weekly_cycle: string;
  delivery_day_of_week: string;
};

const initialStateValues: InitialStateType = {
  delivery_cycle: '',
  delivery_monthly_cycle: 'month1',
  delivery_day: 'day1',
  delivery_weekly_cycle: 'week2',
  delivery_day_of_week: 'monday',
};

function reducer(state: InitialStateType, { field, value }: StateType) {
console.log(state, field, value);
  return {
    ...state,
    [field]: value,
  }
}

type Props = {

};

export const HooksForm = (props: Props) => {

  // Webコンポーネントのインスタンスにアクセス
  const myRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, initialStateValues);
  const {
    delivery_cycle: deliveryCycle,
    delivery_monthly_cycle: deliveryMonthlyCycle,
    delivery_day: deliveryDay,
    delivery_weekly_cycle: deliveryWeeklyCycle,
    delivery_day_of_week: deliveryDayOfWeek
  } = state;

  const onChange = (e: JSX.TargetedEvent<HTMLInputElement|HTMLSelectElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.dataset.formData = JSON.stringify(state);
      const triggerEvent = new Event('modified')
      myRef.current.dispatchEvent(triggerEvent);
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
            checked={deliveryCycle === 'monthly'}
            onChange={onChange} />
          <label for="monthly_cycle">月ごと</label>
        </div>
        {
          deliveryCycle === 'monthly' && (
            <div>
              <select onChange={onChange} value={deliveryMonthlyCycle}>
                {
                  Object.keys(deliveryMonthlyCycleOptions)
                    .map((name) => <option value={name}>{deliveryMonthlyCycleOptions[name]}</option>)
                }
              </select>
              <select onChange={onChange} value={deliveryDay}>
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
            checked={deliveryCycle === 'weekly'}
            onChange={onChange} />
          <label for="weekly_cycle">週ごと</label>
        </div>
        {
          deliveryCycle === 'weekly' && (
            <div>
              <select onChange={onChange} value={deliveryWeeklyCycle}>
                {
                  Object.keys(deliveryWeeklyCycleOptions)
                    .map((name) => <option value={name}>{deliveryWeeklyCycleOptions[name]}</option>)
                }
              </select>
              <select onChange={onChange} value={deliveryDayOfWeek}>
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
