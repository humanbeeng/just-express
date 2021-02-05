import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

/*
here first arguement is the reducer which takes care of the states through store, second
arguement is the initial state of the App component, ot any other component which 
is nested inside the Provider component, third arguement for redux thunk for middleware
management
*/

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
