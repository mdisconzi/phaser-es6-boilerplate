import Phaser from 'phaser'
import Main from './scenes/Main'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 60 },
      debug: false
    }
  }
}

// eslint-disable-next-line no-unused-vars
globalThis.game = new Phaser.Game(config)

// function preload() {
//   this.load.image("logo", logoImg);
// }

// function create() {
//   const logo = this.add.image(400, 150, "logo");

//   this.tweens.add({
//     targets: logo,
//     y: 450,
//     duration: 2000,
//     ease: "Power2",
//     yoyo: true,
//     loop: -1
//   });
// }
