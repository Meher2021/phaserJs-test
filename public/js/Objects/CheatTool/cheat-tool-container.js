"use strict";

class CheatTool extends Phaser.GameObjects.Container {

  constructor(scene, x, y)
  {
		super(scene, x, y);

    this.game = scene;
    this.game.add.existing(this);

    this.initialize();
  }

  initialize()
  {
    this.openedFlag = false;
    this.iy = this.y;

    this.cheatToolBg = this.addSprite(0,0,'cheat-tool-bg');
    this.cheatToolBg.setOrigin(0);

    var style = {
        fontSize:"24px",
        fontFamily: "Arial Black",
        align: "left",
        color: "#ffffff",
        stroke: "#ffffff",
        strokeThickness:0,
      };

    var toolsTxt = this.addText(48,226,'Tools',style);
    toolsTxt.setOrigin(0,0.5);

    this.arrowButton = this.addButton(165,226,'arrow');
    this.arrowButton.on('pointerdown',this.onArrowDown,this);

    var heading = this.addText(48,226,'Tools',style);
    toolsTxt.setOrigin(0,0.5);

  }

  onArrowDown()
  {
    var ypos = 0;

    if(this.openedFlag === false)
    {
      this.openedFlag = true;
      this.arrowButton.flipY = true;

      ypos = 0;

    }
    else if(this.openedFlag === true)
    {
      this.arrowButton.flipY = false;
      this.openedFlag = false;
      ypos = this.iy;

    }

    var tweenConfg = {
      targets:this,
      y:ypos,
      duration:100,
      ease:'Linear',
    };

    this.game.tweens.add(tweenConfg);

  }

  addSprite(x,y,str)
  {
    var spr = this.game.add.sprite(x,y,str);
    this.add(spr);
    return spr;
  }

  addButton(x,y,str)
  {
    var spr = this.game.add.sprite(x,y,str);
    this.add(spr);
    spr.setInteractive();
    return spr;
  }
  addText(x,y,str,style)
  {
    var txt = this.game.add.text(x,y,str,style);
    this.add(txt);
    txt.setOrigin(0.5,0.5);
    return txt;
  }

} //class
