var keysPressed = 0;
var started = false;
var tiles = [];
var seconds = 0;
var string = "";
var timer;
var besttime;
$("#win").fadeOut(0);
setArray();
var keys = [1, 2, 3, 4];
updateNextKey();
var sound1 = new Howl({
  src: ['sounds/tile1.mp3']
});
var sound2 = new Howl({
  src: ['sounds/tile2.mp3']
});
var sound3 = new Howl({
  src: ['sounds/tile3.mp3']
});
var sound4 = new Howl({
  src: ['sounds/tile4.mp3']
});
$("body").on("keydown", function(event){
  if(started == false){
    started = true;
    startTimer();
  }
  if(event.key == 1){
    $("#tile1").css("background-color", "#f26e63");
    //sound1.play();
    checkifCorrect(1);
  } else if (event.key == 2){
    $("#tile2").css("background-color", "#f7dd8c");
    //sound2.play();
    checkifCorrect(2);
  } else if (event.key == 3){
     $("#tile3").css("background-color", "#f993a2");
     //sound3.play();
     checkifCorrect(3);
   } else if (event.key == 4){
      $("#tile4").css("background-color", "#60b6ba");
      //145sound4.play();
      checkifCorrect(4);
    } else {
      gameOver();
    }
});
$("body").on("keyup", function(event){

  if(event.key == 1){
    $("#tile1").css("background-color", "#E24E42");
  } else if (event.key == 2){
    $("#tile2").css("background-color", "#E9b000");

  } else if (event.key == 3){
     $("#tile3").css("background-color", "#Eb6e80");

   } else if (event.key == 4){
      $("#tile4").css("background-color", "#008f95");

    }
});
function checkifCorrect(num){
  if(num == tiles[0]){
    keysPressed++;
    tiles.shift();
    updateNextKey();
  }
    else{
    gameOver();
  }
}
function updateNextKey(){
  if (tiles.length > 9) {
    $("#10th").html(tiles[9]);
  } else {
    $("#10th").html("");
  }
  if (tiles.length > 8) {
    $("#9th").html(tiles[8]);
  } else {
    $("#9th").html("");
  }
  if (tiles.length > 7) {
    $("#8th").html(tiles[7]);
  } else {
    $("#8th").html("");
  }
  if (tiles.length > 6) {
    $("#7th").html(tiles[6]);
  } else {
    $("#7th").html("");
  }
  if (tiles.length > 5) {
    $("#6th").html(tiles[5]);
  } else {
    $("#6th").html("");
  }
  if (tiles.length > 4) {
    $("#5th").html(tiles[4]);
  } else {
    $("#5th").html("");
  }
  if (tiles.length > 3) {
    $("#4th").html(tiles[3]);
  } else {
    $("#4th").html("");
  }
  if (tiles.length > 2) {
    $("#3rd").html(tiles[2]);
  } else {
    $("#3rd").html("");
  } if (tiles.length > 1) {
    $("#2nd").html(tiles[1]);
  } else {
    $("#2nd").html("");
  }
  if (tiles.length > 0) {
    $("#num1").html(tiles[0]);
  } else {
    $("#num1").html("");
  }
  $("#score").html("Keys Remaining: " + (10-keysPressed));
}
function startTimer(){
  timer = setInterval(function(){
    seconds += .01;
    $("#timer").html(seconds.toFixed(2));
    if(tiles.length == 0){
      gameWin();
    }
  }, 10);
}
function gameWin(){
  clearInterval(timer);
  $("table").slideUp(1500);
  if(!besttime || besttime > seconds){
    besttime = seconds;
  }
  $("#win").fadeIn(1000);
  $("#time").html(seconds.toFixed(2));
  $("#besttime").html("Best Time: " + besttime.toFixed(2));
}
function gameOver(){

}
function resetGame(){
  seconds = 0;
  setArray();
  $("#win").fadeOut(1000);
  $("table").slideDown(1500);
  $("#timer").html("0.00");
  keysPressed = 0;
  updateNextKey();
  started = false;
}
function setArray(){
  for(var i = 0; i < 10; i++){
    tiles[i] = Math.round(Math.random() * 3) + 1;
    string += tiles[i] + " ";
  }
}

$("#key1").on("click", function(){
  $("body").one("keypress", function(event){
    $("#key1").html(event.key);
  });
});
