import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import style from './PageWrapper.module.scss';

const PageWrapper: React.FC = ({ children }) => (
  <div className={style.page_wrapper}>
    <Header />
    <div className={style.conteiner}>
      <main className={style.size}>{children}</main>
    </div>
    <Footer />
  </div>
);

export default PageWrapper;
