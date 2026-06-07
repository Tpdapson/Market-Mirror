(function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get('market') || 'balogun';
  const market = MM_DATA.markets[marketId];

  if (!market) { location.href = 'index.html'; return; }

  const stalls = MM_DATA.stalls[marketId] || [];
  const featured = MM_DATA.marketFeatured[marketId];
  const listingKey = `${marketId}-${market.defaultCategory}`;
  const listing = MM_DATA.listings[listingKey];

  // ── helpers ──────────────────────────────────────────────────────────────
  function stars(r) {
    return '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
  }
  function fmt(n) {
    return typeof n === 'number' ? n.toLocaleString() : n;
  }
  function set(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }
  function setAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  }

  // ── page title + breadcrumb ───────────────────────────────────────────────
  document.title = `${market.name} — Market Mirror`;
  set('breadcrumb-market', market.name);

  // ── hero ─────────────────────────────────────────────────────────────────
  set('mh-vendor-status', `<span class="live-dot"></span>${market.vendors} vendors online now`);
  set('mh-title', `${market.shortName}<br/><span class="accent">Market</span>`);
  set('mh-location', `${market.area} &nbsp;&middot;&nbsp; Est. ${market.established}`);
  set('stat-vendors', `${market.vendors}<span class="red">+</span>`);
  set('stat-products', `${market.products}<span class="red">+</span>`);
  set('stat-rating', `${market.rating}<span class="red">★</span>`);
  setAttr('mh-hero-img', 'src', market.heroImage);
  setAttr('mh-hero-img', 'alt', `${market.name} market`);
  set('mh-initials', market.initials);

  // mini cards
  set('mc-status', market.isOpen ? 'Open now' : 'Closed');
  set('mc-closing-time', `Closes ${market.closingTime}`);
  set('mc-rating-stars', `<span class="star">${'&#9733;'.repeat(Math.round(market.rating))}${'&#9734;'.repeat(5 - Math.round(market.rating))}</span>`);
  set('mc-rating-num', market.rating);
  set('mc-rating-count', `from ${market.reviews} reviews`);

  // ── meta bar ─────────────────────────────────────────────────────────────
  set('meta-location', market.area.split(',')[0]);
  set('meta-hours', `<span class="open">${market.isOpen ? 'Open' : 'Closed'}</span> &middot; ${market.hours}`);
  set('meta-delivery', market.delivery);
  set('meta-minorder', market.minOrder);
  set('meta-specialty', market.specialty);

  // ── filter category buttons ───────────────────────────────────────────────
  const filterCats = document.getElementById('filter-cats');
  if (filterCats) {
    const listingUrl = `product-listing.html?market=${market.id}`;
    filterCats.innerHTML =
      `<a href="${listingUrl}" class="filter-cat active">All Products</a>` +
      market.categories.map(c =>
        `<a href="${listingUrl}&category=${c.id}" class="filter-cat">${c.label}</a>`
      ).join('');
  }

  // ── featured products section ─────────────────────────────────────────────
  const featuredTitle = document.getElementById('featured-title');
  if (featuredTitle) featuredTitle.textContent = `Top picks from ${market.name}`;

  const viewAllBtn = document.getElementById('view-all-btn');
  if (viewAllBtn) viewAllBtn.href = `product-listing.html?market=${market.id}&category=${market.defaultCategory}`;

  if (featured) {
    const lg = featured.large;
    const sm = featured.small;
    const grid = document.getElementById('featured-grid');
    const detailBase = `product-detail.html?market=${market.id}&category=${market.defaultCategory}`;
    if (grid) {
      grid.innerHTML = `
        <a href="${detailBase}&product=featured" class="prod-card-lg" style="text-decoration:none;color:inherit;cursor:pointer;">
          <div class="pcl-img">
            <img src="${lg.image}" alt="${lg.name}" class="pcl-photo"/>
          </div>
          <div class="pcl-body">
            <div>
              <div class="pcl-vendor">${lg.vendor} ${lg.verified ? '<span class="verified">&#10003; Verified</span>' : ''}</div>
              <div class="pcl-name">${lg.name}</div>
              <div class="pcl-meta">${lg.meta}</div>
            </div>
            <div class="pcl-price-col">
              <div class="pcl-price">${lg.price}</div>
              <div class="pcl-unit">${lg.unit}</div>
              <button class="pcl-add" onclick="event.preventDefault()">Add to cart</button>
            </div>
          </div>
        </a>
        ${sm.map((s, idx) => `
        <a href="${detailBase}&product=${idx}" class="prod-card-sm" style="text-decoration:none;color:inherit;cursor:pointer;">
          <div class="pcs-img">
            <img src="${s.image}" alt="${s.name}" class="pcs-photo"/>
          </div>
          <div class="pcs-body">
            <div class="pcs-vendor">${s.vendor} ${s.verified ? '&nbsp;<span class="verified">&#10003;</span>' : ''}</div>
            <div class="pcs-name">${s.name}</div>
            <div class="pcs-sub">${s.sub}</div>
            <div class="pcs-row">
              <div class="pcs-price">${s.price}</div>
              <span class="pcs-badge ${s.badgeClass}">${s.badge}</span>
            </div>
          </div>
        </a>`).join('')}`;
    }
  }

  // ── stalls grid ───────────────────────────────────────────────────────────
  const stallsGrid = document.getElementById('stalls-grid');
  if (stallsGrid && stalls.length) {
    stallsGrid.innerHTML = stalls.map((s, i) => {
      const cls = `sa-${(i % 6) + 1}`;
      const full = Math.round(s.rating);
      const starStr = '&#9733;'.repeat(full) + '&#9734;'.repeat(5 - full);
      const vendorUrl = `vendor.html?market=${market.id}&name=${encodeURIComponent(s.name)}`;
      return `
      <a href="${vendorUrl}" class="stall-card" style="text-decoration:none;color:inherit;cursor:pointer;display:block;">
        <div class="stall-header">
          <div class="stall-avatar ${cls}">${s.avatar}</div>
          <span class="stall-badge">${s.badge}</span>
        </div>
        <div class="stall-name">${s.name}</div>
        <div class="stall-owner">${s.owner} &middot; ${s.location}</div>
        <div class="stall-tags">${s.tags.map(t => `<span class="stall-tag">${t}</span>`).join('')}</div>
        <div class="stall-footer">
          <div class="stall-rating">
            <span class="stall-stars">${starStr}</span>
            <span class="stall-score">${s.rating}</span>
            <span class="stall-reviews">(${fmt(s.reviews)} reviews)</span>
          </div>
          <div class="stall-products"><strong>${s.products}</strong> products</div>
        </div>
      </a>`;
    }).join('');
  }

  // ── all stalls button ─────────────────────────────────────────────────────
  const allStallsBtn = document.getElementById('all-stalls-btn');
  if (allStallsBtn) allStallsBtn.href = `vendors.html?market=${market.id}`;

  const exploreStallsBtn = document.getElementById('explore-stalls-btn');
  if (exploreStallsBtn) exploreStallsBtn.href = `vendors.html?market=${market.id}`;

  // ── about section ─────────────────────────────────────────────────────────
  const ab = market.about;
  set('about-title', ab.title);
  set('about-p1', ab.p1);
  set('about-p2', ab.p2);

  const factsEl = document.getElementById('about-facts');
  if (factsEl && ab.facts) {
    factsEl.innerHTML = ab.facts.map(f => `
      <div class="fact-item">
        <div class="fact-num">${f.num}<span class="red">+</span></div>
        <div class="fact-body">
          <div class="fact-title">${f.title}</div>
          <div class="fact-desc">${f.desc}</div>
        </div>
      </div>`).join('');
  }

  // ── CTA strip ────────────────────────────────────────────────────────────
  set('cta-title', `Ready to shop<br/><span class="dim">${market.shortName} from</span><br/><span class="red">anywhere?</span>`);
  const ctaBtn = document.getElementById('cta-btn');
  if (ctaBtn) ctaBtn.href = `product-listing.html?market=${market.id}&category=${market.defaultCategory}`;

  // ── nav vendors + categories links ───────────────────────────────────────
  const navVendors = document.getElementById('nav-vendors-link');
  if (navVendors) navVendors.href = `vendors.html?market=${market.id}`;

  const navCats = document.getElementById('nav-categories-link');
  if (navCats) navCats.href = `product-listing.html?market=${market.id}`;

  // ── footer ────────────────────────────────────────────────────────────────
  set('currently-viewing', market.name);

})();
