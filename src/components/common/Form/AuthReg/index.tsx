import React, { ChangeEvent } from 'react';
import style from './AuthRegInput.module.scss';

type InputPropsType = {
  placeholder: string;
  type: 'text' | 'password';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ placeholder, type, value, setValue }: InputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={style.form}>
      <input placeholder={placeholder} value={value} onChange={handler} type={type} />
    </div>
  );
};

export default Input;
