import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import register from "preact-custom-element";

type Props = {
  name: string;
  message: string;
};

export const NameField = (props: Props) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
  }, []);

  const name = props.name;
  return <div>
      <input name={name} value={value} onChange={(event) => console.log(event.target) } />
      <div>
        Custom Element外の入力欄の値: {props.message}
      </div>
    </div>;
}

register(
  NameField,
  "name-field",
  [
    "name",
    "message",
    "style",
    "class",
  ],
  { shadow: true },
);
