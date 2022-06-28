import React from 'react';
import style from './RegInput.module.scss';

const RegInput = () => (
  <form className={style.form}>
    <input title="Name" id="name" placeholder="Имя" />
    <input title="Surname" id="surname" placeholder="Фамилия" />
    <input title="Email" id="email" placeholder="Email" />
    <input title="Password" id="password" placeholder="Пароль" type="password" />
    <input title="Password" id="password" placeholder="Повторите пароль" type="password" />
  </form>
);

export default RegInput;
