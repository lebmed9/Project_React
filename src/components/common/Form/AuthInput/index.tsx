import React from 'react';
import style from './AuthInput.module.scss';

const AuthInput = () => (
  <form className={style.form}>
    <input title="Email" id="email" placeholder="Email" />
    <input title="Password" id="password" placeholder="Пароль" type="password" />
  </form>
);

export default AuthInput;
