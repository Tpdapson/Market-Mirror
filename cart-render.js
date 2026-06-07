(function () {
  'use strict';

  var COLORS = ['ci-img-1','ci-img-2','ci-img-3','ci-img-4','ci-img-5','ci-img-6'];

  function fmt(n) {
    return '₦' + Number(n).toLocaleString();
  }

  function renderCart() {
    var items = MM_CART.get();
    var listEl  = document.getElementById('cart-items-list');
    var osEl    = document.getElementById('os-items-list');
    var hdrEl   = document.getElementById('cart-header-count');
    var countEl = document.getElementById('os-item-count');
    var subEl   = document.getElementById('os-subtotal');
    var totalEl = document.getElementById('os-total');

    if (!listEl) return;

    // ── Empty state ────────────────────────────────────────────────
    if (!items.length) {
      if (hdrEl) hdrEl.textContent = '0 items';
      if (countEl) countEl.textContent = '0';
      if (subEl) subEl.textContent = '₦0';
      if (totalEl) totalEl.textContent = '₦350';
      if (osEl) osEl.innerHTML = '<div style="padding:16px;font-size:13px;color:var(--muted);text-align:center;">Your cart is empty</div>';
      listEl.innerHTML = `
        <div style="text-align:center;padding:72px 24px;">
          <div style="font-size:56px;margin-bottom:20px;">🛒</div>
          <h3 style="font-family:'Inter',sans-serif;font-size:22px;font-weight:700;letter-spacing:-0.02em;margin-bottom:8px;">Your cart is empty</h3>
          <p style="font-size:14px;color:var(--muted);margin-bottom:24px;">Browse our markets and add products to get started</p>
          <a href="index.html#markets" class="btn btn-dark">Browse markets →</a>
        </div>`;
      return;
    }

    // ── Cart items ─────────────────────────────────────────────────
    var itemCount = items.length;
    var subtotal  = MM_CART.total();
    var vendors   = [...new Set(items.map(function(i){ return i.vendor; }))];

    if (hdrEl) hdrEl.textContent = itemCount + ' item' + (itemCount !== 1 ? 's' : '') + ' from ' + vendors.length + ' vendor' + (vendors.length !== 1 ? 's' : '');
    if (countEl) countEl.textContent = itemCount;
    if (subEl) subEl.textContent = fmt(subtotal);
    if (totalEl) totalEl.textContent = fmt(subtotal + 350);

    // Item rows
    listEl.innerHTML = items.map(function (item, idx) {
      var colorClass = COLORS[idx % COLORS.length];
      var itemSubtotal = (item.priceNum || 0) * (item.qty || 1);
      return `
        <div class="cart-item" data-id="${escHtml(item.id)}">
          <div class="ci-img ${colorClass}" style="text-decoration:none;display:flex;align-items:center;justify-content:center;font-size:26px;border-radius:12px;">${item.emoji || '🛍️'}</div>
          <div class="ci-body">
            <div class="ci-vendor">${escHtml(item.vendor)} <span class="verified">&#10003;</span></div>
            <div class="ci-name">${escHtml(item.name)}</div>
            <div class="ci-sub">${escHtml(item.marketName || '')} &middot; ${escHtml(item.unit || '')}</div>
            <div class="ci-controls">
              <div class="qty-control">
                <button class="qty-btn" data-action="minus" data-id="${escHtml(item.id)}">&#8722;</button>
                <div class="qty-num" id="qty-${escHtml(item.id)}">${item.qty}</div>
                <button class="qty-btn" data-action="plus" data-id="${escHtml(item.id)}">&#43;</button>
              </div>
              <button class="ci-remove" data-action="remove" data-id="${escHtml(item.id)}">Remove</button>
            </div>
          </div>
          <div class="ci-price-col">
            <div class="ci-price">${escHtml(item.price)}</div>
            <div class="ci-unit">per ${escHtml(item.unit || 'unit')}</div>
            <div class="ci-subtotal" id="sub-${escHtml(item.id)}">Subtotal: <strong>${fmt(itemSubtotal)}</strong></div>
          </div>
        </div>`;
    }).join('');

    // Sidebar mini-list
    if (osEl) {
      osEl.innerHTML = items.map(function (item, idx) {
        var colorClass = COLORS[idx % COLORS.length];
        var itemSub = (item.priceNum || 0) * (item.qty || 1);
        return `
          <div class="os-item">
            <div class="os-item-img ${colorClass}" style="display:flex;align-items:center;justify-content:center;font-size:18px;border-radius:8px;">${item.emoji || '🛍️'}</div>
            <div class="os-item-info">
              <div class="os-item-name">${escHtml(item.name)}</div>
              <div class="os-item-sub">${item.qty} × ${escHtml(item.price)}</div>
            </div>
            <div class="os-item-price">${fmt(itemSub)}</div>
          </div>`;
      }).join('');
    }

    // ── Event delegation for qty +/- and remove ────────────────────
    listEl.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-action]');
      if (!btn) return;
      var action = btn.dataset.action;
      var id     = btn.dataset.id;
      if (!id) return;

      if (action === 'remove') {
        MM_CART.remove(id);
        renderCart();
        return;
      }

      var currentItem = MM_CART.get().find(function(i){ return i.id === id; });
      if (!currentItem) return;
      var newQty = (currentItem.qty || 1) + (action === 'plus' ? 1 : -1);
      MM_CART.updateQty(id, newQty);
      renderCart();
    });
  }

  // ── Clear cart button ──────────────────────────────────────────
  var clearBtn = document.querySelector('.clear-cart');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      if (confirm('Clear all items from your cart?')) {
        MM_CART.clear();
        renderCart();
      }
    });
  }

  // ── Proceed to checkout updates total on button ────────────────
  function updateCheckoutBtn() {
    var btn = document.querySelector('.btn-checkout');
    if (!btn) return;
    var total = MM_CART.total() + 350;
    btn.textContent = 'Proceed to Checkout → ' + (total > 350 ? '(' + ('₦' + total.toLocaleString()) + ')' : '');
  }

  function escHtml(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function init() {
    renderCart();
    updateCheckoutBtn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
