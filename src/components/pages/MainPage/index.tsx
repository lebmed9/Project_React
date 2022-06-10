import React from 'react';
import { cardsData } from '../../../helpers';
import PageWrapper from '../../common/PageWrapper';
import Banner from './Banner';
import MainPageContent from './MainPageContent';

const MainPage = () => (
  <PageWrapper>
    <Banner />
    <MainPageContent data={cardsData} />
  </PageWrapper>
);

export default MainPage;
