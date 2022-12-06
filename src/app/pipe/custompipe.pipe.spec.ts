import { CustomPipe } from './custompipe.pipe';

describe('CustomPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new CustomPipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
