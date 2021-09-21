import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UIContextProvider } from './context/ui-context';

ReactDOM.render(
  <BrowserRouter>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
