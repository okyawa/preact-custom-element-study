import { Fragment, h } from 'preact';
import { Path, UseFormRegister } from 'react-hook-form';

import { SubscriptionFormInput } from '../react-hook-form';

type Props = {
  name: Path<SubscriptionFormInput>;
  label: string;
  register: UseFormRegister<SubscriptionFormInput>;
  required: boolean;
};

export const InputText = ({ name, label, register, required }: Props) => {
  return (
    <>
      <label>{label}</label>
      <input {...register(name, { required })} />
    </>
  );
};
