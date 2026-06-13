(function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get('market') || 'balogun';
  const categoryId = params.get('category') || null;
  const PAGE_SIZE = 9;

  const market = MM_DATA.markets[marketId];
  if (!market) { location.href = 'index.html'; return; }

  // Resolve listing: try exact key, fall back to market's default category
  const resolvedCat = categoryId || market.defaultCategory;
  const listingKey = `${marketId}-${resolvedCat}`;
  const fallbackKey = `${marketId}-${market.defaultCategory}`;
  const listing = MM_DATA.listings[listingKey] || MM_DATA.listings[fallbackKey];

  if (!listing) { location.href = `market-page.html?market=${marketId}`; return; }

  // ── helpers ────────────────────────────────────────────────────────────────
  function set(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  function setAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  }
  function stars(r) {
    const full = Math.floor(r);
    return '&#9733;'.repeat(full) + '&#9734;'.repeat(5 - full);
  }

  // ── nav vendors link ──────────────────────────────────────────────────────
  const navVendors = document.getElementById('nav-vendors-link');
  if (navVendors) navVendors.href = `vendors.html?market=${market.id}`;

  // ── title + breadcrumbs ────────────────────────────────────────────────────
  document.title = `${listing.categoryLabel} — ${market.name} · Market Mirror`;

  set('bc-category', listing.categoryLabel);

  // ── page header ────────────────────────────────────────────────────────────
  set('pl-market-label', `${market.name} &middot; ${market.products}+ products`);
  set('pl-category-title', listing.title.replace(/&/, '&amp;').replace(' & ', ' &amp;<br/><span class="accent">') + (listing.title.includes(' & ') ? '</span>' : ''));
  set('pl-result-count', `<strong>${listing.resultCount.toLocaleString()}</strong> products in this category`);

  // ── sidebar category filters ───────────────────────────────────────────────
  const catFilters = document.getElementById('pl-cat-filters');
  if (catFilters && listing.subcategories) {
    catFilters.innerHTML = listing.subcategories.map(sc => `
      <div class="filter-option">
        <div class="filter-option-left">
          <div class="fcheck"></div>
          <span class="filter-option-label">${sc.label}</span>
        </div>
        <span class="filter-option-count">${sc.count}</span>
      </div>`).join('');
  }

  // ── count (no active filters by default) ──────────────────────────────────
  set('pl-products-count', `<strong>${listing.resultCount.toLocaleString()}</strong> results`);

  // ── product grid ───────────────────────────────────────────────────────────
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const detailBase = `product-detail.html?market=${market.id}&category=${resolvedCat}`;

  function buildItemCard(p, idx) {
    const wid = window.mmWishlistSlug ? mmWishlistSlug(p.name + '-' + p.vendor.replace(/ ✓/g, '')) : '';
    const cleanVendor = p.vendor.replace(/ ✓/g, '');
    const vid = window.mmChatSlug ? mmChatSlug(cleanVendor + '-' + market.id) : '';
    const stallInfo = (MM_DATA.stalls[market.id] || []).find(s => s.name === cleanVendor);
    const vAvatar = stallInfo ? stallInfo.avatar : '🏪';
    const vstatus = stallInfo ? stallInfo.badge.toLowerCase().replace(/\s+/g, '-') : (p.vendor.includes('✓') ? 'verified' : '');
    return `
    <a href="${detailBase}&product=${idx}" class="product-card"
      data-name="${p.name.toLowerCase()} ${p.vendor.toLowerCase()}"
      data-rating="${p.rating}"
      data-avail="instock"
      data-vstatus="${vstatus}"
      data-pricenum="${p.price.replace(/[^\d]/g,'')}"
      style="text-decoration:none;color:inherit;cursor:pointer;">
      <div class="pc-img">
        <img src="${p.image}" alt="${p.name}" class="pc-photo"/>
        <div class="pc-badge-row">
          ${p.badge ? `<span class="pc-badge ${p.badgeClass}">${p.badge}</span>` : '<span></span>'}
          <button class="pc-wishlist"
            data-wid="${wid}"
            data-wname="${p.name}"
            data-wvendor="${p.vendor.replace(/ ✓/g, '')}"
            data-wprice="${p.price}"
            data-wpricenum="${p.price.replace(/[^\d]/g, '')}"
            data-wunit="${p.unit}"
            data-wmarket="${market.id}"
            data-wmarketname="${market.name}"
            data-wimage="${p.image}"
            data-wsub="${p.sub}"
            data-wrating="${p.rating}"
            data-wreviews="${p.reviews}"
            onclick="event.preventDefault();event.stopPropagation();mmToggleWishlist(this)"><i class="ph-bold ph-heart"></i></button>
        </div>
      </div>
      <div class="pc-body">
        <div class="pc-vendor">${p.vendor}${vid ? `<button class="pc-msg-btn" data-vid="${vid}" data-vname="${cleanVendor}" data-vavatar="${vAvatar}" data-vmarket="${market.id}" data-vmarketname="${market.name}" data-vsub="" onclick="event.preventDefault();event.stopPropagation();mmChatFromBtn(this)" title="Message ${cleanVendor}"><i class="ph-bold ph-chat-circle-text"></i></button>` : ''}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-sub">${p.sub}</div>
        <div class="pc-rating">
          <span class="pc-stars">${stars(p.rating)}</span>
          <span class="pc-score">${p.rating}</span>
          <span class="pc-reviews">(${p.reviews})</span>
        </div>
        <div class="pc-footer">
          <div class="pc-price-wrap">
            <div class="pc-price">${p.price}${p.oldPrice ? ` <span class="pc-price-old">${p.oldPrice}</span>` : ''}</div>
            <div class="pc-unit">per ${p.unit}</div>
          </div>
          <button class="pc-add"
            data-product-name="${p.name}"
            data-product-vendor="${p.vendor.replace(/ ✓/g,'')}"
            data-product-price="${p.price}"
            data-product-pricenum="${p.price.replace(/[^\d]/g,'')}"
            data-product-unit="${p.unit}"
            data-market-id="${market.id}"
            data-market-name="${market.name}"
            data-label-default="Add"
            onclick="event.preventDefault();event.stopPropagation();mmAddToCart(this)">Add</button>
        </div>
      </div>
    </a>`;
  }

  // ── Pagination ─────────────────────────────────────────────────────────────
  const totalItems = listing.resultCount;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE);
  const currentPage = Math.min(totalPages, Math.max(1, parseInt(params.get('page') || '1', 10)));

  function pageUrl(p) {
    const ps = new URLSearchParams(params);
    if (p === 1) ps.delete('page'); else ps.set('page', p);
    return `product-listing.html?${ps.toString()}`;
  }

  function getPageNums(cur, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const show = new Set([1, total]);
    for (let i = Math.max(1, cur - 1); i <= Math.min(total, cur + 1); i++) show.add(i);
    const sorted = [...show].sort((a, b) => a - b);
    const result = [];
    let prev = 0;
    for (const n of sorted) {
      if (n - prev > 2) result.push('...');
      else if (n - prev === 2) result.push(prev + 1);
      result.push(n);
      prev = n;
    }
    return result;
  }

  function renderPagination() {
    const pag = document.querySelector('.pagination');
    if (!pag) return;
    const start = (currentPage - 1) * PAGE_SIZE + 1;
    const end = Math.min(currentPage * PAGE_SIZE, totalItems);
    const nums = getPageNums(currentPage, totalPages);
    const prevEl = currentPage <= 1
      ? `<div class="page-arrow disabled"><i class="ph-bold ph-arrow-left"></i> Prev</div>`
      : `<a href="${pageUrl(currentPage - 1)}" class="page-arrow"><i class="ph-bold ph-arrow-left"></i> Prev</a>`;
    const nextEl = currentPage >= totalPages
      ? `<div class="page-arrow disabled">Next <i class="ph-bold ph-arrow-right"></i></div>`
      : `<a href="${pageUrl(currentPage + 1)}" class="page-arrow">Next <i class="ph-bold ph-arrow-right"></i></a>`;
    const numEls = nums.map(n =>
      n === '...'
        ? `<div class="page-num dots">&#8230;</div>`
        : `<a href="${pageUrl(n)}" class="page-num${n === currentPage ? ' active' : ''}">${n}</a>`
    ).join('');
    pag.innerHTML = `
      <div class="pagination-info">Showing <strong>${start}–${end}</strong> of <strong>${totalItems.toLocaleString()}</strong> products</div>
      <div class="page-nums">${prevEl}${numEls}${nextEl}</div>
      <div class="pagination-info">Page <strong>${currentPage}</strong> of <strong>${totalPages.toLocaleString()}</strong></div>`;
  }

  // Build the items for the current page by cycling through listing.items
  const offset = (currentPage - 1) * PAGE_SIZE;
  const pageItems = Array.from({ length: Math.min(PAGE_SIZE, totalItems - offset) }, (_, i) => {
    const origIdx = (offset + i) % listing.items.length;
    return { item: listing.items[origIdx], origIdx };
  });

  grid.innerHTML = pageItems.map(({ item, origIdx }) => buildItemCard(item, origIdx)).join('');
  if (window.MM_WISHLIST) MM_WISHLIST.updatePageButtons();
  renderPagination();

  // ── Filter System ─────────────────────────────────────────────────────────
  const fs = { categories: new Set(), rating: null, availability: new Set(), vendorType: new Set(), priceMin: 0, priceMax: Infinity };

  function kwMatch(label, haystack) {
    return label.toLowerCase().replace(/[\/&]/g, ' ').split(/\s+/)
      .filter(w => w.length > 2).some(kw => haystack.includes(kw));
  }

  function applyFilters() {
    let visible = 0;
    grid.querySelectorAll('.product-card').forEach(card => {
      let show = true;
      if (fs.categories.size && !([...fs.categories].some(l => kwMatch(l, card.dataset.name || '')))) show = false;
      if (show && fs.rating !== null && parseFloat(card.dataset.rating || '5') < fs.rating) show = false;
      if (show && fs.availability.size && !fs.availability.has(card.dataset.avail || 'instock')) show = false;
      if (show && fs.vendorType.size) {
        const vs = card.dataset.vstatus || '';
        if (![...fs.vendorType].some(t => vs.includes(t))) show = false;
      }
      if (show && (fs.priceMin > 0 || fs.priceMax < Infinity)) {
        const p = parseInt(card.dataset.pricenum || '0', 10);
        if (p < fs.priceMin || p > fs.priceMax) show = false;
      }
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    const countEl = document.getElementById('pl-products-count');
    if (countEl) countEl.innerHTML = `<strong>${visible}</strong> results`;
    renderChips();
  }

  function renderChips() {
    const chips = [];
    fs.categories.forEach(l => chips.push({ label: l, type: 'category', key: l }));
    if (fs.rating !== null) chips.push({ label: `${fs.rating}★ & above`, type: 'rating', key: String(fs.rating) });
    fs.availability.forEach(k => {
      const lbl = { instock: 'In Stock', preorder: 'Pre-order', wholesale: 'Wholesale Only' }[k] || k;
      chips.push({ label: lbl, type: 'availability', key: k });
    });
    fs.vendorType.forEach(k => {
      const lbl = { verified: 'Verified Sellers', 'top-seller': 'Top Sellers', new: 'New Vendors' }[k] || k;
      chips.push({ label: lbl, type: 'vendorType', key: k });
    });
    if (fs.priceMin > 0 || fs.priceMax < Infinity) {
      const minLbl = fs.priceMin > 0 ? `₦${fs.priceMin.toLocaleString()}` : '₦0';
      const maxLbl = fs.priceMax < Infinity ? `₦${fs.priceMax.toLocaleString()}` : 'any';
      chips.push({ label: `${minLbl} – ${maxLbl}`, type: 'price', key: 'price' });
    }

    const clearBtn = document.getElementById('clear-filters-btn');
    const allChipEl = document.getElementById('all-filters-chip');
    const activeChipsEl = document.getElementById('pl-active-chips');

    if (activeChipsEl) activeChipsEl.innerHTML = chips.map(c =>
      `<button class="filter-chip active" data-ct="${c.type}" data-ck="${c.key}">${c.label} <span class="chip-x">&#10005;</span></button>`
    ).join('');

    const hasFilters = chips.length > 0;
    if (clearBtn) clearBtn.style.display = hasFilters ? '' : 'none';
    if (allChipEl) allChipEl.classList.toggle('active', !hasFilters);
  }

  function uncheckSidebar(type, key) {
    if (type === 'category') {
      catFilters?.querySelectorAll('.filter-option').forEach(opt => {
        if (opt.querySelector('.filter-option-label')?.textContent === key)
          opt.querySelector('.fcheck')?.classList.remove('checked');
      });
    } else if (type === 'rating') {
      document.querySelectorAll('#fg-rating .fcheck').forEach(fc => fc.classList.remove('checked'));
    } else if (type === 'availability') {
      document.querySelectorAll(`#fg-availability [data-avail="${key}"] .fcheck`).forEach(fc => fc.classList.remove('checked'));
    } else if (type === 'vendorType') {
      document.querySelectorAll(`#fg-vendor-type [data-vtype="${key}"] .fcheck`).forEach(fc => fc.classList.remove('checked'));
    }
  }

  function removeFilter(type, key) {
    if (type === 'category') fs.categories.delete(key);
    else if (type === 'rating') fs.rating = null;
    else if (type === 'availability') fs.availability.delete(key);
    else if (type === 'vendorType') fs.vendorType.delete(key);
    else if (type === 'price') {
      fs.priceMin = 0; fs.priceMax = Infinity;
      const inputs = document.querySelectorAll('.price-input');
      if (inputs[0]) inputs[0].value = '';
      if (inputs[1]) inputs[1].value = '';
    }
    uncheckSidebar(type, key);
    applyFilters();
  }

  // Category clicks
  catFilters?.addEventListener('click', e => {
    const opt = e.target.closest('.filter-option');
    if (!opt) return;
    const check = opt.querySelector('.fcheck');
    const label = opt.querySelector('.filter-option-label')?.textContent;
    if (!check || !label) return;
    check.classList.toggle('checked');
    check.classList.contains('checked') ? fs.categories.add(label) : fs.categories.delete(label);
    applyFilters();
  });

  // Rating clicks (radio-style)
  document.querySelectorAll('#fg-rating .rating-stars').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const val = parseFloat(row.dataset.rating);
      const isActive = row.querySelector('.fcheck')?.classList.contains('checked');
      document.querySelectorAll('#fg-rating .fcheck').forEach(fc => fc.classList.remove('checked'));
      if (!isActive) {
        row.querySelector('.fcheck')?.classList.add('checked');
        fs.rating = val;
      } else {
        fs.rating = null;
      }
      applyFilters();
    });
  });

  // Availability clicks
  document.querySelectorAll('#fg-availability .filter-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const key = opt.dataset.avail;
      const check = opt.querySelector('.fcheck');
      if (!check || !key) return;
      check.classList.toggle('checked');
      check.classList.contains('checked') ? fs.availability.add(key) : fs.availability.delete(key);
      applyFilters();
    });
  });

  // Vendor type clicks
  document.querySelectorAll('#fg-vendor-type .filter-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const key = opt.dataset.vtype;
      const check = opt.querySelector('.fcheck');
      if (!check || !key) return;
      check.classList.toggle('checked');
      check.classList.contains('checked') ? fs.vendorType.add(key) : fs.vendorType.delete(key);
      applyFilters();
    });
  });

  // Remove chip (both in toolbar and "filtered by" bar)
  function bindChipRemoval(el) {
    el?.addEventListener('click', e => {
      const removeBtn = e.target.closest('.chip-remove,.chip-x');
      if (!removeBtn) return;
      const chip = removeBtn.closest('[data-ct]');
      if (chip) removeFilter(chip.dataset.ct, chip.dataset.ck);
    });
  }
  bindChipRemoval(document.getElementById('pl-active-chips'));

  // Price range inputs
  const priceInputs = document.querySelectorAll('.price-input');
  function readPriceInputs() {
    const minVal = parseInt((priceInputs[0]?.value || '').replace(/[^\d]/g, ''), 10);
    const maxVal = parseInt((priceInputs[1]?.value || '').replace(/[^\d]/g, ''), 10);
    fs.priceMin = isNaN(minVal) ? 0 : minVal;
    fs.priceMax = isNaN(maxVal) ? Infinity : maxVal;
    applyFilters();
  }
  priceInputs.forEach(input => {
    input.addEventListener('change', readPriceInputs);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.target.blur(); readPriceInputs(); } });
  });

  // Clear all
  function resetAllFilters() {
    fs.categories.clear(); fs.rating = null; fs.availability.clear(); fs.vendorType.clear();
    fs.priceMin = 0; fs.priceMax = Infinity;
    document.querySelectorAll('.sidebar .fcheck.checked').forEach(fc => fc.classList.remove('checked'));
    priceInputs.forEach(i => i.value = '');
    applyFilters();
  }
  document.getElementById('clear-filters-btn')?.addEventListener('click', resetAllFilters);
  document.getElementById('all-filters-chip')?.addEventListener('click', resetAllFilters);

  // Mobile filter button
  document.getElementById('mobile-filter-btn')?.addEventListener('click', () => {
    document.getElementById('pl-sidebar')?.classList.add('mobile-open');
    document.body.classList.add('sidebar-open');
  });
  document.getElementById('sidebar-close-btn')?.querySelector('button')?.addEventListener('click', () => {
    document.getElementById('pl-sidebar')?.classList.remove('mobile-open');
    document.body.classList.remove('sidebar-open');
  });

  // ── footer ─────────────────────────────────────────────────────────────────
  set('currently-viewing', `${market.name} — ${listing.categoryLabel}`);

})();

// Global handler for Add-to-Cart buttons on this page
function mmAddToCart(btn) {
  if (!window.MM_CART) return;
  var d = btn.dataset;
  MM_CART.add({
    name:       d.productName,
    vendor:     d.productVendor,
    price:      d.productPrice,
    priceNum:   parseInt(d.productPricenum, 10) || 0,
    unit:       d.productUnit,
    emoji:      '🛍️',
    qty:        1,
    marketId:   d.marketId,
    marketName: d.marketName
  });
  var label = d.labelDefault || 'Add';
  btn.textContent = '✓ Added!';
  btn.style.background = '#16A34A';
  setTimeout(function () {
    btn.textContent = label;
    btn.style.background = '';
  }, 1500);
}
