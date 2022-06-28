import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import AuthContainer from './containers/AuthContainer';
import MainContainer from './containers/MainContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import RegContainer from './containers/RegContainer';
import ViewCardContainer from './containers/ViewCardContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      <Route path=":id" element={<ViewCardContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
      <Route path="/Auth" element={<AuthContainer />} />
      <Route path="/Reg" element={<RegContainer />} />
    </Route>
  </Routes>
);

export default App;
