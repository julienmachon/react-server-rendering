import Actions from '../actions';
import { COUNTER_ADD } from '../constants';

const initialState = {
  counter: 10,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case COUNTER_ADD:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
