/* eslint-disable no-unused-vars */
import Phaser from 'phaser'
import bg from '../images/bgs/bg2.png'
import SpaceChip from '../classes/SpaceShip'

export default class Main extends Phaser.Scene {
  constructor () {
    super('Main')
    this.platforms = null
    this.canvas = null
    this.cursors = null
  }

  preload () {
    this.canvas = this.sys.game.canvas
    this.load.image('bg', bg)

    // this.spaceship = new SpaceChip({ scene: this, x: 100, y: 100 })
    SpaceChip.preload(this)
  }

  create () {
    this.bg = this.add.tileSprite(this.canvas.width / 2, this.canvas.height / 2, this.canvas.width, this.canvas.height, 'bg')

    this.cursors = this.input.keyboard.createCursorKeys()

    this.ss = new SpaceChip({ scene: this, y: 0 })
  }

  update () {
    this.bg.tilePositionY -= 0.5

    if (this.cursors.up.isDown) {
      console.log(this.cursors.up.timeUp)
      if (this.cursors.left.isDown) {
        this.ss.turnLeft()
      } else if (this.cursors.right.isDown) {
        this.ss.turnRight()
      } else {
        if (this.cursors.up.getDuration() < 1500) { this.ss.powerOn() } else { this.ss.powerOff() }
      }
    } else if (this.cursors.left.isDown) {
      this.ss.turnLeft()
    } else if (this.cursors.right.isDown) {
      this.ss.turnRight()
    } else {
      this.ss.powerOff()
    }
  }

  loadSpriteSheet (C) {
    console.log(C, C.key, C.ss, { frameWidth: C.frameWidth, frameHeight: C.frameHeight })
    // this.load.spritesheet(C.key, C.ss, { frameWidth: C.frameWidth, frameHeight: C.frameHeight })
  }
}
