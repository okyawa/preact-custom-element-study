import { h, JSX } from "preact";
import register from "preact-custom-element";
import { useEffect, useRef, useState } from "preact/hooks";
import { deliveryDayOfWeek, deliveryDays, deliveryMonthlyCycle, deliveryWeeklyCycle } from "./value-const";

type Props = {

};

export const SubscriptionForm = (props: Props) => {

  // Webコンポーネントのインスタンスにアクセス
  const myRef = useRef<HTMLDivElement>(null);

  const [firstShipmentValue, setFirstShipmentValue] = useState('');
  const [deliveryCycleValue, setDeliveryCycleValue] = useState('');
  const [deliveryMonthlyCycleValue, setDeliveryMonthlyCycleValue] = useState('month1');
  const [deliveryDayValue, setDeliveryDayValue] = useState('day1');
  const [deliveryWeeklyCycleValue, setDeliveryWeeklyCycle] = useState('week1');
  const [deliveryDayOfWeekValue, setDeliveryDayOfWeekValue] = useState('monday');

  const handleFirstShipment = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => setFirstShipmentValue(e.currentTarget.value);
  const handleDeliveryCycle = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => setDeliveryCycleValue(e.currentTarget.value);
  const handleDeliveryMonthlyCycle = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => setDeliveryMonthlyCycleValue(e.currentTarget.value);
  const handleDeliveryDayValue = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => setDeliveryDayValue(e.currentTarget.value);
  const handleDeliveryWeeklyCycleValue = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => setDeliveryWeeklyCycle(e.currentTarget.value);
  const handleDeliveryDayOfWeekValue = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => setDeliveryDayOfWeekValue(e.currentTarget.value);

  useEffect(() => {
    if (myRef.current) {
      const data = {
        firstShipmentValue,
        deliveryCycleValue,
        deliveryMonthlyCycleValue,
        deliveryDayValue,
        deliveryWeeklyCycleValue,
        deliveryDayOfWeekValue,
      };
      myRef.current.dataset.formData = JSON.stringify(data);
      const triggerEvent = new Event('modified')
      myRef.current.dispatchEvent(triggerEvent);
    }
  }, [
    firstShipmentValue,
    deliveryCycleValue,
    deliveryMonthlyCycleValue,
    deliveryDayValue,
    deliveryWeeklyCycleValue,
    deliveryDayOfWeekValue,
  ]);
  return <div class="subscription_form" ref={myRef}>
    <fieldset>
      <legend>最初の発送</legend>
      <div>
        <input
          type="radio"
          name="first_shipment"
          id="first_shipment_earliest"
          value="earliest"
          checked={firstShipmentValue === 'earliest'}
          onChange={handleFirstShipment} />
        <label for="first_shipment_earliest">最短</label>
        <input type="radio"
          name="first_shipment"
          id="first_shipment_cycle"
          value="cycle"
          checked={firstShipmentValue === 'cycle'}
          onChange={handleFirstShipment} />
        <label for="first_shipment_cycle">お届けサイクル通り</label>
      </div>
    </fieldset>
    <fieldset>
      <legend>お届けサイクル</legend>
      <div>
        <div>
          <input
            type="radio"
            name="delivery_cycle"
            id="monthly_cycle"
            value="monthly"
            checked={deliveryCycleValue === 'monthly'}
            onChange={handleDeliveryCycle} />
          <label for="monthly_cycle">月ごと</label>
        </div>
        {
          deliveryCycleValue === 'monthly' && (
            <div>
              <select onChange={handleDeliveryMonthlyCycle} value={deliveryMonthlyCycleValue}>
                {
                  Object.keys(deliveryMonthlyCycle)
                    .map((name) => <option value={name}>{deliveryMonthlyCycle[name]}</option>)
                }
              </select>
              <select onChange={handleDeliveryDayValue} value={deliveryDayValue}>
                {
                  Object.keys(deliveryDays)
                    .map((name) => <option value={name}>{deliveryDays[name]}</option>)
                }
              </select>
            </div>
          )
        }
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="delivery_cycle"
            id="weekly_cycle"
            value="weekly"
            checked={deliveryCycleValue === 'weekly'}
            onChange={handleDeliveryCycle} />
          <label for="weekly_cycle">週ごと</label>
        </div>
        {
          deliveryCycleValue === 'weekly' && (
            <div>
              <select onChange={handleDeliveryWeeklyCycleValue} value={deliveryWeeklyCycleValue}>
                {
                  Object.keys(deliveryWeeklyCycle)
                    .map((name) => <option value={name}>{deliveryWeeklyCycle[name]}</option>)
                }
              </select>
              <select onChange={handleDeliveryDayOfWeekValue} value={deliveryDayOfWeekValue}>
                {
                  Object.keys(deliveryDayOfWeek)
                    .map((name) => <option value={name}>{deliveryDayOfWeek[name]}</option>)
                }
              </select>
            </div>
          )
        }
      </div>
    </fieldset>

  </div>;
}

register(
  SubscriptionForm,
  'subscription-form',
  [

  ],
  { shadow: false }
);
