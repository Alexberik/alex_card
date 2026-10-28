/* MAGIC Studio — animated JARVIS core on the hub. Canvas, no deps. */
(function(){
  const stage=document.querySelector('.viz-hub .viz-stage'); if(!stage) return;
  const cv=document.createElement('canvas'); cv.className='jarvis-canvas'; cv.setAttribute('aria-hidden','true'); stage.appendChild(cv);
  const ctx=cv.getContext('2d'), nodes=[...stage.querySelectorAll('.node')];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W=0,H=0,dpr=1,acc='#ab8ff1',mx=null,my=null,pk=[],last=0,nextSpawn=0;
  function rgba(a){const h=acc.replace('#','');const n=parseInt(h.length===3?h.replace(/./g,'$&$&'):h,16);return `rgba(${n>>16},${(n>>8)&255},${n&255},${a})`}
  function size(){const r=stage.getBoundingClientRect();dpr=Math.min(devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);acc=(getComputedStyle(stage).getPropertyValue('--accent')||'#ab8ff1').trim()||'#ab8ff1'}
  function np(n){const s=stage.getBoundingClientRect(),r=n.getBoundingClientRect();return{x:r.left-s.left+r.width/2,y:r.top-s.top+r.height/2,el:n}}
  function send(i,back){pk.push({i,t:0,back:!!back,sp:.9+Math.random()*.4})}
  nodes.forEach((n,i)=>n.addEventListener('pointerenter',()=>{send(i);send(i,true)}));
  stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
  stage.addEventListener('pointerleave',()=>{mx=my=null});
  function hit(el){el.classList.add('hit');setTimeout(()=>el.classList.remove('hit'),650)}
  function frame(ts){
    const t=ts/1000,dt=Math.min((ts-last)/1000||.016,.05);last=ts;
    ctx.clearRect(0,0,W,H);
    const cx=W/2,cy=H/2,R=Math.min(W,H)*.15;
    let ox=0,oy=0; if(mx!=null){ox=(mx-cx)/W*10;oy=(my-cy)/H*10}
    const P=nodes.map(np);
    /* network links */
    P.forEach((p,i)=>{const g=ctx.createLinearGradient(cx,cy,p.x,p.y);g.addColorStop(0,rgba(.55));g.addColorStop(1,rgba(.12));
      ctx.strokeStyle=g;ctx.lineWidth=1;ctx.setLineDash([4,7]);ctx.lineDashOffset=-t*18;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(p.x,p.y);ctx.stroke();ctx.setLineDash([])});
    /* packets */
    if(t>nextSpawn&&!reduce){send(Math.floor(Math.random()*P.length),Math.random()<.35);nextSpawn=t+.7+Math.random()*.8}
    pk=pk.filter(k=>{k.t+=dt*k.sp;const p=P[k.i],e=k.t>1?1:k.t*k.t*(3-2*k.t);const a=k.back?p:{x:cx,y:cy},b=k.back?{x:cx,y:cy}:p;
      for(let s=0;s<6;s++){const q=Math.max(0,e-s*.035),x=a.x+(b.x-a.x)*q,y=a.y+(b.y-a.y)*q;ctx.fillStyle=rgba(.9*(1-s/6));ctx.beginPath();ctx.arc(x,y,3.2-s*.4,0,7);ctx.fill()}
      if(k.t>=1){if(!k.back)hit(p.el);return false}return true});
    /* jarvis */
    ctx.save();ctx.translate(cx+ox,cy+oy);
    const pulse=1+Math.sin(t*2.2)*.03;
    const og=ctx.createRadialGradient(0,0,0,0,0,R*2.1);og.addColorStop(0,rgba(.35));og.addColorStop(.5,rgba(.1));og.addColorStop(1,rgba(0));ctx.fillStyle=og;ctx.beginPath();ctx.arc(0,0,R*2.1,0,7);ctx.fill();
    /* ticks */
    ctx.rotate(t*.18);ctx.strokeStyle=rgba(.45);ctx.lineWidth=1;
    for(let i=0;i<72;i++){const a=i/72*6.2832,l=i%6?4:9;ctx.beginPath();ctx.moveTo(Math.cos(a)*(R*1.62),Math.sin(a)*(R*1.62));ctx.lineTo(Math.cos(a)*(R*1.62+l),Math.sin(a)*(R*1.62+l));ctx.stroke()}
    ctx.rotate(-t*.18);
    /* arc segments */
    [[1.42,1.6,.5,.9],[1.22,-1.1,.6,1.2],[1.02,2.1,.35,1.5]].forEach(([k,sp,len,w],j)=>{ctx.strokeStyle=rgba(.85-j*.2);ctx.lineWidth=w+.6;
      for(let s=0;s<3;s++){const a0=t*sp+s*2.0944;ctx.beginPath();ctx.arc(0,0,R*k,a0,a0+len);ctx.stroke()}});
    ctx.strokeStyle=rgba(.25);ctx.lineWidth=1;ctx.beginPath();ctx.arc(0,0,R*1.42,0,7);ctx.stroke();
    /* voice waveform ring */
    ctx.strokeStyle=rgba(.95);ctx.lineWidth=1.6;ctx.beginPath();
    for(let i=0;i<=96;i++){const a=i/96*6.2832,amp=reduce?.12:(.1+.09*Math.sin(t*3+i*.55)+.06*Math.sin(t*5.3+i*1.3)+.04*Math.sin(t*1.7-i*.2)),r=R*(.86+amp)*pulse;
      const x=Math.cos(a)*r,y=Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.stroke();
    /* orb */
    const cg=ctx.createRadialGradient(-R*.15,-R*.2,0,0,0,R*.8);cg.addColorStop(0,'rgba(255,255,255,.95)');cg.addColorStop(.25,rgba(.95));cg.addColorStop(1,rgba(.06));
    ctx.fillStyle=cg;ctx.beginPath();ctx.arc(0,0,R*.62*pulse,0,7);ctx.fill();
    /* scanning eye dot */
    const ea=t*1.3;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(Math.cos(ea)*R*1.42,Math.sin(ea)*R*1.42,2.6,0,7);ctx.fill();
    ctx.restore();
    if(!reduce)requestAnimationFrame(frame)
  }
  size();addEventListener('resize',size);requestAnimationFrame(frame);
})();
