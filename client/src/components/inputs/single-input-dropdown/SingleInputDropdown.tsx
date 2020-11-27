import React, { useState } from 'react';
import { Options } from '../select/Select';
import InputDropDown from '../input-drop-down/InputDropDown';
interface Props {
  items: Options[];
  placeholder: string;
  onChange?: (target: string) => void;
}
const SingleInputDropDown: React.FC<Props> = ({ items, placeholder, onChange }: Props) => {
  const [select, setSelect] = useState<string>();

  const findSelectedItem = items.find((item) => item.value === select);
  const displayHeader = findSelectedItem ? findSelectedItem.label : placeholder;

  const selectChange = (value: string): void => {
    setSelect(value);
    if (onChange !== undefined) {
      onChange(value);
    }
  };

  return <InputDropDown items={items} header={displayHeader + ''} selectValue={select} onChange={selectChange} />;
};

export default SingleInputDropDown;
