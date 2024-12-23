// var weight = 150;
// var weight1 = 150;
// var total = weight + weight1;
// alert(total);
// console.log(total);

// var whatletsover = 4 % 2;
// console.log(whatletsover);

// prompt("huzii","fill it");
// console.lop(prompt);

// var age = +prompt("Enter Your Age");

// function ageCalculator(Userage) {
//   if (age <= 4) {
//     console.log("You Are an Infant");
//   } else if (age <= 15) {
//     console.log("You Are a School Boy");
//   } else if (age <= 25) {
//     console.log("You Are a Lover");
//   } else if (age <= 35) {
//     console.log("You Are a Soldier");
//   } else if (age <= 45) {
//     console.log("You Are a Justice Lover");
//   } else if (age <= 60) {
//     console.log("You Are an Old Man");
//   } else if (age <= 90) {
//     console.log("Extreme Old Age");
//   } else {
//     console.log("You Are Close to Dying");
//   }
// }

// ageCalculator(Userage);

const cardsArray = [
  { name: "apple", img: "./IMAGES/APPLE.jpeg" },
  { name: "banana", img: "./IMAGES/banana.webp" },
  { name: "cherry", img: "./IMAGES/cherry.webp" },
  { name: "grape", img: "./IMAGES/grape.jpeg" },
  { name: "orange", img: "./IMAGES/orange.jpeg" },
  { name: "peach", img: "./IMAGES/peach.jpeg" },
];


// Duplicate and shuffle cards
let cards = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5);

const gameGrid = document.querySelector(".game-grid");
let firstCard = null;
let secondCard = null;
let lockBoard = false;

// Create card elements
cards.forEach(({ name, img }) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;

  const imgElement = document.createElement("img");
  imgElement.src = img;
  card.appendChild(imgElement);

  gameGrid.appendChild(card);

  card.addEventListener("click", flipCard);
});

function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

let moves = 0;

// Update move counter
function updateMoveCount() {
  moves++;
  document.getElementById("move-count").textContent = moves;
}

// Modify flipCard to update moves
function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  updateMoveCount();
  checkMatch();
}

// Restart game
document.getElementById("restart-button").addEventListener("click", () => {
  gameGrid.innerHTML = "";
  moves = 0;
  document.getElementById("move-count").textContent = moves;
  resetBoard();

  cards = [...cardsArray, ...cardsArray].sort(() => Math.random() - 0.5);

  cards.forEach(({ name, img }) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;

    const imgElement = document.createElement("img");
    imgElement.src = img;
    card.appendChild(imgElement);

    gameGrid.appendChild(card);

    card.addEventListener("click", flipCard);
  });
});
