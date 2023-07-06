var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

var randomImage = "dice" + randomNumber1 + ".png";

var imageSource = "./images/" + randomImage;

var dice1 = document.querySelectorAll("img")[0].setAttribute("src", imageSource);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imageSource2 = "./images/dice" + randomNumber2 + ".png";

var dice2 = document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "❤️ player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "❤️ player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "🤝 Draw!"
}
