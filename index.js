var randomNumber1 = Math.floor(Math.random()*6 + 1);

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];
var title = document.querySelector("h1");


img1.setAttribute("src", `images/dice${randomNumber1}.png`);
img2.setAttribute("src", `images/dice${randomNumber2}.png`);


if(randomNumber1 > randomNumber2)
{
  title.textContent = "Player 1 wins 🚩";
}

else if (randomNumber2 > randomNumber1)
{
    title.textContent = "🚩 Player 2 wins";
}

else
{
  title.textContent = "Draw!";
}
