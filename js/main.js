/* ================================================================
   UTKAL DIVAS 2026 — NISER
   Main JavaScript
   ================================================================ */

/* ---- Events Data ---- */
const eventsData = [
  {
    id: 'kabita-path',
    title: 'Kabita Path',
    titleOdia: 'କବିତା ପାଠ',
    category: 'Literary',
    icon: '📜',
    color: '#c8560a',
    date: 'April 1, 2026',
    time: '10:00 AM – 11:30 AM',
    venue: 'Seminar Hall, NISER',
    registration: 'Open to all NISER students & faculty',
    description: 'An open poetry recitation session celebrating the rich tradition of Odia literature. Participants are invited to read original or classical Odia poems, connecting the campus community with the literary heritage of Odisha.',
    rules: [
      'Each participant will be allotted 3–5 minutes.',
      'Poems must be in Odia (original or classical works).',
      'Pre-registration is required; walk-ins may be accommodated based on availability.',
      'Participants are encouraged to briefly introduce their poem before reciting.',
      'A panel of judges will evaluate based on expression, diction, and impact.'
    ]
  },
  {
    id: 'chitra',
    title: 'Chitra Pratiyogita',
    titleOdia: 'ଚିତ୍ର ପ୍ରତିଯୋଗିତା',
    category: 'Arts',
    icon: '🎨',
    color: '#8b0000',
    date: 'April 1, 2026',
    time: '11:00 AM – 1:00 PM',
    venue: 'Multipurpose Hall, NISER',
    registration: 'Open to all NISER students',
    description: 'A painting and sketching competition themed on Odisha — its culture, landscapes, festivals, and heritage. Participants may draw inspiration from Pattachitra, temple art, nature, or daily life in Odisha.',
    rules: [
      'Theme: "Odisha — Heritage, Culture, and Nature".',
      'Materials (canvas, paper, brushes) will be provided; participants may bring their own.',
      'Time limit: 2 hours.',
      'Digital art is not permitted; only traditional media.',
      'Entries will be judged on creativity, technique, and relevance to the theme.'
    ]
  },
  {
    id: 'online-quiz',
    title: 'Online Quiz',
    titleOdia: 'ଅନ୍ଲାଇନ୍ କ୍ୱିଜ୍',
    category: 'Knowledge',
    icon: '🧠',
    color: '#c49b0c',
    date: 'April 1, 2026',
    time: '2:00 PM – 3:00 PM',
    venue: 'Computer Centre, NISER / Online',
    registration: 'Register via the event portal',
    description: 'A timed online quiz testing your knowledge of Odia history, culture, literature, geography, personalities, and current affairs related to Odisha. Results will be reflected live on the Quiz Leaderboard.',
    rules: [
      'Quiz will consist of 40 multiple-choice questions.',
      'Time limit: 30 minutes.',
      'No external resources (books, internet) permitted.',
      'Each correct answer carries 2 marks; no negative marking.',
      'In case of a tie, the participant who finished in less time will be ranked higher.',
      'Results will be declared on the Leaderboard page within 30 minutes.'
    ]
  },
  {
    id: 'jhoti',
    title: 'Jhoti Competition',
    titleOdia: 'ଝୋଟି ପ୍ରତିଯୋଗିତା',
    category: 'Traditional Art',
    icon: '🌸',
    color: '#d4700a',
    date: 'April 1, 2026',
    time: '3:00 PM – 4:00 PM',
    venue: 'Open Courtyard, NISER',
    registration: 'Open to all; teams of 1–2 allowed',
    description: 'Jhoti Chita is a traditional Odia art form — intricate patterns drawn on the ground or walls using rice paste. This competition invites participants to celebrate this ancient folk art form in all its geometric and symbolic beauty.',
    rules: [
      'Each participant/team will be given a 3×3 ft designated area.',
      'Materials (rice paste, chalk) will be provided.',
      'Time limit: 45 minutes.',
      'Designs may be traditional or contemporary inspired by Odia motifs.',
      'Judging criteria: precision, creativity, and visual appeal.'
    ]
  },
  {
    id: 'rangoli',
    title: 'Rangoli Competition',
    titleOdia: 'ରଙ୍ଗୋଲି ପ୍ରତିଯୋଗିତା',
    category: 'Traditional Art',
    icon: '🎆',
    color: '#a020a0',
    date: 'April 1, 2026',
    time: '3:30 PM – 5:00 PM',
    venue: 'Main Entrance, NISER',
    registration: 'Teams of 2–4 members',
    description: 'Create vibrant and elaborate rangoli patterns inspired by Odishan festivals, temples, and nature. This is a team event celebrating colour, creativity, and cultural expression.',
    rules: [
      'Teams may consist of 2–4 participants.',
      'Coloured powder, rice, and flowers will be provided.',
      'Each team will be allocated a 4×4 ft area.',
      'Time limit: 90 minutes.',
      'Theme: "Festivals and Celebrations of Odisha".'
    ]
  },
  {
    id: 'odissi',
    title: 'Odissi Performance',
    titleOdia: 'ଓଡ଼ିଶୀ ନୃତ୍ୟ',
    category: 'Performing Arts',
    icon: '💃',
    color: '#8b0000',
    date: 'April 1, 2026',
    time: '6:00 PM – 7:00 PM',
    venue: 'Open-Air Theatre, NISER',
    registration: 'Invitation / pre-selected performers',
    description: 'A captivating performance of Odissi — one of the eight classical dance forms of India, originating from the temples of Odisha. Selected performers from NISER's cultural society will present this treasured classical art.',
    rules: [
      'This is a curated performance, not a competition.',
      'Duration per performer: 8–12 minutes.',
      'Costumes and music arrangements to be coordinated with the event team.',
      'Audience participation and photography are encouraged.'
    ]
  },
  {
    id: 'cultural',
    title: 'Cultural Programme',
    titleOdia: 'ସାଂସ୍କୃତିକ ଅନୁଷ୍ଠାନ',
    category: 'Cultural',
    icon: '🎭',
    color: '#1a6b4a',
    date: 'April 1, 2026',
    time: '7:00 PM – 9:00 PM',
    venue: 'Open-Air Stage, NISER',
    registration: 'Open audience',
    description: 'The grand finale of Utkal Divas 2026 — a vibrant cultural programme featuring folk music, Sambalpuri dance, skit performances, and a special musical evening celebrating the diverse cultural traditions of Odisha. All are welcome!',
    rules: [
      'Open to all students, faculty, and guests.',
      'Participating groups must register with the Cultural Committee by March 25.',
      'Each group is allotted 10–15 minutes of stage time.',
      'Performances must be themed around Odisha's culture and heritage.',
      'A light dinner will be served post-programme.'
    ]
  }
];

/* ---- Leaderboard Data ---- */
const leaderboardData = [
  { rank: 1, name: 'Priya Panigrahi',   dept: 'Physics',   score: 95, time: '18:32' },
  { rank: 2, name: 'Rajesh Mohapatra',  dept: 'Chemistry', score: 92, time: '19:10' },
  { rank: 3, name: 'Sasmita Sahoo',     dept: 'Biology',   score: 90, time: '20:05' },
  { rank: 4, name: 'Aditya Kumar Dash', dept: 'Mathematics', score: 86, time: '21:15' },
  { rank: 5, name: 'Sunita Nayak',      dept: 'Earth Science', score: 84, time: '22:40' },
  { rank: 6, name: 'Biswa Ranjan Jena', dept: 'Physics',   score: 82, time: '23:05' },
  { rank: 7, name: 'Lipika Parida',     dept: 'Chemistry', score: 80, time: '23:50' },
  { rank: 8, name: 'Debashis Behera',   dept: 'Biology',   score: 78, time: '24:20' },
  { rank: 9, name: 'Ananya Senapati',   dept: 'Mathematics', score: 76, time: '25:00' },
  { rank: 10, name: 'Santosh Pradhan',  dept: 'Physics',   score: 74, time: '26:10' },
  { rank: 11, name: 'Mitali Das',       dept: 'Chemistry', score: 72, time: '26:55' },
  { rank: 12, name: 'Rahul Mishra',     dept: 'Earth Science', score: 70, time: '27:30' },
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

  const maxScore = leaderboardData[0].score;
  tableBody.innerHTML = leaderboardData.map(item => {
    const badgeClass = item.rank === 1 ? 'gold' : item.rank === 2 ? 'silver' : item.rank === 3 ? 'bronze' : '';
    const pct = Math.round((item.score / maxScore) * 100);
    const rowClass = item.rank <= 3 ? ' top-rank' : '';
    return `
      <tr class="${rowClass}">
        <td><span class="rank-badge ${badgeClass}${item.rank === 1 ? ' rank-pulse' : ''}">${item.rank}</span></td>
        <td><strong>${item.name}</strong></td>
        <td>${item.dept}</td>
        <td>
          <div class="score-bar-wrap">
            <div class="score-bar">
              <div class="score-bar-fill" style="width:0%" data-width="${pct}%"></div>
            </div>
            <span class="score-num">${item.score}</span>
          </div>
        </td>
        <td>${item.time}</td>
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
  const initials = name => name.split(' ').map(n => n[0]).join('');

  podium.innerHTML = order.map((item, i) => `
    <div class="podium-item animate-on-scroll animate-delay-${i + 1}">
      <div class="podium-avatar">${initials(item.name)}</div>
      <div class="podium-name">${item.name}</div>
      <div class="podium-dept">${item.dept}</div>
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
