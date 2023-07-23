
var userClickedPattern=[];
var gamePattern=[];
var level=0;

 function nextSequence()
 {
  level++;
  $("h1").html("Level "+level);
 var randomNumber=Math.floor(Math.random()*4);
 var buttonColours=["blue", "red", "green", "yellow"];
 var randomChosenColour=buttonColours[randomNumber];
 console.log(randomChosenColour);
 gamePattern.push(randomChosenColour);
 playSound(randomChosenColour);
 animatePress(randomChosenColour);

 }
 

 function playSound(name){
    switch(name){
        case "green":
          $("#green").fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
                var g=new Audio('sounds/green.mp3');
                g.play();
              break;

        case "red":
          $("#red").fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
                var r=new Audio('sounds/red.mp3');
                r.play();
              break;

        case "yellow":
          $("#yellow").fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
                var y=new Audio('sounds/yellow.mp3');
                y.play();
              break;

        case "blue":
          $("#blue").fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });
                var b=new Audio('sounds/blue.mp3');
                b.play();
              break; 
   
    }
 }
 

function animatePress(currentColour){
    $("#"+currentColour).click(function(){
        $(this).addClass("pressed");
        setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")},100);

      });
 }

 function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
     {
      if(gamePattern.length==userClickedPattern.length){

        userClickedPattern=[];
        setTimeout(nextSequence,1000);
      }
            
     }
     else{
      var w=new Audio('sounds/wrong.mp3');
      w.play(); 
      $("h1").html("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },1000);
      startOver();
     
     }
    
    
 }

 function startOver(){
level=0;
gamePattern=[];
started=0;
userClickedPattern=[];
setTimeout(nextSequence,1000);
 }

$(".btn").click (function(){
  var userChosenColour = $(this).attr('id');
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   checkAnswer((userClickedPattern.length)-1)
});
 var started=true;

 $("body").keypress(function(){
      if(started){
        nextSequence();
        started=false;
      }
    });
