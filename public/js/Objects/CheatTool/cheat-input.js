"use strict";

class CheatInput extends Phaser.GameObjects.Container {

  constructor(scene,x,y,n)
  {
    super(scene, x, y);

    this.game = scene;
    this.inputID = n;
    this.game.add.existing(this);

    this.initialize();
  }
  initialize()
  {
    this.number = 0;

    var style = {
      fontSize:"24px",
      fontFamily: "Arial Black",
      align: "center",
      color: "#ffffff",
      stroke: "#ffffff",
      strokeThickness:0,
    };

    var bg = this.addButton(0,0,'cheat-tool-input');
    bg.on('pointerdown',this.onDown,this);

    this.txt = this.addText(0,0,this.number.toString(),style);

  }

  onDown()
  {
    this.game.cheatValuedFlag = true;

    this.number++;

    if(this.number === 3) {
      this.number = 0;
    }

    this.txt.text = this.number.toString();

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

} /*class*/
