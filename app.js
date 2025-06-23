let gameSeq = [];
let userSeq = [];
let btns = ["red", "pink", "yellow", "blue"];

let started = false;
let level = 0;
let highestScore = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
};

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
};

function flashRed(bdy) {
  bdy.classList.add("fr");
  setTimeout(function () {
    bdy.classList.remove("fr");
  }, 400);
};

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  //random button choose
  let random = Math.floor(Math.random() * 4);
  let randomColor = btns[random];
  let randomBtn = document.querySelector(`#${randomColor}`);
//   console.log("random no:" + random);
//   console.log("random color " + randomColor);
//   console.log(randomBtn);
  gameSeq.push(randomColor);
  //console.log(gameSeq);
  gameFlash(randomBtn);
};

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){

        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
        
    }else{
        //stop
        highestScore = Math.max(level, highestScore);
        h3.innerHTML = `GAME OVER! Your score was <b>${level}</b>. Your highestScore score is <b>${highestScore}</b>. Press any key to restart`;
        reset();
    }
};

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  //console.log(userColor);
  checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".box");

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    let bdy = document.querySelector("body");
    flashRed(bdy);
}