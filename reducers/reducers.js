// 引入各reducers
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import increaseReducer from './increaseReducer';

// 状态入口
const appReducers = combineReducers({
  routing: routeReducer,
  increase: increaseReducer,
});

export default appReducers;
