import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

// Tether (required for Bootstrap 4.x)
import Tether from 'tether/dist/css/tether.css';
//Bootstrap 4
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import App from './components/app';
import reducers from './reducers';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})

require("style-loader!raw-loader!../style/vendor.css");
require("style-loader!raw-loader!../style/style.css");


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
