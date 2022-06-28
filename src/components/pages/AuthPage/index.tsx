import React from 'react';
import { Link } from 'react-router-dom';
import AuthBtn from '../../common/Button/AuthBtn';
import AuthInput from '../../common/Form/AuthInput';
import style from './AuthPage.module.scss';

const AuthPage = () => (
  <div className={style.container}>
    <div className={style.footer}>
      <h1>Hello, world!</h1>
      <p>Пройдите авторизацию</p>
    </div>
    <div className={style.df}>
      <div className={style.reg}>
        <Link to="/Reg">
          <p>Регистрация</p>
        </Link>
      </div>
      <div className={style.auth}>
        <p>Авторизация</p>
      </div>
    </div>
    <AuthInput />
    <p className={style.p}>Забыли пароль?</p>
    <AuthBtn />
  </div>
);

export default AuthPage;
