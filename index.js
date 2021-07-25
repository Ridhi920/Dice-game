var randomNumber1= Math.floor(Math.random() * 6 ) + 1;
var imageNumber = "images/" + "dice" + randomNumber1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", imageNumber);




var randomNumber2= Math.floor(Math.random() * 6) + 1;
var imageNumber2="images/" + "dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", imageNumber2);

if(imageNumber>imageNumber2){
    document.querySelector("h1").innerHTML="🚩Player One Wins!";
}
else if(imageNumber2>imageNumber){
    document.querySelector("h1").innerHTML="🚩Player Two Wins!";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw!";
}

