const p1={
  score:0,
  button:document.querySelector('#p1but'),
  display:document.querySelector('#player1')
}
const p2={
  score:0,
  button:document.querySelector('#p2but'),
  display:document.querySelector('#player2')
}
const button3=document.querySelector('#p3but');
const winningScore=document.querySelector('#playto');
let winningpoint=3;
let isGame=false;
winningScore.addEventListener('change',function(){
  winningpoint=parseInt(this.value);
  Reset();
})
function updatescore(player,opponent)
{
  if(!isGame)
  {
    player.score+=1;
    if(player.score===winningpoint)
    {
      isGame=true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled=true;
      opponent.button.disabled=true;
    }
    player.display.textContent=player.score;
    
  }
}
p1.button.addEventListener('click',function(){
  updatescore(p1,p2)
})


p2.button.addEventListener('click',function(){
  updatescore(p2,p1)
})

button3.addEventListener('click',Reset)
function Reset(){
  isGame=false;
  for(p of [p1,p2])
  {
    p.score=0;
    p.display.textContent=0;
    p.display.classList.remove("has-text-success","has-text-danger");
    p.button.disabled=false;
  }
}
