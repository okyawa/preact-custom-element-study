import { Fragment, h } from 'preact';
import { memo } from 'preact/compat';

import { ActionType, OptionItemType } from './lib/form-type';
import { Select } from './ui/select';

type Props = {
  deliveryMonthlyCycle: string;
  deliveryMonthlyCycleOptions: OptionItemType[];
  deliveryDay: string;
  deliveryDayOptions: OptionItemType[];
  dispatch: (action: ActionType) => void;
};

export const MonthlyCycle = memo(({
  deliveryMonthlyCycle,
  deliveryMonthlyCycleOptions,
  deliveryDay,
  deliveryDayOptions,
  dispatch,
}: Props) => {
  return <Fragment>
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
  </Fragment>;
});
