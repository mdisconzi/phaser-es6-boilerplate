/* eslint-disable no-unused-vars */
import Phaser from 'phaser'
import sprite from '../images/spaceship01.png'

export default class SpaceShip extends Phaser.Physics.Arcade.Sprite {
  constructor (params) {
    const p = Object.assign({
      scene: null,
      x: params.scene.canvas.width / 2,
      y: params.scene.canvas.height / 2,
      texture: 'spaceship',
      physics: true
    }, params)
    super(p.scene, p.x, p.y, p.texture, 1)
    this.setScale(1.5)
    this.power = false

    this.scene.add.existing(this)
    if (p.physics) { this.scene.physics.add.existing(this) }

    this.setCollideWorldBounds(true)

    // create animations
    this.scene.anims.create({
      key: 'power-on',
      frames: this.scene.anims.generateFrameNumbers('spaceship', { frames: [1, 4, 7] }),
      frameRate: 30,
      repeat: -1
    })

    this.scene.anims.create({
      key: 'turn-left',
      frames: this.scene.anims.generateFrameNumbers('spaceship', { frames: [0, 3, 6] }),
      frameRate: 30,
      repeat: -1
    })
    this.scene.anims.create({
      key: 'turn-left-off',
      frames: [{ key: 'spaceship', frame: 0 }]
    })

    this.scene.anims.create({
      key: 'turn-right',
      frames: this.scene.anims.generateFrameNumbers('spaceship', { frames: [2, 5, 8] }),
      frameRate: 30,
      repeat: -1
    })
    this.scene.anims.create({
      key: 'turn-right-off',
      frames: [{ key: 'spaceship', frame: 2 }]
    })
    this.scene.anims.create({
      key: 'power-off',
      frames: [{ key: 'spaceship', frame: 1 }]
    })
  }

  powerOn () {
    this.power = true
    this.setVelocityY(-60)
    this.anims.play('power-on', true)
  }

  turnLeft () {
    this.setVelocityX(-60)
    if (this.power) {
      this.anims.play('turn-left', true)
    } else { this.setVelocityX(0); this.anims.play('turn-left-off') }
  }

  turnRight () {
    this.setVelocityX(60)
    if (this.power) {
      this.anims.play('turn-right', true)
    } else { this.setVelocityX(0); this.anims.play('turn-right-off') }
  }

  powerOff () {
    this.power = false
    this.anims.stop()
    this.anims.play('power-off')
  }

  static preload (_this) {
    _this.load.spritesheet('spaceship', sprite, { frameWidth: 39, frameHeight: 43 })
  }
}
