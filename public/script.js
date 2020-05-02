var circleOne = document.getElementById("circle-one");
var circleTwo = document.getElementById("circle-two");

var resetBtn = document.getElementById("reset-btn");
var redBtn = document.getElementById("red-btn");
var blueBtn = document.getElementById("blue-btn");
var greenBtn = document.getElementById("green-btn");

resetBtn.addEventListener("click",function(event){
    console.log("Reset Button presses");
    circleOne.className ="circle";
    circleTwo.className ="circle";
});

redBtn.addEventListener("click",function(event){
    console.log("Reset Button presses");
    circleOne.className ="red";
    circleTwo.className ="red";
});

blueBtn.addEventListener("click",function(event){
    console.log("Reset Button presses");
    circleOne.className ="blue";
    circleTwo.className ="blue";
});

greenBtn.addEventListener("click",function(event){
    console.log("Reset Button presses");
    circleOne.className ="green";
    circleTwo.className ="green";
});