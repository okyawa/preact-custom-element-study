import { Fragment, h } from 'preact';

import { ActionType, OptionListType } from './lib/form-type';
import { Select } from './ui/select';

type Props = {
  deliveryMonthlyCycle: string;
  deliveryMonthlyCycleOptions: OptionListType;
  deliveryDay: string;
  deliveryDayOptions: OptionListType;
  dispatch: (action: ActionType) => void;
};

export const MonthlyCycle = ({
  deliveryMonthlyCycle,
  deliveryMonthlyCycleOptions,
  deliveryDay,
  deliveryDayOptions,
  dispatch,
}: Props) => {
  return <>
    <div>
      <Select
        name="delivery_monthly_cycle"
        dataTestId="delivery_monthly_cycle"
        currentValue={deliveryMonthlyCycle}
        options={deliveryMonthlyCycleOptions}
        dispatch={dispatch}
      />
      <Select
        name="delivery_day"
        dataTestId="delivery_day"
        currentValue={deliveryDay}
        options={deliveryDayOptions}
        dispatch={dispatch}
      />
    </div>
  </>;
};
