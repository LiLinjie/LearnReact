import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
