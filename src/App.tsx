import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import ViewCardContainer from './containers/ViewCardContainer';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<MainContainer />} />
      {/* <Route path="/ViewCard" element={<ViewCardContainer />} /> */}
      <Route path=":id" element={<ViewCardContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Route>
  </Routes>
);

export default App;
