"use strict";

class Game extends Phaser.Scene {

  constructor()
  {
		super({key:"game"});
  }

  init()
  {
    this.gameWidth = this.game.config.width;
    this.gameHeight = this.game.config.height;
    this.centerX = this.game.config.width*0.5;
    this.centerY = this.game.config.height*0.5;

  }
  create()
  {
    this.setScreen();

    this.addButtons();
  }

  update()
  {
    if(this.reel1.spinFlag === true) { this.reel1.reelSpin(); }
    if(this.reel2.spinFlag === true) { this.reel2.reelSpin(); }
    if(this.reel3.spinFlag === true) { this.reel3.reelSpin(); }
  }

  /*--------------------------------------------------------------------------*/

  setScreen()
  {
    this.reel1 = new Reel(this,this.centerX - 400, 290);
    this.reel2 = new Reel(this,this.centerX, 290);
    this.reel3 = new Reel(this,this.centerX + 400, 290);

    var bg = this.add.sprite(0,0,'Background');
    bg.setOrigin(0);

  }

  addButtons()
  {
    this.spinButton = new SpinButton(this,this.centerX,this.gameHeight-100,'Spin');
  }

  startSpin()
  {
    this.timerCount = 0;
    this.stopSpinFlag = false;

    var timer = this.time.addEvent({
    delay: 300,
    callback:this.onTimer,
    callbackScope:this,
    repeat: 3
    });

  }

  onTimer()
  {
    this.timerCount++;

    if(this.timerCount === 1){
      this.reel1.spinFlag = true;
    }
    else if(this.timerCount === 2){
      this.reel2.spinFlag = true;
    }
    else if(this.timerCount === 3){
      this.reel3.spinFlag = true;
    }
    else if(this.timerCount === 4){

      this.time.delayedCall(5000,()=>{
        this.stopSpin();
      },null,this);
    }

  }

  stopSpin()
  {
    this.stopSpinFlag = true;
  }

} /*class*/
