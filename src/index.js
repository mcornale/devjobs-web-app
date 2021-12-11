import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import JobsContextProvider from './store/JobsContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <JobsContextProvider>
      <App />
    </JobsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
