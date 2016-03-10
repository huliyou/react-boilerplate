import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { Router, Route } from 'react-router';
import { syncHistory } from 'react-router-redux';

import createHistory from 'history/lib/createBrowserHistory';
const browserHistory = createHistory();

import Apps from './components/App';

const rootElement = document.getElementById('app');

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware
)(createStore);

// const createStoreWithMiddleware = applyMiddleware(
//    thunkMiddleware
// )(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

reduxRouterMiddleware.listenForReplays(store);

console.log('store', store.getState());

render(
  <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Apps} />
        </Router>
    </Provider>,
  rootElement
);
