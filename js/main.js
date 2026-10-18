/* ==========================================================
   Explore Bicol – main.js (shared on every page)
   Navbar + footer injection, theme toggle, live search,
   skeleton loader, spinner, modal, favorites, back-to-top,
   scroll reveal.
   ========================================================== */
const Site = {};

/* ---------- Helpers ---------- */
Site.img = (src, alt, cls = '') =>
  `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy" onerror="Site.fallback(this)">`;

Site.fallback = img => {
  img.onerror = null;
  const fallback = document.createElement('div');
  fallback.className = `image-fallback ${img.className}`;
  fallback.setAttribute('role', 'img');
  fallback.setAttribute('aria-label', img.alt);
  fallback.innerHTML = '<i class="bi bi-camera" aria-hidden="true"></i>';
  const label = document.createElement('span');
  label.textContent = img.alt;
  fallback.appendChild(label);
  img.replaceWith(fallback);
};

Site.initHeroVideo = () => {
  const video = document.querySelector('.hero-video');
  if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const segmentStart = 14;
  const segmentEnd = 83;
  const source = document.createElement('source');
  source.src = video.dataset.src;
  source.type = 'video/mp4';
  video.appendChild(source);
  video.addEventListener('playing', () => video.classList.add('is-playing'), { once: true });
  video.addEventListener('loadedmetadata', () => {
    video.currentTime = segmentStart;
    video.play().catch(() => {});
  }, { once: true });
  const restartSegment = () => {
    video.currentTime = segmentStart;
    video.play().catch(() => {});
  };
  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= segmentEnd) restartSegment();
  });
  video.addEventListener('ended', restartSegment);
  video.load();
};

Site.skeleton = (n = 6, col = 'col-sm-6 col-lg-4') =>
  Array.from({ length: n }, () =>
    `<div class="${col}"><div class="skeleton-card" aria-hidden="true">
      <div class="sk sk-img"></div>
      <div class="p-3"><div class="sk sk-line w-50"></div><div class="sk sk-line"></div><div class="sk sk-line w-75"></div></div>
    </div></div>`).join('');

/* Favorites (localStorage) */
Site.favs = {
  get() {
    try {
      const stored = JSON.parse(localStorage.getItem('bicolFavs'));
      return Array.isArray(stored) ? stored : [];
    } catch (e) { return []; }
  },
  toggle(id) {
    const list = this.get(); const i = list.indexOf(id);
    i > -1 ? list.splice(i, 1) : list.push(id);
    try { localStorage.setItem('bicolFavs', JSON.stringify(list)); } catch (e) {}
    document.dispatchEvent(new CustomEvent('favoriteschange'));
    return i === -1;
  }
};

Site.favoriteKey = (type, id) => type === 'province' ? id : `${type}:${id}`;

Site.updateFavoriteButton = button => {
  const saved = Site.favs.get().includes(button.dataset.fav);
  button.classList.toggle('active', saved);
  button.setAttribute('aria-pressed', String(saved));
  button.setAttribute('aria-label', `${saved ? 'Remove' : 'Save'} ${button.dataset.favLabel} ${saved ? 'from' : 'to'} saved places`);
  const icon = `<i class="bi ${saved ? 'bi-heart-fill' : 'bi-heart'}" aria-hidden="true"></i>`;
  button.innerHTML = button.id === 'modalFav'
    ? `${icon}<span class="ms-1">${saved ? 'Saved' : 'Save place'}</span>`
    : icon;
};

Site.initFavorites = () => {
  const refresh = () => {
    document.querySelectorAll('[data-fav]').forEach(Site.updateFavoriteButton);
    const count = document.getElementById('savedCount');
    if (count) {
      const total = Site.favs.get().length;
      count.textContent = total;
      count.closest('.btn-saved').setAttribute('aria-label', `Saved places, ${total} saved`);
    }
    document.dispatchEvent(new CustomEvent('savedplacesrefresh'));
  };
  document.addEventListener('click', e => {
    const button = e.target.closest('[data-fav]');
    if (!button) return;
    e.preventDefault();
    e.stopPropagation();
    Site.favs.toggle(button.dataset.fav);
  });
  document.addEventListener('favoriteschange', refresh);
  window.addEventListener('storage', e => {
    if (e.key === 'bicolFavs') refresh();
  });
  refresh();
};

/* Loading spinner overlay */
Site.spinner = {
  el: null,
  init() {
    this.el = document.createElement('div');
    this.el.className = 'spinner-overlay';
    this.el.setAttribute('role', 'status');
    this.el.innerHTML = '<div class="spinner-border" aria-hidden="true"></div><div id="spinnerMsg" class="fw-bold">Loading…</div>';
    document.body.appendChild(this.el);
  },
  show(msg = 'Loading…') { this.el.querySelector('#spinnerMsg').textContent = msg; this.el.classList.add('show'); },
  hide() { this.el.classList.remove('show'); }
};

/* Scroll reveal */
Site.observe = () => {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('visible')); return; }
  if (!Site._io) {
    Site._io = new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); Site._io.unobserve(en.target); }
    }), { threshold: .12 });
  }
  els.forEach(e => Site._io.observe(e));
};

/* ---------- Navbar & footer ---------- */
const NAV = [
  ['index.html', 'Home'], ['beaches.html', 'Beaches'], ['spots.html', 'Spots'],
  ['festivals.html', 'Festivals'], ['food.html', 'Food'], ['history.html', 'History'],
  ['contact.html', 'Plan Your Trip']
];

Site.buildChrome = () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = NAV.map(([href, label]) =>
    `<li class="nav-item"><a class="nav-link ${href === page ? 'active' : ''}" ${href === page ? 'aria-current="page"' : ''} href="${href}">${label}</a></li>`).join('');
  document.getElementById('site-header').outerHTML = `
  <header class="site-header sticky-top">
    <nav class="navbar navbar-expand-lg" aria-label="Main navigation">
      <div class="container">
        <a class="navbar-brand" href="index.html" aria-label="Explore Bicol home"><img class="brand-wordmark" src="images/explore-bicol-wordmark.svg" alt="Explore Bicol"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${links}</ul>
          <div class="nav-search me-lg-3 mb-2 mb-lg-0">
            <i class="bi bi-search search-icon"></i>
            <input id="navSearch" class="search-input form-control" type="search" placeholder="Search places, food, festivals…" autocomplete="off" aria-label="Search" aria-autocomplete="list" aria-controls="navSearchBox" aria-expanded="false">
            <div id="navSearchBox" class="search-box list-group" role="listbox"></div>
          </div>
          <a class="btn-saved me-lg-2 mb-2 mb-lg-0 ${page === 'saved.html' ? 'active' : ''}" href="saved.html" ${page === 'saved.html' ? 'aria-current="page"' : ''} aria-label="Saved places, 0 saved">
            <i class="bi bi-heart" aria-hidden="true"></i><span class="saved-label">Saved</span><span class="saved-count" id="savedCount">0</span>
          </a>
          <button id="themeToggle" class="btn-theme" type="button" aria-label="Toggle light or dark mode"><i class="bi bi-moon-stars-fill"></i></button>
        </div>
      </div>
    </nav>
  </header>`;

  const provLinks = BICOL.provinces.map(p => `<li><a href="history.html#${p.id}">${p.name}</a></li>`).join('');
  document.getElementById('site-footer').outerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <h5 class="brand"><img class="brand-wordmark" src="images/explore-bicol-wordmark.svg" alt="Explore Bicol"></h5>
          <p>Discover the Wonders of Region V. Explore the six provinces through their beaches, land attractions, festivals, food, and culture.</p>
        </div>
        <div class="col-6 col-lg-3"><h5>Explore</h5><ul class="list-unstyled">
          <li><a href="beaches.html">Beaches</a></li><li><a href="spots.html">Tourist Spots</a></li>
          <li><a href="festivals.html">Festivals</a></li><li><a href="food.html">Food</a></li>
          <li><a href="history.html">History</a></li><li><a href="saved.html">Saved places</a></li>
          <li><a href="contact.html">Plan Your Trip</a></li></ul></div>
        <div class="col-6 col-lg-5"><div class="row">
          <div class="col-lg-6"><h5>Provinces</h5><ul class="list-unstyled">${provLinks}</ul></div>
          <div class="col-lg-6"><h5>Project</h5><p class="small">IT ELEC 3 – Web Systems and Technologies<br>Midterm Project</p>
            <a href="images/PHOTO-CREDITS.txt">Photo credits</a></div>
        </div></div>
      </div>
      <hr class="border-secondary mt-4">
      <p class="small text-center mb-0">&copy; ${new Date().getFullYear()} Explore Bicol. Made for learning purposes.</p>
    </div>
  </footer>`;
};

/* ---------- Theme toggle ---------- */
Site.initTheme = () => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const paint = () => {
    const dark = root.getAttribute('data-bs-theme') === 'dark';
    btn.innerHTML = dark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
  };
  paint();
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    try { localStorage.setItem('bicolTheme', next); } catch (e) {}
    paint();
    document.dispatchEvent(new CustomEvent('themechange'));
  });
};

/* ---------- Live search / autocomplete ---------- */
Site.searchIndex = () => {
  const B = BICOL, items = [];
  B.provinces.forEach(p => items.push({ label: p.name, type: 'Province', sub: 'Capital: ' + p.capital, url: 'history.html#' + p.id }));
  B.beaches.forEach(i => items.push({ label: i.name, type: 'Beach', sub: B.provName(i.province), url: 'beaches.html?open=' + i.id }));
  B.spots.forEach(i => items.push({ label: i.name, type: 'Spot', sub: B.provName(i.province), url: 'spots.html?open=' + i.id }));
  B.festivals.forEach(i => items.push({ label: i.name, type: 'Festival', sub: B.provName(i.province), url: 'festivals.html?open=' + i.id }));
  B.foods.forEach(i => items.push({ label: i.name, type: 'Food', sub: B.provName(i.province), url: 'food.html?open=' + i.id }));
  return items;
};

Site.bindSearch = (input, box) => {
  if (!input || !box) return;
  const index = Site.searchIndex();
  let results = [], active = -1;
  const close = () => { box.classList.remove('show'); input.setAttribute('aria-expanded', 'false'); active = -1; };
  const paint = () => {
    box.innerHTML = results.map((r, i) =>
      `<button type="button" role="option" class="list-group-item list-group-item-action ${i === active ? 'active' : ''}" data-i="${i}">
        <span><strong>${r.label}</strong><br><small>${r.sub}</small></span><span class="search-type">${r.type}</span></button>`).join('')
      || '<div class="list-group-item">No matches found</div>';
    box.classList.add('show');
    input.setAttribute('aria-expanded', 'true');
  };
  const go = r => { if (r) location.href = r.url; };
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) return close();
    results = index.filter(r => (r.label + ' ' + r.type + ' ' + r.sub).toLowerCase().includes(q)).slice(0, 8);
    active = -1; paint();
  });
  input.addEventListener('keydown', e => {
    if (!box.classList.contains('show')) return;
    if (e.key === 'ArrowDown' && results.length) { e.preventDefault(); active = (active + 1) % results.length; paint(); }
    else if (e.key === 'ArrowUp' && results.length) { e.preventDefault(); active = (active - 1 + results.length) % results.length; paint(); }
    else if (e.key === 'Enter') { e.preventDefault(); go(results[active > -1 ? active : 0]); }
    else if (e.key === 'Escape') close();
  });
  box.addEventListener('mousedown', e => { const b = e.target.closest('[data-i]'); if (b) go(results[+b.dataset.i]); });
  document.addEventListener('click', e => { if (!input.contains(e.target) && !box.contains(e.target)) close(); });
};

/* ---------- Cards & modal ---------- */
Site.provinceCard = p => {
  const key = Site.favoriteKey('province', p.id);
  const saved = Site.favs.get().includes(key);
  return `
  <div class="col-6 col-lg-4 reveal">
    <article class="prov-card h-100 position-relative">
      <button class="heart-btn ${saved ? 'active' : ''}" data-fav="${key}" data-fav-label="${p.name}" aria-label="${saved ? 'Remove' : 'Save'} ${p.name} ${saved ? 'from' : 'to'} saved places" aria-pressed="${saved}"><i class="bi ${saved ? 'bi-heart-fill' : 'bi-heart'}" aria-hidden="true"></i></button>
      <a href="history.html#${p.id}">
        <div class="card-img">${Site.img(p.image, `${p.name} province landscape`)}</div>
        <div class="card-body p-3"><h3 class="h5 mb-1">${p.name}</h3>
          <div class="small text-muted mb-1">Capital: ${p.capital}</div>
          <p class="small mb-0 d-none d-md-block">${p.blurb}</p></div>
      </a>
    </article>
  </div>`;
};

Site.card = (item, type) => {
  const key = Site.favoriteKey(type, item.id);
  const saved = Site.favs.get().includes(key);
  return `
  <div class="col-sm-6 col-lg-4 reveal">
    <article class="card dest-card h-100">
      <div class="card-img">${Site.img(item.image, item.imageAlt)}
        <button class="heart-btn ${saved ? 'active' : ''}" data-fav="${key}" data-fav-label="${item.name}" aria-label="${saved ? 'Remove' : 'Save'} ${item.name} ${saved ? 'from' : 'to'} saved places" aria-pressed="${saved}"><i class="bi ${saved ? 'bi-heart-fill' : 'bi-heart'}" aria-hidden="true"></i></button>
      </div>
      <div class="card-body p-4">
        <span class="badge-prov">${BICOL.provName(item.province)}</span>
        <h3 class="mt-2">${item.name}</h3>
        <p class="text-muted small mb-2">${item.description.length > 105 ? item.description.slice(0, 105) + '…' : item.description}</p>
        ${item.location ? `<div class="card-loc"><i class="bi bi-geo-alt-fill" aria-hidden="true"></i> ${item.location}</div>` : ''}
        <button class="card-detail-link mt-3" type="button" data-open-id="${item.id}">View details</button>
      </div>
    </article>
  </div>`;
};

Site.visitNote = item => {
  const notes = {
    beaches: 'Dryer months are often preferred for beach trips. Check local weather, tide, and sea conditions before you go.',
    festivals: 'Festival dates can change each year. Confirm the current schedule with the local government before booking.',
    foods: 'Availability varies by town and season. Ask locally where the dish is prepared.',
    history: 'Opening hours and access can change. Check with the site or local tourism office before visiting.'
  };
  return notes[item.category] || 'Opening hours, access, and conditions can change. Check local advisories before you go.';
};

Site.buildModal = () => {
  const m = document.createElement('div');
  m.className = 'modal fade'; m.id = 'siteModal'; m.tabIndex = -1;
  m.setAttribute('aria-labelledby', 'modalTitle'); m.setAttribute('aria-hidden', 'true');
  m.innerHTML = `
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"><div class="modal-content">
    <div class="row g-0">
      <div class="col-md-6" id="modalImg"></div>
      <div class="col-md-6 p-4">
        <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
        <span class="badge-prov" id="modalProv"></span>
        <h2 class="h3 mt-2" id="modalTitle"></h2>
        <p id="modalDesc"></p>
        <ul class="list-unstyled small mb-3">
          <li class="mb-1"><i class="bi bi-geo-alt-fill text-danger" aria-hidden="true"></i> <span id="modalLoc"></span></li>
          <li><i class="bi bi-flag-fill text-info" aria-hidden="true"></i> Province capital: <span id="modalCap"></span></li>
        </ul>
        <div class="visit-note p-3 mb-3"><strong><i class="bi bi-info-circle" aria-hidden="true"></i> Before you go</strong><p class="small mb-0 mt-1" id="modalVisitNote"></p></div>
        <div class="d-flex flex-wrap gap-2">
          <a id="modalMap" class="btn btn-outline-primary" href="#" target="_blank" rel="noopener noreferrer"><i class="bi bi-map" aria-hidden="true"></i> Open map</a>
          <button id="modalFav" class="btn btn-outline-danger" type="button"><i class="bi bi-heart" aria-hidden="true"></i> Save place</button>
          <a id="modalPlan" class="btn btn-coral" href="contact.html">Plan a visit</a>
        </div>
      </div>
    </div>
  </div></div>`;
  document.body.appendChild(m);
  Site.modal = new bootstrap.Modal(m);
};

Site.openModal = item => {
  const prov = BICOL.provinces.find(p => p.id === item.province);
  if (!prov) return;
  document.getElementById('modalImg').innerHTML = Site.img(item.image, item.imageAlt, 'modal-img');
  document.getElementById('modalProv').textContent = prov.name;
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalDesc').textContent = item.description;
  document.getElementById('modalLoc').textContent = item.location || 'Location not specified in the source';
  document.getElementById('modalCap').textContent = prov.capital;
  document.getElementById('modalVisitNote').textContent = Site.visitNote(item);
  const mapQuery = [item.name, item.location, prov.name].filter(Boolean).join(', ');
  document.getElementById('modalMap').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  const fav = document.getElementById('modalFav');
  fav.dataset.fav = Site.favoriteKey(item.category || 'destination', item.id);
  fav.dataset.favLabel = item.name;
  Site.updateFavoriteButton(fav);
  document.getElementById('modalPlan').href = 'contact.html?province=' + prov.id;
  Site.modal.show();
};

/* ---------- Back to top ---------- */
Site.backToTop = () => {
  const b = document.createElement('button');
  b.className = 'back-top'; b.setAttribute('aria-label', 'Back to top');
  b.innerHTML = '<i class="bi bi-arrow-up"></i>';
  b.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(b);
  window.addEventListener('scroll', () => b.classList.toggle('show', window.scrollY > 400), { passive: true });
};

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  Site.buildChrome();
  Site.initHeroVideo();
  Site.initTheme();
  Site.initFavorites();
  Site.spinner.init();
  Site.buildModal();
  Site.backToTop();
  Site.bindSearch(document.getElementById('navSearch'), document.getElementById('navSearchBox'));
  Site.bindSearch(document.getElementById('heroSearch'), document.getElementById('heroSearchBox'));
  Site.observe();
});
