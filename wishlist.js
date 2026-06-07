(function () {
  'use strict';

  const KEY = 'mm_wishlist';

  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  function save(items) { localStorage.setItem(KEY, JSON.stringify(items)); }

  function add(id, data) {
    const items = getAll();
    items[id] = Object.assign({}, data, { id, addedAt: Date.now() });
    save(items);
    dispatch();
  }
  function remove(id) {
    const items = getAll();
    delete items[id];
    save(items);
    dispatch();
  }
  function has(id) { return !!getAll()[id]; }
  function toggle(id, data) {
    if (has(id)) { remove(id); return false; }
    add(id, data); return true;
  }
  function count() { return Object.keys(getAll()).length; }

  function dispatch() {
    document.dispatchEvent(new CustomEvent('mm-wishlist-change'));
    refreshNavCount();
    updatePageButtons();
  }

  // ── Nav badge ─────────────────────────────────────────────────
  function refreshNavCount() {
    const el = document.getElementById('wishlist-nav-count');
    const n = count();
    if (!el) return;
    el.textContent = n > 0 ? n : '';
    el.style.display = n > 0 ? 'flex' : 'none';
  }

  function injectNavBtn() {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions || document.getElementById('nav-wishlist-btn')) return;
    const n = count();
    const btn = document.createElement('a');
    btn.href = 'wishlist.html';
    btn.className = 'nav-wishlist-btn';
    btn.id = 'nav-wishlist-btn';
    btn.title = 'My Wishlist';
    btn.setAttribute('aria-label', 'My Wishlist');
    btn.innerHTML =
      '<i class="ph-bold ph-heart"></i>' +
      '<span class="wishlist-nav-count" id="wishlist-nav-count" style="display:' + (n > 0 ? 'flex' : 'none') + '">' + (n > 0 ? n : '') + '</span>';
    const signIn = navActions.querySelector('a.btn-outline');
    navActions.insertBefore(btn, signIn || navActions.firstChild);
  }

  // ── Sync all heart buttons on page ────────────────────────────
  function updatePageButtons() {
    document.querySelectorAll('[data-wid]').forEach(function(btn) {
      const icon = btn.querySelector('i');
      const active = has(btn.dataset.wid);
      if (icon) {
        icon.className = active ? 'ph-fill ph-heart' : 'ph-bold ph-heart';
        icon.style.color = active ? 'var(--red)' : '';
      }
    });
  }

  // ── Global helpers ────────────────────────────────────────────
  window.mmWishlistSlug = function(str) {
    return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  window.mmToggleWishlist = function(btn) {
    const id = btn.dataset.wid;
    if (!id) return;
    const data = {
      name:       btn.dataset.wname       || '',
      vendor:     btn.dataset.wvendor     || '',
      price:      btn.dataset.wprice      || '',
      priceNum:   parseInt(btn.dataset.wpricenum) || 0,
      unit:       btn.dataset.wunit       || '',
      marketId:   btn.dataset.wmarket     || '',
      marketName: btn.dataset.wmarketname || '',
      image:      btn.dataset.wimage      || '',
      sub:        btn.dataset.wsub        || '',
      rating:     parseFloat(btn.dataset.wrating) || 0,
      reviews:    btn.dataset.wreviews    || '',
    };
    const added = toggle(id, data);
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = added ? 'ph-fill ph-heart' : 'ph-bold ph-heart';
      icon.style.color = added ? 'var(--red)' : '';
    }
    btn.style.transform = 'scale(1.3)';
    setTimeout(function() { btn.style.transform = ''; }, 180);
  };

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    injectNavBtn();
    updatePageButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.MM_WISHLIST = { getAll: getAll, add: add, remove: remove, has: has, toggle: toggle, count: count, refreshNavCount: refreshNavCount, updatePageButtons: updatePageButtons };
})();
