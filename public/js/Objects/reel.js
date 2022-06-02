"use strict";

class Reel extends Phaser.GameObjects.Container {

  constructor(scene, x, y,n)
  {
		super(scene, x, y);

    this.game = scene;
    this.reelID = n;
    this.game.add.existing(this);

    this.initialize();

  }

  initialize()
  {
    this.spinFlag = false;
    this.stopSpinFlag = false;


    this.visibleSymbol = '';

    this.speed = 10;
    this.vy  = 0.5;
    this.startY = -132;
    this.endY = 930;
    this.symbolNames = ['banana','cherry','blackberry'];
    this.addSymbols();
  }
  addSymbols()
  {
    var vgap = 354;
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
        var dy = symbol.y - this.endY;
        symbol.y = this.startY + dy;

        if(this.stopSpinFlag === true)
        {
           this.stopReel();
        }
      }
    }

    this.speed += this.vy;

    if(this.speed >= 30) {
      this.speed = 30;
    }

  }/*reelSpin*/

  stopReel()
  {
    this.spinFlag = false;
    var arr = ['banana','cherry','blackberry'];

    var vsymbol = this.getVisibleSymbol();
    vsymbol.y = 222;

    if(this.game.cheatValuedFlag === true)
    {
      let prev_name = vsymbol.symbolName;

      let symbol_no = this.game.cheatTool['input_' + this.reelID].number;
      let symbolName = arr[symbol_no];

      this.swapName(symbolName,prev_name);

      vsymbol.setTexture(symbolName);
      vsymbol.symbolName = symbolName;

      console.log('symbolName: ',symbol_no,symbolName);

    }

    this.visibleSymbol = vsymbol.symbolName;
  }

  swapName(symbolName,prev_name)
  {
    var reelSymbols = this.getAll();

    reelSymbols.forEach(function(symbol){

      if(symbol.symbolName === symbolName)
      {
        symbol.setTexture(prev_name);
        symbol.symbolName = prev_name;
      }

    });

  }

  getVisibleSymbol()
  {
    var self = this;

    var gobj;

    var reelSymbols = this.getAll();

    reelSymbols.forEach(function(symbol){

      if(Math.round(symbol.y) < 300 && Math.round(symbol.y) > 0)
      {
        gobj = symbol;
      }

    });

    return gobj;

  }

  getRandomSymbol()
  {
    var index = Phaser.Math.Between(0,this.symbolNames.length-1);
    var symbolName = this.symbolNames[index];

    this.symbolNames.splice(index,1);

    return symbolName;
  }

} //class
