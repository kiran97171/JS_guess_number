let initialValue=100;
let score=null;
let random=generateRandomNumber(100);
function generateRandomNumber(max){
    return Math.floor(Math.random()*max)+1;
}
document.querySelector("#check").addEventListener("click",check);
function check(){
    let userInput=document.getElementById("userInput").value;
    if(initialValue!==0){
    if(userInput>random){
        document.querySelector(".message").innerText=" Your Guess is High";
        initialValue--;
        document.querySelector("#chance").innerText=initialValue;
    }
    else if(userInput<random){
        document.querySelector(".message").innerText="Your guess is Low";
        initialValue--;
        document.querySelector("#chance").innerText=initialValue;
    }
    else{
        document.querySelector(".message").innerText="🤩🤩Hurray You Won🤩🤩";
        document.querySelector("#score").innerText=initialValue;
        document.body.style.backgroundColor="green";
        document.querySelector(".number").innerText=random;
    }
}
else{
    document.querySelector(".message").innerText=" Game Over"
}
}
document.querySelector("#playagain").addEventListener("click",playAgain);
function playAgain(){
    location.reload();
}