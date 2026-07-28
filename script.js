// Modern Indian Luxury Wedding - Ultra Slow & Smooth Motion Engine

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 1. 3D DOUBLE DOOR SPLIT OPENING (CINEMATIC 2.8s SLOW SWING) & MUSIC START
  const doorOverlay = document.getElementById('door-overlay');
  const doorSealBtn = document.getElementById('door-seal-btn');

  function openRoyalDoor() {
    if (!doorOverlay || doorOverlay.classList.contains('is-opened')) return;
    
    // Trigger door opening state
    doorOverlay.classList.add('is-opened');

    // Trigger hero content micro-motion reveal
    document.body.classList.add('is-revealed');

    // Hide door overlay after smooth 5.5s transition completes
    setTimeout(() => {
      doorOverlay.style.display = 'none';
    }, 5500);

    // Start Indian Classical Ambient Raga Music
    startIndianRagaMusic();
  }

  if (doorOverlay) doorOverlay.addEventListener('click', openRoyalDoor);
  if (doorSealBtn) doorSealBtn.addEventListener('click', openRoyalDoor);

  // 2. LIVE COUNTDOWN TIMER
  const destination = new Date('2026-11-28T16:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = destination - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cnt-days');
    const hEl = document.getElementById('cnt-hours');
    const mEl = document.getElementById('cnt-mins');
    const sEl = document.getElementById('cnt-secs');

    if (dEl) dEl.textContent = String(days).padStart(2, '0');
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 3. ROMANTIC METALLIC GOLD SCRATCH CARD COVER (EXACT REFERENCE MATCH)
  const scratchCanvas = document.getElementById('scratch-canvas');
  const scratchWrapper = document.getElementById('scratch-card-wrapper');

  if (scratchCanvas && scratchWrapper) {
    const ctx = scratchCanvas.getContext('2d');
    let isScratching = false;
    let isRevealed = false;

    function resizeScratchCanvas() {
      const rect = scratchWrapper.getBoundingClientRect();
      scratchCanvas.width = rect.width;
      scratchCanvas.height = rect.height;
      drawReferenceMatchCover();
    }

    function drawReferenceMatchCover() {
      if (isRevealed) return;
      const w = scratchCanvas.width;
      const h = scratchCanvas.height;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);

      // Warm Metallic Gold-Champagne Card Fill
      const cardGrad = ctx.createLinearGradient(0, 0, w, h);
      cardGrad.addColorStop(0, '#D9B26D');
      cardGrad.addColorStop(0.3, '#F3D69A');
      cardGrad.addColorStop(0.7, '#C89F57');
      cardGrad.addColorStop(1, '#E6C685');

      ctx.fillStyle = cardGrad;
      ctx.fillRect(0, 0, w, h);

      // Delicate Border Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, w - 20, h - 20);

      // ✦ SCRATCH TO REVEAL ✦ Crisp Soft White Text
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const fontSize = Math.min(Math.max(w / 24, 14), 18);
      ctx.font = `bold ${fontSize}px "Plus Jakarta Sans", "Cormorant Garamond", serif`;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
      ctx.shadowBlur = 4;
      ctx.fillText('✦ SCRATCH TO REVEAL ✦', w / 2, h / 2);
      ctx.shadowColor = 'transparent';
    }

    function getScratchPos(e) {
      const rect = scratchCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }

    function scratch(e) {
      if (!isScratching || isRevealed) return;
      e.preventDefault();

      const pos = getScratchPos(e);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 44, 0, Math.PI * 2);
      ctx.fill();

      checkScratchProgress();
    }

    let scratchCheckThrottle = 0;
    function checkScratchProgress() {
      scratchCheckThrottle++;
      if (scratchCheckThrottle % 8 !== 0 || isRevealed) return;

      const w = scratchCanvas.width;
      const h = scratchCanvas.height;
      const imageData = ctx.getImageData(0, 0, w, h);
      const pixels = imageData.data;
      let clearPixels = 0;

      // Sample every 16th pixel for performance
      for (let i = 3; i < pixels.length; i += 64) {
        if (pixels[i] === 0) {
          clearPixels++;
        }
      }

      const totalSampled = pixels.length / 64;
      const percentage = (clearPixels / totalSampled) * 100;

      if (percentage > 30) {
        revealFullCountdown();
      }
    }

    function triggerPartyPopperExplosion() {
      if (!window.confetti) return;

      // Left Party Popper Cannon
      confetti({
        particleCount: 85,
        angle: 60,
        spread: 75,
        origin: { x: 0.05, y: 0.75 },
        colors: ['#C5A059', '#F2B705', '#E8A598', '#1C352D', '#FAF8F5'],
      });

      // Right Party Popper Cannon
      confetti({
        particleCount: 85,
        angle: 120,
        spread: 75,
        origin: { x: 0.95, y: 0.75 },
        colors: ['#C5A059', '#F2B705', '#E8A598', '#1C352D', '#FAF8F5'],
      });

      // Center Big Party Popper Burst
      setTimeout(() => {
        confetti({
          particleCount: 140,
          spread: 115,
          origin: { x: 0.5, y: 0.6 },
          colors: ['#C5A059', '#F2B705', '#E8A598', '#D4AF37', '#FFFFFF'],
          scalar: 1.3,
        });
      }, 120);
    }

    function revealFullCountdown() {
      if (isRevealed) return;
      isRevealed = true;

      // Fade out scratch overlay smoothly
      scratchCanvas.style.opacity = '0';

      // PARTY POPPER FLOWER EXPLOSION!
      triggerPartyPopperExplosion();

      setTimeout(() => {
        scratchCanvas.style.pointerEvents = 'none';
      }, 700);
    }

    // Event Listeners for Touch & Mouse
    window.addEventListener('resize', resizeScratchCanvas);
    setTimeout(resizeScratchCanvas, 100);

    scratchCanvas.addEventListener('mousedown', (e) => { isScratching = true; scratch(e); });
    scratchCanvas.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', () => { isScratching = false; });

    scratchCanvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); }, { passive: false });
    scratchCanvas.addEventListener('touchmove', scratch, { passive: false });
    window.addEventListener('touchend', () => { isScratching = false; });
  }

  // 4. 60FPS PETALS CANVAS SIMULATION
  const canvas = document.getElementById('petals-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const petals = [];
    const count = Math.min(Math.floor(width / 22), 65);
    const colors = ['#D8B4A6', '#C5A059', '#E8D4C8', '#D4A396', '#FFFDF9', '#F4EAD4', '#8C263E'];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 9 + 5,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.35 + 0.2, // Gentle soft low opacity
      });
    }

    let wind = 0;
    function renderPetals() {
      ctx.clearRect(0, 0, width, height);
      wind += 0.005;

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(wind + p.y * 0.002) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) { p.y = -20; p.x = Math.random() * width; }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size, 0, 0);
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(renderPetals);
    }
    renderPetals();
  }

  // 5. OFFICIAL SURILI AKHIYON WALE INSTRUMENTAL AUDIO ENGINE (100% VOLUME)
  let bgAudio = null;
  let audioCtx = null;
  let isPlaying = false;
  const ragaNotes = [220.00, 246.94, 277.18, 311.13, 329.63, 369.99, 415.30, 440.00, 493.88, 554.37];

  function startIndianRagaMusic() {
    if (isPlaying) return;

    try {
      if (!bgAudio) {
        bgAudio = new Audio();
        bgAudio.loop = true;
        bgAudio.volume = 1.0; // 100% Full Volume

        // Try primary assets/wedding_tune.mp3 for 100% Netlify & Mobile compatibility
        bgAudio.src = 'assets/wedding_tune.mp3';
        
        bgAudio.onerror = () => {
          if (bgAudio) {
            bgAudio.src = 'assets/wedding_tune.mp4';
            bgAudio.play().then(() => {
              isPlaying = true;
              updateAudioButtonUI(true);
            }).catch(startWebAudioFallback);
          }
        };
      }

      bgAudio.play().then(() => {
        isPlaying = true;
        updateAudioButtonUI(true);
      }).catch(() => {
        if (bgAudio) {
          bgAudio.src = 'assets/wedding_tune.mp4';
          bgAudio.play().then(() => {
            isPlaying = true;
            updateAudioButtonUI(true);
          }).catch(startWebAudioFallback);
        }
      });
    } catch (e) {
      startWebAudioFallback();
    }
  }

  function startWebAudioFallback() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(1.0, audioCtx.currentTime); // 100% Full Volume
      masterGain.connect(audioCtx.destination);

      // Tanpura Drone Harmonies
      [110.00, 164.81, 220.00].forEach((freq) => {
        const osc = audioCtx.createOscillator();
        const droneGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, audioCtx.currentTime);

        droneGain.gain.setValueAtTime(0.12, audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(droneGain);
        droneGain.connect(masterGain);
        osc.start();
      });

      // Shehnai & Flute Melody Loop
      function playNextNote() {
        if (!audioCtx) return;

        const osc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        const isFlute = Math.random() > 0.45;
        osc.type = isFlute ? 'sine' : 'triangle';
        const freq = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(isFlute ? 1500 : 2600, audioCtx.currentTime);

        const duration = isFlute ? 2.5 : 1.4;
        noteGain.gain.setValueAtTime(0);
        noteGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start();
        osc.stop(audioCtx.currentTime + duration + 0.1);

        setTimeout(playNextNote, isFlute ? 1200 : 800);
      }

      playNextNote();
      isPlaying = true;
      updateAudioButtonUI(true);
    } catch (e) {
      console.log('Audio init error:', e);
    }
  }

  function updateAudioButtonUI(playing) {
    const btn = document.getElementById('audio-toggle-btn');
    if (btn) {
      btn.innerHTML = playing ? '<i data-lucide="volume-2" class="w-5 h-5 text-royal-gold"></i>' : '<i data-lucide="volume-x" class="w-5 h-5 text-royal-gold/60"></i>';
      if (window.lucide) lucide.createIcons();
    }
  }

  function stopAllAudio() {
    if (bgAudio) {
      bgAudio.pause();
      bgAudio.currentTime = 0;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
    isPlaying = false;
    updateAudioButtonUI(false);
  }

  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        stopAllAudio();
      } else {
        startIndianRagaMusic();
      }
    });
  }

  // 6. RSVP FORM SUBMIT WITH CONFETTI
  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.confetti) {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#1C352D', '#D8B4A6', '#FAF8F5'],
        });
      }
      alert('Thank you! Your Royal RSVP has been received with joy.');
    });
  }

  // 8. SCROLL REVEAL MOTION ANIMATION FOR ALL SECTIONS & CARDS
  const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    scrollObserver.observe(el);
  });
});

// Helper Scroll Function
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
