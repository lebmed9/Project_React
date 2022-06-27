import React from 'react';
import { cardsData } from '../../../helpers';
import Banner from './Banner';
import MainPageContent from './MainPageContent';

const MainPage = () => (
  <>
    <Banner />
    <MainPageContent cardsData={cardsData} />
  </>
);

export default MainPage;
