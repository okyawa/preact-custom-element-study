// eslint-disable-next-line import/named
import { Fragment, h, JSX } from 'preact';

import { ActionType, HtmlAttrListType, OptionListType } from '../lib/form-type';

type Props = {
  name: string;
  currentValue: string;
  options: OptionListType;
  attributes?: HtmlAttrListType;
  dispatch: (action: ActionType) => void;
};

export const Select = ({ options, name, currentValue: value, dispatch }: Props) => {
  const onChange = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <>
      <select name={name} onChange={onChange} value={value}>
        {Object.keys(options).map((key) => (
          <option key={key} value={key}>
            {options[key]}
          </option>
        ))}
      </select>
    </>
  );
};
