var randomNumber1= Math.floor(Math.random()*6)+1;

var randomNum1= "images/dice"+ randomNumber1+".png";

var image1= document.querySelectorAll("img")[0].setAttribute("src", randomNum1);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomNum2= "images/dice"+ randomNumber2+".png";
var image2= document.querySelectorAll("img")[1].setAttribute("src", randomNum2);


if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML= " 🚩Player1 Wins";
    
}

else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= " 🚩Player2 wins";
}


else{
    document.querySelector("h1").innerHTML;
}