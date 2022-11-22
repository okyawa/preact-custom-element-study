// eslint-disable-next-line import/named
import { Fragment, h, JSX } from 'preact';

import { ActionType, HtmlAttrListType, OptionItemType } from '../lib/form-type';

type Props = {
  name: string;
  dataTestId?: string;
  currentValue: string;
  options: OptionItemType[];
  attributes?: HtmlAttrListType;
  dispatch: (action: ActionType) => void;
};

export const Select = ({ options, name, dataTestId, currentValue, dispatch }: Props) => {
  const onChange = (e: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <Fragment>
      <select name={name} onChange={onChange} value={currentValue} data-testid={dataTestId}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
