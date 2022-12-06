import { CustomUppercasePipe } from './custom-uppercase.pipe';

describe('CustomPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new CustomUppercasePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('ABC');
  });
});
