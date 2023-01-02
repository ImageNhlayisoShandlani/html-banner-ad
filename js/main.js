// ***************** Global Varibles (Main Site ELements) ***************** //

var ball = document.getElementById("ball");
var goal = document.getElementById("goal");
var keeper = document.getElementById("keeper");
var instructionTxt = document.querySelector(".right p");
var playerScore = document.getElementById("playerScore");
var goalieScore = document.getElementById("goaliScore");
var playerCount = 0;
var goalieCount = 0;
var message = "Read instructions to interact with ad and win the game";
// ***************** AS SOON AS THE PAGE LOADS ***************** //
window.addEventListener("load", () => {
  ball.style.top = "-1rem";
  goal.style.top = "-9.6rem";
  keeper.style.left = "initial";
  keeper.style.transform = "scale(0.25)";
});

//Move keeper around
// setTimeout(() => {
//   keeper.classList.add("sliding");
// }, 1200);

//Move keeper around
setInterval(() => {
  keeper.classList.add("sliding-right");
  keeper.classList.remove("sliding-center");
  keeper.classList.remove("sliding-left");
}, 1250);
setInterval(() => {
  keeper.classList.remove("sliding-right");
  keeper.classList.add("sliding-center");
  keeper.classList.remove("sliding-left");
}, 2000);
setInterval(() => {
  keeper.classList.remove("sliding-right");
  keeper.classList.remove("sliding-center");
  keeper.classList.add("sliding-left");
}, 3050);

// ***************** Add Warning if user does not interact with ad ***************** //
setTimeout(() => {
  if (goalieCount === 0 && playerCount === 0) {
    ball.classList.add("heartBeat");
    instructionTxt.style.transform = "scale(1)";
    alert(message + " :) ");
  }
}, 10000);
// *****************  ***************** //
window.addEventListener("keydown", (e) => {
  //W = 87, A = 65, D = 68, S = 83

  ball.style.transition = "all 0.75";

  if (e.keyCode === 87) {
    //W keydown (A straight shot)
    //Move ball to directed location and change score accondingly
    if (ball.style.top === "-1rem") {
      ball.style.top = "-14rem";

      if (keeper.classList.contains("sliding-center")) {
        goalieCount += 1;
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "orange";
        instructionTxt.innerHTML = "You missed +1 for keeper";
      } else {
        playerCount += 1;
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "green";
        instructionTxt.innerHTML = "You scored +1 for player";
      }

      //Remove warning classes on warning classes and change accondingly
      ball.classList.remove("heartBeat");

      //Delay for score to show
      setTimeout(() => {
        goalieScore.innerHTML = goalieCount;
        playerScore.innerHTML = playerCount;
      }, 500);

      //Bring ball back to center
      setTimeout(() => {
        ball.style.top = "-1rem";
      }, 1200);
    }
  }

  //A keydown (A shot to the left)
  if (e.keyCode === 65) {
    if (ball.style.top === "-1rem") {
      //Move ball to directed location and change score accondingly
      ball.style.top = "-14rem";
      ball.style.left = "-2rem";

      if (keeper.classList.contains("sliding-left")) {
        goalieCount += 1;
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "orange";
        instructionTxt.innerHTML = "You missed +1 for keeper";
      } else {
        playerCount += 1;

        //Remove warning classes on warning classes and change accondingly
        ball.classList.remove("heartBeat");
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "green";
        instructionTxt.innerHTML = "You scored +1 for player";
      }

      //Delay for score to show
      setTimeout(() => {
        goalieScore.innerHTML = goalieCount;
        playerScore.innerHTML = playerCount;
      }, 500);

      //Bring ball back to center
      setTimeout(() => {
        ball.style.top = "-1rem";
        ball.style.left = "initial";
      }, 1200);
    }
  }

  //D keydown (A shot to the right)
  if (ball.style.top === "-1rem") {
    if (e.keyCode === 68) {
      //Move ball to directed location and change score accondingly
      ball.style.top = "-14rem";
      ball.style.right = "-2rem";

      if (keeper.classList.contains("sliding-right")) {
        goalieCount += 1;
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "orange";
        instructionTxt.innerHTML = "You missed +1 for keeper";
      } else {
        playerCount += 1;

        //Remove warning classes on warning classes and change accondingly
        ball.classList.remove("heartBeat");
        instructionTxt.style.transform = "scale(1)";
        instructionTxt.style.color = "green";
        instructionTxt.innerHTML = "You scored +1 for player";
      }

      //Delay for score to show
      setTimeout(() => {
        goalieScore.innerHTML = goalieCount;
        playerScore.innerHTML = playerCount;
      }, 500);

      //Bring ball back to center
      setTimeout(() => {
        ball.style.top = "-1rem";
        ball.style.right = "initial";
      }, 1200);
    }
  }
});

//Listen and check if either goal is at 5 goals to start the game again
window.addEventListener("keyup", () => {
  if (playerCount === 5) {
    message = "A win";
    playerCount = 0;
    goalieCount = 0;
    playerCount.text = "skadj";
    setTimeout(() => {
      ball.classList.add("heartBeat");
      instructionTxt.style.color = "green";
      instructionTxt.innerHTML = "A win :) go for more wins ";
    }, 900);
    alert(message);
  } else if (goalieCount === 5) {
    playerCount = 0;
    goalieCount = 0;
    message = "You lost :( but you can try again";
    setTimeout(() => {
      ball.classList.add("heartBeat");
      instructionTxt.style.color = "red";
      instructionTxt.innerHTML = "A loss :( but try again mate ";
    }, 900);
    alert(message);
  }
});
