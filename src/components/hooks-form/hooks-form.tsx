import { Fragment, h } from 'preact';
import register from 'preact-custom-element';
import { useEffect, useReducer, useRef } from 'preact/hooks';

import { convertStrToBool } from './lib/convert';
import { formStateReducer } from './lib/form-state-reducer';
import { FormStateType, initialFormStateValues, OptionItemType } from './lib/form-type';
import { MonthlyCycle } from './monthly-cycle';
import { InputRadio } from './ui/input-radio';
import {
  deliveryDayOfWeekOptions,
  deliveryDayOptions,
  deliveryMonthlyCycleOptions,
  deliveryWeeklyCycleOptions,
} from './value-const';
import { WeeklyCycle } from './weekly-cycle';

function validateAll(state: FormStateType): boolean {
  if (state.delivery_cycle === '') {
    return false;
  }
  return true;
}

type Props = {
  name?: string;
  monthlyDisabled?: boolean;
  weeklyDisabled?: boolean;
  cycleMonth?: string;
  // cycleDayOfWeek?: OptionItemType[];
  // cycleDay?: OptionItemType[];
  // cyclePerWeek?: OptionItemType[];
  // cycleWeek?: OptionItemType[];
};

const observedAttributes = [
  'monthly-disabled',
  'weekly-disabled',
  'cycle-month',
];
const CUSTOM_ELEMENT_NAME = 'hooks-form';

export const HooksForm = ({
  name,
  monthlyDisabled,
  weeklyDisabled,
  cycleMonth,
}: Props) => {
  // 検証中
  const encodedCycleMonth = cycleMonth ? JSON.parse(cycleMonth) as OptionItemType[] : null;
console.log('cycleMonth ============ ', encodedCycleMonth);
  const defaultFormStateValues = encodedCycleMonth ? {...initialFormStateValues, delivery_monthly_cycle: encodedCycleMonth[0].value} : initialFormStateValues;
console.log(encodedCycleMonth ? encodedCycleMonth[0] : null);

  if (encodedCycleMonth === null) {
    // 選択肢のパラメータを受け取るまで
    return <Fragment>読み込み中...</Fragment>;
  }

  // Webコンポーネントのインスタンスにアクセス
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(formStateReducer, defaultFormStateValues);
  const { delivery_cycle, delivery_monthly_cycle, delivery_day, delivery_weekly_cycle, delivery_day_of_week } = state;

  const isMonthlyDisabled = convertStrToBool(monthlyDisabled);
  const isWeeklyDisabled = convertStrToBool(weeklyDisabled);
  const deliveryCycleRadioEnabled = !isMonthlyDisabled && !isWeeklyDisabled;
  if (!deliveryCycleRadioEnabled) {
    const deliveryCycleValue = isMonthlyDisabled ? 'weekly' : 'monthly';
    if (deliveryCycleValue !== state.delivery_cycle) {
      dispatch({
        field: 'delivery_cycle',
        value: deliveryCycleValue,
      });
    }
  }

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }
    const hostElement: HTMLElement|null = wrapperRef.current.closest(CUSTOM_ELEMENT_NAME);
    if (hostElement === null) {
      return;
    }
    hostElement.dataset.formData = JSON.stringify(state);
    const triggerEvent = new Event('modified');
    // console.log('セレクタ', myRef.current.closest('hooks-form'));
    hostElement.dispatchEvent(triggerEvent);
    hostElement.dataset.valid = validateAll(state) ? 'true' : 'false';
  }, [state, dispatch]);

  return (
    <Fragment>
      <div class="hooks_form" ref={wrapperRef}>
        {name && (
          <div>お名前: {name}</div>
        )}
        <fieldset>
          <legend>お届けサイクル</legend>
          {!isMonthlyDisabled && (
            <div>
              {deliveryCycleRadioEnabled && (
                <div>
                  <InputRadio
                    name="delivery_cycle"
                    id="monthly_cycle"
                    dataTestId="monthly_cycle"
                    value="monthly"
                    label="月ごと"
                    currentValue={delivery_cycle}
                    dispatch={dispatch}
                  />
                </div>
              )}
              {delivery_cycle === 'monthly' && (
                <MonthlyCycle
                  deliveryMonthlyCycle={delivery_monthly_cycle}
                  deliveryMonthlyCycleOptions={encodedCycleMonth ?? deliveryMonthlyCycleOptions}
                  deliveryDay={delivery_day}
                  deliveryDayOptions={deliveryDayOptions}
                  dispatch={dispatch}
                ></MonthlyCycle>
              )}
            </div>
          )}
          {!isWeeklyDisabled && (
            <div>
              {deliveryCycleRadioEnabled && (
                <div>
                  <InputRadio
                    name="delivery_cycle"
                    id="weekly_cycle"
                    dataTestId="weekly_cycle"
                    value="weekly"
                    label="週ごと"
                    currentValue={delivery_cycle}
                    dispatch={dispatch}
                  />
                </div>
              )}
              {delivery_cycle === 'weekly' && (
                <WeeklyCycle
                  deliveryWeeklyCycle={delivery_weekly_cycle}
                  deliveryWeeklyCycleOptions={deliveryWeeklyCycleOptions}
                  deliveryDayOfWeek={delivery_day_of_week}
                  deliveryDayOfWeekOptions={deliveryDayOfWeekOptions}
                  dispatch={dispatch}
                ></WeeklyCycle>
              )}
            </div>
          )}
        </fieldset>
      </div>
    </Fragment>
  );
};

register(HooksForm, CUSTOM_ELEMENT_NAME, observedAttributes, { shadow: false });
