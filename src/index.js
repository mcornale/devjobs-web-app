import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import JobsContextProvider from './store/JobsContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <JobsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
