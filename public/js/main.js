"use strict";

var Global = {};

Global.qno = 1;

Global.player_WinCount = 0;
Global.AI_WinCount = 0;
Global.userName = "Player";

var width = 1920;
var height = 1080;
var gameDiv = "gameDiv";

var dimensions = {};

var config = {

    type:Phaser.AUTO,
    parent: gameDiv,
    scale:{
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
	   },
    audio: {
        disableWebAudio: true
    },
    render:{
    	imageSmoothingEnabled:false,
    	transparent: false,
    },
    width:width,
    height:height,
    scene:[Preload,Game],

};

var game = null;

function init()
{
  game = new Phaser.Game(config);
}
