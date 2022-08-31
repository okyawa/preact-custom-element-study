import { Meta, StoryObj, StoryFn } from '@storybook/preact';
import { h } from 'preact';

import { HooksForm } from './hooks-form';

export default { component: HooksForm } as Meta<typeof HooksForm>;

export const Index: StoryFn<typeof HooksForm> = () => <HooksForm />;
export const Index2: StoryFn<typeof HooksForm> = () => <HooksForm />;

/*
// ↓の形式だと "TypeError: Cannot read properties of undefined (reading 'length')" となる
export const Index: StoryObj<typeof HooksForm> = {
  args: { },
};
*/
