import React from 'react';
import style from './Banner.module.scss';

const Banner = () => (
  <div className={style.banner}>
    <div className={style.text}>
      <h1>Доска объявлений</h1>
      <p>Находи тысячи разнообразных товаров и услуг от продавцов со всей страны.</p>
      <p>Безопасные расчеты. Удобный сервис доставки</p>
    </div>
    <img src="/image/banner-main.png" alt="banner" />
  </div>
);

export default Banner;
