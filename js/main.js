// ***************** Global Varibles (Main Site ELements) ***************** //

var ball = document.getElementById("ball");
var goal = document.getElementById("goal");
var keeper = document.getElementById("keeper");
var instructionTxt = document.querySelector(".right p");
var playerScore = document.getElementById("playerScore");
var goalieScore = document.getElementById("goaliScore");
var playerCount = 0;
var goalieCount = 0;
var alt;
// ***************** AS SOON AS THE PAGE LOADS ***************** //
window.addEventListener("load", () => {
  ball.style.top = "-1rem";
  goal.style.top = "-9.6rem";
  keeper.style.left = "initial";
});

// ***************** Add Warning if user does not interact with ad ***************** //

setTimeout(() => {
  if (goalieCount === 0 && playerCount === 0) {
    ball.classList.add("heartBeat");
    instructionTxt.style.transform = "scale(1)";
    alt = window.alert("Read Instructions and play game :) ");
  }
}, 10000);
// *****************  ***************** //
window.addEventListener("keydown", (e) => {
  //W = 87, A = 65, D = 68, S = 83

  //W keydown (A straight shot)
  if (e.keyCode === 87) {
    //Move ball to directed location and change score accondingly
    ball.style.top = "-14rem";
    goalieCount += 1;

    //Remove warning classes on warning classes and change accondingly
    ball.classList.remove("heartBeat");
    instructionTxt.style.transform = "scale(1)";
    instructionTxt.style.color = "orange";
    instructionTxt.innerHTML = "You missed +1 for keeper";

    //Delay for score to show
    setTimeout(() => {
      goalieScore.innerHTML = goalieCount;
    }, 500);

    //Bring ball back to center
    setTimeout(() => {
      ball.style.top = "-1rem";
    }, 950);
  }

  //A keydown (A shot to the left)
  if (e.keyCode === 65) {
    //Move ball to directed location and change score accondingly
    ball.style.top = "-14rem";
    ball.style.left = "-2rem";
    playerCount += 1;

    //Remove warning classes on warning classes and change accondingly
    ball.classList.remove("heartBeat");
    instructionTxt.style.transform = "scale(1)";
    instructionTxt.style.color = "green";
    instructionTxt.innerHTML = "You scored +1 for player";

    //Delay for score to show
    setTimeout(() => {
      playerScore.innerHTML = playerCount;
    }, 500);

    //Bring ball back to center
    setTimeout(() => {
      ball.style.top = "-1rem";
      ball.style.left = "initial";
    }, 950);
  }

  //D keydown (A shot to the right)
  if (e.keyCode === 68) {
    //Move ball to directed location and change score accondingly
    ball.style.top = "-14rem";
    ball.style.right = "-2rem";
    playerCount += 1;

    //Remove warning classes on warning classes and change accondingly
    ball.classList.remove("heartBeat");
    instructionTxt.style.transform = "scale(1)";
    instructionTxt.style.color = "green";
    instructionTxt.innerHTML = "You scored +1 for player";

    //Delay for score to show
    setTimeout(() => {
      playerScore.innerHTML = playerCount;
    }, 500);

    //Bring ball back to center
    setTimeout(() => {
      ball.style.top = "-1rem";
      ball.style.right = "initial";
    }, 950);
  }
});

//Listen and check if either goal is at 5 goals to start the game again
window.addEventListener("keyup", () => {
  if (playerCount === 5 || goalieCount === 5) {
    playerCount = 0;
    goalieCount = 0;
    playerScore.innerHTML = playerCount;
    goalieCount.innerHTML = goalieCount;
  }
});
