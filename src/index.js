import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";


import Student from './Student';
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  studentReducer: studentReducer
});


const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <Student />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
