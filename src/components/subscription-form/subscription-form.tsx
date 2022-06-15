import { h } from "preact";
import register from "preact-custom-element";

type Props = {

};

export const SubscriptionForm = (props: Props) => {

  return <div>
    <h3>最初の発送</h3>
    <div>
      <select>

      </select>
    </div>
    <h3>お届けサイクル</h3>
    <div>
      <div>
        <input type="radio" name="delivery_cycle" value="monthly" id="monthly_cycle" />
        <label for="monthly_cycle">月ごと</label>
      </div>
      <div>
        <select>
          <option>1ヶ月ごと</option>
          <option>2ヶ月ごと</option>
          <option>3ヶ月ごと</option>
          <option>4ヶ月ごと</option>
          <option>5ヶ月ごと</option>
          <option>6ヶ月ごと</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <input type="radio" name="delivery_cycle" value="weekly" id="weekly_cycle" />
        <label for="weekly_cycle">週ごと</label>
      </div>
      <div>

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
