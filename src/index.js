import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import index from "./js/index"; //Redux part
import store from "./js/store/index";//Redux store
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//console.log(window.store.getState());

ReactDOM.hydrate(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
document.getElementById('root'));

//registerServiceWorker();
