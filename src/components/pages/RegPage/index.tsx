import React from 'react';
import { Link } from 'react-router-dom';
import ReghBtn from '../../common/Button/RegBtn';
import RegInput from '../../common/Form/RegInput';
import style from './RegPage.module.scss';

const RegPage = () => (
  <div className={style.container}>
    <div className={style.footer}>
      <h1>Hello, world!</h1>
      <p>Создайте аккаунт</p>
    </div>
    <div className={style.df}>
      <div className={style.reg}>
        <p>Регистрация</p>
      </div>
      <div className={style.auth}>
        <Link to="/Auth">
          <p>Авторизация</p>
        </Link>
      </div>
    </div>
    <RegInput />
    <div className={style.checkbox}>
      <input className={style.checkbox__input} id="hd-1" type="checkbox" />
      <span className={style.checkbox__text}>Принимаю условия</span>
      <div className={style.agreement}>
        <Link to="*" className={style.agreement_text}>
          Пользовательского соглашения
        </Link>
      </div>
    </div>
    <ReghBtn />
  </div>
);

export default RegPage;
