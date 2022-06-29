import { Fragment, h } from "preact";
import register from "preact-custom-element";
import { useCallback } from "preact/hooks";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { deliveryDayOfWeek, deliveryDays, deliveryMonthlyCycle, deliveryWeeklyCycle } from "./value-const";

interface SubscriptionFormInput {
  first_name: String;
  delivery_cycle: string;
  delivery_monthly_cycle: string;
  delivery_days: string;
  delivery_weekly_cycle: string;
  delivery_day_of_week: string;
}

const initialValues = {
  first_name: '',
  delivery_day_of_week: 'monday',
};

const registerOptions = {
  firstName: {
    required: 'お名前を入力してください',
    maxLength: {
      value: 20,
      message: '20文字まで入力できます',
    },
  },
};

type Props = {

};

export const ReactHookForm = () => {
  // TODO: コンポーネントに分けて、useWatchを使う形式にする
  // https://react-hook-form.com/get-started#Integratinganexistingform
  // https://react-hook-form.com/api/usewatch
  const {
    register,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid, isDirty, isSubmitted },
    handleSubmit,
  } = useForm<SubscriptionFormInput>({
    defaultValues: initialValues,
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<SubscriptionFormInput> = useCallback((data) => {
    if (data.delivery_cycle === 'monthly') {
      if (data.delivery_monthly_cycle === '') {
        setError('delivery_monthly_cycle', {
          type: 'manual',
          message: '選択してください',
        });
        clearErrors('delivery_monthly_cycle');
      }
    }
    console.log(data);
  }, [setError, clearErrors]);

  const checkedDeliveryCycle = watch('delivery_cycle');

  return <>
    <h2>React Hook Formを使った検証</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        isDirty && !isValid && isSubmitted && <div>入力内容をご確認ください</div>
      }
      <div>
        <input
          placeholder="お名前"
          {...register('first_name', registerOptions.firstName)}
        />
        {errors.first_name && <span>お名前を入力してください</span>}
      </div>
      <fieldset>
        <legend>お届けサイクル</legend>
        <div>
          <label><input type="radio" value="monthly" {...register('delivery_cycle', { required: true })} />週ごと</label>
          <label><input type="radio" value="weekly" {...register('delivery_cycle', { required: true })} />月ごと</label>
        </div>
        {
          checkedDeliveryCycle === 'monthly' && (
            <div>
              <select {...register('delivery_monthly_cycle', { required: true })}>
                {
                  Object.keys(deliveryMonthlyCycle)
                    .map((name) => <option value={name}>{deliveryMonthlyCycle[name]}</option>)
                }
              </select>
              {errors.delivery_monthly_cycle && <span>選択してください</span>}
              <select {...register('delivery_days', { required: true })}>
                {
                  Object.keys(deliveryDays)
                    .map((name) => <option value={name}>{deliveryDays[name]}</option>)
                }
              </select>
            </div>
          )
        }
        {
          checkedDeliveryCycle === 'weekly' && (
            <div>
              <select {
                ...register('delivery_weekly_cycle', {
                  required: true,
                  validate: (value) => {
                    const checkedDeliveryCycle = getValues('delivery_cycle');
                    if (checkedDeliveryCycle !== 'weekly') {
                      return true;
                    }
                    return value !== '';
                  }
                })
              }>
                {
                  Object.keys(deliveryWeeklyCycle)
                    .map((name) => <option value={name}>{deliveryWeeklyCycle[name]}</option>)
                }
              </select>
              {errors.delivery_weekly_cycle && '選択してください'}
              <select
                {...register('delivery_day_of_week', { required: true })}
              >
                {
                  Object.keys(deliveryDayOfWeek)
                    .map((name) => <option value={name}>{deliveryDayOfWeek[name]}</option>)
                }
              </select>
            </div>
          )
        }
      </fieldset>
      <div>
        <input type="submit" />
      </div>
    </form>
  </>;
};

register(
  ReactHookForm,
  'react-hook-form',
  [

  ],
  { shadow: false }
);
