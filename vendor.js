(function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get('market') || 'balogun';
  const vendorName = decodeURIComponent(params.get('name') || '');

  const market = MM_DATA.markets[marketId];
  if (!market) { location.href = 'index.html'; return; }

  const stalls = MM_DATA.stalls[marketId] || [];
  const stall = stalls.find(s => s.name === vendorName) || stalls[0];
  if (!stall) { location.href = `vendors.html?market=${marketId}`; return; }

  const stallIdx = stalls.indexOf(stall);
  const avatarCls = `sa-${(stallIdx % 6) + 1}`;
  const listingKey = `${market.id}-${market.defaultCategory}`;
  const listing = MM_DATA.listings[listingKey];
  const listingBase = `product-listing.html?market=${market.id}&category=${market.defaultCategory}`;
  const vendorsUrl = `vendors.html?market=${market.id}`;
  const vendorUrl = name => `vendor.html?market=${market.id}&name=${encodeURIComponent(name)}`;

  // ── helpers ──────────────────────────────────────────────────────────────────
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

  // ── page meta ─────────────────────────────────────────────────────────────────
  document.title = `${stall.name} — ${market.name} · Market Mirror`;
  set('currently-viewing', `${stall.name} · ${market.name}`);

  // ── nav vendors link ──────────────────────────────────────────────────────────
  const navVendors = document.getElementById('nav-vendors-link');
  if (navVendors) navVendors.href = vendorsUrl;

  // ── breadcrumb ────────────────────────────────────────────────────────────────
  const bcMarket = document.getElementById('bc-market-link');
  if (bcMarket) { bcMarket.textContent = market.name; bcMarket.href = `market-page.html?market=${market.id}`; }

  const bcVendors = document.getElementById('bc-vendors-link');
  if (bcVendors) { bcVendors.textContent = 'Vendors'; bcVendors.href = vendorsUrl; }

  set('bc-vendor-name', stall.name);

  // ── vendor hero ───────────────────────────────────────────────────────────────
  const avatarEl = document.getElementById('vh-avatar');
  if (avatarEl) {
    avatarEl.textContent = stall.avatar;
    avatarEl.className = `vh-avatar ${avatarCls}`;
    const glow = avatarEl.nextElementSibling;
    if (glow) glow.className = `vh-avatar-glow ${avatarCls}`;
  }

  set('vh-live-text', market.isOpen ? 'Stall open now' : 'Currently closed');

  const badgeEl = document.getElementById('vh-badge');
  if (badgeEl) {
    badgeEl.textContent = stall.badge;
    badgeEl.className = `vh-badge ${badgeClass(stall.badge)}`;
  }

  set('vh-market-tag', market.name);
  set('vh-name', stall.name);
  set('vh-owner', `${stall.owner} &middot; ${stall.location}`);

  set('vh-tags', stall.tags.map(t => `<span class="vh-tag">${t}</span>`).join(''));

  set('vh-stat-rating', `${stall.rating}<span>★</span>`);
  set('vh-stat-reviews', fmt(stall.reviews));
  set('vh-stat-products', fmt(stall.products));

  const vhMarketBtn = document.getElementById('vh-market-btn');
  if (vhMarketBtn) vhMarketBtn.href = `market-page.html?market=${market.id}`;

  const vhAllVendorsBtn = document.getElementById('vh-all-vendors-btn');
  if (vhAllVendorsBtn) vhAllVendorsBtn.href = vendorsUrl;

  const vhMsgBtn = document.getElementById('vh-msg-btn');
  if (vhMsgBtn && window.mmChatSlug) {
    const vid = mmChatSlug(stall.name + '-' + market.id);
    vhMsgBtn.addEventListener('click', function () {
      if (window.mmOpenChat) mmOpenChat(vid, { name: stall.name, avatar: stall.avatar, marketName: market.name, marketId: market.id, sub: stall.location });
    });
  }

  // ── products section header ───────────────────────────────────────────────────
  set('vp-label', `${market.name} · ${market.specialty}`);
  set('vp-title-name', stall.name);

  const vpAllBtn = document.getElementById('vp-all-btn');
  if (vpAllBtn) vpAllBtn.href = listingBase;

  // ── find this vendor's products ───────────────────────────────────────────────
  let vendorItems = [];

  if (listing) {
    const nameLower = stall.name.toLowerCase();

    // include the featured product if this vendor owns it
    if (listing.featured && listing.featured.vendor.toLowerCase().includes(nameLower)) {
      vendorItems.push({
        _idx: 'featured',
        image: listing.featured.image,
        badge: 'Featured',
        badgeClass: 'badge-hot',
        name: listing.featured.name,
        vendor: listing.featured.vendor,
        sub: `${listing.featured.location} · Min. ${listing.featured.minOrder}`,
        rating: stall.rating,
        reviews: stall.reviews,
        price: listing.featured.price,
        oldPrice: null,
        unit: listing.featured.unit,
      });
    }

    // filter regular items by vendor name match
    const matched = listing.items
      .map((item, idx) => ({ ...item, _idx: idx }))
      .filter(item => item.vendor.toLowerCase().includes(nameLower));

    vendorItems = vendorItems.concat(matched);
  }

  // ── render product grid ───────────────────────────────────────────────────────
  const grid = document.getElementById('vp-grid');
  const emptyEl = document.getElementById('vp-empty');
  const countEl = document.getElementById('vp-count');

  const detailBase = `product-detail.html?market=${market.id}&category=${market.defaultCategory}`;

  function renderProductCard(item) {
    const starStr = stars(item.rating);
    const badgHtml = item.badge
      ? `<span class="vp-badge ${item.badgeClass}">${item.badge}</span>`
      : '<span></span>';
    const oldPriceHtml = item.oldPrice
      ? `<span class="vp-price-old">${item.oldPrice}</span>`
      : '';
    const wid = window.mmWishlistSlug ? mmWishlistSlug(item.name + '-' + item.vendor.replace(/ ✓/g, '')) : '';
    return `
    <a href="${detailBase}&product=${item._idx}" class="vp-card">
      <div class="vp-img">
        <img src="${item.image}" alt="${item.name}" class="vp-photo" loading="lazy"/>
        <div class="vp-badge-row">
          ${badgHtml}
          <button class="vp-wishlist"
            data-wid="${wid}"
            data-wname="${item.name}"
            data-wvendor="${item.vendor.replace(/ ✓/g, '')}"
            data-wprice="${item.price}"
            data-wpricenum="${item.price.replace(/[^\d]/g, '')}"
            data-wunit="${item.unit}"
            data-wmarket="${market.id}"
            data-wmarketname="${market.name}"
            data-wimage="${item.image}"
            data-wsub="${item.sub}"
            data-wrating="${item.rating}"
            data-wreviews="${item.reviews}"
            onclick="event.preventDefault();event.stopPropagation();mmToggleWishlist(this)"><i class="ph-bold ph-heart"></i></button>
        </div>
      </div>
      <div class="vp-body">
        <div class="vp-vendor-name">${item.vendor} <span class="verified">&#10003;</span></div>
        <div class="vp-name">${item.name}</div>
        <div class="vp-sub">${item.sub}</div>
        <div class="vp-rating">
          <span class="vp-stars">${starStr}</span>
          <span class="vp-score">${item.rating}</span>
          <span class="vp-reviews-count">(${fmt(item.reviews)})</span>
        </div>
        <div class="vp-footer">
          <div class="vp-price-wrap">
            <div class="vp-price">${item.price}${oldPriceHtml}</div>
            <div class="vp-unit">per ${item.unit}</div>
          </div>
          <button class="vp-add-btn" onclick="event.preventDefault()">Add</button>
        </div>
      </div>
    </a>`;
  }

  if (grid) {
    if (vendorItems.length > 0) {
      // show vendor-specific products
      grid.innerHTML = vendorItems.map(renderProductCard).join('');
      if (countEl) countEl.textContent = `${vendorItems.length} product${vendorItems.length !== 1 ? 's' : ''} listed`;
      if (emptyEl) emptyEl.style.display = 'none';
    } else if (listing && listing.items.length > 0) {
      // fallback: show all market products with a note
      const fallback = listing.items.map((item, idx) => ({ ...item, _idx: idx }));
      grid.innerHTML = fallback.map(renderProductCard).join('');
      if (countEl) countEl.textContent = '';
      if (emptyEl) {
        emptyEl.style.display = 'block';
        const noteEl = document.getElementById('vp-empty-note');
        if (noteEl) noteEl.textContent = `Showing top products from ${market.name}`;
      }
    }
    if (window.MM_WISHLIST) MM_WISHLIST.updatePageButtons();
  }

  // ── CTA strip ─────────────────────────────────────────────────────────────────
  set('cta-market-name', `${market.name}?`);
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) ctaBtn.href = listingBase;

  // ── other vendors ─────────────────────────────────────────────────────────────
  set('ov-market-name', market.name);

  const ovAllLink = document.getElementById('ov-all-link');
  if (ovAllLink) ovAllLink.href = vendorsUrl;

  const ovGrid = document.getElementById('ov-grid');
  const others = stalls.filter(s => s.name !== stall.name).slice(0, 3);

  if (ovGrid && others.length) {
    ovGrid.innerHTML = others.map((s, i) => {
      const origIdx = stalls.indexOf(s);
      const cls = `sa-${(origIdx % 6) + 1}`;
      const bc = badgeClass(s.badge);
      const starStr = stars(s.rating);
      return `
      <a href="${vendorUrl(s.name)}" class="ov-card">
        <div class="ov-card-top">
          <div class="ov-avatar ${cls}">${s.avatar}</div>
          <span class="ov-badge ${bc}">${s.badge}</span>
        </div>
        <div class="ov-name">${s.name}</div>
        <div class="ov-owner">${s.owner} &middot; ${s.location}</div>
        <div class="ov-footer">
          <div class="ov-rating">
            <span class="ov-stars">${starStr}</span>
            <span class="ov-score">${s.rating}</span>
          </div>
          <div class="ov-products"><strong>${fmt(s.products)}</strong> products</div>
        </div>
      </a>`;
    }).join('');
  } else if (ovGrid) {
    document.getElementById('other-vendors-section').style.display = 'none';
  }

})();
