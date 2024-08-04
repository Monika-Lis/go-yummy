import React from 'react';

import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
export const App = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};
