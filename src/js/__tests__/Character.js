import Character from '../Character';

test.each([
  ['1'],
  ['12345678910'],
])(
  ('Test name length Error'), (name) => {
    const received = () => new Character(name);
    expect(received).toThrow(Error('Имя должено быть не менее 2 и не более 10 символов'));
  },
);

test('Test stats of Character', () => {
  const received = new Character('John');
  const expected = { name: 'John', health: 100, level: 1 };

  expect(received).toEqual(expected);
});
