/* ==========================================================
   Explore Bicol – pages.js (page-specific features)
   Dispatches on <body data-page="...">
   ========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const B = BICOL;
const SKELETON_MS = 1000; // skeleton screen duration on page load

/* ---------- Shared: province filter buttons ---------- */
function filterButtons(container, onChange) {
  container.classList.add('province-filter');
  container.innerHTML = '<span class="filter-indicator" aria-hidden="true"></span><button class="btn-pill active" data-p="all">All</button>' +
    B.provinces.map(p => `<button class="btn-pill" data-p="${p.id}">${p.name}</button>`).join('');
  const indicator = $('.filter-indicator', container);
  const moveIndicator = () => {
    const active = $('.btn-pill.active', container);
    if (!active) return;
    indicator.style.width = active.offsetWidth + 'px';
    indicator.style.height = active.offsetHeight + 'px';
    indicator.style.transform = `translate(${active.offsetLeft}px, ${active.offsetTop}px)`;
  };
  requestAnimationFrame(moveIndicator);
  window.addEventListener('resize', moveIndicator);
  container.addEventListener('click', e => {
    const b = e.target.closest('[data-p]'); if (!b) return;
    $$('.btn-pill', container).forEach(x => x.classList.toggle('active', x === b));
    moveIndicator();
    b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    onChange(b.dataset.p);
  });
}

/* ---------- Shared: card gallery with filter + modal ---------- */
function gallery(type) {
  const items = B[type], grid = $('#grid'), count = $('#count');
  let cur = 'all';
  grid.innerHTML = Site.skeleton(6);
  const draw = () => {
    const list = items.filter(i => cur === 'all' || i.province === cur);
    grid.innerHTML = list.map(i => Site.card(i, type)).join('') || '<p class="text-muted">Nothing here yet.</p>';
    count.textContent = `Showing ${list.length} ${list.length === 1 ? 'result' : 'results'}`;
    Site.observe();
  };
  filterButtons($('#filters'), p => {
    cur = p; Site.spinner.show('Loading ' + type + '…');
    setTimeout(() => { draw(); Site.spinner.hide(); }, 450);
  });
  const open = el => { const it = items.find(i => i.id === el.dataset.openId); if (it) Site.openModal(it); };
  grid.addEventListener('click', e => { const button = e.target.closest('[data-open-id]'); if (button) open(button); });
  setTimeout(() => {
    draw();
    const id = new URLSearchParams(location.search).get('open');
    const it = items.find(i => i.id === id); if (it) Site.openModal(it);
  }, SKELETON_MS);
}

/* ---------- Vanilla canvas bar chart (animated) ---------- */
function barChart(canvas, labels) {
  const ctx = canvas.getContext('2d');
  let from = labels.map(() => 0), to = labels.map(() => 0), shown = from.slice(), t0 = 0, raf = 0;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  function draw() {
    const r = canvas.getBoundingClientRect(), d = window.devicePixelRatio || 1;
    if (canvas.width !== Math.round(r.width * d)) { canvas.width = r.width * d; canvas.height = r.height * d; }
    ctx.setTransform(d, 0, 0, d, 0, 0);
    const W = r.width, H = r.height, pad = { l: 34, r: 10, t: 16, b: 48 };
    ctx.clearRect(0, 0, W, H);
    const rawMax = Math.max(3, ...to), roughStep = rawMax / 5;
    const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
    const normalizedStep = roughStep / magnitude;
    const step = (normalizedStep <= 1 ? 1 : normalizedStep <= 2 ? 2 : normalizedStep <= 5 ? 5 : 10) * magnitude;
    const max = Math.ceil((rawMax * 1.15) / step) * step, ph = H - pad.t - pad.b, pw = W - pad.l - pad.r;
    ctx.font = '12px Nunito, sans-serif'; ctx.fillStyle = css('--muted'); ctx.strokeStyle = css('--line');
    ctx.textAlign = 'right';
    for (let v = 0; v <= max; v += step) {
      const y = pad.t + ph - (v / max) * ph;
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
      ctx.fillText(v, pad.l - 6, y + 4);
    }
    const bw = pw / labels.length;
    labels.forEach((lb, i) => {
      const h = (shown[i] / max) * ph, x = pad.l + i * bw + bw * .2, w = bw * .6, y = pad.t + ph - h;
      const g = ctx.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, css('--coral')); g.addColorStop(1, css('--teal'));
      ctx.fillStyle = g; ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(x, y, w, Math.max(h, 0), 8) : ctx.rect(x, y, w, h);
      ctx.fill();
      ctx.fillStyle = css('--ink'); ctx.textAlign = 'center'; ctx.font = 'bold 13px Nunito, sans-serif';
      ctx.fillText(Math.round(shown[i]), x + w / 2, y - 5);
      ctx.font = '11px Nunito, sans-serif'; ctx.fillStyle = css('--muted');
      const words = lb.split(' ');
      words.forEach((wd, k) => ctx.fillText(wd, x + w / 2, H - pad.b + 16 + k * 13));
    });
  }
  function frame(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / 700, 1), e = 1 - Math.pow(1 - p, 3);
    shown = from.map((f, i) => f + (to[i] - f) * e);
    draw();
    if (p < 1) raf = requestAnimationFrame(frame);
  }
  window.addEventListener('resize', draw);
  document.addEventListener('themechange', draw);
  return {
    set(values) { cancelAnimationFrame(raf); from = shown.slice(); to = values; t0 = 0; raf = requestAnimationFrame(frame); }
  };
}

/* ==========================================================
   HOME
   ========================================================== */
function initHome() {
  /* Province quick-link cards with favorite hearts */
  const pc = $('#provinceCards');
  pc.innerHTML = Site.skeleton(6, 'col-6 col-lg-4');
  setTimeout(() => {
    pc.innerHTML = B.provinces.map(Site.provinceCard).join('');
    Site.observe();
  }, SKELETON_MS);

  /* Carousel: autoplay, prev/next, indicators, pause on hover */
  const featureImages = {
    'Mayon Volcano': 'images/hero/carousel-mayon-volcano.jpg',
    'Calaguas Islands': 'images/hero/carousel-calaguas-islands.jpg',
    'Caramoan Islands': 'images/hero/carousel-caramoan-islands.jpg',
    'Puraran Beach': 'images/hero/carousel-puraran-beach.jpg',
    'Butanding Festival': 'images/hero/carousel-donsol-whale-shark.jpg'
  };
  const featured = [
    B.spots.find(i => i.name === 'Mayon Volcano'),
    B.beaches.find(i => i.name === 'Calaguas Islands'),
    B.beaches.find(i => i.name === 'Caramoan Islands'),
    B.beaches.find(i => i.name === 'Puraran Beach'),
    B.festivals.find(i => i.name === 'Butanding Festival')
  ].filter(Boolean).map(item => ({ ...item, image: featureImages[item.name] }));
  const track = $('#bcTrack'), dots = $('#bcDots'); let idx = 0, timer;
  track.innerHTML = featured.map(f => `
    <div class="bc-slide">${Site.img(f.image, f.name)}
      <div class="bc-caption"><span class="badge-prov">${B.provName(f.province)}</span>
        <h3 class="mt-2">${f.name}</h3><p>${f.description}</p>
        <button class="btn btn-coral btn-sm" data-slide-id="${f.id}">Learn more</button></div></div>`).join('');
  dots.innerHTML = featured.map((_, i) => `<button class="bc-dot" aria-label="Go to slide ${i + 1}" data-i="${i}"></button>`).join('');
  const show = n => {
    idx = (n + featured.length) % featured.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    $$('.bc-dot', dots).forEach((d, i) => d.classList.toggle('active', i === idx));
  };
  const start = () => { stop(); timer = setInterval(() => show(idx + 1), 4500); };
  const stop = () => clearInterval(timer);
  $('#bcPrev').onclick = () => { show(idx - 1); start(); };
  $('#bcNext').onclick = () => { show(idx + 1); start(); };
  dots.addEventListener('click', e => { const d = e.target.closest('[data-i]'); if (d) { show(+d.dataset.i); start(); } });
  const car = $('#bcCarousel'); car.addEventListener('mouseenter', stop); car.addEventListener('mouseleave', start);
  track.addEventListener('click', e => {
    const b = e.target.closest('[data-slide-id]'); if (!b) return;
    Site.openModal(featured.find(f => f.id === b.dataset.slideId));
  });
  show(0); start();

  /* Animated stats on scroll */
  const stats = [
    ['Provinces', B.provinces.length, 'bi-map'], ['Beaches', B.beaches.length, 'bi-umbrella'],
    ['Tourist spots', B.spots.length, 'bi-camera'], ['Festivals', B.festivals.length, 'bi-balloon-heart'],
    ['Famous foods', B.foods.length, 'bi-cup-hot'],
    ['History & culture', B.history.length, 'bi-hourglass-split']
  ];
  const max = Math.max(...stats.map(s => s[1]));
  $('#stats').innerHTML = stats.map(([l, v, ic], i) => `
    <div class="stat-row"><div class="d-flex justify-content-between mb-1"><strong><i class="bi ${ic}"></i> ${l}</strong><span data-count="${v}">0</span></div>
    <div class="progress" role="progressbar" aria-label="${l}"><div class="progress-bar ${i % 2 ? 'coral' : ''}" data-w="${Math.max(v / max * 100, 12)}" style="width:0"></div></div></div>`).join('');
  new IntersectionObserver((en, ob) => en.forEach(e => {
    if (!e.isIntersecting) return; ob.unobserve(e.target);
    $$('.progress-bar', e.target).forEach(b => b.style.width = b.dataset.w + '%');
    $$('[data-count]', e.target).forEach(c => {
      const to = +c.dataset.count, t0 = performance.now();
      (function tick(t) { const p = Math.min((t - t0) / 1400, 1); c.textContent = Math.round(to * p); if (p < 1) requestAnimationFrame(tick); })(t0);
    });
  }), { threshold: .3 }).observe($('#stats'));

  /* Chart: destinations per province, filtered by category */
  const labels = B.provinces.map(p => p.name);
  const chart = barChart($('#destChart'), labels);
  const countBy = cat => B.provinces.map(p => cat === 'all'
    ? ['beaches', 'spots', 'festivals', 'foods', 'history'].reduce((s, k) => s + B[k].filter(i => i.province === p.id).length, 0)
    : B[cat].filter(i => i.province === p.id).length);
  const sel = $('#chartCategory');
  sel.addEventListener('change', () => {
    Site.spinner.show('Updating chart…');
    setTimeout(() => { chart.set(countBy(sel.value)); Site.spinner.hide(); }, 350);
  });
  new IntersectionObserver((en, ob) => { if (en[0].isIntersecting) { chart.set(countBy('all')); ob.disconnect(); } }, { threshold: .3 }).observe($('#destChart'));

  /* Bicol Explorer Progress (checklist saved in localStorage) */
  const ex = $('#explorerList');
  let visited = []; try { visited = JSON.parse(localStorage.getItem('bicolVisited')) || []; } catch (e) {}
  ex.innerHTML = B.provinces.map(p => `
    <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="v-${p.id}" value="${p.id}" ${visited.includes(p.id) ? 'checked' : ''}>
    <label class="form-check-label" for="v-${p.id}">${p.name}</label></div>`).join('');
  const bar = $('#explorerBar'), label = $('#explorerPct');
  const upd = () => {
    const v = $$('input:checked', ex).map(i => i.value), pct = Math.round(v.length / B.provinces.length * 100);
    bar.style.width = pct + '%'; label.textContent = pct + '%'; bar.parentElement.setAttribute('aria-valuenow', pct);
    $('#explorerMsg').textContent = pct === 100 ? 'Congratulations, Master Bicol Explorer!' : pct ? 'Great start! Keep exploring.' : 'Tick the provinces you have visited.';
    try { localStorage.setItem('bicolVisited', JSON.stringify(v)); } catch (e) {}
  };
  ex.addEventListener('change', upd); upd();
}

/* ==========================================================
   SAVED PLACES
   ========================================================== */
function initSaved() {
  const grid = $('#savedGrid'), count = $('#savedCountText');
  const types = ['beaches', 'spots', 'festivals', 'foods'];
  const render = () => {
    const keys = new Set(Site.favs.get());
    const provinces = B.provinces.filter(p => keys.has(Site.favoriteKey('province', p.id)));
    const destinations = types.flatMap(type => B[type]
      .filter(item => keys.has(Site.favoriteKey(type, item.id)))
      .map(item => ({ item, type })));
    const total = provinces.length + destinations.length;
    count.textContent = `${total} saved ${total === 1 ? 'place' : 'places'}`;
    if (!total) {
      grid.innerHTML = `<div class="col-12"><div class="empty-saved text-center p-5">
        <i class="bi bi-heart display-4 text-muted" aria-hidden="true"></i>
        <h2 class="h4 mt-3">Your saved places will show up here</h2>
        <p class="text-muted">Tap a heart on any province or destination to keep it for later.</p>
        <a class="btn btn-coral" href="beaches.html">Explore destinations</a>
      </div></div>`;
      return;
    }
    grid.innerHTML = [
      ...provinces.map(Site.provinceCard),
      ...destinations.map(({ item, type }) => Site.card(item, type))
    ].join('');
    Site.observe();
  };
  grid.addEventListener('click', e => {
    const button = e.target.closest('[data-open-id]');
    if (!button) return;
    const item = types.flatMap(type => B[type]).find(entry => entry.id === button.dataset.openId);
    if (item) Site.openModal(item);
  });
  document.addEventListener('savedplacesrefresh', render);
  render();
}

/* ==========================================================
   FESTIVALS (accordion)
   ========================================================== */
function initFestivals() {
  const box = $('#festList'); let cur = 'all';
  box.innerHTML = '<div class="row g-4">' + Site.skeleton(3, 'col-12') + '</div>';
  const draw = () => {
    const list = B.festivals.filter(f => cur === 'all' || f.province === cur);
    box.innerHTML = '<div class="accordion" id="festAcc">' + list.map((f, i) => `
      <div class="accordion-item reveal" id="${f.id}">
        <h2 class="accordion-header"><button class="accordion-button ${i ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#c-${f.id}" aria-expanded="${!i}">
          <span>${f.name}<small class="d-block text-muted fw-normal" style="font-family:var(--body)">${B.provName(f.province)}${f.location ? ` · ${f.location}` : ''}</small></span></button></h2>
        <div id="c-${f.id}" class="accordion-collapse collapse ${i ? '' : 'show'}" data-bs-parent="#festAcc">
          <div class="accordion-body"><div class="row g-4 align-items-center">
            <div class="col-md-4">${Site.img(f.image, f.imageAlt, 'fest-img')}</div>
            <div class="col-md-8"><p class="mb-1"><strong><i class="bi bi-geo-alt-fill" aria-hidden="true"></i> Location:</strong> ${f.location || 'Not specified in the source'}</p>
              <p class="mb-0">${f.description}</p></div>
          </div></div></div></div>`).join('') + '</div>';
    Site.observe();
    const open = new URLSearchParams(location.search).get('open');
    if (open && $('#c-' + open)) {
      $$('.accordion-collapse.show').forEach(c => c.classList.remove('show'));
      $('#c-' + open).classList.add('show');
      $('#' + open).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  filterButtons($('#filters'), p => { cur = p; Site.spinner.show('Loading festivals…'); setTimeout(() => { draw(); Site.spinner.hide(); }, 450); });
  setTimeout(draw, SKELETON_MS);
}

/* ==========================================================
   FOOD (cards + ranking chart)
   ========================================================== */
function initFood() {
  gallery('foods');
  const rank = $('#rankList'), sort = $('#rankProvince');
  sort.innerHTML = '<option value="all">All provinces</option>' + B.provinces.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  const draw = () => {
    const list = B.provinces.filter(p => sort.value === 'all' || p.id === sort.value)
      .map(p => ({ province: p, count: B.foods.filter(food => food.province === p.id).length }))
      .sort((a, b) => b.count - a.count);
    const max = Math.max(1, ...list.map(entry => entry.count));
    rank.innerHTML = list.map((entry, i) => `
      <div class="rank-row"><span class="rank-num">#${i + 1}</span>
        <span><strong>${entry.province.name}</strong><br><small class="text-muted">${entry.count} ${entry.count === 1 ? 'item' : 'items'} in the instructor source</small></span>
        <div class="rank-bar"><div class="rank-fill" data-w="${Math.round(entry.count / max * 100)}"></div></div><span class="fw-bold">${entry.count}</span></div>`).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => $$('.rank-fill', rank).forEach(b => b.style.width = b.dataset.w + '%')));
  };
  draw();
  sort.addEventListener('change', () => { Site.spinner.show('Updating food counts…'); setTimeout(() => { draw(); Site.spinner.hide(); }, 400); });
}

/* ==========================================================
   HISTORY (province tabs + source-based timeline)
   ========================================================== */
function initHistory() {
  const box = $('#histBox');
  box.innerHTML = '<div class="row g-4">' + Site.skeleton(3, 'col-md-4') + '</div>';
  setTimeout(() => {
    const historyCards = p => {
      return B.history.filter(item => item.province === p.id);
    };
    box.innerHTML = `
      <ul class="nav nav-pills" id="histTabs" role="tablist">${B.provinces.map((p, i) => `
        <li class="nav-item" role="presentation"><button class="nav-link ${i ? '' : 'active'}" id="t-${p.id}" data-bs-toggle="pill" data-bs-target="#h-${p.id}" type="button" role="tab" aria-controls="h-${p.id}" aria-selected="${!i}">${p.name}</button></li>`).join('')}</ul>
      <div class="tab-content">${B.provinces.map((p, i) => `
        <div class="tab-pane fade ${i ? '' : 'show active'}" id="h-${p.id}" role="tabpanel" aria-labelledby="t-${p.id}">
          <div class="row g-4"><div class="col-lg-5"><div class="panel">
            ${Site.img(p.image, `${p.name} province landscape`, 'w-100 rounded-4 mb-3')}
            <h2 class="h4">${p.name}</h2><p class="text-muted mb-0"><i class="bi bi-flag-fill text-danger"></i> Capital: ${p.capital}</p></div></div>
          <div class="col-lg-7"><div class="panel">
            <div class="accordion" id="ha-${p.id}">
              <div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#o-${p.id}" aria-expanded="true" aria-controls="o-${p.id}">Origin</button></h3>
                <div id="o-${p.id}" class="accordion-collapse collapse show" data-bs-parent="#ha-${p.id}"><div class="accordion-body">${p.history.origin}</div></div></div>
              <div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#n-${p.id}" aria-expanded="false" aria-controls="n-${p.id}">Origin of the province name</button></h3>
                <div id="n-${p.id}" class="accordion-collapse collapse" data-bs-parent="#ha-${p.id}"><div class="accordion-body">${p.history.name}</div></div></div>
            </div>
            <h3 class="h5 mt-4">History and culture from the source</h3>
            <div class="timeline">${historyCards(p).map(item => `<article class="tl-item">
              <div class="tl-year">${item.name}</div>
              <div>${item.location ? `<p class="small text-muted mb-1">${item.location}</p>` : ''}
                <p class="mb-2">${item.description}</p>${item.image ? Site.img(item.image, item.imageAlt, 'history-img') : ''}
              </div></article>`).join('') || '<p class="text-muted">No items listed in the instructor source.</p>'}</div>
          </div></div></div></div>`).join('')}</div>`;
    const fromHash = () => { const id = location.hash.slice(1), t = $('#t-' + id); if (t) bootstrap.Tab.getOrCreateInstance(t).show(); };
    fromHash(); window.addEventListener('hashchange', fromHash);
    $$('#histTabs [data-bs-toggle="pill"]').forEach(b => b.addEventListener('shown.bs.tab', () => history.replaceState(null, '', '#' + b.id.slice(2))));
  }, SKELETON_MS);
}

/* ==========================================================
   CONTACT (validation, date picker, dropzone, FAQ)
   ========================================================== */
function initContact() {
  const form = $('#tripForm');
  const prov = $('#province');
  prov.innerHTML = '<option value="">Choose a province</option>' + B.provinces.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  const qp = new URLSearchParams(location.search).get('province'); if (qp) prov.value = qp;

  /* Disable past dates: set min to today (local time) */
  const date = $('#tripDate');
  const todayStr = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  date.min = todayStr();

  const rules = {
    name: v => v.trim().length >= 2 && /^[\p{L}\s.'-]+$/u.test(v.trim()) ? '' : 'Please enter your full name (letters only, at least 2 characters).',
    email: v => !v.trim() ? 'Email is required.' : /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
    phone: v => !v.trim() ? 'Phone number is required.' : /^(\+63|0)9\d{9}$/.test(v.replace(/[\s-]/g, '')) ? '' : 'Use a PH mobile number, e.g. 09123456789 or +639123456789.',
    province: v => v ? '' : 'Please choose a province.',
    tripDate: v => !v ? 'Please pick your trip date.' : v < todayStr() ? 'Past dates are not allowed. Choose today or later.' : '',
    message: v => v.trim().length >= 20 ? '' : `Message must be at least 20 characters (${v.trim().length}/20).`
  };
  const check = el => {
    const msg = rules[el.name || el.id](el.value);
    el.classList.toggle('is-invalid', !!msg); el.classList.toggle('is-valid', !msg);
    const fb = el.parentElement.querySelector('.invalid-feedback'); if (fb) fb.textContent = msg;
    return !msg;
  };
  const fields = $$('[data-validate]', form);
  fields.forEach(el => { ['input', 'blur', 'change'].forEach(ev => el.addEventListener(ev, () => check(el))); });

  /* Drag-and-drop zone */
  const dz = $('#dropzone'), input = $('#fileInput'), list = $('#fileList'), err = $('#dzError');
  const ALLOWED = ['image/jpeg', 'image/png', 'application/pdf'], MAX = 2 * 1024 * 1024, MAXN = 5;
  let files = [];
  const size = b => b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  const renderFiles = () => {
    list.innerHTML = files.map((f, i) => `<div class="file-item"><span class="name"><i class="bi bi-file-earmark-check text-success"></i> ${f.name.replace(/</g, '&lt;')}</span>
      <span class="small text-muted">${size(f.size)}</span><button type="button" class="btn btn-sm btn-outline-danger" data-rm="${i}" aria-label="Remove ${f.name.replace(/"/g, '')}"><i class="bi bi-x-lg"></i></button></div>`).join('');
  };
  const add = fl => {
    const errs = [];
    [...fl].forEach(f => {
      if (!ALLOWED.includes(f.type)) errs.push(`"${f.name}": only JPG, PNG or PDF files are allowed.`);
      else if (f.size > MAX) errs.push(`"${f.name}": larger than 2 MB (${size(f.size)}).`);
      else if (files.length >= MAXN) errs.push(`Maximum of ${MAXN} files reached.`);
      else if (files.some(x => x.name === f.name && x.size === f.size)) errs.push(`"${f.name}" was already added.`);
      else files.push(f);
    });
    err.textContent = errs.join(' '); err.classList.toggle('d-none', !errs.length);
    renderFiles();
  };
  dz.addEventListener('click', () => input.click());
  dz.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
  input.addEventListener('change', () => { add(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('dragover'); }));
  dz.addEventListener('drop', e => add(e.dataTransfer.files));
  list.addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (b) { files.splice(+b.dataset.rm, 1); renderFiles(); err.classList.add('d-none'); } });

  /* Submit (no real sending) */
  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = fields.map(check).every(Boolean);
    const attachmentsValid = err.classList.contains('d-none');
    if (!ok || !attachmentsValid) {
      if (!attachmentsValid) dz.focus();
      else { const bad = $('.is-invalid', form); if (bad) bad.focus(); }
      return;
    }
    Site.spinner.show('Sending your inquiry…');
    setTimeout(() => {
      Site.spinner.hide();
      const name = $('#name').value.trim().split(' ')[0];
      form.reset(); files = []; renderFiles();
      fields.forEach(f => f.classList.remove('is-valid', 'is-invalid'));
      const ok = $('#successMsg'); ok.querySelector('span').textContent = `Salamat, ${name}! Your trip inquiry was received. We will get back to you soon.`;
      ok.classList.remove('d-none'); ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1300);
  });
}

/* ---------- Dispatch ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  ({
    home: initHome,
    beaches: () => gallery('beaches'),
    spots: () => gallery('spots'),
    festivals: initFestivals,
    food: initFood,
    history: initHistory,
    contact: initContact,
    saved: initSaved
  })[page]?.();
});
