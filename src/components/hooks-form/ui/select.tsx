import { Fragment, h, JSX } from "preact";

import { FormActionType, HtmlAttrListType, OptionListType } from "../lib/form-type";

type Props = {
  name: string;
  value: string;
  options: OptionListType;
  attributes?: HtmlAttrListType;
  dispatch: (action: FormActionType) => void;
};

export const Select = ({ options, name, value, dispatch }: Props) => {

  const onChange = (e: JSX.TargetedEvent<HTMLInputElement|HTMLSelectElement, Event>) => {
    dispatch({ field: e.currentTarget.name, value: e.currentTarget.value });
  };

  return (
    <>
      <select name={name} onChange={onChange} value={value}>
        {Object.keys(options).map((key) => (
          <option value={key}>{options[key]}</option>
        ))}
      </select>
    </>
  );
}
