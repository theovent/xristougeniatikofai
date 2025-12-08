// Christmas Recipes Ultimate Interactive Script - Immersive Holiday Edition
// Features: everything from Extreme Festive Edition + mini-games, live snowfall physics, responsive holiday story animations, interactive lights, music sync, snowball fights, falling gifts, dancing elves, aurora, jingle, countdown, ornaments, stars, steam/glow

// --- DARK/LIGHT MODE TOGGLE ---
const toggleBtn=document.createElement('div');
toggleBtn.className='toggle-theme';
toggleBtn.textContent='Theme';
document.body.appendChild(toggleBtn);
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');
});
window.addEventListener('DOMContentLoaded',()=>{
  const saved=localStorage.getItem('theme');
  if(saved==='dark') document.body.classList.add('dark');
});

// --- SCROLL REVEAL ---
const revealElements=document.querySelectorAll('.reveal');
function handleReveal(){
  revealElements.forEach(el=>{
    const rect=el.getBoundingClientRect();
    if(rect.top<window.innerHeight-80) el.classList.add('visible');
  });
}
window.addEventListener('scroll',handleReveal);
handleReveal();

// --- FLOATING ORNAMENTS ---
function createOrnament(){
  const o=document.createElement('div');
  o.className='floating-ornament';
  o.style.left=Math.random()*window.innerWidth+'px';
  o.style.top=Math.random()*window.innerHeight+'px';
  o.style.animationDuration=8+Math.random()*10+'s';
  document.body.appendChild(o);
  setTimeout(()=>o.remove(),15000);
}
setInterval(createOrnament,2500);

// --- TWINKLING STARS ---
function spawnStar(){
  const s=document.createElement('div');
  s.className='star';
  s.style.left=Math.random()*100+'vw';
  s.style.top=Math.random()*100+'vh';
  s.style.animationDuration=(1+Math.random()*2)+'s';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),3000);
}
setInterval(spawnStar,800);

// --- SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// --- PARTICLE EFFECT ON CLICK ---
document.body.addEventListener('click',e=>{
  for(let i=0;i<5;i++){
    const p=document.createElement('div');
    p.className='star';
    p.style.left=e.clientX+(Math.random()*30-15)+'px';
    p.style.top=e.clientY+(Math.random()*30-15)+'px';
    p.style.width=p.style.height=(4+Math.random()*4)+'px';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),2000);
  }
});

// --- CHRISTMAS COUNTDOWN ---
function updateCountdown(){
  const now=new Date();
  const xmas=new Date(now.getFullYear(),11,25);
  if(now.getMonth()===11&&now.getDate()>25) xmas.setFullYear(now.getFullYear()+1);
  const diff=xmas-now;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor(diff/1000/60/60)%24;
  const m=Math.floor(diff/1000/60)%60;
  const s=Math.floor(diff/1000)%60;
  document.getElementById('countdown')?.textContent=`${d}d ${h}h ${m}m ${s}s until Christmas!`;
}
setInterval(updateCountdown,1000);
updateCountdown();

// --- AURORA BOREALIS EFFECT ---
function createAurora(){
  const aur=document.createElement('div');
  aur.className='aurora';
  document.body.appendChild(aur);
  setTimeout(()=>aur.remove(),12000);
}
setInterval(createAurora,15000);

// --- INTERACTIVE 3D CHRISTMAS TREE ---
function createTree(){
  const tree=document.createElement('div');
  tree.className='tree-3d';
  document.body.appendChild(tree);
  setTimeout(()=>tree.remove(),15000);
}
setInterval(createTree,30000);

// --- JINGLE ANIMATION ON HOVER ---
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    card.classList.add('jingle');
    setTimeout(()=>card.classList.remove('jingle'),500);
  });
});

// --- RANDOM RECIPE SUGGESTER ---
const recipes=['Gingerbread Cookies','Eggnog','Yule Log','Stuffed Turkey','Cranberry Pie'];
function suggestRecipe(){
  const suggestion=recipes[Math.floor(Math.random()*recipes.length)];
  document.getElementById('recipe-suggestion')?.textContent=`Try this: ${suggestion}! 🎁`;
}
setInterval(suggestRecipe,15000);

// --- STEAM & GLOW EFFECTS FOR HOT FOOD ---
document.querySelectorAll('.hot-steam').forEach(el=>{
  el.addEventListener('mouseenter',()=>el.classList.add('glow'));
  el.addEventListener('mouseleave',()=>el.classList.remove('glow'));
});

// --- SNOWSTORM INTENSITY SLIDER ---
const snowSlider=document.createElement('input');
snowSlider.type='range';
snowSlider.min=0;
snowSlider.max=100;
snowSlider.value=50;
snowSlider.className='snow-slider';
document.body.appendChild(snowSlider);
snowSlider.addEventListener('input',()=>{
  document.body.style.setProperty('--snow-intensity',snowSlider.value);
});

// --- CLICKABLE LIGHTS ---
document.querySelectorAll('.tag').forEach(tag=>{
  tag.addEventListener('click',()=>{
    tag.classList.toggle('light-on');
  });
});

// --- ANIMATED SANTA SLEIGH ---
function santaSleigh(){
  const s=document.createElement('div');
  s.className='santa-sleigh';
  document.body.appendChild(s);
  s.style.left='-200px';
  s.style.top=Math.random()*100+'px';
  let pos=-200;
  const interval=setInterval(()=>{
    pos+=5;
    s.style.left=pos+'px';
    if(pos>window.innerWidth){
      clearInterval(interval);
      s.remove();
    }
  },30);
}
setInterval(santaSleigh,45000);

// --- SNOWBALL THROW ---
document.body.addEventListener('keydown',e=>{
  if(e.key===' '){
    const snowball=document.createElement('div');
    snowball.className='snowball';
    snowball.style.left=window.innerWidth/2+'px';
    snowball.style.top=window.innerHeight-50+'px';
    document.body.appendChild(snowball);
    let y=window.innerHeight-50;
    const throwInterval=setInterval(()=>{
      y-=15;
      snowball.style.top=y+'px';
      if(y<0){
        clearInterval(throwInterval);
        snowball.remove();
      }
    },30);
  }
});

// --- FALLING GIFT BOXES ---
function dropGift(){
  const g=document.createElement('div');
  g.className='gift-box';
  g.style.left=Math.random()*window.innerWidth+'px';
  document.body.appendChild(g);
  let top=-50;
  const fall=setInterval(()=>{
    top+=3+Math.random()*3;
    g.style.top=top+'px';
    if(top>window.innerHeight){
      clearInterval(fall);
      g.remove();
    }
  },30);
}
setInterval(dropGift,5000);

// --- MUSIC JINGLE SYNC ANIMATION ---
function jingleSync(){
  document.querySelectorAll('.card').forEach(card=>{
    card.classList.add('jingle-sync');
    setTimeout(()=>card.classList.remove('jingle-sync'),1000);
  });
}
setInterval(jingleSync,8000);

// --- DANCING ELVES ON HOVER ---
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    const elf=document.createElement('div');
    elf.className='dancing-elf';
    card.appendChild(elf);
    setTimeout(()=>elf.remove(),3000);
  });
});

// --- INTERACTIVE MINI-GAME: CATCH FALLING GIFTS ---
let score=0;
document.body.addEventListener('mousemove',e=>{
  let catcher=document.getElementById('gift-catcher');
  if(!catcher){
    catcher=document.createElement('div');
    catcher.id='gift-catcher';
    document.body.appendChild(catcher);
  }
  catcher.style.left=e.clientX-25+'px';
});
setInterval(()=>{
  document.querySelectorAll('.gift-box').forEach(g=>{
    const catcher=document.getElementById('gift-catcher');
    if(catcher){
      const gx=g.offsetLeft,gy=g.offsetTop;
      const cx=catcher.offsetLeft,cy=catcher.offsetTop;
      if(gx>cx && gx<cx+50 && gy>cy && gy<cy+50){
        score++;
        g.remove();
        console.log('Score:',score);
      }
    }
  });
},100);

console.log("Christmas JS Immersive Holiday Edition Loaded 🎄✨❄️🎁🧝🎶");
