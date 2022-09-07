import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/preact';

// import HooksForm from './hooks-form';
import * as Stories from './hooks-form.stories';

const { Primary, Secondary } = composeStories(Stories);

// TODO: JESTのES Module対応から続き
// https://jestjs.io/docs/ecmascript-modules
// https://jestjs.io/docs/getting-started#using-typescript

describe('HooksForm' ,() => {
  test('Play story', async () =>{
    const container = render(Secondary());
    await Stories.Secondary.play?.({ canvasElement: container} as any);
  });
});
