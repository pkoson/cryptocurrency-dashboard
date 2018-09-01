import ui from '../ui';

import { GET_CURRENCIES } from '../../actions/comand';

describe('ui reducer', () => {
  it('should handle GET_CURRENCIES action', () => {
    const action = { type: GET_CURRENCIES };
    expect(ui(undefined, action)).toEqual({ isProcessing: true });
  });
});
