import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";
import { deliveryDayOfWeekOptions, deliveryDayOptions, deliveryMonthlyCycleOptions, deliveryWeeklyCycleOptions } from "./value-const";

type StateType = {
  [key: string]: string;
};

type InitialStateType = {
  deliveryCycle: string;
  deliveryMonthlyCycle: string;
  deliveryDay: string;
  deliveryWeeklyCycle: string;
  deliveryDayOfWeek: string;
};

const initialStateValues: InitialStateType = {
  deliveryCycle: '',
  deliveryMonthlyCycle: 'month1',
  deliveryDay: 'day1',
  deliveryWeeklyCycle: 'week2',
  deliveryDayOfWeek: 'monday',
};

function reducer(state: InitialStateType, { field, value }: StateType) {
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
    deliveryCycle,
    deliveryMonthlyCycle,
    deliveryDay,
    deliveryWeeklyCycle,
    deliveryDayOfWeek
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
            name="deliveryCycle"
            id="monthly_cycle"
            value="monthly"
            checked={deliveryCycle === 'monthly'}
            onChange={onChange} />
          <label for="monthly_cycle">月ごと</label>
        </div>
        {
          deliveryCycle === 'monthly' && (
            <div>
              <select name="deliveryMonthlyCycle" onChange={onChange} value={deliveryMonthlyCycle}>
                {
                  Object.keys(deliveryMonthlyCycleOptions)
                    .map((name) => <option value={name}>{deliveryMonthlyCycleOptions[name]}</option>)
                }
              </select>
              <select name="deliveryDay" onChange={onChange} value={deliveryDay}>
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
            name="deliveryCycle"
            id="weekly_cycle"
            value="weekly"
            checked={deliveryCycle === 'weekly'}
            onChange={onChange} />
          <label for="weekly_cycle">週ごと</label>
        </div>
        {
          deliveryCycle === 'weekly' && (
            <div>
              <select name="deliveryWeeklyCycle" onChange={onChange} value={deliveryWeeklyCycle}>
                {
                  Object.keys(deliveryWeeklyCycleOptions)
                    .map((name) => <option value={name}>{deliveryWeeklyCycleOptions[name]}</option>)
                }
              </select>
              <select name="deliveryDayOfWeek" onChange={onChange} value={deliveryDayOfWeek}>
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
