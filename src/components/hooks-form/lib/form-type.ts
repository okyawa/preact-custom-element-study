export type ActionType = {
  field: string;
  value: string;
};

export type FormStateType = {
  delivery_cycle: string;
  delivery_monthly_cycle: string;
  delivery_day: string;
  delivery_weekly_cycle: string;
  delivery_day_of_week: string;
};

/*
export const initialFormStateValues: FormStateType = {
  delivery_cycle: '',
  delivery_monthly_cycle: 'one_month',
  delivery_day: 'day_1',
  delivery_weekly_cycle: 'per_two_week',
  delivery_day_of_week: 'monday',
};
*/

export type OptionItemType = {
  value: string;
  label: string;
};

export type HtmlAttrListType = {
  [key: string]: string;
};

export type FormOption = {
  monthlyDisabled: boolean;
  weeklyDisabled: boolean;
  firstDeliveryDate: number,
  cycleMonth: OptionItemType[];
  cycleNthWeek: OptionItemType[];
  cycleMonthDayOfWeek: OptionItemType[];
  cycleDay: OptionItemType[];
  cycleWeek: OptionItemType[];
  cycleWeekDayOfWeek:OptionItemType[];
};
