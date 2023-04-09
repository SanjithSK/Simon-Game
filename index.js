
var level = 0;
var userArray = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;



$(document).keypress(function(){
  if(started===false){
    $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
       
    }
    
  console.log(pressedKey);
})

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userArray.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userArray.length-1);
});














function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userArray[currentLevel]) {
    if (userArray.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}





//  function arraysMatch() {

//   // Check if the arrays are the same length
//   if (userArray.length !== gamePattern.length) return false;

//   // Check if all items exist and are in the same order
//   for (var i = 0; i < gamePattern.length; i++) {
//     if (gamePattern[i] !== userArray[i]) return false;
//   }

//   // Otherwise, return true
//   return true;

// };








function nextSequence(){
  userArray = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber  = Math.floor(Math.random()* 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
  
    
    
  
 }
  
  



  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  

  function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
  }