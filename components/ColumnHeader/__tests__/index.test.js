import ColumnHeader from '../index';

describe('ColumnHeader', () => {
  it('should be called without error', () => {
    global.HTMLElement = () => {};
    ColumnHeader();
  });
});
