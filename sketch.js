var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var starss;
var starGroup;
var star1_img, star2_img, star3_img, star4_img, star5_img;
var player_img;
var player1score =0;
var player2score =0;



function preload(){
  back_img = loadImage("images/starryNight.jpg");
  player_img = loadImage("images/fairy - N.png");
  star1_img = loadImage("images/star.png");
  star2_img = loadImage("images/star.png");
  star3_img = loadImage("images/star.png");
  star4_img = loadImage("images/star.png");
  star5_img = loadImage("images/star.png");
  starGroup = new Group();

  
}
function setup() {
  createCanvas(1000, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}