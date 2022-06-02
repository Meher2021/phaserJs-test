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

  setScreen()
  {
    this.reel1 = new Reel(this,this.centerX - 400, 290,'reel1');
    this.reel2 = new Reel(this,this.centerX, 290,'reel2');
    this.reel3 = new Reel(this,this.centerX + 400, 290,'reel3');

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

    this.reel1.stopSpinFlag = false;
    this.reel2.stopSpinFlag = false;
    this.reel3.stopSpinFlag = false;

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

      var rndDuration = Phaser.Math.Between(1,3)*1000;

      this.time.delayedCall(rndDuration,()=>{
        this.stopSpin();
      },null,this);
    }

  }

  stopSpin()
  {
    var duration = 300;

    this.reel1.stopSpinFlag = true;

    this.time.delayedCall(duration,()=>{
      this.reel2.stopSpinFlag = true;

      this.time.delayedCall(duration,()=>{
        this.reel3.stopSpinFlag = true;
      },null,this);

    },null,this);
  }

  update()
  {
    if(this.reel1.spinFlag === true) { this.reel1.reelSpin(); }
    if(this.reel2.spinFlag === true) { this.reel2.reelSpin(); }
    if(this.reel3.spinFlag === true) { this.reel3.reelSpin(); }
  }

} /*class*/
