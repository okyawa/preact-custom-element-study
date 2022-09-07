import { h } from 'preact';

import { HooksForm } from './hooks-form';

// export default { component: HooksForm };

// export const Index3 = () => <HooksForm />;

/*
// ↓の形式だと "TypeError: Cannot read properties of undefined (reading 'length')" となる
export const Index4 = {
  args: { },
};
*/

export default {
  title: 'HooksForm - js',
  component: HooksForm,
  argTypes: {
  },
};

const Template = (args) => <HooksForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Tom',
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'Nancy',
};
