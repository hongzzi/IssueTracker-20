import { hot } from 'react-hot-loader/root';
import React from 'react';

const App = () => {
  console.log('App loaded!');

  return (
  <div>
    Hello, webpack!
  </div>
  );
};

export default hot(App);
