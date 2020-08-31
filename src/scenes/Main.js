import Phaser from 'phaser'
import logoImg from '../images/logo.png'
import bg from '../images/sky.png'

export default class Main extends Phaser.Scene {
  constructor () {
    super('Main')
  }

  preload () {
    this.load.image('logo', logoImg)
    this.load.image('bg', bg)
  }

  create () {
    //  A simple background for our game
    this.add.image(400, 300, 'bg')
    // const logo = this.add.image(400, 150, "logo");

    // this.tweens.add({
    //   targets: logo,
    //   y: 450,
    //   duration: 500,
    //   ease: "Power2",
    //   yoyo: true,
    //   loop: -1
    // });
  }

  update () {
    // constant running loop
  }
}
