// import { Meta, StoryObj, StoryFn } from '@storybook/preact';
import { expect } from '@storybook/jest';
import * as sb from '@storybook/preact';
import { fireEvent, waitFor, within } from '@storybook/testing-library';
import { h } from 'preact';

import { HooksForm } from './hooks-form';
import { formOptionObject } from './lib/form-option-value';

/**
 * CSF3形式
 */

// export default { component: HooksForm } as sb.Meta<typeof HooksForm>;

// export const Index: sb.StoryFn<typeof HooksForm> = (args) => <HooksForm {...args} />;
// export const Index2: sb.StoryFn<typeof HooksForm> = () => <HooksForm />;

/*
↓特に効果なし
Index.bind({}).args = {
  title: 'お名前',
};
*/

/*
// ↓の形式だと "TypeError: Cannot read properties of undefined (reading 'length')" となる
export const Index: sb.StoryObj<typeof HooksForm> = {
  args: { },
};
*/

/**
 * CSF2形式
 */

export default {
  title: 'HooksForm - ts',
  component: HooksForm,
  argTypes: {
  },
};

const Template: sb.StoryFn<typeof HooksForm> = (args) => <HooksForm {...args} />;

// const Template = (args) => <HooksForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Tom',
  formOption: JSON.stringify(formOptionObject),
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Nancy',
  formOption: JSON.stringify(formOptionObject),
};

Secondary.play = async ( { canvasElement } ) => {
  const canvas = within(canvasElement);
  const weeklyCycleElem = canvas.getByTestId('weekly_cycle') as HTMLInputElement;
  await fireEvent.click(weeklyCycleElem);
  const deliveryWeeklyCycleElem = canvas.getByTestId('delivery_weekly_cycle') as HTMLSelectElement;
  await fireEvent.change(deliveryWeeklyCycleElem, {
    target: { value: 'per_three_week' },
  });
  await waitFor(async () => {
    await expect(weeklyCycleElem).toBeChecked();
    const selectedOptionElem = deliveryWeeklyCycleElem.querySelector('option:checked') as HTMLOptionElement;
    await expect(selectedOptionElem.value).toBe('per_three_week');
  });
};
