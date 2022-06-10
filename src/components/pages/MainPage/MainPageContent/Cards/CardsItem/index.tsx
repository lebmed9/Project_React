import React from 'react';
import style from './Cards.module.scss';

const Cards = () => (
  <div className={style.cards}>
    <img src="/image/cards-main/Bosch.png" alt="card" />
    <div className={style.text}>
      <h1>Стиральная машина Bosch</h1>
      <p>Машина в хорошем состоянии. Возможен разумный торг</p>
      <p className={style.price}>22500 P</p>
      <div className={style.date}>
        <p>14 апреля 2021</p>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#2C2D2E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>356</p>
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
