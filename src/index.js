import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

// Components
import Policy from './components/Policy';
import ProductList from './components/ProductList';
//import Claims from './components/Claims'
import Claims from './components/ClaimsRedux';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Claims/>
    <Policy />
    <ProductList />
  </Provider>,
  document.getElementById('root')
)