import { Fragment, h } from 'preact';

import { ActionType, OptionListType } from './lib/form-type';
import { Select } from './ui/select';

type Props = {
  deliveryWeeklyCycle: string;
  deliveryWeeklyCycleOptions: OptionListType;
  deliveryDayOfWeek: string;
  deliveryDayOfWeekOptions: OptionListType;
  dispatch: (action: ActionType) => void;
};

export const WeeklyCycle = ({
  deliveryWeeklyCycle,
  deliveryWeeklyCycleOptions,
  deliveryDayOfWeek,
  deliveryDayOfWeekOptions,
  dispatch,
}: Props) => {
  return <>
    <div>
      <Select
        name="delivery_weekly_cycle"
        dataTestId="delivery_weekly_cycle"
        currentValue={deliveryWeeklyCycle}
        options={deliveryWeeklyCycleOptions}
        dispatch={dispatch}
      />
      <Select
        name="delivery_day_of_week"
        dataTestId="delivery_day_of_week"
        currentValue={deliveryDayOfWeek}
        options={deliveryDayOfWeekOptions}
        dispatch={dispatch}
      />
    </div>
  </>;
};
