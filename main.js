// ===== 1. TYPING EFFECT (home page) =====
const el = document.getElementById('typed');
if (el) {
  const words = ['project manager.', 'problem solver.', 'team player.'];
  let w = 0, c = 0, deleting = false;
  (function type() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!deleting && c === word.length) {
      deleting = true;
      return setTimeout(type, 1400);
    }
    if (deleting && c === 0) {
      deleting = false;
      w = (w + 1) % words.length;
    }
    c += deleting ? -1 : 1;
    setTimeout(type, deleting ? 45 : 90);
  })();
}

// ===== 2. CONTACT FORM VALIDATION (contact page) =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    form.reset();
    form.classList.remove('was-validated');
    document.getElementById('sent').classList.remove('d-none');
  });
}

// ===== 3. PHOTO LIGHTBOX (gallery page) =====
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lbImg').src = img.src;
    document.getElementById('lbCap').textContent = img.alt;
    new bootstrap.Modal('#lightbox').show();
  });
});