"use strict";

class SpinButton extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, key)
  {
		super(scene, x, y, key);

    this.game = scene;
    this.initialize();

    this.addEvents();
  }

  initialize()
  {
    this.game.add.existing(this);
    this.setInteractive();

  }

  addEvents()
  {
    this.on('pointerdown',this.onSpinButtonClick,this);
  }

  onSpinButtonClick()
  {
    this.disable();
    this.game.startSpin();
  }

  disable()
  {
    this.alpha = 0.5;
    this.disableInteractive();
  }
  enable()
  {
    this.alpha = 1;
    this.setInteractive();
  }


} //class
