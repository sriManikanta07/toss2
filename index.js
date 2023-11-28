var player1 = prompt("Enter name of player one:");
var player2 = prompt("Enter name of player two:");
var x = player1+" won"
var Y = player2+" won"

var randomnumber1 = Math.floor(Math.random()*2)+1;
var img1 = "./pic"+randomnumber1+".jpeg";

var imgfirst =document.querySelectorAll("img")[0];
imgfirst.setAttribute("src",img1);

var randomnumber2 = Math.floor(Math.random()*2)+1;
var img2 = "./pic"+randomnumber2+".jpeg";

var imgsec =document.querySelectorAll("img")[1];
imgsec.setAttribute("src",img2);

if (randomnumber1 > randomnumber2) {
    var headingElement = document.querySelector("h1");
    headingElement.textContent = x;
}
else if (randomnumber2 > randomnumber1) {
   var headingElement = document.querySelector("h1");
   headingElement.textContent = Y ;
}
else {
   var headingElement = document.querySelector("h1");
   headingElement.textContent = 'Draw ';
}

var myButton = document.getElementById('myButton');

    // Define the callback function
    function handleClick() {
      location.reload();
    }
