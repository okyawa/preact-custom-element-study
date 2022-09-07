// import { Meta, StoryObj, StoryFn } from '@storybook/preact';
import * as sb from '@storybook/preact';
import { h } from 'preact';

import { HooksForm } from './hooks-form';

export default { component: HooksForm } as sb.Meta<typeof HooksForm>;

export const Index: sb.StoryFn<typeof HooksForm> = () => <HooksForm />;
export const Index2: sb.StoryFn<typeof HooksForm> = () => <HooksForm />;

/*
// ↓の形式だと "TypeError: Cannot read properties of undefined (reading 'length')" となる
export const Index: sb.StoryObj<typeof HooksForm> = {
  args: { },
};
*/
