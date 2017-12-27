/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux'; // we will use these when we encorporate redux
import { Provider } from 'react-redux';

//allows dispatch to take in a fxn instead of an obj
import thunk from 'redux-thunk' 

import sessionReducer from './reducers/session_reducer'
import favoriteReducer from './reducers/favorite_reducer'
import imageReducer from './reducers/image_reducer'
import App from './containers/app'

const store = createStore(
  combineReducers({
    session: sessionReducer,
    favorites: favoriteReducer,
    images: imageReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})