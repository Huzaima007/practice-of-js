// var weight = 150;
// var weight1 = 150;
// var total = weight + weight1;
// alert(total);
// console.log(total);

// var whatletsover = 4 % 2;
// console.log(whatletsover);

// prompt("huzii","fill it");
// console.lop(prompt);

var age = +prompt("Enter Your Age");

function ageCalculator(Userage) {
  if (age <= 4) {
    console.log("You Are an Infant");
  } else if (age <= 15) {
    console.log("You Are a School Boy");
  } else if (age <= 25) {
    console.log("You Are a Lover");
  } else if (age <= 35) {
    console.log("You Are a Soldier");
  } else if (age <= 45) {
    console.log("You Are a Justice Lover");
  } else if (age <= 60) {
    console.log("You Are an Old Man");
  } else if (age <= 90) {
    console.log("Extreme Old Age");
  } else {
    console.log("You Are Close to Dying");
  }
}

ageCalculator(Userage);
