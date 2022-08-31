import { h } from 'preact';

import { HooksForm } from './hooks-form';

export default { component: HooksForm };

export const Index3 = () => <HooksForm />;

/*
// ↓の形式だと "TypeError: Cannot read properties of undefined (reading 'length')" となる
export const Index: StoryObj<typeof HooksForm> = {
  args: { },
};
*/
