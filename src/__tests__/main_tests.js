import Team from '../main';

class Character {
  constructor(name) {
    this.name = name;
    this.type = 'Bowman';
  }
}

const team = new Team();
const alex = new Character('Alex56');
const stas = new Character('Stas');
const ivanov = new Character('Ivanov_S');

test('Test for add character', () => {
  team.add(alex);
  team.add(stas);
  team.add(ivanov);
  expect(() => team.add(alex)).toThrow('Alex56 уже в команде');
});

test('Test method addAll', () => {
  team.members.clear();
  expect(team.members.size).toBe(0);

  team.addAll(alex, alex, stas, ivanov);
  expect(team.members.size).toBe(3);
});

team.members.clear();
test('Test method toArray', () => {
  team.addAll(alex, stas, ivanov);

  expect(team.toArray()).toEqual([
    { name: 'Alex56', type: 'Bowman' },
    { name: 'Stas', type: 'Bowman' },
    { name: 'Ivanov_S', type: 'Bowman' },
  ]);
});
