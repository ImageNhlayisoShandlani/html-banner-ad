// ***************** Global Varibles (Main Site ELements) ***************** //

var ball = document.getElementById("ball");
var goal = document.getElementById("goal");
var keeper = document.getElementById("keeper");
var instructionTxt = document.querySelector(".right p");

// ***************** AS SOON AS THE PAGE LOADS ***************** //
window.addEventListener("load", () => {
  ball.style.top = "-1rem";
  goal.style.top = "-9.6rem";
  keeper.style.left = "initial";
});

setTimeout(() => {
  ball.classList.add("heartBeat");
  instructionTxt.style.transform = "scale(1)";
}, 4000);
