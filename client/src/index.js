import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initMiddleware, } from 'devise-axios';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider'
import 'semantic-ui-css/semantic.min.css'

initMiddleware()

ReactDOM.render(
  <AuthProvider>  {/* This gives the whole application access to authentications */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
