import React from 'react';
import PageWrapper from '../../common/PageWrapper';
import ViewCardContent from './ViewCardContent';
import { cardsData } from '../../../helpers';

const ViewCard = () => (
  <PageWrapper>
    {cardsData.map((el) => (
      <ViewCardContent id={el.id} name={el.name} price={el.price} date={el.date} count={el.count} />
    ))}
  </PageWrapper>
);

export default ViewCard;
