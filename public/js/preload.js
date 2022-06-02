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
        fontFamily: "BadComic",
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

     this.load.image('Background','Background.png?v='+t);

     this.load.image('banana','Banana.png?v='+t);
     this.load.image('blackberry','Blackberry.png?v='+t);
     this.load.image('cherry','Cherry.png?v='+t);

     this.load.image('Arrow','Arrow.png?v='+t);
     this.load.image('Spin','Spin.png?v='+t);
     this.load.image('Win','Win.png?v='+t);

     this.load.image('CheatToolBackground','CheatToolBackground.png?v='+t);
     this.load.image('CheatToolInput','CheatToolInput.png?v='+t);


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
