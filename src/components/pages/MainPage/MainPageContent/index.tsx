import React from 'react';
import DownloadBtn from '../../../common/Button/MainPage/Dowmload';
import Cards from './Cards';
import MainNav from './MainNav';
import style from './MainPageContent.module.scss';

type CardsPropsType = {
  data: {
    id: number;
    name: string;
    image: string;
    text: string;
    price: string;
    date: string;
    count: string;
  }[];
};

const MainPageContent = ({ data }: CardsPropsType) => (
  <div className={style.container}>
    <div className={style.content}>
      <div className={style.nav}>
        <MainNav />
      </div>
      <div className={style.cards}>
        {data.map((el) => (
          <Cards
            id={el.id}
            name={el.name}
            image={el.image}
            text={el.text}
            price={el.price}
            date={el.date}
            count={el.count}
          />
        ))}
      </div>
      <DownloadBtn />
    </div>
  </div>
);

export default MainPageContent;
