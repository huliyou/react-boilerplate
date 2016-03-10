import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';
import {Router, Route, IndexRoute, Link} from 'react-router';
import {syncHistory, routeReducer} from 'react-router-redux';

import  createHistory  from 'history/lib/createBrowserHistory';
let browserHistory = createHistory();

import Apps from './containers/app.js';

let rootElement = document.getElementById('app');

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware
)(createStore);

//const createStoreWithMiddleware = applyMiddleware(
//    thunkMiddleware
//)(createStore);

const store = createStoreWithMiddleware(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

reduxRouterMiddleware.listenForReplays(store);

console.log('store', store.getState());

import styles from './asset/styles/CitiesSettingsPage/CitiesSettings.css';

import AddCityPage from './components/CitiesSettings/AddCityPage';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Apps}>
                <Route path="addCity" component={AddCityPage}>
                </Route>
            </Route>
        </Router>
    </Provider>,
    rootElement
);
