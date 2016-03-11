import * as IncreaseActions from '../actions/IncreaseActions';
import Immutable from 'immutable';

const increaseDefault = Immutable.Map({
  number: 0,
});

export default function increase(state = increaseDefault, action) {
  switch (action.type) {
    case IncreaseActions.INCREASE_NUMBER:
      return state.set('number', state.get('number') + 1);
    default:
      return state;
  }
}
