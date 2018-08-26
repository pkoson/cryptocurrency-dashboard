import TableHeader from '../index';

describe('TableHeader', () => {
  it('should be called without error', () => {
    global.HTMLElement = () => {};
    TableHeader();
  });
});
