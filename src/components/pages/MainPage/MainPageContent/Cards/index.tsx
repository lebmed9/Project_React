import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Cards.module.scss';

type CardsItemPropsType = {
  id: string;
  name: string;
  image: string;
  text: string;
  price: string;
  date: string;
  count: string;
};

const Card = ({ id, name, image, text, price, date, count }: CardsItemPropsType) => (
  <div className={style.cards_item}>
    <NavLink to={`${id}`}>
      <img src={image} alt="card" />
    </NavLink>
    <NavLink to={`${id}`}>
      <div className={style.text}>
        <h1>{name}</h1>
        <p>{text}</p>
        <p className={style.price}>{price}</p>
        <div className={style.date}>
          <p>{date}</p>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                stroke="#1d1d1d80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#1d1d1d80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{count}</p>
          </div>
        </div>
      </div>
    </NavLink>
  </div>
);

export default Card;
