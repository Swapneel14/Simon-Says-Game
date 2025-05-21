let gs=[];
let us=[];
let s=false;
let level=0;
let btns=["red", "blue", "green", "yellow"];
let h2=document.querySelector("h2");
body=document.querySelector("body");
  
  document.createElement("h3");
  let h3=document.createElement("h3");
  body.appendChild(h3);
 document.addEventListener("keypress", function(event) {//Start The Game on Key Press
    if(s==false){
      console.log("Game started");
      s=true;
      levelup();
    }
    

 });

 function levelup(){
  us=[];//level up function
    level++;
      h2.innerHTML=`Level ${level}`;//shows the level in h2
      let randomNumber=Math.floor(Math.random()*4);//generates a random no. between 0-3
      let randomColor=btns[randomNumber];
      let randbtn=document.querySelector(`.${randomColor}`);//generates a random color
      gs.push(randomColor);
      btnflash(randbtn);//calls the button flash function
 }
 function btnflash(btn){                       //Game button flash function
   btn.classList.add("flash");                //Doing the flash
   setTimeout(function(){
       btn.classList.remove("flash");        //removing the flash
   }, 300);
 }
 function check(idx){//chif sequence is correct


if(us[idx]==gs[idx]){
  
  if(us.length==gs.length){             //if correct,calls levelup function
    
  setTimeout(levelup, 1000);
  }
    
  
}else{
  console.log("Wrong");
  h2.innerHTML="Game Over!Press Any Key to Restart.";
  body=document.querySelector("body");
  
  reset(gs.length);
}
 }
 function buttonpress(){//User button press functin
  let btn=this;
  btnflash(btn);

let userColor=btn.getAttribute("id");
console.log(userColor);
us.push(userColor);
check(us.length-1);
  
 }
 let allbtns=document.querySelectorAll(".box");
for (let btn of allbtns) {
  btn.addEventListener("click", buttonpress);
}
function reset(l){//Reset function
  s=false;
  let last=l;
  level=0;
  gs=[];
  
  h3.innerText=`Your Last Score was ${last}`;
  
  
  
  
}