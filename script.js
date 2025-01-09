const numberInput = document.querySelector("input");
const submit = document.querySelector("#submit");
const starGameAgain = document.querySelector("#start-game");
const container = document.querySelector(".container");

let randomNumber = Math.floor(Math.random() * 100);
const p = document.createElement("p");
const div = document.createElement("div");
let yourGuess = [];

submit.addEventListener("click", () => {
  if (
    numberInput.value == "" ||
    numberInput.value < 0 ||
    numberInput.value > 100
  ) {
    alert("please enter number");
    numberInput.value = "";
  } else {
    if (numberInput.value == randomNumber) {
      p.innerText = "you guess correct number you win ";
      startGameAgain();
    } else if (numberInput.value > randomNumber) {
      p.innerText = "too high ";
    } else {
      p.innerText = "too low ";
    }
    container.append(p);
    console.log(p);
    console.log(randomNumber);
    yourGuess.push(numberInput.value);
    div.innerText = `your Guess : ${yourGuess}`;
    container.append(div);
    numberInput.value = "";
    if (yourGuess.length == 5) {
      startGameAgain();
      // starGameAgain.disabled = false;
      // starGameAgain.classList.remove("not-allowed");
      // numberInput.disabled = true;
      // submit.disabled = true;
      // numberInput.classList.add("not-allowed");
      // submit.classList.add("not-allowed");
      // debugger;
      if (randomNumber == parseInt(yourGuess[4])) {
        p.innerText = `you win ,computer number is : ${randomNumber}`;
      } else {
        p.innerText = `you loss ,computer number is : ${randomNumber}`;
      }
    }
  }
});
starGameAgain.addEventListener("click", () => {
  numberInput.value = "";
  randomNumber = Math.floor(Math.random() * 100);
  yourGuess = [];
  p.remove();
  div.remove();
  starGameAgain.disabled = true;
  starGameAgain.classList.add("not-allowed");
  numberInput.disabled = false;
  submit.disabled = false;
  numberInput.classList.remove("not-allowed");
  submit.classList.remove("not-allowed");
});

function startGameAgain() {
  starGameAgain.disabled = false;
  starGameAgain.classList.remove("not-allowed");
  numberInput.disabled = true;
  submit.disabled = true;
  numberInput.classList.add("not-allowed");
  submit.classList.add("not-allowed");
}
