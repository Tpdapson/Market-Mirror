(function () {
  'use strict';

  // ── Auth store (localStorage) ──────────────────────────────────
  const STORAGE_KEY = 'mm_users';
  const SESSION_KEY = 'mm_session';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
  }

  function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
  }

  function setSession(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  // ── Modal HTML injection ───────────────────────────────────────
  function injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
      <!-- SEARCH OVERLAY -->
      <div class="search-overlay" id="search-overlay" role="dialog" aria-label="Search">
        <div class="search-overlay-box">
          <div class="so-input-row">
            <i class="ph-bold ph-magnifying-glass"></i>
            <input class="so-input" id="so-input" type="text" placeholder="Search markets, vendors, products…" autocomplete="off" />
            <button class="so-close-btn" id="so-close-btn" title="Close (Esc)">ESC</button>
          </div>
          <div class="so-results" id="so-results"></div>
          <div class="so-hint-row">
            <span class="so-hint"><span class="so-key">↑↓</span> navigate</span>
            <span class="so-hint"><span class="so-key">↵</span> open</span>
            <span class="so-hint"><span class="so-key">ESC</span> close</span>
          </div>
        </div>
      </div>

      <!-- AUTH MODAL -->
      <div class="auth-modal-backdrop" id="auth-modal-backdrop" role="dialog" aria-label="Sign in or Sign up">
        <div class="auth-modal">
          <!-- Left panel -->
          <div class="auth-panel-left">
            <a href="index.html" class="auth-brand">
              <div class="auth-brand-icon">
                <i class="ph ph-shopping-bag" style="font-size:13px;color:#fff;"></i>
              </div>
              Market Mirror
            </a>
            <div class="auth-panel-headline">
              <h2>Lagos markets,<br/><span>everywhere</span><br/>you are.</h2>
              <p>Shop from Balogun, Alaba, Computer Village and more — from anywhere in the world.</p>
            </div>
            <div class="auth-trust-badges">
              <div class="auth-trust-item"><span class="auth-trust-dot"></span>Same-day delivery across Lagos</div>
              <div class="auth-trust-item"><span class="auth-trust-dot"></span>1,200+ verified vendors</div>
              <div class="auth-trust-item"><span class="auth-trust-dot"></span>Secure, buyer-protected checkout</div>
            </div>
          </div>

          <!-- Right panel -->
          <div class="auth-panel-right" style="position:relative;">
            <button class="auth-modal-close" id="auth-modal-close" title="Close">
              <i class="ph-fill ph-x"></i>
            </button>

            <div class="auth-tabs">
              <button class="auth-tab active" id="tab-signin" data-tab="signin">Sign in</button>
              <button class="auth-tab" id="tab-signup" data-tab="signup">Create account</button>
            </div>

            <!-- Sign In -->
            <div class="auth-form-section" id="form-signin">
              <div>
                <div class="auth-form-title">Welcome back</div>
                <div class="auth-form-sub">Enter any email and password to sign in, or use a previously created account.</div>
              </div>
              <div class="auth-field">
                <label for="si-email">Email address</label>
                <input type="email" id="si-email" placeholder="you@example.com" autocomplete="email" />
                <span class="auth-field-error" id="si-email-err">Please enter a valid email</span>
              </div>
              <div class="auth-field">
                <label for="si-password">Password</label>
                <input type="password" id="si-password" placeholder="Your password" autocomplete="current-password" />
                <span class="auth-field-error" id="si-pass-err">Password must be at least 4 characters</span>
              </div>
              <button class="auth-submit-btn" id="si-submit">
                Sign in
                <i class="ph ph-arrow-right"></i>
              </button>
              <div class="auth-success" id="si-success">
                <div class="auth-success-icon">✓</div>
                <h3 id="si-welcome-name">Welcome back!</h3>
                <p>You're now signed in. Redirecting…</p>
              </div>
            </div>

            <!-- Sign Up -->
            <div class="auth-form-section hidden" id="form-signup">
              <div>
                <div class="auth-form-title">Create your account</div>
                <div class="auth-form-sub">Use any email and password to get started. No verification needed.</div>
              </div>
              <div class="auth-field-row">
                <div class="auth-field">
                  <label for="su-fname">First name</label>
                  <input type="text" id="su-fname" placeholder="Ada" autocomplete="given-name" />
                  <span class="auth-field-error" id="su-fname-err">Required</span>
                </div>
                <div class="auth-field">
                  <label for="su-lname">Last name</label>
                  <input type="text" id="su-lname" placeholder="Okafor" autocomplete="family-name" />
                  <span class="auth-field-error" id="su-lname-err">Required</span>
                </div>
              </div>
              <div class="auth-field">
                <label for="su-email">Email address</label>
                <input type="email" id="su-email" placeholder="you@example.com" autocomplete="email" />
                <span class="auth-field-error" id="su-email-err">Please enter a valid email</span>
              </div>
              <div class="auth-field">
                <label for="su-password">Password</label>
                <input type="password" id="su-password" placeholder="Choose a password (min. 4 chars)" autocomplete="new-password" />
                <span class="auth-field-error" id="su-pass-err">Password must be at least 4 characters</span>
              </div>
              <button class="auth-submit-btn" id="su-submit">
                Create account
                <i class="ph ph-arrow-right"></i>
              </button>
              <div class="auth-success" id="su-success">
                <div class="auth-success-icon">✓</div>
                <h3 id="su-welcome-name">Account created!</h3>
                <p>Welcome to Market Mirror. You're all set.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  // ── Nav update based on session ────────────────────────────────
  function updateNavForSession() {
    const session = getSession();
    const signInBtns = document.querySelectorAll('.nav-signin-btn, a[href="#"].btn-outline');

    signInBtns.forEach(btn => {
      if (btn.textContent.trim() === 'Sign in') {
        if (session) {
          const initials = ((session.firstName || '?')[0] + (session.lastName || '?')[0]).toUpperCase();
          const name = session.firstName || 'Account';
          const pill = document.createElement('div');
          pill.className = 'nav-user-pill';
          pill.id = 'nav-user-pill';
          pill.innerHTML = `
            <div class="nav-user-avatar">${initials}</div>
            ${name}
            <i class="ph ph-caret-down" style="font-size:10px;"></i>
            <div class="nav-user-dropdown">
              <div class="nav-dropdown-header">Signed in as</div>
              <div class="nav-dropdown-item" style="padding-bottom:4px;font-size:12px;color:#7A756D;cursor:default;">${session.email}</div>
              <div class="nav-dropdown-divider"></div>
              <button class="nav-dropdown-item" id="nav-signout-btn">
                <i class="ph ph-sign-out" style="font-size:14px;color:#E63C1E;"></i>
                Sign out
              </button>
            </div>
          `;
          btn.parentNode.replaceChild(pill, btn);

          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            pill.classList.toggle('dropdown-open');
          });

          const signOutBtn = pill.querySelector('#nav-signout-btn');
          if (signOutBtn) {
            signOutBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              clearSession();
              location.reload();
            });
          }

          document.addEventListener('click', () => pill.classList.remove('dropdown-open'));
        } else {
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            openAuthModal('signin');
          });
        }
      }
    });
  }

  // ── Auth modal open/close ──────────────────────────────────────
  function openAuthModal(tab) {
    const backdrop = document.getElementById('auth-modal-backdrop');
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchTab(tab || 'signin');
    const input = tab === 'signup'
      ? document.getElementById('su-fname')
      : document.getElementById('si-email');
    setTimeout(() => input && input.focus(), 280);
  }

  function closeAuthModal() {
    const backdrop = document.getElementById('auth-modal-backdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    resetForms();
  }

  function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.getElementById('form-signin').classList.toggle('hidden', tab !== 'signin');
    document.getElementById('form-signup').classList.toggle('hidden', tab !== 'signup');
  }

  function resetForms() {
    ['si-email','si-password','su-fname','su-lname','su-email','su-password'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.value = ''; el.classList.remove('error'); }
    });
    ['si-email-err','si-pass-err','su-fname-err','su-lname-err','su-email-err','su-pass-err'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('visible');
    });
    ['si-success','su-success'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('visible');
    });
    ['si-submit','su-submit'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.style.display = ''; el.classList.remove('loading'); }
    });
  }

  // ── Validation ─────────────────────────────────────────────────
  function showError(inputId, errId) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    if (input) input.classList.add('error');
    if (err) err.classList.add('visible');
  }

  function clearError(inputId, errId) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errId);
    if (input) input.classList.remove('error');
    if (err) err.classList.remove('visible');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ── Sign In logic ──────────────────────────────────────────────
  function handleSignIn() {
    const email = (document.getElementById('si-email').value || '').trim();
    const password = (document.getElementById('si-password').value || '');

    let valid = true;
    clearError('si-email', 'si-email-err');
    clearError('si-password', 'si-pass-err');

    if (!isValidEmail(email)) { showError('si-email', 'si-email-err'); valid = false; }
    if (password.length < 4) { showError('si-password', 'si-pass-err'); valid = false; }

    if (!valid) return;

    const submitBtn = document.getElementById('si-submit');
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Signing in…';

    setTimeout(() => {
      const users = getUsers();
      let user;

      if (users[email]) {
        // Known user — check password
        if (users[email].password !== password) {
          // For demo: allow any password — just warn and proceed
          // In a real app this would reject
        }
        user = users[email];
      } else {
        // Auto-create account for demo (any creds work)
        const parts = email.split('@')[0].split('.');
        const firstName = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : 'User';
        const lastName = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : '';
        user = { email, password, firstName, lastName, createdAt: Date.now() };
        users[email] = user;
        saveUsers(users);
      }

      setSession(user);
      submitBtn.style.display = 'none';

      const success = document.getElementById('si-success');
      const welcomeEl = document.getElementById('si-welcome-name');
      if (welcomeEl) welcomeEl.textContent = `Welcome back, ${user.firstName}!`;
      if (success) success.classList.add('visible');

      setTimeout(() => {
        closeAuthModal();
        updateNavForSession();
      }, 1400);
    }, 700);
  }

  // ── Sign Up logic ──────────────────────────────────────────────
  function handleSignUp() {
    const firstName = (document.getElementById('su-fname').value || '').trim();
    const lastName = (document.getElementById('su-lname').value || '').trim();
    const email = (document.getElementById('su-email').value || '').trim();
    const password = (document.getElementById('su-password').value || '');

    let valid = true;
    clearError('su-fname', 'su-fname-err');
    clearError('su-lname', 'su-lname-err');
    clearError('su-email', 'su-email-err');
    clearError('su-password', 'su-pass-err');

    if (!firstName) { showError('su-fname', 'su-fname-err'); valid = false; }
    if (!lastName) { showError('su-lname', 'su-lname-err'); valid = false; }
    if (!isValidEmail(email)) { showError('su-email', 'su-email-err'); valid = false; }
    if (password.length < 4) { showError('su-password', 'su-pass-err'); valid = false; }

    if (!valid) return;

    const submitBtn = document.getElementById('su-submit');
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Creating account…';

    setTimeout(() => {
      const users = getUsers();
      const user = { email, password, firstName, lastName, createdAt: Date.now() };
      users[email] = user;
      saveUsers(users);
      setSession(user);

      submitBtn.style.display = 'none';
      const success = document.getElementById('su-success');
      const welcomeEl = document.getElementById('su-welcome-name');
      if (welcomeEl) welcomeEl.textContent = `Welcome, ${firstName}!`;
      if (success) success.classList.add('visible');

      setTimeout(() => {
        closeAuthModal();
        updateNavForSession();
      }, 1400);
    }, 700);
  }

  // ── Search overlay ─────────────────────────────────────────────
  function openSearch() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('so-input');
    if (input) { input.value = ''; setTimeout(() => input.focus(), 50); }
    renderSearchResults('');
  }

  function closeSearch() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function buildSearchIndex() {
    if (typeof MM_DATA === 'undefined') return [];
    const results = [];

    // ── Markets ──────────────────────────────────────────────────
    Object.values(MM_DATA.markets).forEach(m => {
      results.push({
        type: 'market',
        icon: m.initials,
        name: m.name,
        sub: `${m.specialty} · ${m.vendors} vendors · ${m.area}`,
        url: `market-page.html?market=${m.id}`,
        keywords: [m.name, m.shortName, m.specialty, m.area, ...(m.tags || [])].join(' ').toLowerCase()
      });

      // Category pages within each market
      (m.categories || []).forEach(cat => {
        results.push({
          type: 'category',
          icon: m.initials,
          name: cat.label,
          sub: `Category · ${m.name}`,
          url: `product-listing.html?market=${m.id}&category=${cat.id}`,
          keywords: [cat.label, cat.id, m.name, m.shortName, m.specialty].join(' ').toLowerCase()
        });
      });
    });

    // ── Vendors (stalls) ─────────────────────────────────────────
    if (MM_DATA.stalls) {
      Object.entries(MM_DATA.stalls).forEach(([marketId, stalls]) => {
        const market = MM_DATA.markets[marketId];
        stalls.forEach(s => {
          results.push({
            type: 'vendor',
            icon: s.avatar,
            name: s.name,
            sub: `${s.owner} · ${market ? market.name : ''} · ${s.badge}`,
            url: `vendor.html?market=${marketId}&name=${encodeURIComponent(s.name)}`,
            keywords: [s.name, s.owner, s.location, ...(s.tags || []), market ? market.name : ''].join(' ').toLowerCase()
          });
        });
      });
    }

    // ── Products from listings ────────────────────────────────────
    if (MM_DATA.listings) {
      Object.entries(MM_DATA.listings).forEach(([key, listing]) => {
        // key format: "{marketId}-{categoryId}" — marketId may itself contain hyphens
        let matchedMarketId = null;
        let matchedCategoryId = null;
        Object.keys(MM_DATA.markets).forEach(mId => {
          if (key.startsWith(mId + '-')) {
            matchedMarketId = mId;
            matchedCategoryId = key.slice(mId.length + 1);
          }
        });
        if (!matchedMarketId) return;

        const market = MM_DATA.markets[matchedMarketId];
        const listingUrl = `product-listing.html?market=${matchedMarketId}&category=${matchedCategoryId}`;

        // Featured product → links to detail page
        if (listing.featured) {
          const f = listing.featured;
          results.push({
            type: 'product',
            icon: '⭐',
            name: f.name,
            sub: `${f.vendor} · ${market ? market.name : ''}`,
            price: f.price,
            badge: 'Featured', badgeClass: 'badge-feat',
            url: `product-detail.html?market=${matchedMarketId}`,
            keywords: [f.name, f.vendor, f.desc || '', listing.categoryLabel, market ? market.name : '', market ? market.shortName : ''].join(' ').toLowerCase()
          });
        }

        // All product items in the listing
        (listing.items || []).forEach(item => {
          const b = item.badge || '';
          const bc = item.badgeClass || (b.startsWith('-') ? 'badge-sale' : b === 'Hot' ? 'badge-hot' : b === 'New' ? 'badge-new' : b.includes('left') ? 'badge-low' : '');
          results.push({
            type: 'product',
            icon: '🛍️',
            name: item.name,
            sub: `${item.vendor.replace(' ✓', '')} · ${market ? market.name : ''}`,
            price: item.price,
            badge: b,
            badgeClass: bc,
            url: listingUrl,
            keywords: [item.name, item.vendor, item.sub || '', listing.categoryLabel, listing.title, market ? market.name : '', market ? market.shortName : ''].join(' ').toLowerCase()
          });
        });
      });
    }

    return results;
  }

  let searchIndex = null;

  function scoreResult(r, words) {
    let score = 0;
    const name = r.name.toLowerCase();
    words.forEach(w => {
      if (name.includes(w)) score += 3;
      if (r.keywords.includes(w)) score += 1;
    });
    // Exact full query in name = big bonus
    if (name.includes(words.join(' '))) score += 5;
    return score;
  }

  function renderSearchResults(query) {
    const container = document.getElementById('so-results');
    if (!container) return;

    if (!searchIndex) searchIndex = buildSearchIndex();

    if (!query.trim()) {
      const markets = searchIndex.filter(r => r.type === 'market').slice(0, 4);
      container.innerHTML = `
        <div class="so-section-label">Browse Markets</div>
        ${markets.map(r => resultItemHTML(r)).join('')}
      `;
      bindResultClicks(container);
      return;
    }

    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    // A result matches if every query word appears somewhere in its keywords or name
    const matches = searchIndex
      .map(r => ({ r, score: scoreResult(r, words) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ r }) => r);

    if (!matches.length) {
      container.innerHTML = `<div class="so-empty">No results for "<strong>${escHtml(query)}</strong>"<br><span style="font-size:12px;">Try: iPhone, Ankara, tomatoes, laptops, Mama Titi…</span></div>`;
      return;
    }

    const markets    = matches.filter(r => r.type === 'market');
    const categories = matches.filter(r => r.type === 'category').slice(0, 3);
    const vendors    = matches.filter(r => r.type === 'vendor').slice(0, 4);
    const products   = matches.filter(r => r.type === 'product').slice(0, 6);

    const total = markets.length + categories.length + vendors.length + products.length;

    let html = `<div class="so-results-count">${total} result${total !== 1 ? 's' : ''} for "${escHtml(query)}"</div>`;

    if (markets.length) {
      html += `<div class="so-section-label">Markets</div>${markets.map(r => resultItemHTML(r)).join('')}`;
    }
    if (categories.length) {
      html += `<div class="so-section-label">Categories</div>${categories.map(r => resultItemHTML(r)).join('')}`;
    }
    if (vendors.length) {
      html += `<div class="so-section-label">Vendors</div>${vendors.map(r => resultItemHTML(r)).join('')}`;
    }
    if (products.length) {
      html += `<div class="so-section-label">Products</div>${products.map(r => resultItemHTML(r)).join('')}`;
    }

    container.innerHTML = html;
    bindResultClicks(container);
  }

  function resultItemHTML(r) {
    let iconContent;
    if (r.type === 'market') {
      iconContent = `<div class="so-result-icon market-icon">${escHtml(r.icon)}</div>`;
    } else if (r.type === 'category') {
      iconContent = `<div class="so-result-icon category-icon">${escHtml(r.icon)}</div>`;
    } else {
      iconContent = `<div class="so-result-icon">${r.icon || '🛍️'}</div>`;
    }

    const rightSide = (r.type === 'product' && r.price)
      ? `<span class="so-result-price">${escHtml(r.price)}</span>
         ${r.badge ? `<span class="so-result-badge ${escHtml(r.badgeClass || '')}">${escHtml(r.badge)}</span>` : ''}`
      : `<i class="ph-bold ph-arrow-right so-result-arrow"></i>`;

    return `
      <a class="so-result-item" href="${r.url}">
        ${iconContent}
        <div class="so-result-text">
          <div class="so-result-name">${escHtml(r.name)}</div>
          <div class="so-result-sub">${escHtml(r.sub)}</div>
        </div>
        ${rightSide}
      </a>`;
  }

  function bindResultClicks(container) {
    container.querySelectorAll('.so-result-item').forEach(item => {
      item.addEventListener('click', () => closeSearch());
    });
  }

  function escHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Wire nav search buttons ────────────────────────────────────
  function wireSearchButtons() {
    document.querySelectorAll('.nav-search-btn, .nav-search').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openSearch();
      });
    });
  }

  // ── Mobile nav injection ───────────────────────────────────────
  function injectMobileNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const btn = document.createElement('button');
    btn.className = 'nav-hamburger';
    btn.id = 'nav-hamburger';
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<i class="ph-bold ph-list" style="font-size:20px;pointer-events:none;"></i>';
    nav.appendChild(btn);

    const existingLinks = nav.querySelector('.nav-links');
    let linksHTML = '';
    if (existingLinks) {
      existingLinks.querySelectorAll('a').forEach(a => {
        linksHTML += `<li><a href="${a.getAttribute('href')}">${a.textContent.trim()}</a></li>`;
      });
    }

    const session = getSession();
    let authHTML = '';
    if (session) {
      const name = (`${session.firstName || ''} ${session.lastName || ''}`).trim() || 'Account';
      authHTML = `
        <div style="font-size:13px;color:#7A756D;padding:4px 0 12px;border-bottom:1px solid #E0DAD1;margin-bottom:2px;">
          Signed in as <strong style="color:#0C0B09;">${name}</strong>
        </div>
        <button class="mobile-signout-btn">Sign out</button>
      `;
    } else {
      authHTML = `<a href="#" class="btn btn-outline mobile-signin-btn" style="justify-content:center;">Sign in</a>`;
    }

    const cartAnchor = nav.querySelector('a[href="cart.html"]');
    const cartHTML = cartAnchor
      ? `<a href="cart.html" class="btn btn-dark" style="justify-content:center;">${cartAnchor.innerHTML}</a>`
      : `<a href="cart.html" class="btn btn-dark" style="justify-content:center;"><i class="ph ph-shopping-cart" style="font-size:15px;"></i> Cart</a>`;

    const panel = document.createElement('div');
    panel.className = 'mobile-nav-panel';
    panel.id = 'mobile-nav-panel';
    panel.innerHTML = `
      <ul class="mobile-nav-links">${linksHTML}</ul>
      <div class="mobile-nav-actions">
        ${authHTML}
        <a href="chats.html" class="btn btn-outline" style="justify-content:center;"><i class="ph-bold ph-chat-circle-text" style="font-size:14px;"></i> Messages</a>
        <a href="wishlist.html" class="btn btn-outline" style="justify-content:center;"><i class="ph-fill ph-heart" style="font-size:14px;"></i> Wishlist</a>
        ${cartHTML}
      </div>
    `;
    nav.insertAdjacentElement('afterend', panel);

    const signinBtn = panel.querySelector('.mobile-signin-btn');
    if (signinBtn) {
      signinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closePanel();
        openAuthModal('signin');
      });
    }

    const signoutBtn = panel.querySelector('.mobile-signout-btn');
    if (signoutBtn) {
      signoutBtn.addEventListener('click', () => {
        clearSession();
        location.reload();
      });
    }

    function openPanel() {
      panel.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      const icon = btn.querySelector('i');
      if (icon) { icon.className = 'ph-bold ph-x'; icon.style.cssText = 'font-size:20px;pointer-events:none;'; }
      document.body.style.overflow = 'hidden';
    }

    function closePanel() {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      const icon = btn.querySelector('i');
      if (icon) { icon.className = 'ph-bold ph-list'; icon.style.cssText = 'font-size:20px;pointer-events:none;'; }
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.contains('open') ? closePanel() : openPanel();
    });

    panel.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => closePanel());
    });

    document.addEventListener('click', (e) => {
      if (panel.classList.contains('open') && !nav.contains(e.target) && !panel.contains(e.target)) {
        closePanel();
      }
    });

    window._closeMobileNav = closePanel;
  }

  // ── Init ───────────────────────────────────────────────────────
  function init() {
    injectHTML();

    // Search overlay events
    const soClose = document.getElementById('so-close-btn');
    const soOverlay = document.getElementById('search-overlay');
    const soInput = document.getElementById('so-input');

    if (soClose) soClose.addEventListener('click', closeSearch);
    if (soOverlay) {
      soOverlay.addEventListener('click', (e) => {
        if (e.target === soOverlay) closeSearch();
      });
    }
    if (soInput) {
      soInput.addEventListener('input', () => renderSearchResults(soInput.value));
      soInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
      });
    }

    // Auth modal events
    const authClose = document.getElementById('auth-modal-close');
    const authBackdrop = document.getElementById('auth-modal-backdrop');

    if (authClose) authClose.addEventListener('click', closeAuthModal);
    if (authBackdrop) {
      authBackdrop.addEventListener('click', (e) => {
        if (e.target === authBackdrop) closeAuthModal();
      });
    }

    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    const siSubmit = document.getElementById('si-submit');
    if (siSubmit) siSubmit.addEventListener('click', handleSignIn);

    const suSubmit = document.getElementById('su-submit');
    if (suSubmit) suSubmit.addEventListener('click', handleSignUp);

    // Enter key on password fields
    const siPass = document.getElementById('si-password');
    if (siPass) siPass.addEventListener('keydown', e => { if (e.key === 'Enter') handleSignIn(); });
    const suPass = document.getElementById('su-password');
    if (suPass) suPass.addEventListener('keydown', e => { if (e.key === 'Enter') handleSignUp(); });

    // Global ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSearch();
        closeAuthModal();
      }
    });

    // Wire search + sign-in buttons
    wireSearchButtons();
    updateNavForSession();
    injectMobileNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.MM_AUTH = { openAuthModal, closeAuthModal, openSearch, closeSearch };
})();
