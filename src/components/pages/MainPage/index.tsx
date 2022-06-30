import React from 'react';
import Banner from './Banner';
import MainPageContent from './MainPageContent';

type CardsPropsType = {
  cardsData: {
    id: string;
    name: string;
    image: string;
    text: string;
    price: string;
    date: string;
    count: string;
  }[];
};

const MainPage = ({ cardsData }: CardsPropsType) => (
  <>
    <Banner />
    <MainPageContent cardsData={cardsData} />
  </>
);

export default MainPage;
