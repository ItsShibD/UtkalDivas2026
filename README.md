# Utkal Divas 2026 — NISER Bhubaneswar

A static event website celebrating **Utkal Divas 2026** at the National Institute of Science Education and Research (NISER), Bhubaneswar.

---

## 🌐 Live Site

Once uploaded to GitHub Pages, the site will be available at:
```
https://<your-username>.github.io/<repo-name>/
```

---

## 📁 Project Structure

```
utkal-divas-2026/
├── index.html          → Homepage
├── events.html         → All events with detail modal
├── leaderboard.html    → Quiz leaderboard
├── guests.html         → Invited guests & speakers
├── css/
│   └── style.css       → Complete stylesheet
├── js/
│   └── main.js         → Event data, modal logic, animations
├── assets/
│   └── wheel.svg       → Konark wheel decorative element
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Option 1 — Upload via GitHub Web UI
1. Create a new repository on GitHub (e.g. `utkal-divas-2026`)
2. Go to the repository → **Add file** → **Upload files**
3. Upload all files **maintaining the folder structure**
4. Go to **Settings → Pages**
5. Under **Source**, select `main` branch and `/ (root)` folder
6. Click **Save** — your site will be live in ~60 seconds!

### Option 2 — Using Git CLI
```bash
git init
git add .
git commit -m "Initial commit: Utkal Divas 2026 website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
Then enable GitHub Pages in repository Settings.

---

## ✏️ Customisation Guide

### Updating Events
Edit the `eventsData` array in `js/main.js`:
```js
const eventsData = [
  {
    id: 'event-id',
    title: 'Event Name',
    titleOdia: 'ଓଡ଼ିଆ ନାମ',
    category: 'Category',
    icon: '🎨',
    date: 'April 1, 2026',
    time: '10:00 AM – 12:00 PM',
    venue: 'Venue, NISER',
    registration: 'Registration info',
    description: 'Event description...',
    rules: ['Rule 1', 'Rule 2']
  },
  // ...
];
```

### Updating Leaderboard
Edit the `leaderboardData` array in `js/main.js`:
```js
const leaderboardData = [
  { rank: 1, name: 'Full Name', dept: 'Department', score: 95, time: '18:32' },
  // ...
];
```

### Updating Guest Cards
Edit `guests.html` directly — find the guest card sections and update the emoji, tag, and description text.

### Colours
All colours are defined as CSS variables in `css/style.css` under `:root`. Main ones:
- `--saffron`: `#c8560a` — primary accent
- `--gold`: `#c49b0c` — gold accent
- `--cream`: `#fdf6ed` — background

---

## 🎨 Design Notes

- **Typography**: Cormorant Garamond (display) + DM Sans (body) + Noto Serif Odia (Odia text)
- **Colour palette**: Inspired by Odishan temple art — saffron, gold, maroon on warm cream
- **Motif**: Konark Sun Temple wheel used as decorative watermark
- **Responsive**: Mobile-first, works on all screen sizes
- **Performance**: No frameworks, no build step — pure HTML/CSS/JS
- **Accessibility**: Semantic HTML, ARIA labels, keyboard-navigable modal

---

## 📋 Features

- ✅ Responsive design (mobile + desktop)
- ✅ Smooth scroll animations
- ✅ Event detail modal (click any event card)
- ✅ Filter events by category
- ✅ Live-style quiz leaderboard with score bars
- ✅ Podium display for top 3 ranks
- ✅ Guest page with "Revealing Soon" cards
- ✅ Konark wheel decorative elements
- ✅ Odia script text support
- ✅ Navbar with mobile hamburger menu
- ✅ Counter animations for stats

---

**Cultural Committee, NISER Bhubaneswar · 2026**
