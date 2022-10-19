export type SelectionItemsType = {
  [key: string]: string;
};

export const deliveryCycleCaseOptions: SelectionItemsType = {
  monthly: '月ごと',
  weekly: '週ごと',
};

export const deliveryMonthlyCycleOptions: SelectionItemsType = {
  one_month: '1ヶ月ごと',
  two_month: '2ヶ月ごと',
  three_month: '3ヶ月ごと',
  four_month: '4ヶ月ごと',
  five_month: '5ヶ月ごと',
  six_month: '6ヶ月ごと',
};

export const deliveryDayOptions: SelectionItemsType = {
  day_1: '毎月1日',
  day_5: '毎月5日',
  day_10: '毎月10日',
  day_15: '毎月15日',
  day_20: '毎月20日',
  day_25: '毎月25日',
  end_of_month: '毎月月末',
};

export const deliveryWeeklyCycleOptions: SelectionItemsType = {
  per_two_week: '2週毎',
  per_three_week: '3週毎',
  per_four_week: '4週毎',
};

export const deliveryDayOfWeekOptions: SelectionItemsType = {
  sunday: '日曜日',
  monday: '月曜日',
  tuesday: '火曜日',
  wednesday: '水曜日',
  thursday: '木曜日',
  friday: '金曜日',
  saturday: '土曜日',
};
