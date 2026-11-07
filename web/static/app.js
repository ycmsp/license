// ============================================================
// 前端 i18n 字典（zh/en）
// ============================================================
const i18n = {
  zh: {
    // Topbar
    'topbar.loading': '加载中...',
    'topbar.logout': '退出',
    'topbar.changepwd': '修改密码',
    // 修改密码弹窗
    'cpwd.title': '修改密码',
    'cpwd.old': '旧密码',
    'cpwd.new': '新密码',
    'cpwd.confirm': '确认新密码',
    'cpwd.cancel': '取消',
    'cpwd.submit': '确认修改',
    'cpwd.msg.empty': '请填写所有字段',
    'cpwd.msg.short': '新密码至少 6 位',
    'cpwd.msg.mismatch': '两次新密码不一致',
    'cpwd.msg.success': '密码修改成功，正在跳转登录...',
    // Contact
    'contact.website': '官网',
    'contact.email': '邮件',
    'contact.teams': 'Teams',
    'contact.qqgroup': 'QQ群',
    'stats.total': '总计',
    'stats.unused': '未使用',
    'stats.active': '已激活',
    'stats.banned': '封停',
    'stats.expired': '过期',
    // Toolbar
    'lbl.count': '开卡数量',
    'lbl.validDays': '有效期',
    'placeholder.validDays': '如 30D/1Y/6M/24H',
    'btn.create': '开卡',
    'filter.all': '全部',
    'filter.unused': '未使用',
    'filter.active': '已激活',
    'filter.banned': '封停',
    'filter.expired': '已过期',
    'btn.search': '查询',
    'btn.refresh': '刷新',
    // Result
    'result.title': '新开卡密',
    'btn.copyKeys': '复制全部',
    // Table headers
    'th.id': 'ID', 'th.key': '卡密', 'th.status': '状态',
    'th.validDays': '有效期', 'th.machine': '机器码',
    'th.activateTime': '激活时间', 'th.expireTime': '到期时间',
    'th.loginCount': '登录次数', 'th.swapCount': '换绑次数',
    'th.banReason': '封禁原因', 'th.actions': '操作',
    // Status names (fallback, 后端也有 i18n)
    'status.0': '未使用', 'status.1': '已激活',
    'status.2': '封停', 'status.3': '已过期', 'status.unknown': '未知',
    // Actions
    'op.unban': '解封', 'op.ban': '封禁', 'op.unbind': '解绑', 'op.delete': '删除',
    // Alerts / Prompts
    'alert.noValidDays': '请输入有效期',
    'alert.createFail': '开卡失败',
    'alert.copied': '已复制',
    'prompt.banReason': '封禁原因：',
    'prompt.defaultBan': '管理员封禁',
    'confirm.unbind': '确认解绑此卡密的机器码？',
    'confirm.delete': '确认删除此卡密？此操作不可恢复。',
    'alert.opFail': '操作失败',
    // Footer
    'footer.powered': 'Powered by Lite License',
  },
  en: {
    'topbar.loading': 'Loading...',
    'topbar.logout': 'Logout',
    'topbar.changepwd': 'Change Password',
    'cpwd.title': 'Change Password',
    'cpwd.old': 'Old Password',
    'cpwd.new': 'New Password',
    'cpwd.confirm': 'Confirm Password',
    'cpwd.cancel': 'Cancel',
    'cpwd.submit': 'Confirm',
    'cpwd.msg.empty': 'Please fill all fields',
    'cpwd.msg.short': 'New password must be at least 6 characters',
    'cpwd.msg.mismatch': 'Passwords do not match',
    'cpwd.msg.success': 'Password changed, redirecting to login...',
    // Contact
    'contact.website': 'Website',
    'contact.email': 'Email',
    'contact.teams': 'Teams',
    'contact.qqgroup': 'QQ Group',
    'stats.total': 'Total',
    'stats.unused': 'Unused',
    'stats.active': 'Active',
    'stats.banned': 'Banned',
    'stats.expired': 'Expired',
    'lbl.count': 'Count',
    'lbl.validDays': 'Valid Days',
    'placeholder.validDays': 'e.g. 30D/1Y/6M/24H',
    'btn.create': 'Issue Keys',
    'filter.all': 'All',
    'filter.unused': 'Unused',
    'filter.active': 'Active',
    'filter.banned': 'Banned',
    'filter.expired': 'Expired',
    'btn.search': 'Search',
    'btn.refresh': 'Refresh',
    'result.title': 'New Keys Issued',
    'btn.copyKeys': 'Copy All',
    'th.id': 'ID', 'th.key': 'Key', 'th.status': 'Status',
    'th.validDays': 'Valid', 'th.machine': 'Machine',
    'th.activateTime': 'Activated', 'th.expireTime': 'Expires',
    'th.loginCount': 'Logins', 'th.swapCount': 'Swaps',
    'th.banReason': 'Ban Reason', 'th.actions': 'Actions',
    'status.0': 'Unused', 'status.1': 'Active',
    'status.2': 'Banned', 'status.3': 'Expired', 'status.unknown': 'Unknown',
    'op.unban': 'Unban', 'op.ban': 'Ban', 'op.unbind': 'Unbind', 'op.delete': 'Delete',
    'alert.noValidDays': 'Please enter valid days',
    'alert.createFail': 'Failed to issue keys',
    'alert.copied': 'Copied',
    'prompt.banReason': 'Ban reason:',
    'prompt.defaultBan': 'Admin ban',
    'confirm.unbind': 'Unbind the machine code from this key?',
    'confirm.delete': 'Delete this key? This cannot be undone.',
    'alert.opFail': 'Operation failed',
    'footer.powered': 'Powered by Lite License',
  }
};

// 语言初始化：localStorage > 浏览器语言 > 默认中文
const LANG = (() => {
  const saved = localStorage.getItem('lang');
  if (saved && (saved === 'zh' || saved === 'en')) return saved;
  const nav = navigator.language || '';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
})();

function T(key) {
  return (i18n[LANG] && i18n[LANG][key]) || (i18n.zh[key]) || key;
}

// ============================================================
// QQ 群号 — 从后端代理接口获取（Go 里 base64 混淆）
// ============================================================
async function showQQGroup() {
  try {
    const res = await fetch('/goto/q');
    const qq = await res.text();
    alert('QQ群号: ' + qq);
  } catch(e) { alert('加载失败'); }
}

// 切换语言按钮点击事件（全局函数，html onclick 用）
// ============================================================
// 修改密码弹窗
// ============================================================
function openChangePwd() {
  document.getElementById('oldPwd').value = '';
  document.getElementById('newPwd').value = '';
  document.getElementById('confirmPwd').value = '';
  document.getElementById('changePwdMsg').textContent = '';
  document.getElementById('changePwdModal').style.display = 'flex';
  applyI18n();
}
function closeChangePwd() {
  document.getElementById('changePwdModal').style.display = 'none';
}
function submitChangePwd() {
  const oldPwd = document.getElementById('oldPwd').value;
  const newPwd = document.getElementById('newPwd').value;
  const confirmPwd = document.getElementById('confirmPwd').value;
  const msgEl = document.getElementById('changePwdMsg');
  if (!oldPwd || !newPwd || !confirmPwd) { msgEl.textContent = T('cpwd.msg.empty'); msgEl.className = 'modal-msg err'; return; }
  if (newPwd.length < 6) { msgEl.textContent = T('cpwd.msg.short'); msgEl.className = 'modal-msg err'; return; }
  if (newPwd !== confirmPwd) { msgEl.textContent = T('cpwd.msg.mismatch'); msgEl.className = 'modal-msg err'; return; }
  msgEl.textContent = ''; msgEl.className = 'modal-msg';
  fetch(API + '/changepwd?lang=' + LANG, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ old_password: oldPwd, new_password: newPwd }),
  }).then(r => r.json()).then(data => {
    if (data.status === 'success') {
      msgEl.textContent = T('cpwd.msg.success');
      msgEl.className = 'modal-msg ok';
      setTimeout(() => { localStorage.removeItem('token'); window.location.href = '/'; }, 1200);
    } else {
      msgEl.textContent = data.message || 'Error';
      msgEl.className = 'modal-msg err';
    }
  }).catch(() => { msgEl.textContent = 'Network error'; msgEl.className = 'modal-msg err'; });
}

function switchLang() {
  const next = LANG === 'zh' ? 'en' : 'zh';
  localStorage.setItem('lang', next);
  location.reload();
}

// 翻译 DOM 上所有 [data-i18n] 元素
// data-i18n="key" 设置 innerText
// data-i18n-ph="key" 设置 placeholder
// data-i18n-title="key" 设置 title
function applyI18n() {
  // 按钮 / 标签 / 普通文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = T(el.getAttribute('data-i18n'));
  });
  // placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', T(el.getAttribute('data-i18n-ph')));
  });
  // title
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', T(el.getAttribute('data-i18n-title')));
  });
  // filter option 单独处理（select 的 option）
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    el.textContent = T(el.getAttribute('data-i18n'));
  });
  // html lang 属性
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  // 语言切换按钮 label（当前是中文就显示 EN 让用户切英文，反之）
  const langBtnLabel = document.getElementById('langLabel');
  if (langBtnLabel) langBtnLabel.textContent = LANG === 'zh' ? 'EN' : '中文';
}

// ============================================================
// API 调用（自动带 ?lang=）
// ============================================================
const API = '/api/admin';
let token = localStorage.getItem('token');
let currentPage = 1;
const pageSize = 20;

if (!token) { window.location.href = '/'; }

document.getElementById('logoutBtn').onclick = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

async function api(path, opts = {}) {
  // 自动追加 ?lang=en 或 &lang=en
  const sep = path.includes('?') ? '&' : '?';
  const url = API + path + sep + 'lang=' + LANG;
  const res = await fetch(url, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      ...(opts.headers || {})
    }
  });
  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/';
    return null;
  }
  return res.json();
}

// 加载统计
async function loadStats() {
  const data = await api('/stats');
  if (data && data.data) {
    const s = data.data;
    document.getElementById('statsBar').innerHTML =
      `<span>${T('stats.total')}<span class="num">${s.total}</span></span>` +
      `<span>${T('stats.unused')}<span class="num">${s.unused}</span></span>` +
      `<span>${T('stats.active')}<span class="num">${s.active}</span></span>` +
      `<span>${T('stats.banned')}<span class="num">${s.banned}</span></span>` +
      `<span>${T('stats.expired')}<span class="num">${s.expired}</span></span>`;
  }
}

// 加载卡密列表
async function loadCards() {
  const status = document.getElementById('statusFilter').value;
  const params = new URLSearchParams({ page: currentPage, page_size: pageSize });
  if (status) params.set('status', status);
  const data = await api('/cards?' + params);
  if (!data) return;
  const tbody = document.getElementById('cardTableBody');
  tbody.innerHTML = '';
  const statusNames = {
    0: T('status.0'), 1: T('status.1'), 2: T('status.2'), 3: T('status.3')
  };
  for (const c of (data.data || [])) {
    const tr = document.createElement('tr');
    tr.className = 'status-' + c.status;
    tr.innerHTML = `
      <td>${c.id}</td>
      <td><code>${c.key_code}</code></td>
      <td class="status-${c.status}">${statusNames[c.status] || T('status.unknown')}</td>
      <td>${c.valid_days || ''}</td>
      <td>${c.machine_code || '-'}</td>
      <td>${fmt(c.activate_time)}</td>
      <td>${fmt(c.expire_time)}</td>
      <td>${c.login_count || 0}</td>
      <td>${c.swap_count || 0}</td>
      <td>${c.ban_reason || '-'}</td>
      <td>
        ${c.status === 2 ? `<button class="op-btn btn-unban" onclick="unbanCard(${c.id})">${T('op.unban')}</button>` : ''}
        ${c.status !== 2 ? `<button class="op-btn btn-ban" onclick="banCard(${c.id})">${T('op.ban')}</button>` : ''}
        ${c.machine_code ? `<button class="op-btn btn-unbind" onclick="unbindCard(${c.id})">${T('op.unbind')}</button>` : ''}
        <button class="op-btn btn-del" onclick="deleteCard(${c.id})">${T('op.delete')}</button>
      </td>`;
    tbody.appendChild(tr);
  }
  renderPagination(data.total);
}

function renderPagination(total) {
  const pages = Math.ceil(total / pageSize);
  const el = document.getElementById('pagination');
  if (pages <= 1) { el.innerHTML = ''; return; }
  let html = '';
  for (let i = 1; i <= pages; i++) {
    html += `<button class="${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  }
  el.innerHTML = html;
}

function goPage(p) { currentPage = p; loadCards(); }

function fmt(t) {
  if (!t) return '-';
  if (typeof t !== 'string') return '-';
  if (t.startsWith('0001')) return '-';
  return t.replace('T', ' ').substring(0, 19);
}

// 开卡
document.getElementById('createBtn').onclick = async () => {
  const count = parseInt(document.getElementById('createCount').value) || 1;
  const valid_days = document.getElementById('validDays').value.trim();
  if (!valid_days) { alert(T('alert.noValidDays')); return; }
  const data = await api('/cards', { method: 'POST', body: JSON.stringify({ count, valid_days }) });
  if (data && data.keys) {
    document.getElementById('resultKeys').style.display = 'block';
    document.getElementById('keyList').value = data.keys.join('\n');
    loadCards();
    loadStats();
  } else if (data) {
    alert(data.message || T('alert.createFail'));
  }
};

document.getElementById('copyKeysBtn').onclick = () => {
  const ta = document.getElementById('keyList');
  ta.select();
  document.execCommand('copy');
  alert(T('alert.copied'));
};

// 封禁
async function banCard(id) {
  const reason = prompt(T('prompt.banReason'), T('prompt.defaultBan'));
  if (reason === null) return;
  const data = await api(`/cards/${id}/ban`, {
    method: 'PUT',
    body: JSON.stringify({ reason })
  });
  alert(data.message || (data.error || T('alert.opFail')));
  loadCards(); loadStats();
}

// 解封
async function unbanCard(id) {
  const data = await api(`/cards/${id}/unban`, { method: 'PUT' });
  alert(data.message || (data.error || T('alert.opFail')));
  loadCards(); loadStats();
}

// 解绑
async function unbindCard(id) {
  if (!confirm(T('confirm.unbind'))) return;
  const data = await api(`/cards/${id}/unbind`, { method: 'POST' });
  alert(data.message || (data.error || T('alert.opFail')));
  loadCards(); loadStats();
}

// 删除
async function deleteCard(id) {
  if (!confirm(T('confirm.delete'))) return;
  const data = await api(`/cards/${id}`, { method: 'DELETE' });
  alert(data.message || (data.error || T('alert.opFail')));
  loadCards(); loadStats();
}

// 筛选
document.getElementById('searchBtn').onclick = () => { currentPage = 1; loadCards(); };
document.getElementById('refreshBtn').onclick = () => { loadCards(); loadStats(); };

// 初始加载
applyI18n();
loadStats();
loadCards();
