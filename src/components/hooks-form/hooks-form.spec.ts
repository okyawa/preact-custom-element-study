import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/preact';

// import { HooksForm } from './hooks-form';

// FixMe: ↓の全てインポートする形式の場合、読み取り先の import { h } from 'preact'; でエラーになる状態
import * as Stories from './hooks-form.stories';

// import defaultData, { Primary as PrimaryStory, Secondary as SecondaryStory } from './hooks-form.stories';

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


test('test1', () => {
  expect(true).toBeTruthy();
});
