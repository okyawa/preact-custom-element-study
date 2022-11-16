// import { expect } from '@storybook/jest';
import * as sb from '@storybook/preact';
import { fireEvent, waitFor, within } from '@storybook/testing-library';
import { h } from 'preact';

import { ActionType } from '../lib/form-type';

import { Select } from './select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
  },
};

/*
const Template: sb.StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({

});
Primary.args = {
  name: '',
  dataTestId: '',
  currentValue: '',
  options: [],
  attributes: {},
  dispatch: (action: ActionType) => {},
};
*/
