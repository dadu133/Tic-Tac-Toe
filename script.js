let boxes=document.querySelectorAll(".box");
let turnO=true;
let rtbtn=document.querySelector("#reset-btn");
let nwbtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerHTML="O"
            turnO=false
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })

})
function checkwinner(){
   for(let pattern of winpattern){

      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      console.log("Position 1 value is "+pos1val);
      console.log("Position 2 value is "+pos2val);
      console.log("Position 3 value is "+pos3val);
      console.log("------------------------------------------------------------------------")
      if(pos1val!="" && pos2val!="" && pos3val!=""){
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        if(pos1val==pos2val &&pos2val==pos3val){
              showWinner(pos1val);
        }
      }
    }
}
function showWinner(winner){
 msg.innerText=`Congratulations winner is ${winner}`
 msgContainer.classList.remove("hide")
 for(let box of boxes){
    box.disabled=true;
 }
}

function resetGame(){
  turnO=true;
  for (let box of boxes){
  box.disabled=false;
  box.innerText="";
  }
  msgContainer.classList.add("hide")
}

nwbtn.addEventListener("click",resetGame)
rtbtn.addEventListener("click",resetGame)