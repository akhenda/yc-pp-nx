import { hello } from './hello';

describe('hello', () => {
  it('should work', () => {
    expect(hello()).toEqual('Hello, World!');
  });

  it('should greet a person', () => {
    const name = "Teal'c";

    expect(hello(name)).toEqual(`Hello, ${name}!`);
  });
});
