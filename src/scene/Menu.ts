export class Menu extends Phaser.Scene{
  constructor() {
    super({
      key: 'Menu'
    });
  }
  init() {
    console.log('Menu init');
  }
  preload() {
    console.log('Menu preload');
  }
  create() {
    console.log('Menu create');
  }
  update(time: number, delta: number) {}
}