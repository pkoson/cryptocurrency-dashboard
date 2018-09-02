// @flow
import { GET_CURRENCIES } from '../actions/command';

export default function ui(state = {}, action) {
  switch (action.type) {
    case GET_CURRENCIES:
      return { ...state, isProcessing: true };
    default:
      return state;
  }
}
