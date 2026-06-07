(function () {
  'use strict';

  var KEY = 'mm_chats';
  var REPLIES = [
    'Hello! Thank you for reaching out. How can I help you today?',
    'Hi! Yes, we have that item in stock. What quantity are you looking for?',
    'Good day! We offer both wholesale and retail. What\'s your budget?',
    'Hello! Our products are of premium quality. Would you like more details?',
    'Hi there! We do delivery within Lagos. What area are you in?',
    'Thank you for your interest! Come visit our stall for the best prices.',
    'Hello! We\'re open Monday to Saturday, 8am–6pm. How can I assist?',
    'Hi! Yes, we do bulk orders with special pricing. Tell me more about what you need.',
  ];

  // ── Storage ────────────────────────────────────────────────────
  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  }
  function save(chats) { localStorage.setItem(KEY, JSON.stringify(chats)); }

  function getOrCreate(vendorId, vendorData) {
    var chats = getAll();
    if (!chats[vendorId]) {
      chats[vendorId] = {
        vendorId:     vendorId,
        vendorName:   vendorData.name       || 'Vendor',
        vendorAvatar: vendorData.avatar     || '🏪',
        marketName:   vendorData.marketName || '',
        marketId:     vendorData.marketId   || '',
        sub:          vendorData.sub        || '',
        messages:     [],
        unread:       0,
        lastMessage:  '',
        lastAt:       Date.now(),
      };
      save(chats);
    }
    return getAll()[vendorId];
  }

  function addMessage(vendorId, text, from) {
    var chats = getAll();
    if (!chats[vendorId]) return null;
    var msg = { id: Date.now() + Math.random(), text: text, from: from, at: Date.now() };
    chats[vendorId].messages.push(msg);
    chats[vendorId].lastMessage = text;
    chats[vendorId].lastAt = msg.at;
    if (from === 'vendor') chats[vendorId].unread = (chats[vendorId].unread || 0) + 1;
    save(chats);
    dispatch();
    return msg;
  }

  function markRead(vendorId) {
    var chats = getAll();
    if (chats[vendorId]) { chats[vendorId].unread = 0; save(chats); dispatch(); }
  }

  function totalUnread() {
    return Object.values(getAll()).reduce(function (s, c) { return s + (c.unread || 0); }, 0);
  }

  function dispatch() {
    document.dispatchEvent(new CustomEvent('mm-chats-change'));
    refreshNavCount();
  }

  // ── Nav button ─────────────────────────────────────────────────
  function injectNavBtn() {
    var navActions = document.querySelector('.nav-actions');
    if (!navActions || document.getElementById('nav-chats-btn')) return;
    var n = totalUnread();
    var btn = document.createElement('a');
    btn.href = 'chats.html';
    btn.className = 'nav-chats-btn';
    btn.id = 'nav-chats-btn';
    btn.title = 'Messages';
    btn.setAttribute('aria-label', 'Messages');
    btn.innerHTML =
      '<i class="ph-bold ph-chat-circle-text"></i>' +
      '<span class="chats-nav-count" id="chats-nav-count" style="display:' + (n > 0 ? 'flex' : 'none') + '">' + (n > 0 ? n : '') + '</span>';
    var before = document.getElementById('nav-wishlist-btn') || navActions.querySelector('a.btn-outline') || navActions.firstChild;
    navActions.insertBefore(btn, before);
  }

  function refreshNavCount() {
    var el = document.getElementById('chats-nav-count');
    var n = totalUnread();
    if (!el) return;
    el.textContent = n > 0 ? String(n) : '';
    el.style.display = n > 0 ? 'flex' : 'none';
  }

  // ── Chat modal ─────────────────────────────────────────────────
  var _vid = null;

  function injectModal() {
    if (document.getElementById('mm-chat-modal')) return;
    var el = document.createElement('div');
    el.id = 'mm-chat-modal';
    el.className = 'mm-chat-modal';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML =
      '<div class="mm-chat-panel">' +
        '<div class="mm-chat-header">' +
          '<div class="mm-chat-h-avatar" id="mm-chat-h-avatar">🏪</div>' +
          '<div class="mm-chat-h-info">' +
            '<div class="mm-chat-h-name" id="mm-chat-h-name">Vendor</div>' +
            '<div class="mm-chat-h-sub" id="mm-chat-h-sub">Market</div>' +
          '</div>' +
          '<div class="mm-chat-h-btns">' +
            '<a href="chats.html" class="mm-chat-h-icon-btn" title="All messages"><i class="ph-bold ph-chats-circle"></i></a>' +
            '<button class="mm-chat-h-icon-btn" id="mm-chat-close" title="Close"><i class="ph-bold ph-x"></i></button>' +
          '</div>' +
        '</div>' +
        '<div class="mm-chat-body" id="mm-chat-body"></div>' +
        '<div class="mm-chat-footer">' +
          '<input type="text" id="mm-chat-input" class="mm-chat-input" placeholder="Type a message…" autocomplete="off"/>' +
          '<button class="mm-chat-send-btn" id="mm-chat-send-btn"><i class="ph-fill ph-paper-plane-tilt"></i></button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);

    document.getElementById('mm-chat-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && _vid) closeModal(); });

    var input = document.getElementById('mm-chat-input');
    document.getElementById('mm-chat-send-btn').addEventListener('click', doSend);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(); }
    });
  }

  function doSend() {
    var input = document.getElementById('mm-chat-input');
    var text = input.value.trim();
    if (!text || !_vid) return;
    input.value = '';
    addMessage(_vid, text, 'user');
    renderBody(_vid);
    var vid = _vid;
    setTimeout(function () {
      var reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
      addMessage(vid, reply, 'vendor');
      if (_vid === vid) { renderBody(vid); } else { refreshNavCount(); }
    }, 900 + Math.floor(Math.random() * 700));
  }

  function renderBody(vendorId) {
    var el = document.getElementById('mm-chat-body');
    if (!el) return;
    var chat = getAll()[vendorId];
    if (!chat) return;
    if (!chat.messages.length) {
      el.innerHTML = '<div class="mm-chat-empty-msgs">' +
        '<i class="ph-bold ph-chat-circle-text" style="font-size:34px;color:#E0DAD1;margin-bottom:10px"></i>' +
        '<span>Say hi to ' + esc(chat.vendorName) + '!</span>' +
        '</div>';
      return;
    }
    el.innerHTML = chat.messages.map(function (m) {
      var cls = m.from === 'user' ? 'mm-msg-user' : 'mm-msg-vendor';
      return '<div class="mm-msg ' + cls + '">' +
        '<div class="mm-msg-bubble">' + esc(m.text) + '</div>' +
        '<div class="mm-msg-time">' + fmtTime(m.at) + '</div>' +
        '</div>';
    }).join('');
    el.scrollTop = el.scrollHeight;
  }

  function openModal(vendorId, vendorData) {
    getOrCreate(vendorId, vendorData);
    markRead(vendorId);
    _vid = vendorId;
    var chat = getAll()[vendorId];
    document.getElementById('mm-chat-h-avatar').textContent = chat.vendorAvatar;
    document.getElementById('mm-chat-h-name').textContent = chat.vendorName;
    document.getElementById('mm-chat-h-sub').textContent = chat.marketName + (chat.sub ? ' · ' + chat.sub : '');
    var input = document.getElementById('mm-chat-input');
    if (input) input.placeholder = 'Message ' + chat.vendorName + '…';
    renderBody(vendorId);
    var modal = document.getElementById('mm-chat-modal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(function () { if (input) input.focus(); }, 60);
  }

  function closeModal() {
    _vid = null;
    var modal = document.getElementById('mm-chat-modal');
    if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
  }

  // ── Helpers ────────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function fmtTime(ts) {
    var d = new Date(ts);
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
  }

  // ── Global API ─────────────────────────────────────────────────
  window.mmChatSlug = function (s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  window.mmOpenChat = openModal;

  window.mmChatFromBtn = function (btn) {
    if (!window.mmOpenChat) return;
    mmOpenChat(btn.dataset.vid, {
      name:       btn.dataset.vname,
      avatar:     btn.dataset.vavatar,
      marketId:   btn.dataset.vmarket,
      marketName: btn.dataset.vmarketname,
      sub:        btn.dataset.vsub || '',
    });
  };

  window.MM_CHATS = {
    getAll: getAll,
    getOrCreate: getOrCreate,
    addMessage: addMessage,
    markRead: markRead,
    totalUnread: totalUnread,
    refreshNavCount: refreshNavCount,
    renderBody: renderBody,
    REPLIES: REPLIES,
  };

  // ── Init ──────────────────────────────────────────────────────
  function init() { injectNavBtn(); injectModal(); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
