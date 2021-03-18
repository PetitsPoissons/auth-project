import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import App from './components/App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
