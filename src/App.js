import {Header} from './layout/Header';
import React from 'react';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
