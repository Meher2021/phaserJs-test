"use strict";

class CheatInput extends Phaser.GameObjects.Container {

  constructor(scene,x,y,type)
  {
    super(scene, x, y);

    this.game = scene;
    this.type = type;
    this.game.add.existing(this);
    this.initialize();
  }
  initialize()
  {
    var img = this.addButton(0,0,'cheat-tool-input');

    var style = {
        fontSize:"24px",
        fontFamily: "Arial Black",
        align: "center",
        color: "#ffffff",
        stroke: "#ffffff",
        strokeThickness:0,
      };


    this.number = Phaser.Math.Between(0,2);

    this.txt = this.addText(0,0,this.number.toString(),style);

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

} /*class*/
