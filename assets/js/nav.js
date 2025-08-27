
/* nav.js */
(function(){
  const burger=document.querySelector('#burger');
  const drawer=document.querySelector('#drawer');
  function setDrawer(open){
    if(!burger||!drawer)return;
    burger.setAttribute('aria-expanded',open?'true':'false');
    drawer.setAttribute('aria-hidden',open?'false':'true');
    if(open){drawer.querySelector('a,button,summary')?.focus?.()} else {burger.focus()}
  }
  burger?.addEventListener('click',()=>{const expanded=burger.getAttribute('aria-expanded')==='true';setDrawer(!expanded)});
  drawer?.addEventListener('click',(e)=>{if(e.target===drawer) setDrawer(false)});
  document.querySelectorAll('.nav > ul > li').forEach(li=>{
    const btn=li.querySelector('button[aria-haspopup="true"]'); const menu=li.querySelector('.submenu');
    if(btn&&menu){
      btn.addEventListener('click',()=>{
        const open=btn.getAttribute('aria-expanded')==='true';
        document.querySelectorAll('.nav .submenu').forEach(s=>s.style.display='none');
        document.querySelectorAll('.nav button[aria-haspopup="true"]').forEach(b=>b.setAttribute('aria-expanded','false'));
        if(!open){btn.setAttribute('aria-expanded','true'); menu.style.display='block';} else {btn.setAttribute('aria-expanded','false'); menu.style.display='none';}
      });
      document.addEventListener('click',(e)=>{ if(!li.contains(e.target)){ menu.style.display='none'; btn.setAttribute('aria-expanded','false'); } });
    }
  });
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') setDrawer(false); });
})();
