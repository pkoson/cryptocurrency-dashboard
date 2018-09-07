// @flow
import { GET_CURRENCIES } from '../actions/command';

const initialState = {};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENCIES:
      return { ...state, isProcessing: true };
    default:
      return state;
  }
}
