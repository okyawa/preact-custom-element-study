// eslint-disable-next-line import/named
import { Fragment, h, JSX } from 'preact';

import { ActionType, HtmlAttrListType } from '../lib/form-type';

type Props = {
  name: string;
  value: string;
  id: string;
  dataTestId?: string;
  currentValue: string;
  label: string;
  attributes?: HtmlAttrListType;
  dispatch: (action: ActionType) => void;
};

export const InputRadio = ({ name, value, id, dataTestId, currentValue, label, dispatch }: Props) => {
  const onChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <Fragment>
      <input type="radio" name={name} id={id} data-testid={dataTestId} value={value} checked={currentValue === value} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </Fragment>
  );
};
