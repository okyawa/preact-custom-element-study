import { Fragment, h, JSX } from 'preact';
import { ActionType, HtmlAttrListType } from '../lib/form-type';

type Props = {
  name: string;
  value: string;
  id: string;
  currentValue: string;
  label: string;
  attributes?: HtmlAttrListType;
  dispatch: (action: ActionType) => void;
};

export const InputRadio = ({ name, value, id, currentValue, label, dispatch }: Props) => {
  const onChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <>
      <input type="radio" name={name} id={id} value={value} checked={currentValue === value} onChange={onChange} />
      <label for={id}>{label}</label>
    </>
  );
};
