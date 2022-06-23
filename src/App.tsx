import React from 'react';
import MainContainer from './containers/MainContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import ViewCardContainer from './containers/ViewCardContainer';

const App = () => (
  <>
    <MainContainer />
    <ViewCardContainer />
    <NotFoundContainer />
  </>
);

export default App;
