"use strict";

class CheatTool extends Phaser.GameObjects.Container {

  constructor(scene, x, y)
  {
		super(scene, x, y);

    this.game = scene;
    this.initialize();
  }

  initialize()
  {
    this.game.add.existing(this);

    this.cheatToolBg = this.addSprite(0,0,'CheatToolBackground');
    this.cheatToolBg.setOrigin(0);
  }

  addSprite(x,y,str)
  {
    var spr = this.game.add.sprite(x,y,str);
    this.add(spr);

    return spr;
  }

} //class
