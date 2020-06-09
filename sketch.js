var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("green");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
