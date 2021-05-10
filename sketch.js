var canvas,backgroungImg;
var gamestate=0;
var playerCount;
var database;
var form,player,game;

function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
  //console.log(database);
  game = new Game();
  game.getState();
  game.start();

 
}

function draw(){

  
}