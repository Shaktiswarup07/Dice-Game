var butt = document.querySelector(".btn");
butt.addEventListener("click", start);

function start(){
    var rand1=Math.floor(Math.random()*6)+1;
    var rand2=Math.floor(Math.random()*6)+1;


    var randomDiceImg1="dice"+rand1+".png";
    var randomImgSrc1="images/"+randomDiceImg1;
    var randomDiceImg2="dice"+rand2+".png";
    var randomImgSrc2="images/"+randomDiceImg2;

    var image1=document.querySelector(".img1").setAttribute("src",randomImgSrc1);
    var image2=document.querySelector(".img2").setAttribute("src",randomImgSrc2);
    if(rand1>rand2){
        document.querySelector(".container h1").innerHTML="🚩Player 1 Wins!";
    }
    else if(rand2>rand1){
        document.querySelector(".container h1").innerHTML="Player 2 Wins!🚩";
    }
    else{
        document.querySelector(".container h1").textContent="🚩Draw!🚩";
    }

}

