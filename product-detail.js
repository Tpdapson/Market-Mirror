(function () {
  const params   = new URLSearchParams(location.search);
  const marketId = params.get('market')   || 'balogun';
  const productP = params.get('product');          // 'featured' | number index
  const catId    = params.get('category') || null;

  const market   = MM_DATA.markets[marketId];
  if (!market) { location.href = 'index.html'; return; }

  const allStalls  = MM_DATA.stalls[marketId] || [];
  const listingKey = `${marketId}-${catId || market.defaultCategory}`;
  const listing    = MM_DATA.listings[listingKey] || MM_DATA.listings[`${marketId}-${market.defaultCategory}`];

  // Per-product detail lookup: falls back to market-level default
  const detailKey = (productP && productP !== 'featured') ? `${listingKey}-${productP}` : null;
  const details   = (detailKey && MM_DATA.productDetails[detailKey]) || MM_DATA.productDetails[marketId];
  if (!details) { location.href = 'index.html'; return; }

  // ── resolve product name / price from either featured card or listing item ─
  let productName, productPrice, productUnit, productVendor, productSub;
  let resolvedItem = null; // the actual listing item clicked (if any)
  const featured = MM_DATA.marketFeatured[marketId];

  if (!productP || productP === 'featured') {
    const lg = featured ? featured.large : {};
    productName   = lg.name   || market.name + ' Featured Product';
    productPrice  = lg.price  || '₦0';
    productUnit   = lg.unit   || 'unit';
    productVendor = lg.vendor || (allStalls[0] && allStalls[0].name) || '';
    productSub    = `${(allStalls[0] && allStalls[0].location) || ''} &middot; ${market.name}`;
  } else {
    const idx  = parseInt(productP, 10);
    resolvedItem  = (listing && listing.items && listing.items[idx]) || null;
    if (resolvedItem) {
      productName   = resolvedItem.name;
      productPrice  = resolvedItem.price;
      productUnit   = 'per ' + resolvedItem.unit;
      productVendor = resolvedItem.vendor.replace(' ✓', '');
      productSub    = `${resolvedItem.sub.split('·')[0].trim()} &middot; ${market.name}`;
    } else {
      productName   = featured && featured.large ? featured.large.name : market.name;
      productPrice  = featured && featured.large ? featured.large.price : '₦0';
      productUnit   = featured && featured.large ? featured.large.unit : 'unit';
      productVendor = (allStalls[0] && allStalls[0].name) || '';
      productSub    = `${(allStalls[0] && allStalls[0].location) || ''} &middot; ${market.name}`;
    }
  }

  // ── find the stall matching this product's vendor ─────────────────────────
  const stall = allStalls.find(s =>
    productVendor && productVendor.toLowerCase().includes(s.name.toLowerCase())
  ) || allStalls[0] || {};

  // ── helpers ────────────────────────────────────────────────────────────────
  function set(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }
  function setAttr(id, attr, val) { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); }
  function stars(r) { return '&#9733;'.repeat(Math.round(r)) + '&#9734;'.repeat(5 - Math.round(r)); }

  // ── title + breadcrumb ─────────────────────────────────────────────────────
  document.title = `${productName} — ${market.name} · Market Mirror`;
  setAttr('pd-bc-market', 'href', `market-page.html?market=${market.id}`);
  set('pd-bc-market', market.name);
  setAttr('pd-bc-category', 'href', `product-listing.html?market=${market.id}&category=${catId || market.defaultCategory}`);
  set('pd-bc-category', listing ? listing.categoryLabel : market.defaultCategory);
  set('pd-bc-product', productName);

  // ── hero ──────────────────────────────────────────────────────────────────
  set('pd-badge', details.badge);

  // Main product image — use clicked item's image first, then fall back to detail default
  const mainImage = (resolvedItem && resolvedItem.image) || details.image;
  if (mainImage) {
    const mainImgEl = document.getElementById('pd-main-emoji');
    if (mainImgEl) {
      const img = document.createElement('img');
      img.src = mainImage;
      img.alt = productName;
      img.className = 'ph-main-actual-img';
      mainImgEl.replaceWith(img);
    }
  } else {
    set('pd-main-emoji', details.emoji);
  }

  set('pd-vendor-avatar', details.emoji);
  set('pd-vendor-name', `${productVendor} <span class="verified">&#10003; Verified</span>`);
  set('pd-vendor-sub', productSub);
  set('pd-title', productName);
  // Use item sub as subtitle when no per-product rich detail exists
  const subtitle = (detailKey && MM_DATA.productDetails[detailKey])
    ? details.subtitle
    : (resolvedItem ? resolvedItem.sub : details.subtitle);
  set('pd-subtitle', subtitle);
  set('pd-stars', stars(stall.rating || 4.8));
  set('pd-score', stall.rating || '4.8');
  set('pd-reviews-count', `(${(stall.reviews || 0).toLocaleString()} reviews)`);
  set('pd-sold', `${details.sold} sold`);

  // ── price + qty ────────────────────────────────────────────────────────────
  set('pd-price', productPrice);
  set('pd-price-unit', productUnit);

  const minQty = details.minOrder || 1;
  let currentQty = minQty;
  set('pd-min-note', `Min. order: ${minQty} ${details.unitLabel}`);
  set('pd-qty-label', `Quantity (${details.unitLabel})`);

  function extractNumber(priceStr) {
    return parseInt((priceStr || '0').replace(/[^\d]/g, ''), 10) || 0;
  }
  const unitPrice = extractNumber(productPrice);

  function updateTotal() {
    set('pd-qty-num', currentQty);
    const total = (unitPrice * currentQty).toLocaleString();
    set('pd-price-total', `Total: <strong>&#8358;${total}</strong> for ${currentQty} ${details.unitLabel}`);
  }
  updateTotal();

  document.getElementById('pd-qty-minus')?.addEventListener('click', () => {
    if (currentQty > minQty) { currentQty--; updateTotal(); }
  });
  document.getElementById('pd-qty-plus')?.addEventListener('click', () => {
    currentQty++;
    updateTotal();
  });

  // ── patterns ───────────────────────────────────────────────────────────────
  const patternColors = ['#E84A35','#1A3A5C','#2D6A4F','#5C3D96','#D4A017','#8B2252'];
  const patternsWrap = document.getElementById('pd-patterns-wrap');
  const patternsEl = document.getElementById('pd-patterns');
  if (patternsEl && details.patterns && details.patterns.length) {
    patternsWrap.style.display = '';
    if (details.patternLabel) document.getElementById('pd-patterns-label').textContent = details.patternLabel;
    let selectedIdx = 0;
    patternsEl.innerHTML = details.patterns.map((p, i) => `
      <div class="ph-pattern-opt${i === 0 ? ' selected' : ''}" data-idx="${i}"
        style="background:${patternColors[i % patternColors.length]}"
        title="${p}"></div>`).join('');
    set('pd-selected-pattern', details.patterns[0]);

    patternsEl.addEventListener('click', e => {
      const opt = e.target.closest('.ph-pattern-opt');
      if (!opt) return;
      patternsEl.querySelectorAll('.ph-pattern-opt').forEach(el => el.classList.remove('selected'));
      opt.classList.add('selected');
      selectedIdx = parseInt(opt.dataset.idx, 10);
      set('pd-selected-pattern', details.patterns[selectedIdx]);
    });
  }

  // ── wishlist toggle ────────────────────────────────────────────────────────
  const wishBtn = document.getElementById('pd-wishlist-btn');
  if (wishBtn && window.MM_WISHLIST && window.mmWishlistSlug) {
    const wid = mmWishlistSlug(productName + '-' + productVendor);
    wishBtn.dataset.wid        = wid;
    wishBtn.dataset.wname      = productName;
    wishBtn.dataset.wvendor    = productVendor;
    wishBtn.dataset.wprice     = productPrice;
    wishBtn.dataset.wpricenum  = String(unitPrice);
    wishBtn.dataset.wunit      = productUnit;
    wishBtn.dataset.wmarket    = marketId;
    wishBtn.dataset.wmarketname = market.name;
    wishBtn.dataset.wimage     = details.image || '';
    wishBtn.dataset.wsub       = '';
    wishBtn.dataset.wrating    = String(stall.rating || 4.8);
    wishBtn.dataset.wreviews   = String(stall.reviews || 0);
    const wbIcon = wishBtn.querySelector('i');
    const wbActive = MM_WISHLIST.has(wid);
    if (wbIcon) { wbIcon.className = wbActive ? 'ph-fill ph-heart' : 'ph-bold ph-heart'; wbIcon.style.color = wbActive ? 'var(--red)' : ''; }
    wishBtn.addEventListener('click', () => mmToggleWishlist(wishBtn));
  }

  // ── message vendor ────────────────────────────────────────────────────────
  const msgBtn = document.getElementById('pd-msg-btn');
  if (msgBtn && window.mmChatSlug) {
    const vid = mmChatSlug(productVendor + '-' + marketId);
    msgBtn.addEventListener('click', function () {
      if (window.mmOpenChat) mmOpenChat(vid, {
        name: productVendor,
        avatar: stall ? stall.avatar : '🏪',
        marketName: market.name,
        marketId: market.id,
        sub: stall ? stall.location : '',
      });
    });
  }

  // ── nav links ──────────────────────────────────────────────────────────────
  const navVendors = document.getElementById('nav-vendors-link');
  if (navVendors) navVendors.href = `vendors.html?market=${market.id}`;

  // ── add to cart → navigate to cart ────────────────────────────────────────
  document.getElementById('pd-add-cart')?.addEventListener('click', function () {
    if (window.MM_CART) {
      MM_CART.add({
        name:       productName,
        vendor:     productVendor,
        price:      productPrice,
        priceNum:   unitPrice,
        unit:       details.unitLabel || 'unit',
        emoji:      details.emoji || '🛍️',
        qty:        currentQty,
        marketId:   marketId,
        marketName: market.name
      });
    }
    this.textContent = '✓ Added to Cart!';
    this.style.background = '#16A34A';
    setTimeout(() => { window.location.href = 'cart.html'; }, 900);
  });

  // ── buy now → checkout ────────────────────────────────────────────────────
  document.querySelector('.btn-buy-now')?.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });

  // ── visit stall ───────────────────────────────────────────────────────────
  const visitStallBtn = document.getElementById('pd-visit-stall');
  if (visitStallBtn) {
    const stallName = stall.name || productVendor;
    visitStallBtn.href = `vendor.html?market=${market.id}&name=${encodeURIComponent(stallName)}`;
  }

  // ── tabs ───────────────────────────────────────────────────────────────────
  const tabContents = {
    Description: buildDescription(),
    Specifications: buildSpecs(),
    Reviews: buildReviews()
  };

  function buildDescription() {
    return `
      <h3>About this product</h3>
      ${details.description.map(p => `<p>${p}</p>`).join('')}
      <h3 style="margin-top:28px">Care instructions</h3>
      <p>${details.care}</p>`;
  }

  function buildSpecs() {
    return `
      <h3>Specifications</h3>
      <table class="spec-table" style="margin-top:16px">
        ${details.specs.map(s => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join('')}
      </table>`;
  }

  function buildReviews() {
    const reviewHtml = details.reviews.map(r => `
      <div class="review-item">
        <div class="review-header">
          <div class="reviewer-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
        <div class="review-stars">${'&#9733;'.repeat(r.rating)}${'&#9734;'.repeat(5 - r.rating)}</div>
        <div class="review-text">${r.text}</div>
      </div>`).join('');
    return `<h3>Customer Reviews (${details.reviews.length})</h3>${reviewHtml}`;
  }

  const tabBar = document.getElementById('pd-tab-bar');
  const tabContent = document.getElementById('pd-tab-content');
  if (tabBar && tabContent) {
    tabBar.innerHTML = Object.keys(tabContents).map((label, i) =>
      `<div class="tab${i === 0 ? ' active' : ''}" data-tab="${label}">${label}${label === 'Reviews' ? ` (${details.reviews.length})` : ''}</div>`
    ).join('');
    tabContent.innerHTML = tabContents.Description;

    tabBar.addEventListener('click', e => {
      const tab = e.target.closest('.tab');
      if (!tab) return;
      tabBar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tabContent.innerHTML = tabContents[tab.dataset.tab];
    });
  }

  // ── vendor sidebar ────────────────────────────────────────────────────────
  set('pd-vp-avatar', details.emoji);
  set('pd-vp-name', stall.name || productVendor);
  set('pd-vp-sub', stall.owner || '');
  set('pd-vp-badge', `&#10003; ${stall.badge || 'Verified'}`);
  set('pd-vp-stats', `
    <div class="vp-stat"><div class="vp-stat-num">${stall.rating || '4.8'}★</div><div class="vp-stat-label">Rating</div></div>
    <div class="vp-stat"><div class="vp-stat-num">${(stall.reviews || 0).toLocaleString()}</div><div class="vp-stat-label">Reviews</div></div>
    <div class="vp-stat"><div class="vp-stat-num">${stall.products || '—'}</div><div class="vp-stat-label">Products</div></div>
    <div class="vp-stat"><div class="vp-stat-num">${details.vendorYears}</div><div class="vp-stat-label">Trading</div></div>`);

  // ── delivery sidebar ───────────────────────────────────────────────────────
  set('pd-delivery', `
    <div class="del-item"><div class="del-icon">&#128666;</div><div><div class="del-label">Delivery</div><div class="del-val">${market.delivery}</div></div></div>
    <div class="del-item"><div class="del-icon">&#128205;</div><div><div class="del-label">Pickup</div><div class="del-val">${stall.location || market.area}</div></div></div>
    <div class="del-item"><div class="del-icon">&#128179;</div><div><div class="del-label">Min. order</div><div class="del-val">${market.minOrder}</div></div></div>
    <div class="del-item"><div class="del-icon">&#127775;</div><div><div class="del-label">Buyer protection</div><div class="del-val">Escrow payment</div></div></div>`);

  // ── related products ───────────────────────────────────────────────────────
  set('pd-related-title', `More from ${market.name}`);
  setAttr('pd-related-view-all', 'href', `product-listing.html?market=${market.id}&category=${catId || market.defaultCategory}`);

  const relGrid = document.getElementById('pd-related-grid');
  if (relGrid && details.related) {
    relGrid.innerHTML = details.related.map(r => {
      const href = `product-detail.html?market=${r.market}&category=${catId || market.defaultCategory}&product=${r.product}`;
      const imgContent = r.image
        ? `<img src="${r.image}" alt="${r.name}" class="rel-actual-img" />`
        : `<span style="font-size:36px">${r.emoji}</span>`;
      return `
        <a href="${href}" class="rel-card" style="text-decoration:none;color:inherit;">
          <div class="rel-img"><div class="rel-img-inner ri-1">${imgContent}</div></div>
          <div class="rel-body">
            <div class="rel-name">${r.name}</div>
            <div class="rel-vendor">${r.vendor}</div>
            <div class="rel-row">
              <div class="rel-price">${r.price}${r.unit ? `<span style="font-size:10px;font-weight:400;color:var(--muted)">${r.unit}</span>` : ''}</div>
              <button class="rel-add" onclick="event.preventDefault()">Add</button>
            </div>
          </div>
        </a>`;
    }).join('');
  }

  // ── footer ────────────────────────────────────────────────────────────────
  set('pd-currently-viewing', productName);

})();
