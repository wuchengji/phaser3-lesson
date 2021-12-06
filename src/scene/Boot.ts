export class Boot extends Phaser.Scene{
  constructor() {
    super({
      key: 'Boot'
    });
  }
  init() {
    console.log('Boot init');
  }
  preload() {
    console.log('Boot preload');
  }
  create() {
    console.log('Boot create');
    // setTimeout(() => {
    //   this.scene.setActive(false);
    // }, 1000)

    setTimeout(() => {
      this.scene.sleep();
      this.scene.start('Menu');
    }, 1000)
  }
  update(time: number, delta: number) {
    console.log(delta);
  }
}