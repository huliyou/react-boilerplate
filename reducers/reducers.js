// 引入各reducers
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// 状态入口
const appReducers = combineReducers({
  routing: routeReducer, // reducers
});

export default appReducers;
