let f=0;
var countspan = document.getElementById("countvar");
var gameovertext=document.getElementById("gameover");
let restartbuttonjs = document.getElementById('restartbutton');
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
}
function resetprob() {
    let d = prob[Math.floor(Math.random() * prob.length)];
    if(d===1)
    {
        reset();
    }
}

function reset() {
    count=0;
    countspan.innerText = 0;
    f=1;
    gameovertext.innerHTML="Game Over!! The counter has been reset.";
    restartbuttonjs.style.visibility = 'visible';
}

function restart()
{
    console.log('hi');
}
