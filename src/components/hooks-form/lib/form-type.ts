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

export const initialFormStateValues: FormStateType = {
  delivery_cycle: '',
  delivery_monthly_cycle: 'month1',
  delivery_day: 'day1',
  delivery_weekly_cycle: 'week2',
  delivery_day_of_week: 'monday',
};

export type OptionListType = {
  [key: string]: string;
};

export type HtmlAttrListType = {
  [key: string]: string;
};
