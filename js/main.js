/* ================================================================
   UTKAL DIVAS 2026 — NISER
   Main JavaScript
   ================================================================ */

/* ---- Events Data ---- */
const eventsData = [
  {
    id: 'poetry-odia',
    title: 'Poetry Recitation (Odia)',
    titleOdia: 'କବିତା ପାଠ',
    category: 'Literary',
    icon: '📝',
    color: '#8b4513',
    date: 'April 1, 2026',
    time: '4:30 PM – 6:00 PM',
    venue: 'LH 4',
    registration: 'Prior registration required (deadline: March 31)',
    description: 'A poetry recitation session celebrating the richness of the Odia language and its literary heritage, organised in collaboration with Kalinga Bhasa Mukta Mancha.',
    rules: [
      'Recitation must be in Odia',
      'Poems may be original or from established authors',
      'Maximum duration: 5 minutes',
      'Prior registration required (deadline: 31st March)'
    ]
  },
  {
    id: 'painting-under15',
    title: 'Painting Competition (Below 15 years)',
    titleOdia: 'ଚିତ୍ରାଙ୍କନ ପ୍ରତିଯୋଗିତା',
    category: 'Arts',
    icon: '🎨',
    color: '#ff6347',
    date: 'April 3, 2026',
    time: '9:00 AM – 6:00 PM',
    venue: 'LH 5',
    registration: 'On-the-spot competition',
    description: 'An on-the-spot painting competition encouraging participants to artistically express themes inspired by Odisha.',
    rules: [
      'On-the-spot competition',
      'Drawing sheets will be provided',
      'Participants must bring their own colours/materials',
      'Theme: "Odisha: India\'s Best Kept Secret"',
      'Selected works will be displayed on 4th April'
    ]
  },
  {
    id: 'painting-above15',
    title: 'Painting Competition (15+ years)',
    titleOdia: 'ଚିତ୍ରାଙ୍କନ ପ୍ରତିଯୋଗିତା',
    category: 'Arts',
    icon: '🎨',
    color: '#ff6347',
    date: 'April 3-4, 2026',
    time: 'Take-Home Submission',
    venue: 'Submit on 4th April',
    registration: 'Submission deadline: April 4, 10:00 AM',
    description: 'Participants will complete their artwork in advance and submit it on the day of the main celebration.',
    rules: [
      'Take-home competition',
      'Submission Deadline: 4th April 2026, 10:00 AM',
      'Theme: "Odisha: India\'s Best Kept Secret"',
      'Alternative Odia theme option: ଘନଘନ ବନଭୂମି ରାଜିତ ଅଙ୍ଗେ',
      'Selected works will be displayed'
    ]
  },
  {
    id: 'online-quiz',
    title: 'Online Quiz',
    titleOdia: 'ଅନ୍ଲାଇନ୍ କ୍ୱିଜ୍',
    category: 'Knowledge',
    icon: '🧠',
    color: '#4169e1',
    date: 'Daily until April 3, 2026',
    time: 'Any time',
    venue: 'Official Instagram Page',
    registration: 'Via Instagram',
    description: 'An engaging quiz conducted through the official Instagram page, based on Odisha, culture, and general topics.',
    rules: [
      'Conducted daily until 3rd April',
      'Based on Odisha, culture, and general topics',
      'Final winner based on cumulative score',
      'Prize for top performer',
      'Follow official Instagram page for daily questions'
    ]
  },
  {
    id: 'jhoti',
    title: 'Jhoti (Traditional Odia Rangoli)',
    titleOdia: 'ଝୋଟି',
    category: 'Traditional Art',
    icon: '🌾',
    color: '#daa520',
    date: 'April 3, 2026',
    time: 'Evening (up to 3 hours)',
    venue: 'In front of Pathani Samanta Auditorium',
    registration: 'Limited to 15 participants (first-come basis)',
    description: 'A traditional floor art competition celebrating Odisha\'s rich artistic heritage through Jhoti designs.',
    rules: [
      'Limited to 15 participants (first-come basis)',
      'Maximum duration: 3 hours',
      'All materials will be provided by organisers',
      'Participants are not required to bring anything',
      'Celebrate Odisha\'s rich artistic heritage through traditional Jhoti designs'
    ]
  }
];

/* ---- Leaderboard Data ---- */
const leaderboardData = [
  { rank: 1, name: 'dev_debasish_99', score: 15 },
  { rank: 2, name: 'prachites', score: 15 },
  { rank: 3, name: 'amit_kumarpradhan2706', score: 14 },
  { rank: 4, name: 'sundar.aahe', score: 13 },
  { rank: 5, name: 'sameekshya_kar', score: 12 },
  { rank: 6, name: 'subha_mini_world', score: 12 },
  { rank: 7, name: 'sahoobiswajit_18', score: 11 },
  { rank: 8, name: 'priyabrata_dash_', score: 11 },
  { rank: 9, name: 'vibrant_hero010', score: 11 },
  { rank: 10, name: 'satyamshivam0221', score: 9 },
  { rank: 11, name: 'amitanshupattnayak', score: 8 },
  { rank: 12, name: 'jigyanshaa_', score: 8 },
  { rank: 13, name: 'subhasish.nayak.5895', score: 8 },
  { rank: 14, name: 'awmresh_', score: 7 },
  { rank: 15, name: 'aradhanapani', score: 7 },
  { rank: 16, name: '_rakesh_2428_', score: 7 },
  { rank: 17, name: 'debashreemona', score: 7 },
  { rank: 18, name: '0208_sagar', score: 7 },
  { rank: 19, name: 'reeta9397', score: 6 },
  { rank: 20, name: 'lens_of_op', score: 6 },
  { rank: 21, name: '_rrp_asis_', score: 5 },
  { rank: 22, name: 'bhagya04shree01', score: 5 },
  { rank: 23, name: 'mohan_d._', score: 5 },
  { rank: 24, name: 'chemophillic1', score: 5 },
  { rank: 25, name: 'surjya.194', score: 4 },
  { rank: 26, name: 'shushi_22_07', score: 4 },
  { rank: 27, name: 'iam_bidhu_._', score: 3 },
  { rank: 28, name: 'mamalikhatua23', score: 3 },
  { rank: 29, name: 'durga_maa_980', score: 2 },
  { rank: 30, name: 'anil_patel9490', score: 2 },
  { rank: 31, name: 'sunitahhh.in', score: 1 },
  { rank: 32, name: 'karismakakarishma', score: 1 },
];

/* ================================================================
   NAV TOGGLE
   ================================================================ */
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const navbar    = document.querySelector('.navbar');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navLinks.classList.contains('open')) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Scroll shadow
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // Set active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ================================================================
   MODAL
   ================================================================ */
function openModal(eventId) {
  const ev = eventsData.find(e => e.id === eventId);
  if (!ev) return;

  const overlay = document.getElementById('event-modal');
  if (!overlay) return;

  overlay.querySelector('.modal-icon').textContent        = ev.icon;
  overlay.querySelector('.modal-category').textContent   = ev.category;
  overlay.querySelector('.modal-title').textContent      = ev.title;
  overlay.querySelector('.modal-odia').textContent       = ev.titleOdia;
  overlay.querySelector('#modal-date').textContent       = ev.date;
  overlay.querySelector('#modal-time').textContent       = ev.time;
  overlay.querySelector('#modal-venue').textContent      = ev.venue;
  overlay.querySelector('#modal-reg').textContent        = ev.registration;
  overlay.querySelector('#modal-desc').textContent       = ev.description;

  const rulesEl = overlay.querySelector('#modal-rules');
  rulesEl.innerHTML = ev.rules.map(r => `<div class="modal-rule">${r}</div>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('event-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  const overlay = document.getElementById('event-modal');
  if (!overlay) return;

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  // Close button
  overlay.querySelector('.modal-close').addEventListener('click', closeModal);
}

/* ================================================================
   RENDER EVENTS CARDS
   ================================================================ */
function renderEventCards(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = limit ? eventsData.slice(0, limit) : eventsData;
  container.innerHTML = data.map((ev, i) => `
    <div class="event-card animate-on-scroll animate-delay-${(i % 4) + 1}"
         onclick="openModal('${ev.id}')"
         style="--event-color:${ev.color}">
      <div class="event-card-icon">${ev.icon}</div>
      <div class="event-card-body">
        <div class="event-card-category">${ev.category}</div>
        <h3 class="event-card-title">${ev.title}</h3>
        <div class="event-card-odia">${ev.titleOdia}</div>
        <div class="event-card-time">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          ${ev.time}
        </div>
        <p class="event-card-desc">${ev.description}</p>
      </div>
      <div class="event-card-footer">
        <span class="event-card-tag">${ev.date}</span>
        <span class="event-card-arrow">Details →</span>
      </div>
    </div>
  `).join('');
}

/* ================================================================
   RENDER LEADERBOARD
   ================================================================ */
function renderLeaderboard() {
  const tableBody = document.getElementById('lb-tbody');
  if (!tableBody) return;

  const maxScore = Math.max(...leaderboardData.map(d => d.score));
  tableBody.innerHTML = leaderboardData.map(item => {
    const badgeClass = item.rank === 1 ? 'gold' : item.rank === 2 ? 'silver' : item.rank === 3 ? 'bronze' : '';
    const pct = Math.round((item.score / maxScore) * 100);
    const rowClass = item.rank <= 3 ? ' top-rank' : '';
    return `
      <tr class="${rowClass}">
        <td><span class="rank-badge ${badgeClass}${item.rank === 1 ? ' rank-pulse' : ''}">${item.rank}</span></td>
        <td><strong>${item.name}</strong></td>
        <td>
          <div class="score-bar-wrap">
            <div class="score-bar">
              <div class="score-bar-fill" style="width:0%" data-width="${pct}%"></div>
            </div>
            <span class="score-num">${item.score}</span>
          </div>
        </td>
      </tr>`;
  }).join('');

  // Animate score bars
  setTimeout(() => {
    document.querySelectorAll('.score-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 200);
}

function renderPodium() {
  const podium = document.getElementById('podium');
  if (!podium) return;

  // Reorder: 2nd, 1st, 3rd for visual podium
  const order = [leaderboardData[1], leaderboardData[0], leaderboardData[2]];
  const heights = ['55px', '90px', '44px'];
  const medals = ['🥈', '🥇', '🥉'];
  const initials = name => name.split('_').map((n, i) => i === 0 ? n[0].toUpperCase() : '').join('');

  podium.innerHTML = order.map((item, i) => `
    <div class="podium-item animate-on-scroll animate-delay-${i + 1}">
      <div class="podium-avatar">${initials(item.name)}</div>
      <div class="podium-name">${item.name}</div>
      <div class="podium-score">${item.score} pts</div>
      <div class="podium-block" style="height:${heights[i]}">${medals[i]}</div>
    </div>
  `).join('');
}

/* ================================================================
   SCROLL ANIMATIONS
   ================================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ================================================================
   COUNTER ANIMATION
   ================================================================ */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  });
}

/* ================================================================
   INIT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initModal();
  renderEventCards('events-grid');
  renderEventCards('events-preview-grid', 4);
  renderLeaderboard();
  renderPodium();

  // Init scroll animations after a small delay to avoid flash
  setTimeout(initScrollAnimations, 100);

  // Counter observer (for stats strip)
  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObs.disconnect();
        }
      });
    }, { threshold: 0.5 });
    counterObs.observe(statsSection);
  }
});
