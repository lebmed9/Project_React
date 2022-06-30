import React from 'react';
import { useSelector } from 'react-redux';
import GetBurgerState from '../../../../../store/selectors';
import style from '../MainPageContent.module.scss';

const MainNav = () => {
  const Burger = useSelector(GetBurgerState);

  return (
    <div>
      {Burger && (
        <ul className={style.nav_list}>
          <li>Вся доска</li>
          <li>Автомобили</li>
          <li>Аксессуары</li>
          <li>Аксессуары</li>
          <li>Одежда</li>
          <li>Спорт</li>
          <li>Техника</li>
          <li>Товары для дома</li>
        </ul>
      )}
    </div>
  );
};

export default MainNav;
