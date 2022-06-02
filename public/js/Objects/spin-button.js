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
    this.on('pointerdown',()=>{

      //this.setScale(0.9);
      this.alpha = 0.5;

    },this);

    this.on('pointerup',()=>{

      //this.setScale(1);
      //this.alpha = 1;

      this.disableInteractive();

      this.onSpinButtonClick();

    },this);
  }

  onSpinButtonClick()
  {
    this.game.startSpin();
  }


} //class
