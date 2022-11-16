export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должено быть не менее 2 и не более 10 символов');
    }
    this.health = 100;
    this.level = 1;
  }
}
