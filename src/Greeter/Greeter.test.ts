import { Greeter } from './Greeter';

test('名前を入力として受け取り、Hello <名前> を出力する', () => {
  const greeter = new Greeter('Nakano');
  expect(greeter.greet()).toBe(`Hello Nakano`);
});
