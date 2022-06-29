import { Fragment, h } from "preact";
import register from "preact-custom-element";
import { useForm, SubmitHandler } from "react-hook-form";
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

type Props = {

};

export const ReactHookForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<SubscriptionFormInput>();
  const onSubmit: SubmitHandler<SubscriptionFormInput> = (data) => {
    console.log(data);
  };

  return <>
    <h2>React Hook Formを使った検証</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          defaultValue={initialValues.first_name}
          placeholder="お名前"
          {...register('first_name', { required: true, maxLength: 20 })}
        />
        {errors.first_name && <span>お名前を入力してください</span>}
      </div>
      <fieldset>
        <legend>お届けサイクル</legend>
        <div>
          <label><input type="radio" value="monthly" {...register('delivery_cycle', { required: true })} />週ごと</label>
          <label><input type="radio" value="weekly" {...register('delivery_cycle', { required: true })} />月ごと</label>
        </div>
        <div>
          <select {...register('delivery_monthly_cycle', { required: true })}>
            {
              Object.keys(deliveryMonthlyCycle)
                .map((name) => <option value={name}>{deliveryMonthlyCycle[name]}</option>)
            }
          </select>
          <select {...register('delivery_days', { required: true })}>
            {
              Object.keys(deliveryDays)
                .map((name) => <option value={name}>{deliveryDays[name]}</option>)
            }
          </select>
        </div>
        <div>
          <select {...register('delivery_weekly_cycle', { required: true })}>
            {
              Object.keys(deliveryWeeklyCycle)
                .map((name) => <option value={name}>{deliveryWeeklyCycle[name]}</option>)
            }
          </select>
          <select
            defaultValue={initialValues.delivery_day_of_week}
            {...register('delivery_day_of_week', { required: true })}
          >
            {
              Object.keys(deliveryDayOfWeek)
                .map((name) => <option value={name}>{deliveryDayOfWeek[name]}</option>)
            }
          </select>
        </div>
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