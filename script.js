// CHANGE THIS to her next birthday: YYYY-MM-DD (Malaysia time).
const birthdayDate = '2026-10-16';
const timer = document.getElementById('timer');
function updateCountdown(){
  const target = new Date(birthdayDate + 'T00:00:00+08:00').getTime();
  const diff = target - Date.now();
  if (!Number.isFinite(target)){timer.textContent='Please set a valid birthday date 💗';return;}
  if(diff<=0){timer.textContent='Happy Birthday, Nur Hatija Ayuni! 🎉💗';return;}
  const days=Math.floor(diff/86400000),hours=Math.floor(diff/3600000)%24,minutes=Math.floor(diff/60000)%60,seconds=Math.floor(diff/1000)%60;
  timer.innerHTML=[['Days',days],['Hours',hours],['Minutes',minutes],['Seconds',seconds]].map(([name,num])=>`<div class="timebox"><strong>${String(num).padStart(2,'0')}</strong><span>${name}</span></div>`).join('');
}
updateCountdown();setInterval(updateCountdown,1000);
const letter=document.getElementById('letter');document.getElementById('letterBtn').addEventListener('click',()=>{letter.hidden=!letter.hidden;document.getElementById('letterBtn').textContent=letter.hidden?'Open your letter 💗':'Close your letter 💌';});
document.getElementById('cake').addEventListener('click',()=>{document.getElementById('wish').textContent='May all your beautiful wishes come true! I love you! 💖';const confetti=document.getElementById('confetti');confetti.replaceChildren();for(let i=0;i<55;i++){const p=document.createElement('span');p.className='piece';p.textContent=['💗','🌸','✨','💕','🎉'][Math.floor(Math.random()*5)];p.style.left=Math.random()*100+'vw';p.style.animationDelay=Math.random()*1.3+'s';p.style.animationDuration=2.5+Math.random()*2+'s';confetti.append(p);}setTimeout(()=>confetti.replaceChildren(),6000);});
const song=document.getElementById('song'),musicBtn=document.getElementById('musicBtn');musicBtn.addEventListener('click',async()=>{if(song.paused){try{await song.play();musicBtn.textContent='♫ Pause music';}catch(e){musicBtn.textContent='Add music.mp3 first ♫';}}else{song.pause();musicBtn.textContent='♫ Play music';}});
document.getElementById('year').textContent=new Date().getFullYear();
