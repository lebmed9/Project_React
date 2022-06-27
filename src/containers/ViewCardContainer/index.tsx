import React from 'react';
import { useParams } from 'react-router-dom';
import ViewCard from '../../components/pages/ViewCard';
import { cardsData, cardsDataView } from '../../helpers';

const ViewCardContainer = () => {
  const { id } = useParams();
  const card = cardsData.find((el) => el.id === id)!;
  const sliderItem = cardsDataView.find((el) => el.id === id)!;
  const sliderImg = sliderItem?.slider;

  return <ViewCard cardItem={card} sliderImg={sliderImg} />;
};

export default ViewCardContainer;
