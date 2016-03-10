import {combineReducers} from 'redux';
// 引入各reducers

import {routeReducer} from 'react-router-redux';

// 状态入口
const appReducers = combineReducers({
  // reducers
  routing:routeReducer,
});

export default appReducers;
