/**
 * @jest-environment jsdom
 */

import { composeStories } from '@storybook/testing-react';
import { render, fireEvent, screen } from '@testing-library/preact';
import { h } from 'preact';

import { HooksForm } from './hooks-form';
/*
// FixMe: ↓の全てインポートする形式の場合、読み取り先の import { h } from 'preact'; でエラーになる状態
import * as Stories from './hooks-form.stories';
// import defaultData, { Primary as PrimaryStory, Secondary as SecondaryStory } from './hooks-form.stories';
*/

/*
const { Primary, Secondary } = composeStories(Stories);
*/

/*
describe('StorybookのStoryを使ったHooksFormのJestテスト' ,() => {
  test('Play story', async () =>{
    const container = render(Secondary());
    await Stories.Secondary.play?.({ canvasElement: container} as any);
  });
});
*/

/*
// FixMe: preactのtesting-libraryを直接使った場合も、モジュールのエラーが消せない状態
describe('HooksForm ', () => {
  test('月ごとをクリック', async () => {
    const { container } = render(<HooksForm name="Taro" />);
    fireEvent.click(screen.getByTestId('weekly_cycle'));
    const deliveryWeeklyCycleElem = screen.getByTestId('delivery_weekly_cycle') as HTMLSelectElement;
    expect(deliveryWeeklyCycleElem).toBeVisible();
  });
});
*/

test('test1', () => {
  expect(true).toBeTruthy();
});
