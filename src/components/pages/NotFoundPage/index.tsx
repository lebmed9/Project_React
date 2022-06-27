import React from 'react';
import style from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={style.content}>
    <div className={style.text}>
      <h1>Упс! Кажется, на эту страницу прилег котик</h1>
      <p>Ошибка 404</p>
      <p>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
    </div>
    <img src="/image/not-found-1.png" alt="error" />
  </div>
);

export default NotFoundPage;
