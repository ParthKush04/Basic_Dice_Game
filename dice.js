var a = Math.random();
var b = a*6;
b = 1 + Math.floor(b);
var c = Math.floor(Math.random()*6) + 1 ;
var randomimagesource= "./images" + "/dice" + b + ".png" ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
randomimagesource = "./images" + "/dice" + c + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource);
if (b>c)
 {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
 }
else if (c>b)
 document.querySelector("h1").innerHTML = "Player 2 Wins";
else
 document.querySelector("h1").innerHTML = "Draw";
 