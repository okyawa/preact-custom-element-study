import { Fragment, h } from 'preact';
import { memo } from 'preact/compat';

import { ActionType, OptionItemType } from './lib/form-type';
import { Select } from './ui/select';

type Props = {
  deliveryWeeklyCycle: string;
  deliveryWeeklyCycleOptions: OptionItemType[];
  deliveryDayOfWeek: string;
  deliveryDayOfWeekOptions: OptionItemType[];
  dispatch: (action: ActionType) => void;
};

export const WeeklyCycle = memo(({
  deliveryWeeklyCycle,
  deliveryWeeklyCycleOptions,
  deliveryDayOfWeek,
  deliveryDayOfWeekOptions,
  dispatch,
}: Props): h.JSX.Element => {
  return <Fragment>
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
  </Fragment>;
});
