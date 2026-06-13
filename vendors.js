(function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get('market') || 'balogun';
  const market = MM_DATA.markets[marketId];

  if (!market) { location.href = 'index.html'; return; }

  const stalls = MM_DATA.stalls[marketId] || [];
  const listingBase = `product-listing.html?market=${market.id}&category=${market.defaultCategory}`;

  // ── helpers ─────────────────────────────────────────────────────────────────
  function stars(r) {
    const full = Math.round(r);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  }

  function fmt(n) {
    return typeof n === 'number' ? n.toLocaleString() : n;
  }

  function set(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function badgeClass(badge) {
    if (badge === 'Top Seller') return 'badge-top';
    if (badge === 'New') return 'badge-new';
    return 'badge-verified';
  }

  // ── page meta ────────────────────────────────────────────────────────────────
  document.title = `${market.name} — Vendors — Market Mirror`;

  const bcLink = document.getElementById('bc-market-link');
  if (bcLink) {
    bcLink.textContent = market.name;
    bcLink.href = `market-page.html?market=${market.id}`;
  }

  set('vh-market-label', market.name);
  set('vh-sub', `${stalls.length} active stalls · ${market.specialty}`);

  // ── market switcher ──────────────────────────────────────────────────────────
  const switcher = document.getElementById('market-switcher');
  if (switcher) {
    switcher.innerHTML = Object.keys(MM_DATA.stalls).map(id => {
      const m = MM_DATA.markets[id];
      if (!m) return '';
      return `<option value="${id}"${id === marketId ? ' selected' : ''}>${m.name}</option>`;
    }).join('');
    switcher.addEventListener('change', () => {
      location.href = `vendors.html?market=${switcher.value}`;
    });
  }

  const browseBtn = document.getElementById('vh-browse-btn');
  if (browseBtn) browseBtn.href = listingBase;

  // ── stats bar ────────────────────────────────────────────────────────────────
  set('stat-vendors', `${market.vendors}<span>+</span>`);
  set('stat-products', `${market.products}<span>+</span>`);
  set('stat-rating', `${market.rating}<span>★</span>`);
  set('stat-specialty', market.specialty.split(',')[0]);

  // ── CTA strip ────────────────────────────────────────────────────────────────
  set('cta-market-name', market.name);
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) ctaBtn.href = listingBase;

  set('currently-viewing', `${market.name} — Vendors`);

  // ── render vendor cards ──────────────────────────────────────────────────────
  function renderVendors(list) {
    const grid = document.getElementById('vendors-grid');
    const empty = document.getElementById('empty-state');
    const countEl = document.getElementById('vf-count');

    if (!grid) return;

    if (!list.length) {
      grid.style.display = 'none';
      empty.style.display = 'block';
      if (countEl) countEl.textContent = '0 vendors';
      return;
    }

    grid.style.display = 'grid';
    empty.style.display = 'none';
    if (countEl) countEl.textContent = `${list.length} vendor${list.length !== 1 ? 's' : ''}`;

    grid.innerHTML = list.map((s, i) => {
      const originalIdx = stalls.indexOf(s);
      const cls = `sa-${(originalIdx % 6) + 1}`;
      const bc = badgeClass(s.badge);
      const starStr = stars(s.rating);
      const vendorUrl = `vendor.html?market=${market.id}&name=${encodeURIComponent(s.name)}`;
      const marketUrl = `market-map.html?market=${market.id}`;
      return `
      <div class="vendor-card" onclick="location.href='${vendorUrl}'">
        <div class="vc-top">
          <div class="vc-avatar ${cls}">${s.avatar}</div>
          <span class="vc-badge ${bc}">${s.badge}</span>
        </div>
        <div class="vc-body">
          <div class="vc-name">${s.name}</div>
          <div class="vc-owner">${s.owner} &middot; ${s.location}</div>
          <div class="vc-tags">
            ${s.tags.map(t => `<span class="vc-tag">${t}</span>`).join('')}
          </div>
          <div class="vc-stats">
            <div class="vc-rating">
              <span class="vc-stars">${starStr}</span>
              <span class="vc-score">${s.rating}</span>
              <span class="vc-reviews">(${fmt(s.reviews)})</span>
            </div>
            <div class="vc-products"><strong>${s.products}</strong> products</div>
          </div>
        </div>
        <div class="vc-footer">
          <a href="${vendorUrl}" class="vc-browse-btn" onclick="event.stopPropagation()">View vendor &rarr;</a>
          <a href="${marketUrl}" class="vc-map-btn" title="View on map" onclick="event.stopPropagation()">
            <i class="ph ph-map-trifold" style="font-size:18px;"></i>
          </a>
        </div>
      </div>`;
    }).join('');
  }

  // ── filter + sort state ──────────────────────────────────────────────────────
  let activeFilter = 'all';
  let activeSort = 'rating';
  let searchQuery = '';

  function applyFilters() {
    let list = stalls.slice();

    if (activeFilter !== 'all') {
      list = list.filter(s => s.badge === activeFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.owner.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q) ||
        s.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (activeSort === 'reviews') list.sort((a, b) => b.reviews - a.reviews);
    else if (activeSort === 'products') list.sort((a, b) => b.products - a.products);

    renderVendors(list);
  }

  // ── filter chips ─────────────────────────────────────────────────────────────
  document.querySelectorAll('.vf-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.vf-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  // ── sort select ───────────────────────────────────────────────────────────────
  const sortEl = document.getElementById('vendor-sort');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      activeSort = sortEl.value;
      applyFilters();
    });
  }

  // ── search input ──────────────────────────────────────────────────────────────
  const searchEl = document.getElementById('vendor-search');
  if (searchEl) {
    searchEl.addEventListener('input', () => {
      searchQuery = searchEl.value.trim();
      applyFilters();
    });
  }

  // ── clear search button ───────────────────────────────────────────────────────
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchQuery = '';
      activeFilter = 'all';
      if (searchEl) searchEl.value = '';
      document.querySelectorAll('.vf-chip').forEach(c => c.classList.remove('active'));
      const allChip = document.querySelector('.vf-chip[data-filter="all"]');
      if (allChip) allChip.classList.add('active');
      applyFilters();
    });
  }

  // ── initial render ────────────────────────────────────────────────────────────
  applyFilters();

})();
