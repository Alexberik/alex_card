// ---------- Icons ----------
lucide.createIcons();

// ---------- Scroll progress bar ----------
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollBar.style.width = pct + '%';
});

// ---------- Hero particle canvas (cursor-reactive) ----------
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 130 };

function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
resizeCanvas();

window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 22) + 1;
  }
  draw() {
    ctx.fillStyle = 'rgba(47, 230, 201, 0.55)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    const dx = mouse.x - this.x, dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      const force = (mouse.radius - distance) / mouse.radius;
      this.x -= (dx / distance) * force * this.density;
      this.y -= (dy / distance) * force * this.density;
    } else {
      if (this.x !== this.baseX) this.x -= (this.x - this.baseX) * 0.05;
      if (this.y !== this.baseY) this.y -= (this.y - this.baseY) * 0.05;
    }
  }
}

function initParticles() {
  particles = [];
  const count = (canvas.width * canvas.height) / 16000;
  for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 110) {
        ctx.strokeStyle = `rgba(47, 230, 201, ${0.12 * (1 - dist / 110)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.draw(); p.update(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ---------- Terminal typing simulator ----------
const termInteractive = document.getElementById('term-interactive');
const commands = [
  'alex@ai-engine:~$ analyze --input="business_task"',
  '> Calculating ROI & time efficiency...',
  '> Optimization proposal ready.',
  '> Deploying... ',
];
let cmdIdx = 0, charIdx = 0;

function typeTerminal() {
  if (cmdIdx < commands.length) {
    if (charIdx < commands[cmdIdx].length) {
      termInteractive.textContent += commands[cmdIdx].charAt(charIdx);
      charIdx++;
      setTimeout(typeTerminal, 32);
    } else {
      termInteractive.innerHTML += '<br>';
      cmdIdx++;
      charIdx = 0;
      setTimeout(typeTerminal, 700);
    }
  } else {
    termInteractive.innerHTML += '<span class="term-caret"></span>';
  }
}
setTimeout(typeTerminal, 1400);

// ---------- 3D tilt on glass cards ----------
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 22}deg) rotateY(${x / 22}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  });
});

// ---------- GSAP: cinematic scroll reveals ----------
gsap.registerPlugin(ScrollTrigger);

// hero content settles in on load
gsap.fromTo('.hero-content > *', { opacity: 0, y: 28 }, {
  opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.2
});
gsap.fromTo('.terminal-window', { opacity: 0, y: 40, scale: 0.96 }, {
  opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.4
});

// hero parallax exit as user scrolls away — Apple-style depth
gsap.to('.hero-content', {
  yPercent: -12, opacity: 0.3, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('.terminal-window', {
  yPercent: -6, scale: 0.94, opacity: 0.4, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});
gsap.to('#hero-canvas', {
  yPercent: 15, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
});

// generic reveal-on-scroll for any .reveal element, section-tags, titles
document.querySelectorAll('.reveal').forEach(el => {
  gsap.fromTo(el, { opacity: 0, y: 36 }, {
    opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
  });
});

// staggered grids (services / cases / advantages)
['.services-grid', '.cases-grid', '.adv-grid', '.stats-grid'].forEach(sel => {
  const grid = document.querySelector(sel);
  if (!grid) return;
  gsap.fromTo(grid.children, { opacity: 0, y: 34, scale: 0.97 }, {
    opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08,
    scrollTrigger: { trigger: grid, start: 'top 82%', toggleActions: 'play none none reverse' }
  });
});

// section titles: slight scale-in for cinematic weight
document.querySelectorAll('h2.section-title').forEach(h => {
  gsap.fromTo(h, { opacity: 0, y: 24, letterSpacing: '-0.01em' }, {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: h, start: 'top 88%', toggleActions: 'play none none reverse' }
  });
});

// ---------- Animated counters (GSAP-driven, runs once) ----------
const statNums = document.querySelectorAll('.stat-num[data-target]');
statNums.forEach(num => {
  const target = +num.getAttribute('data-target');
  const counter = { val: 0 };
  ScrollTrigger.create({
    trigger: num, start: 'top 88%', once: true,
    onEnter: () => {
      gsap.to(counter, {
        val: target, duration: 1.6, ease: 'power2.out',
        onUpdate: () => { num.childNodes[0].nodeValue = Math.ceil(counter.val); }
      });
    }
  });
});

// ---------- Timeline fill + active dots ----------
window.addEventListener('scroll', () => {
  const timeline = document.getElementById('timeline');
  const progress = document.getElementById('timeline-progress');
  if (!timeline) return;
  const rect = timeline.getBoundingClientRect();
  const totalHeight = rect.height;
  const visibleHeight = window.innerHeight * 0.75 - rect.top;
  let pct = (visibleHeight / totalHeight) * 100;
  pct = Math.max(0, Math.min(100, pct));
  progress.style.height = pct + '%';

  document.querySelectorAll('.timeline-item').forEach(item => {
    const r = item.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.72) item.classList.add('active');
  });
});
