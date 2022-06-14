import React, { useState } from 'react';
import style from './Slider.module.scss';
import { cardsDataView } from '../../../../../helpers/index';

const Slider = () => {
  const [sliderData, setSliderData] = useState(cardsDataView[0]);
  const clickHandler = (index: number) => {
    const slider = cardsDataView[index];
    setSliderData(slider);
  };

  return (
    <div className={style.slider}>
      <img src={sliderData.value} alt="card" />
      <div className={style.preview}>
        {cardsDataView.map((el, i) => (
          <img
            className={sliderData.id === i ? `${style.clicked}` : ''}
            src={el.value}
            onClick={() => clickHandler(i)}
            role="presentation"
            alt="card"
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
