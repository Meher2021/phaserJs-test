"use strict";

class Symbol extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y,key)
  {
		super(scene, x, y, key);

    this.game = scene;

    this.symbolName = key;

    this.initialize();
  }

  initialize()
  {
    this.game.add.existing(this);
  }

} //class
