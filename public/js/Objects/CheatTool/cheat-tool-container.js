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

    var style2 = {
        fontSize:"20px",
        fontFamily: "Arial",
        align: "left",
        color: "#ffffff",
        stroke: "#dfc899",
        strokeThickness:2,
      };

    var toolsTxt = this.addText(50,226,'Tools',style);
    toolsTxt.setOrigin(0,0.5);

    this.arrowButton = this.addButton(165,226,'arrow');
    this.arrowButton.on('pointerdown',this.onArrowDown,this);

    var str = "SYMBOL POSITION IN THE REEL";
    var heading = this.addText(50,42,str,style2);
    heading.setOrigin(0,0.5);

    this.input_0 = new CheatInput(this.game,104,96,0);
    this.add(this.input_0);

    this.input_1 = new CheatInput(this.game,230,96,1);
    this.add(this.input_1);

    this.input_2 = new CheatInput(this.game,354,96,2);
    this.add(this.input_2);

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
    var btn = this.game.add.sprite(x,y,str);
    this.add(btn);
    btn.setInteractive();
    return btn;
  }
  addText(x,y,str,style)
  {
    var txt = this.game.add.text(x,y,str,style);
    this.add(txt);
    txt.setOrigin(0.5,0.5);
    return txt;
  }

} //class
