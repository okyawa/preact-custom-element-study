import { Meta, StoryObj, StoryFn } from '@storybook/preact';
import { h } from 'preact';

import { HooksForm } from './hooks-form';

export default { component: HooksForm } as Meta<typeof HooksForm>;

export const Index: StoryFn<typeof HooksForm> = () => <HooksForm />;
