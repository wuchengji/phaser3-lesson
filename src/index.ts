import 'phaser'
import { Boot } from './scene/Boot'
import { Menu } from './scene/Menu'
const config: Phaser.Types.Core.GameConfig = {
  width: 500,
  height: 600,
  type: Phaser.AUTO,
  backgroundColor: 0x000000,
  title: 'phaser-lesson',
  version: '0.0.1',
  url: 'https://github.com/wuchengji/phaser3-lesson',
  // banner: {
  //   hidePhaser: true,
  //   text: 'phaser'
  // },
  fps: {
    target: 90
  },
  loader: {},
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: {
        x: 0,
        y: 0
      },
      checkCollision: {
        up: true,
        left: true,
        right: true,
        down: true,
      }
    }
  },
  input: {
    keyboard: true,
    mouse: true,
    touch: false,
    gamepad: false
  },
  scene: [
    Boot,
    Menu
  ]
}
class GameManager extends Phaser.Game{
  constructor() {
    super(config);
  }
}
new GameManager()
