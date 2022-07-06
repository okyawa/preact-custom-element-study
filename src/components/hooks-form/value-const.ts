export type SelectionItemsType = {
  [key: string]: string
};

export const deliveryCycleCaseOptions: SelectionItemsType = {
  monthly: '月ごと',
  weekly: '週ごと',
};

export const deliveryMonthlyCycleOptions: SelectionItemsType = {
  month1: '1ヶ月ごと',
  month2: '2ヶ月ごと',
  month3: '3ヶ月ごと',
  month4: '4ヶ月ごと',
  month5: '5ヶ月ごと',
  month6: '6ヶ月ごと',
};

export const deliveryDayOptions: SelectionItemsType = {
  day1: '毎月1日',
  day5: '毎月5日',
  day10: '毎月10日',
  day15: '毎月15日',
  day20: '毎月20日',
  day25: '毎月25日',
  endOfMonth: '毎月月末',
};

export const deliveryWeeklyCycleOptions: SelectionItemsType = {
  week2: '2週毎',
  week3: '3週毎',
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
