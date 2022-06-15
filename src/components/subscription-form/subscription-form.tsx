import { h } from "preact";
import register from "preact-custom-element";
import { useState } from "preact/hooks";

type Props = {

};

const firstShipment: {[key: string]: string} = {
  earliest: '最短',  
  cycle: 'お届けサイクル通り',  
};

const deliveryCycleCase:  {[key: string]: string} = {
  monthly: '月ごと',
  weekly: '週ごと',
};

const deliveryMonthlyCycle: {[key: string]: string} = {
  month1: '1ヶ月ごと',
  month2: '2ヶ月ごと',
  month3: '3ヶ月ごと',
  month4: '4ヶ月ごと',
  month5: '5ヶ月ごと',
  month6: '6ヶ月ごと',
};

const deliveryDays: {[key: string]: string} = {
  day1: '毎月1日',
  day5: '毎月5日',
  day10: '毎月10日',
  day15: '毎月15日',
  day20: '毎月20日',
  day25: '毎月25日',
  end_of_month: '毎月月末',
};

const deliveryWeeklyCycle: {[key: string]: string} = {
  week1: '1週毎',
  week2: '2週毎',
  week3: '3週毎',
};

const deliveryDayOfWeek: {[key: string]: string} = {
  sunday: '日曜日',
  monday: '月曜日',
  tuesday: '火曜日',
  wednesday: '水曜日',
  thursday: '木曜日',
  friday: '金曜日',
  saturday: '土曜日',
};

export const SubscriptionForm = (props: Props) => {

  const [firstShipmentValue, setFirstShipmentValue] = useState('');
  const [deliveryCycleValue, setDeliveryCycleValue] = useState('');
  const [deliveryMonthlyCycleValue, setDeliveryMonthlyCycleValue] = useState('');
  const [deliveryDayValue, setDeliveryDayValue] = useState('');
  const [deliveryWeeklyCycleValue, setDeliveryWeeklyCycle] = useState('');
  const [deliveryDayOfWeekValue, setDeliveryDayOfWeekValue] = useState('');

  const handleFirstShipment = (e: Event) => setFirstShipmentValue('');

  return <div>
    <h3>最初の発送</h3>
    <div>
      <input
        type="radio"
        name="first_shipment"
        id="first_shipment_earliest"
        value={firstShipment.earliest}
        onChange={handleFirstShipment} />
      <label for="first_shipment_earliest">最短</label>
      <input type="radio"
        name="first_shipment"
        id="first_shipment_cycle"
        value={firstShipment.cycle}
        onChange={handleFirstShipment} />
      <label for="first_shipment_cycle">お届けサイクル通り</label>
    </div>
    <h3>お届けサイクル</h3>
    <div>
      <div>
        <input type="radio" name="delivery_cycle" value={deliveryCycleCase.monthly} id="monthly_cycle" />
        <label for="monthly_cycle">月ごと</label>
      </div>
      <div>
        <select>
          {
            Object.keys(deliveryMonthlyCycle)
              .map((name) => <option value={name}>{deliveryMonthlyCycle[name]}</option>)
          }
        </select>
        <select>
          {
            Object.keys(deliveryDays)
              .map((name) => <option value={name}>{deliveryDays[name]}</option>)
          }
        </select>
      </div>
    </div>
    <div>
      <div>
        <input type="radio" name="delivery_cycle" value={deliveryCycleCase.weekly} id="weekly_cycle" />
        <label for="weekly_cycle">週ごと</label>
      </div>
      <div>
        <select>
          {
            Object.keys(deliveryWeeklyCycle)
              .map((name) => <option value={name}>{deliveryWeeklyCycle[name]}</option>)
          }
        </select>
        <select>
          {
            Object.keys(deliveryDayOfWeek)
              .map((name) => <option value={name}>{deliveryDayOfWeek[name]}</option>)
          }
        </select>
      </div>
    </div>

  </div>;
}

register(
  SubscriptionForm,
  'subscription-form',
  [

  ],
  { shadow: true }
);
