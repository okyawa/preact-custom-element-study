import { Fragment, h } from 'preact';
import register from 'preact-custom-element';
import { useEffect, useReducer, useRef } from 'preact/hooks';

import { convertStrToBool } from './lib/convert';
import { formStateReducer } from './lib/form-state-reducer';
import { FormStateType, FormOption } from './lib/form-type';
import { MonthlyCycle } from './monthly-cycle';
import { InputRadio } from './ui/input-radio';
import { WeeklyCycle } from './weekly-cycle';

function validateAll(state: FormStateType): boolean {
  if (state.delivery_cycle === '') {
    return false;
  }
  return true;
}

type Props = {
  formOption?: string;
  name?: string;
};

const observedAttributes = [
  'form-option',
];
const CUSTOM_ELEMENT_NAME = 'hooks-form';

export const HooksForm = ({
  name,
  formOption,
}: Props) => {
// console.log('Raw formOption ============ ', formOption);
  const encodedFormOption = formOption ? JSON.parse(formOption) as FormOption : null;
// console.log('Encoded formOption ============ ', encodedFormOption);
  if (encodedFormOption === null) {
    // 選択肢のパラメータを受け取るまで
    return <Fragment>読み込み中...</Fragment>;
  }

  // 選択肢の初期値
  const defaultFormStateValues: FormStateType = {
    delivery_cycle: encodedFormOption?.defaults?.delivery_cycle ?? '',
    delivery_monthly_cycle: encodedFormOption?.defaults?.delivery_monthly_cycle ?? encodedFormOption.cycleMonth[0].value,
    delivery_day: encodedFormOption?.defaults?.delivery_day ?? encodedFormOption.cycleDay[0].value,
    delivery_weekly_cycle: encodedFormOption?.defaults?.delivery_weekly_cycle ?? encodedFormOption.cycleWeek[0].value,
    delivery_day_of_week: encodedFormOption?.defaults?.delivery_day_of_week ?? encodedFormOption.cycleWeekDayOfWeek[0].value,
  };

  // Webコンポーネントのインスタンスにアクセス
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(formStateReducer, defaultFormStateValues);
  const { delivery_cycle, delivery_monthly_cycle, delivery_day, delivery_weekly_cycle, delivery_day_of_week } = state;

  const isMonthlyDisabled = convertStrToBool(encodedFormOption.monthlyDisabled);
  const isWeeklyDisabled = convertStrToBool(encodedFormOption.weeklyDisabled);
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
    const eventDetail = {
      state,
      valid: validateAll(state) ? 'true' : 'false',
    };
    const triggerEvent = new CustomEvent('modified', { detail: eventDetail });
    hostElement.dispatchEvent(triggerEvent);
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
                  deliveryMonthlyCycleOptions={encodedFormOption.cycleMonth}
                  deliveryDay={delivery_day}
                  deliveryDayOptions={encodedFormOption.cycleDay}
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
                  deliveryWeeklyCycleOptions={encodedFormOption.cycleWeek}
                  deliveryDayOfWeek={delivery_day_of_week}
                  deliveryDayOfWeekOptions={encodedFormOption.cycleWeekDayOfWeek}
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
