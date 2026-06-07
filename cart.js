(function () {
  'use strict';

  var CART_KEY  = 'mm_cart';
  var ORDER_KEY = 'mm_pending_order';

  window.MM_CART = {

    get: function () {
      try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; }
    },

    save: function (items) {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
      this.refreshNav();
    },

    add: function (item) {
      var items = this.get();
      var id = (item.name + '-' + item.marketId).replace(/[^a-z0-9]/gi, '-').toLowerCase();
      item.id = id;
      var existing = null;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) { existing = items[i]; break; }
      }
      if (existing) {
        existing.qty = (existing.qty || 1) + (item.qty || 1);
      } else {
        var entry = {};
        for (var k in item) entry[k] = item[k];
        entry.qty = item.qty || 1;
        items.push(entry);
      }
      this.save(items);
      return this.count();
    },

    remove: function (id) {
      this.save(this.get().filter(function (i) { return i.id !== id; }));
    },

    updateQty: function (id, newQty) {
      if (newQty < 1) { this.remove(id); return; }
      var items = this.get();
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) { items[i].qty = newQty; break; }
      }
      this.save(items);
    },

    clear: function () {
      localStorage.removeItem(CART_KEY);
      this.refreshNav();
    },

    count: function () {
      return this.get().length;
    },

    total: function () {
      return this.get().reduce(function (s, i) { return s + (i.priceNum || 0) * (i.qty || 1); }, 0);
    },

    saveOrder: function (extras) {
      var items = this.get();
      var sub   = this.total();
      var order = {
        id:               'MM-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
        items:            items,
        subtotal:         sub,
        delivery:         0,
        buyerProtection:  350,
        total:            sub + 350,
        placedAt:         Date.now(),
        status:           'confirmed',
        estimatedDelivery:'Today, by 7:00 PM'
      };
      if (extras) {
        for (var k in extras) order[k] = extras[k];
      }
      localStorage.setItem(ORDER_KEY, JSON.stringify(order));
      return order;
    },

    getOrder: function () {
      try { return JSON.parse(localStorage.getItem(ORDER_KEY)); } catch (e) { return null; }
    },

    refreshNav: function () {
      var count = this.count();
      document.querySelectorAll('a[href="cart.html"].btn-dark').forEach(function (el) {
        el.innerHTML = '<i class="ph ph-shopping-cart" style="font-size:15px;"></i> Cart (' + count + ')';
      });
    }
  };

  // Refresh nav count on every page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { MM_CART.refreshNav(); });
  } else {
    MM_CART.refreshNav();
  }
})();
