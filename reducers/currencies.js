import { CURRENCIES } from '../actions/document';

export default function ui(state = {}, action) {
  switch (action.type) {
    case CURRENCIES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
