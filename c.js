let f=0;
// let highscore=0;
var congratstext=document.getElementById("congrats");

var hiscorespan=document.getElementById("urhighscore");
hiscorespan.innerText=localStorage.getItem("score");


var countspan = document.getElementById("countvar");
var buttonjs=document.getElementById("thebutton");
var gameovertext=document.getElementById("gameover");
var count = parseInt(countspan.innerText);
let prob = new Array(100).fill(0);

function counter() {
    if(f===0)  
        {
            count++;
            countspan.innerText = count;
            prob[count-1]=1;
            resetprob();
        }
    else if(buttonjs.innerHTML="Restart")
        {
            location.reload();
        }
}
function resetprob() {
    let d = prob[Math.floor(Math.random() * prob.length)];
    if(d===1)
    {
        if(count>hiscorespan.innerText)
        {
            updatestorage();
            congratstext.style.visibility='visible';    
        }
        reset();
    }
}

function reset() {
    count=0;
    countspan.innerText = 0;
    f=1;
    gameovertext.innerHTML="Game Over!! The counter has been reset.";
    buttonjs.innerHTML="Restart";
    
}

function updatestorage()
{
    localStorage.setItem("score",countspan.innerText);
}
function clearstorage()
{
    localStorage.clear();
    window.location.reload();
}

