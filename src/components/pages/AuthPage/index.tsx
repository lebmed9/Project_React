import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../common/Form/AuthReg';
import style from './AuthPage.module.scss';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [viewPassword, setViewPassword] = useState(true);

  const submitHandler = () => {
    if (password.length > 10) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const changeType = () => {
    setViewPassword((prev) => !prev);
  };

  useEffect(() => {
    if (password.length > 10) {
      setHasError(false);
    } else if (password.length > 0) {
      setHasError(true);
    }
  }, [password]);

  return (
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
      <Input placeholder="Email" value={email} setValue={setEmail} type="text" />
      <form className={style.form}>
        <Input
          placeholder="Пароль"
          value={password}
          setValue={setPassword}
          type={viewPassword ? 'password' : 'text'}
        />
        <svg
          onClick={changeType}
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.78396 7.5C1.87504 7.65739 1.99578 7.85796 2.14536 8.08956C2.52955 8.68443 3.09849 9.4755 3.83714 10.2634C5.32964 11.8554 7.41631 13.3333 10.0001 13.3333C12.5838 13.3333 14.6705 11.8554 16.163 10.2634C16.9017 9.4755 17.4706 8.68443 17.8548 8.08956C18.0044 7.85796 18.1251 7.65739 18.2162 7.5C18.1251 7.34261 18.0044 7.14204 17.8548 6.91044C17.4706 6.31557 16.9017 5.5245 16.163 4.73662C14.6705 3.14463 12.5838 1.66667 10.0001 1.66667C7.41631 1.66667 5.32964 3.14463 3.83714 4.73662C3.09849 5.5245 2.52955 6.31557 2.14536 6.91044C1.99578 7.14204 1.87504 7.34261 1.78396 7.5ZM19.1668 7.5C19.9122 7.12732 19.912 7.12704 19.9119 7.12673L19.9105 7.12406L19.9077 7.11837L19.8982 7.09985C19.8902 7.08439 19.879 7.06276 19.8645 7.03536C19.8355 6.98058 19.7935 6.90269 19.7385 6.80499C19.6287 6.6097 19.4669 6.3346 19.2549 6.00623C18.8318 5.35109 18.2028 4.4755 17.3789 3.59672C15.7464 1.85537 13.2497 0 10.0001 0C6.75046 0 4.25377 1.85537 2.62124 3.59672C1.79738 4.4755 1.1684 5.35109 0.745285 6.00623C0.533212 6.3346 0.371496 6.6097 0.261645 6.80499C0.206688 6.90269 0.164618 6.98058 0.135629 7.03536C0.121131 7.06276 0.109897 7.08439 0.101949 7.09985L0.0924923 7.11837L0.0896164 7.12406L0.0886424 7.126C0.0884893 7.1263 0.087978 7.12732 0.833339 7.5L0.087978 7.12732C-0.029326 7.36193 -0.029326 7.63807 0.087978 7.87268L0.833339 7.5C0.087978 7.87268 0.0878249 7.87237 0.087978 7.87268L0.0896164 7.87594L0.0924923 7.88163L0.101949 7.90015C0.109897 7.91561 0.121131 7.93724 0.135629 7.96463C0.164618 8.01942 0.206688 8.09731 0.261645 8.19501C0.371496 8.3903 0.533212 8.6654 0.745285 8.99377C1.1684 9.64891 1.79738 10.5245 2.62124 11.4033C4.25377 13.1446 6.75046 15 10.0001 15C13.2497 15 15.7464 13.1446 17.3789 11.4033C18.2028 10.5245 18.8318 9.64891 19.2549 8.99377C19.4669 8.6654 19.6287 8.3903 19.7385 8.19501C19.7935 8.09731 19.8355 8.01942 19.8645 7.96463C19.879 7.93724 19.8902 7.91561 19.8982 7.90015L19.9077 7.88163L19.9105 7.87594L19.9115 7.874C19.9117 7.8737 19.9122 7.87268 19.1668 7.5ZM19.1668 7.5L19.9122 7.87268C20.0295 7.63807 20.0292 7.36134 19.9119 7.12673L19.1668 7.5Z"
              fill="#2A2F37"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 5.83366C9.07956 5.83366 8.33337 6.57985 8.33337 7.50033C8.33337 8.4208 9.07956 9.16699 10 9.16699C10.9205 9.16699 11.6667 8.4208 11.6667 7.50033C11.6667 6.57985 10.9205 5.83366 10 5.83366ZM6.66669 7.50033C6.66669 5.65938 8.15908 4.16699 10 4.16699C11.841 4.16699 13.3334 5.65938 13.3334 7.50033C13.3334 9.34127 11.841 10.8337 10 10.8337C8.15908 10.8337 6.66669 9.34127 6.66669 7.50033Z"
              fill="#2A2F37"
            />
          </g>
        </svg>
      </form>
      {hasError && (
        <div className={style.error}>
          <span>Пароль должден быть больше 10 символов</span>
        </div>
      )}
      <Link to="*">
        <p className={style.p}>Забыли пароль?</p>
      </Link>
      <button className={style.button} type="button" onClick={submitHandler}>
        Войти
      </button>
    </div>
  );
};

export default AuthPage;
