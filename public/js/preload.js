"use strict";

class Preload extends Phaser.Scene {

  constructor()
  {
		super({key:"preload"});
  }
  init()
  {
      //preloader

    this.centerX = this.game.config.width*0.5;
    this.centerY = this.game.config.height*0.5;

    var style = {
        fontSize:"32px",
        fontFamily: "Arial Black",
        align: "left",
        color: "#ffffff",
        stroke: "#ffffff",
        strokeThickness:1,
      };

    this.loadingTxt = this.add.text(this.centerX-200*0.5, this.centerY-50,"Loading...", style);
    this.loadingTxt.setOrigin(0,0.5);

  }
  preload()
  {
     var d = new Date();
     var t = d.getTime();

     this.load.baseURL = "assets/";

     this.load.image('background','background.png?v='+t);

     this.load.image('banana','banana.png?v='+t);
     this.load.image('blackberry','blackberry.png?v='+t);
     this.load.image('cherry','cherry.png?v='+t);

     this.load.image('arrow','arrow.png?v='+t);
     this.load.image('spin-button','spin-button.png?v='+t);
     this.load.image('spin-button-disable','spin-button-disable.png?v='+t);
     this.load.image('big-win','win.png?v='+t);

     this.load.image('cheat-tool-bg','cheat-tool-bg.png?v='+t);
     this.load.image('cheat-tool-input','cheat-tool-input.png?v='+t);

     this.load.on('progress', this.loadUpdate, this);

  }
  loadUpdate(per)
  {
    this.loadingTxt.text = "Loading..." + Math.ceil(per*100) + '%';
  }
  create()
  {
    this.scene.start('game'); //menu help game result
  }

}//class
