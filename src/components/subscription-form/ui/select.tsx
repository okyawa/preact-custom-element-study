import { Fragment, h } from 'preact';
import { Path, UseFormRegister } from 'react-hook-form';

import { SubscriptionFormInput } from '../react-hook-form';
import { SelectionItemsType } from '../value-const';

type Props = {
  name: Path<SubscriptionFormInput>;
  label: string;
  register: UseFormRegister<SubscriptionFormInput>;
  required: boolean;
  selectionItems: SelectionItemsType;
};

export const Select = ({ name, label, register, required, selectionItems }: Props) => {
  return (
    <>
      {label !== '' && <label htmlFor={name}>{label}</label>}
      <select id={name} {...register(name, { required })}>
        {Object.keys(selectionItems).map((name) => (
          <option value={name}>{selectionItems[name]}</option>
        ))}
      </select>
    </>
  );
};
