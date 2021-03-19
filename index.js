var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var randomChosenColor;
var userClickedPattern=[];

$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function nextSequence() {
    var randomNumber =Math.floor(Math.random()*4);
    randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playSound(name){
var audio=new Audio("sounds/"+name+".mp3");
audio.play();
}
function animatePress(curentColour) {
    $("."+curentColour).addClass("pressed");
    setTimeout(function() {
        $("."+curentColour).removeClass("pressed");
    }, 100);
}