import Character from '../Character';

test('some test', () => {
  const received = new Character('John');
  const expected = { name: 'John', health: 100, level: 1 };
  expect(received).toEqual(expected);
});
