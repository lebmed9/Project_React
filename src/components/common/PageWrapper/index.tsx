import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <div className={style.conteiner}>
      <main className={style.size}>
        <Outlet />
      </main>
    </div>
    <Footer />
  </div>
);

export default PageWrapper;
