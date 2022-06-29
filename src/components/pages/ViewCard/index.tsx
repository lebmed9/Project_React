import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './ViewCard.module.scss';
import Slider from './Slider';

type CardsPropsType = {
  cardItem: {
    id: string;
    image: string;
    name: string;
    text: string;
    price: string;
    date: string;
    count: string;
    telefone: string;
  };
  sliderImg: {
    id: number;
    value: string;
  }[];
};

const ViewCard = ({ cardItem, sliderImg }: CardsPropsType) => {
  const [number, setNumber] = useState(false);

  const changeType = () => {
    setNumber((prev) => !prev);
  };

  return (
    <div className={style.content}>
      <div className={style.df_text}>
        <div className={style.text}>
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z"
                fill="#2C2D2E"
              />
            </svg>
          </Link>

          <p>{cardItem?.date}</p>
          <h1>{cardItem?.name}</h1>
          <p>{cardItem?.id}</p>
          <div className={style.count}>
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
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569
            9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#1d1d1d80"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{cardItem?.count}</p>
          </div>
        </div>
        <div className={style.price}>
          <h1>{cardItem?.price}</h1>
          <button className={style.button} type="submit" onClick={changeType}>
            {number ? 'Скрыть номер' : 'Показать номер'}
          </button>
          {number && (
            <div className={style.error}>
              <span>{cardItem?.telefone}</span>
            </div>
          )}
        </div>
      </div>

      <div className={style.df_sidebar}>
        <Slider sliderImg={sliderImg} />
        <div className={style.price_mobile}>
          <div>
            <h1>{cardItem?.price}</h1>
          </div>
          <div>
            <button className={style.button} type="submit" onClick={changeType}>
              {number ? 'Скрыть номер' : 'Показать номер'}
            </button>
            {number && (
              <div className={style.error}>
                <span>{cardItem?.telefone}</span>
              </div>
            )}
          </div>
        </div>
        <div className={style.sidebar}>
          <p>Смотрите также:</p>
          <img src="/image/cards-main/img_1/img1.png" alt="sb1" />
          <img src="/image/cards-main/img_1/img1.png" alt="sb2" />
        </div>
      </div>
      <div className={style.description}>
        <h4>Описание:</h4>
        <p>Стиральная машина в отличном состянии, чистая, без накипи.</p>
        <p>С машиной отдам новый шланг для подключения воды и упаковку средства против накипи.</p>
      </div>
      <div className={style.map}>
        <div className={style.text_map}>
          <h4>Местоположение:</h4>
          <p>г. Кстово</p>
        </div>
        <img src="/image/map.png" alt="map" />
      </div>
      <div className={style.sidebar_mobile}>
        <p>Смотрите также:</p>
        <div className={style.df_sidebar_mobile}>
          <img src="/image/cards-main/img_1/img1.png" alt="sb1" />
          <img src="/image/cards-main/img_1/img1.png" alt="sb2" />
          <img src="/image/cards-main/img_1/img1.png" alt="sb3" />
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
