"use strict";

class Reel extends Phaser.GameObjects.Container {

  constructor(scene, x, y)
  {
		super(scene, x, y);

    this.game = scene;
    this.initialize();
  }

  initialize()
  {
    this.spinFlag = false;
    this.speed = 20;
    this.startY = -304/2 + 20;
    this.endY = 930;

    this.symbolNames = ['banana','cherry','blackberry'];

    this.game.add.existing(this);

    this.addSymbols();
  }
  addSymbols()
  {
    var vgap = 304 + 50;
    var y;
    var i;

    for(i = 0; i < 3; i++)
    {
      y = this.startY + i * vgap;

      this["symbol_"+i] = this.addSymbol(0,y);
    }
  }

  addSymbol(x,y)
  {
    var symbolName = this.getRandomSymbol();

    var symbol = new Symbol(this.game,x,y,symbolName);
    this.add(symbol);
    return symbol;
  }

  reelSpin()
  {
    for(var i=0; i < 3; i++)
    {
      let symbol = this["symbol_"+i];
      symbol.y += this.speed;

      if(symbol.y >= this.endY)
      {
        symbol.y = this.startY;

        if(this.game.stopSpinFlag === true)
        {
          this.spinFlag = false;
        }

      }

    }
  }

  getRandomSymbol()
  {
    var index = Phaser.Math.Between(0,this.symbolNames.length-1);
    var symbolName = this.symbolNames[index];

    this.symbolNames.splice(index,1);

    return symbolName;
  }

} //class
