// import { Meta, StoryObj, StoryFn } from '@storybook/preact';
import * as sb from '@storybook/preact';
import { h } from 'preact';

import { HooksForm } from './hooks-form';

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
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Nancy',
};
