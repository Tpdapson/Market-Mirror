(function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get('market') || 'balogun';
  const categoryId = params.get('category') || null;

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

  setAttr('bc-market-link', 'href', `market-page.html?market=${market.id}`);
  set('bc-market-link', market.name);
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
          <div class="fcheck${sc.checked ? ' checked' : ''}"></div>
          <span class="filter-option-label">${sc.label}</span>
        </div>
        <span class="filter-option-count">${sc.count}</span>
      </div>`).join('');
  }

  // ── toolbar summary ────────────────────────────────────────────────────────
  set('pl-active-filters-summary', listing.subcategories
    ? listing.subcategories.filter(s => s.checked)
        .map(s => `<span class="active-filter-tag">${s.label} <span>&#10005;</span></span>`).join('')
    : '');
  set('pl-products-count', `<strong>${listing.resultCount.toLocaleString()}</strong> results`);

  // ── product grid ───────────────────────────────────────────────────────────
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const detailBase = `product-detail.html?market=${market.id}&category=${resolvedCat}`;
  const f = listing.featured;

  // resolve "View stall" vendor URL from the featured vendor name
  const featuredStall = (MM_DATA.stalls[market.id] || [])
    .find(s => f.vendor.toLowerCase().includes(s.name.toLowerCase()));
  const viewStallUrl = featuredStall
    ? `vendor.html?market=${market.id}&name=${encodeURIComponent(featuredStall.name)}`
    : `vendors.html?market=${market.id}`;

  const wideCard = `
    <a href="${detailBase}&product=featured" class="product-card-wide" style="text-decoration:none;color:inherit;cursor:pointer;">
      <div class="pcw-img">
        <img src="${f.image}" alt="${f.name}" class="pcw-photo"/>
      </div>
      <div class="pcw-body">
        <div>
          <div class="pcw-label">${f.label}</div>
          <div class="pcw-name">${f.name}</div>
          <div class="pcw-desc">${f.desc}</div>
          <div class="pcw-meta">
            <div class="pcw-meta-item"><span class="pcw-meta-label">Vendor</span><span class="pcw-meta-val">${f.vendor}</span></div>
            <div class="pcw-meta-item"><span class="pcw-meta-label">Location</span><span class="pcw-meta-val">${f.location}</span></div>
            <div class="pcw-meta-item"><span class="pcw-meta-label">Rating</span><span class="pcw-meta-val">${f.ratingStr}</span></div>
            <div class="pcw-meta-item"><span class="pcw-meta-label">Min. Order</span><span class="pcw-meta-val">${f.minOrder}</span></div>
          </div>
        </div>
        <div class="pcw-footer">
          <div>
            <div class="pcw-price">${f.price} <span class="pcw-price-unit">/ ${f.unit}</span></div>
          </div>
          <button class="pc-add" style="padding:12px 28px;font-size:13px"
            data-product-name="${f.name}"
            data-product-vendor="${f.vendor.replace(/ ✓/g,'')}"
            data-product-price="${f.price}"
            data-product-pricenum="${f.price.replace(/[^\d]/g,'')}"
            data-product-unit="${f.unit}"
            data-market-id="${market.id}"
            data-market-name="${market.name}"
            data-label-default="Add to cart →"
            onclick="event.preventDefault();event.stopPropagation();mmAddToCart(this)">Add to cart &rarr;</button>
          <a href="${viewStallUrl}" class="btn btn-outline" style="padding:11px 20px;font-size:13px;" onclick="event.stopPropagation()">View stall &rarr;</a>
        </div>
      </div>
    </a>`;

  function buildItemCard(p, idx) {
    const wid = window.mmWishlistSlug ? mmWishlistSlug(p.name + '-' + p.vendor.replace(/ ✓/g, '')) : '';
    const cleanVendor = p.vendor.replace(/ ✓/g, '');
    const vid = window.mmChatSlug ? mmChatSlug(cleanVendor + '-' + market.id) : '';
    const stallInfo = (MM_DATA.stalls[market.id] || []).find(s => s.name === cleanVendor);
    const vAvatar = stallInfo ? stallInfo.avatar : '🏪';
    return `
    <a href="${detailBase}&product=${idx}" class="product-card" data-name="${p.name.toLowerCase()} ${p.vendor.toLowerCase()}" style="text-decoration:none;color:inherit;cursor:pointer;">
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

  grid.innerHTML = wideCard + listing.items.map(buildItemCard).join('');
  if (window.MM_WISHLIST) MM_WISHLIST.updatePageButtons();

  // ── interactive sidebar filters ────────────────────────────────────────────
  const catFiltersEl = document.getElementById('pl-cat-filters');
  if (catFiltersEl && listing.subcategories) {
    function getKeywords(label) {
      return label.toLowerCase().replace(/[\/&]/g, ' ').split(/\s+/).filter(w => w.length > 2);
    }

    function refreshGrid() {
      const checked = [...catFiltersEl.querySelectorAll('.fcheck.checked')]
        .map(el => el.closest('.filter-option').querySelector('.filter-option-label').textContent);

      const cards = grid.querySelectorAll('.product-card');
      let visible = 0;

      cards.forEach(card => {
        if (!checked.length) {
          card.style.display = '';
          visible++;
          return;
        }
        const haystack = card.dataset.name || '';
        const matches = checked.some(label =>
          getKeywords(label).some(kw => haystack.includes(kw))
        );
        card.style.display = matches ? '' : 'none';
        if (matches) visible++;
      });

      const countEl = document.getElementById('pl-products-count');
      if (countEl) countEl.innerHTML = `<strong>${visible}</strong> results`;

      const summaryEl = document.getElementById('pl-active-filters-summary');
      if (summaryEl) {
        summaryEl.innerHTML = checked.map(l =>
          `<span class="active-filter-tag">${l} <span onclick="this.closest('.active-filter-tag').dispatchEvent(new CustomEvent('remove',{bubbles:true}))">&#10005;</span></span>`
        ).join('');
      }
    }

    catFiltersEl.addEventListener('click', e => {
      const opt = e.target.closest('.filter-option');
      if (!opt) return;
      const check = opt.querySelector('.fcheck');
      if (check) {
        check.classList.toggle('checked');
        refreshGrid();
      }
    });

    // clear a tag from the active-filters summary
    document.getElementById('pl-active-filters-summary')?.addEventListener('remove', e => {
      const label = e.target.closest('.active-filter-tag')?.textContent.replace('✕','').trim();
      if (!label) return;
      const opts = [...catFiltersEl.querySelectorAll('.filter-option')];
      const match = opts.find(o => o.querySelector('.filter-option-label')?.textContent === label);
      match?.querySelector('.fcheck')?.classList.remove('checked');
      refreshGrid();
    });
  }

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
