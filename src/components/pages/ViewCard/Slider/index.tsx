import React, { useState } from 'react';
import style from './Slider.module.scss';

type SliderPropsType = {
  sliderImg: {
    id: number;
    value: string;
  }[];
};

const Slider = ({ sliderImg }: SliderPropsType) => {
  const [sliderData, setSliderData] = useState(sliderImg[0]);
  const clickHandler = (index: number) => {
    const slider = sliderImg[index];
    setSliderData(slider);
  };
  return (
    <div className={style.slider}>
      <img src={sliderData.value} alt="card" />
      <div className={style.preview}>
        {sliderImg.map((el, i) => (
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
