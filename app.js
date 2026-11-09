const PRODUCTS = [
  {id:'gamepass', cv:{top:'АВТО 24/7',t:'XBOX<br>GAME PASS',s:'ULTIMATE',b:'1-12 МЕСЯЦЕВ',f:'',th:'g'},
   name:'XBOX GAME PASS ULTIMATE 1-2-3-6-12 МЕСЯЦЕВ', kind:'Покупка на ваш аккаунт', sold:32403, rating:4.9, reviews:8383, cat:'Подписки',
   desc:'Сотни игр для Xbox Series X|S, Xbox One и PC, EA Play, облачный гейминг и онлайн. Активация на ваш аккаунт за 5 минут после оплаты.',
   options:[{label:'1 МЕСЯЦ (Любой аккаунт без активной подписки)',price:999,old:1999},{label:'3 МЕСЯЦА (Любой аккаунт без активной подписки)',price:2690,old:4990},{label:'6 МЕСЯЦЕВ (Любой аккаунт без активной подписки)',price:4990,old:8990},{label:'12 МЕСЯЦЕВ (Любой аккаунт без активной подписки)',price:8490,old:15990}]},
  {id:'pcpass', cv:{top:'БЕЗ ВХОДА',t:'PC<br>GAME PASS',s:'ДЛЯ WINDOWS',b:'1-3 МЕСЯЦА',f:'',th:'gw'},
   name:'PC GAME PASS 1-3 МЕСЯЦА | АКТИВАЦИЯ НА ВАШ АККАУНТ', kind:'Покупка на ваш аккаунт', sold:4210, rating:4.9, reviews:640, cat:'Подписки',
   desc:'Библиотека игр для PC, новинки в день релиза и EA Play. Активация без передачи пароля.',
   options:[{label:'1 МЕСЯЦ',price:850,old:1290},{label:'3 МЕСЯЦА',price:2290,old:3490}]},
  {id:'gta5', cv:{top:'ТОП ПРОДАЖ',t:'GTA V',s:'PREMIUM EDITION',b:'STEAM КЛЮЧ',f:'',th:'o'},
   name:'GRAND THEFT AUTO V PREMIUM EDITION | STEAM КЛЮЧ РФ+СНГ', kind:'Активация', sold:15260, rating:4.9, reviews:3104, cat:'Игры',
   desc:'Сюжетный режим и GTA Online. Ключ для активации в Steam приходит на почту сразу после оплаты.',
   options:[{label:'Premium Edition (Steam, РФ и СНГ)',price:1290,old:2490},{label:'Premium Edition + 1 000 000 $ GTA Online',price:1690,old:3290}]},
  {id:'psplus', cv:{top:'БЕЗ КОМИССИИ',t:'PS PLUS',s:'ТУРЦИЯ · УКР',b:'ESSENTIAL · EXTRA · DELUXE',f:'🇹🇷',th:'y'},
   name:'PS PLUS ТУРЦИЯ | ESSENTIAL · EXTRA · DELUXE 1-12 МЕС', kind:'Подписка', sold:28015, rating:4.8, reviews:5120, cat:'PlayStation',
   desc:'Подписка PS Plus для PS4/PS5 на турецкий аккаунт. Онлайн, ежемесячные игры и каталог.',
   options:[{label:'Essential · 1 МЕСЯЦ',price:699,old:999},{label:'Extra · 1 МЕСЯЦ',price:899,old:1490},{label:'Deluxe · 1 МЕСЯЦ',price:990,old:3299},{label:'Deluxe · 12 МЕСЯЦЕВ',price:6990,old:12990}]},
  {id:'steam', cv:{top:'5 МЛН+',t:'STEAM',s:'АВТОПОПОЛНЕНИЕ',b:'RUB · KZT · UAH',f:'',th:'k'},
   name:'ПОПОЛНЕНИЕ STEAM РФ-СНГ RUB-KZT-UAH 24/7', kind:'Пополнение', sold:6328844, rating:5.0, reviews:41200, cat:'Пополнение',
   desc:'Автоматическое пополнение кошелька Steam по логину. Зачисление за 1-5 минут, круглосуточно.',
   options:[{label:'500 ₽ на баланс',price:537},{label:'1000 ₽ на баланс',price:1074},{label:'3000 ₽ на баланс',price:3222}]},
  {id:'psn-usd', cv:{top:'АВТО 24/7',t:'PSN<br>GIFT CARD',s:'США · USD',b:'10-100 $',f:'🇺🇸',th:'b'},
   name:'PLAYSTATION NETWORK (PSN) 10-100$ США + ПОДАРОК', kind:'Карта оплаты', sold:72488, rating:4.9, reviews:9120, cat:'PlayStation',
   desc:'Код пополнения кошелька PSN для американского аккаунта. Мгновенная выдача.',
   options:[{label:'10 $',price:1190},{label:'25 $',price:2890},{label:'50 $',price:5690}]},
  {id:'robux', cv:{top:'GLOBAL',t:'ROBLOX',s:'КОД ПОПОЛНЕНИЯ',b:'400-10000 ROBUX',f:'🌍',th:'r'},
   name:'ROBLOX GIFT CARD 400-10000 ROBUX | ВСЕ РЕГИОНЫ', kind:'Подарочная карта', sold:19340, rating:4.9, reviews:2611, cat:'Карты',
   desc:'Цифровой код пополнения Robux, работает во всех регионах. Код приходит на почту.',
   options:[{label:'400 Robux',price:459},{label:'800 Robux',price:849},{label:'1700 Robux',price:1690}]},
  {id:'apple', cv:{top:'АВТО 24/7',t:'APP STORE<br>& ITUNES',s:'РОССИЯ',b:'500-8000 РУБ',f:'🇷🇺',th:'s'},
   name:'ПОДАРОЧНАЯ КАРТА APPLE ITUNES / APP STORE [РОССИЯ]', kind:'Карта оплаты', sold:10870, rating:4.9, reviews:1980, cat:'Карты',
   desc:'Код пополнения Apple ID (регион Россия): приложения, подписки, iCloud.',
   options:[{label:'500 ₽',price:629},{label:'1000 ₽',price:1190},{label:'3000 ₽',price:3390}]},
  {id:'minecraft', cv:{top:'ВСЕ СТРАНЫ',t:'MINECRAFT',s:'JAVA + BEDROCK',b:'КЛЮЧ ДЛЯ ПК',f:'',th:'m'},
   name:'MINECRAFT: JAVA + BEDROCK ДЛЯ ПК | КЛЮЧ ВСЕ СТРАНЫ', kind:'Ключ', sold:8450, rating:4.9, reviews:1302, cat:'Игры',
   desc:'Обе версии игры для Windows в одном ключе. Активация в официальном лаунчере.',
   options:[{label:'Java + Bedrock Edition',price:1699,old:1899}]},
  {id:'eaplay', cv:{top:'UA · TR',t:'EA PLAY',s:'ДЛЯ PS4 · PS5',b:'1-12 МЕСЯЦЕВ',f:'🇹🇷',th:'p'},
   name:'EA PLAY PLAYSTATION 1-12 МЕС | ТУРЦИЯ · УКРАИНА', kind:'Активация', sold:2213, rating:4.8, reviews:404, cat:'PlayStation',
   desc:'Подписка EA Play: библиотека игр EA, пробные версии новинок и скидка 10%.',
   options:[{label:'1 МЕСЯЦ',price:450,old:690},{label:'12 МЕСЯЦЕВ',price:2390,old:3490}]},
  {id:'spotify', cv:{top:'РАБОТАЕТ В РФ',t:'SPOTIFY<br>PREMIUM',s:'INDIVIDUAL · DUO · FAMILY',b:'1/3/6/12 МЕСЯЦЕВ',f:'',th:'sp'},
   name:'SPOTIFY PREMIUM 1/3/6/12 МЕСЯЦЕВ | РАБОТАЕТ В РФ', kind:'Покупка на ваш аккаунт', sold:12030, rating:4.8, reviews:2210, cat:'Подписки',
   desc:'Premium на ваш аккаунт без смены страны. Активация в течение 10 минут.',
   options:[{label:'1 МЕСЯЦ',price:299,old:499},{label:'3 МЕСЯЦА',price:799,old:1290},{label:'12 МЕСЯЦЕВ',price:2690,old:4490}]},
  {id:'rdr2', cv:{top:'ХИТ',t:'RED DEAD<br>REDEMPTION 2',s:'ULTIMATE',b:'STEAM КЛЮЧ',f:'',th:'rd'},
   name:'RED DEAD REDEMPTION 2 ULTIMATE | STEAM КЛЮЧ РФ+СНГ', kind:'Активация', sold:6740, rating:4.9, reviews:1180, cat:'Игры',
   desc:'Полная версия с Red Dead Online и бонусами Ultimate Edition. Ключ Steam.',
   options:[{label:'Standard Edition',price:1490,old:2990},{label:'Ultimate Edition',price:1990,old:3990}]},
];
const HOWTO = {
  'Подписки':'Оплатите заказ, укажите почту от аккаунта в чате с продавцом — подписка будет активирована за 5–15 минут. Пароль не нужен.',
  'Игры':'После оплаты ключ придёт на почту. Откройте Steam → «Игры» → «Активировать через Steam» и введите ключ.',
  'PlayStation':'Зайдите в PlayStation Store → «Активировать код» и введите полученный код. Аккаунт должен быть нужного региона.',
  'Пополнение':'Укажите логин Steam (не никнейм!). Деньги поступят на баланс автоматически за 1–5 минут.',
  'Карты':'Код приходит на почту сразу после оплаты. Активируйте его в настройках аккаунта в разделе «Погасить код».',
};
const aboutLines = p => [
  '❗ Товар выдаётся автоматически сразу после оплаты ❗',
  '📜 О нас:',
  '💫 Более 5 лет на рынке цифровых товаров',
  '✅ Выдача 24/7, без выходных',
  '🛡 Гарантия на каждый заказ',
  '📦 О товаре:',
  '🏆 Только официальный продукт',
  '🔥 Лучшие цены',
  '💯 '+p.desc,
  '📩 Если возникли вопросы — пишите в поддержку, ответим в течение 5 минут.',
  '⚠️ Перед покупкой проверьте регион аккаунта: товар работает только в указанном регионе.',
];

// утилиты
const fmt = n => Math.round(n).toLocaleString('ru-RU') + ' ₽';
const byId = id => PRODUCTS.find(p => p.id === id);
const qs = k => new URLSearchParams(location.search).get(k);
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const minOpt = p => p.options.reduce((a,b)=>b.price<a.price?b:a);
const LS = {
  get(k,d){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
};
const PAGE = document.body.dataset.page;
const CATS = [...new Set(PRODUCTS.map(p=>p.cat))];
const CAT_ICON = {'Подписки':'🎮','Игры':'🕹️','PlayStation':'🎯','Пополнение':'💳','Карты':'🎁'};

function toast(msg){
  let t=$('.toast'); if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.classList.add('show'); clearTimeout(t._h); t._h=setTimeout(()=>t.classList.remove('show'),1800);
}

// обложки
const fallback = p => { const c=p.cv; return `<div class="sc th-${c.th}">
  <div class="sc-top">${c.top}</div>
  <div class="sc-mid">${c.f?`<span class="sc-flag">${c.f}</span>`:''}<div class="sc-t">${c.t}</div><div class="sc-s">${c.s}</div></div>
  <div class="sc-b">${c.b}</div><div class="sc-brand">BS</div></div>`; };
const coverHTML = p => p.img ? `<img class="ph" src="${p.img}" alt="" onerror="this.parentNode.classList.remove('has-ph');this.outerHTML=fallback(byId('${p.id}'))">` : fallback(p);
const coverCls = p => p.img ? 'cover has-ph' : 'cover';
const shortName = p => p.cv.t.replace('<br>',' ');

// тема
function setTheme(t){ document.documentElement.dataset.theme=t; LS.set('theme',t); }
const getTheme = () => document.documentElement.dataset.theme || 'dark';

// пользователь
const getUser = () => LS.get('user', null);
function login(email){ LS.set('user',{email, since:Date.now()}); renderProfMenu(); }
function logout(){ LS.set('user',null); renderProfMenu(); toast('Вы вышли из аккаунта'); if(PAGE==='profile') renderProfile(); }

// избранное
const getFavs = () => LS.get('favs', []);
function toggleFav(id){
  const f=getFavs(); const i=f.indexOf(id);
  if(i<0){ f.push(id); toast('Добавлено в избранное ❤️'); } else { f.splice(i,1); toast('Убрано из избранного'); }
  LS.set('favs',f); updateCounters(); return i<0;
}
const favBtn = p => `<button class="fav" data-fav="${p.id}" title="В избранное">${getFavs().includes(p.id)?'❤️':'♡'}</button>`;
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-fav]'); if(!b) return;
  e.preventDefault(); e.stopPropagation();
  const on=toggleFav(b.dataset.fav);
  document.querySelectorAll(`[data-fav="${b.dataset.fav}"]`).forEach(x=>{ if(x.classList.contains('fav')) x.textContent=on?'❤️':'♡'; else x.innerHTML=on?'❤️ <u>В избранном</u>':'♡ <u>В избранное</u>'; });
  if(PAGE==='favorites') renderCatalog();
},true);

// заказы / отзывы
const getOrders = () => LS.get('orders', []);
const getReviews = () => LS.get('reviews', []);

function updateCounters(){
  document.querySelectorAll('[data-cnt=fav]').forEach(e=>e.textContent=getFavs().length||'');
  document.querySelectorAll('[data-cnt=ord]').forEach(e=>e.textContent=getOrders().length||'');
}

// модалки
function openModal(title, html, onMount){
  let bg=$('#modal');
  bg.innerHTML=`<div class="modal"><button class="x" data-close>✕</button><h3>${title}</h3><div class="m-body">${html}</div></div>`;
  bg.classList.add('open'); document.body.style.overflow='hidden';
  if(onMount) onMount(bg.querySelector('.modal'));
}
function closeModal(){ $('#modal').classList.remove('open'); document.body.style.overflow=''; }
document.addEventListener('click',e=>{
  if(e.target.matches('[data-close]') || e.target.id==='modal') closeModal();
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal(); closeDrops(); } });

const INFO = {
  terms:['Условия продажи товара','<p>bs — магазин цифровых товаров. Товар считается переданным в момент выдачи кода или активации на аккаунте покупателя.</p><p>Покупатель обязан проверить регион аккаунта перед покупкой. Цифровые товары надлежащего качества возврату не подлежат.</p><p>По всем вопросам — в чат поддержки, 24/7.</p>'],
  refund:['Политика возврата средств','<p>Если товар не был выдан или код оказался нерабочим, мы вернём деньги в течение 1–3 рабочих дней тем же способом оплаты.</p><p>Для возврата напишите в поддержку и укажите номер заказа.</p>'],
  privacy:['Политика обработки персональных данных','<p>Мы храним только вашу почту и историю заказов — они нужны для выдачи товара и чеков.</p><p>Данные карты вводятся на стороне платёжного сервиса и нам не передаются.</p>'],
  about:['О bs','<p>bs — магазин игровых подписок, ключей и пополнений. Автовыдача 24/7, оплата картой и через СБП.</p>'],
  steamlogin:['Как узнать логин Steam','<p>Логин — это имя, которое вы вводите при входе в Steam (не никнейм в профиле).</p><p>Откройте Steam → нажмите на имя аккаунта справа вверху → «Об аккаунте». Логин написан в первой строке.</p>'],
  safe:['Безопасные сделки','<p>Деньги резервируются до момента выдачи товара. Если что-то пошло не так — поддержка решит вопрос или вернёт оплату.</p>'],
};
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-info]'); if(!b) return; e.preventDefault();
  const [t,h]=INFO[b.dataset.info]; openModal(t,h+'<button class="btn" data-close>Понятно</button>');
});

// шапка
function closeDrops(except){ document.querySelectorAll('.drop.open').forEach(d=>{ if(d!==except){ d.classList.remove('open'); } }); document.querySelectorAll('[data-drop].on').forEach(b=>{ if(!except||b.dataset.drop!==except.id) b.classList.remove('on'); }); }
function toggleDrop(id, anchor){
  const d=document.getElementById(id); const open=!d.classList.contains('open');
  closeDrops(); if(!open) return;
  if(window.innerWidth>=900){ const r=anchor.getBoundingClientRect();
    d.style.position='fixed'; d.style.top=(r.bottom+8)+'px';
    if(id==='profmenu'){ d.style.left='auto'; d.style.right=Math.max(12,innerWidth-r.right)+'px'; } else { d.style.left=r.left+'px'; d.style.right='auto'; } }
  d.classList.add('open'); anchor.classList.add('on');
}
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-drop]');
  if(b){ e.preventDefault(); e.stopPropagation(); toggleDrop(b.dataset.drop,b); return; }
  if(!e.target.closest('.drop')) closeDrops();
});

function renderCatMenu(){
  const m=$('#catmenu'); if(!m) return;
  m.innerHTML=`<a class="drop-row" href="index.html"><span>🔥</span>Все товары<em>${PRODUCTS.length}</em></a>`+
    CATS.map(c=>`<a class="drop-row" href="index.html?cat=${encodeURIComponent(c)}"><span>${CAT_ICON[c]||'•'}</span>${c}<em>${PRODUCTS.filter(p=>p.cat===c).length}</em></a>`).join('')+
    `<a class="drop-row" href="favorites.html"><span>❤️</span>Избранное<em>${getFavs().length}</em></a>`;
}
function renderProfMenu(){
  const m=$('#profmenu'); if(!m) return; const u=getUser();
  m.innerHTML=(u?`<div class="drop-mail">${esc(u.email)}</div>`:`<div class="drop-mail">Вы не вошли</div>`)+
   `<a class="drop-row" href="orders.html"><span>📦</span>Заказы<span class="ar">›</span></a>
    <a class="drop-row" href="favorites.html"><span>❤️</span>Избранное<span class="ar">›</span></a>
    <a class="drop-row" href="profile.html"><span>👤</span>Профиль<span class="ar">›</span></a>
    <button class="drop-row" data-theme-toggle><span>${getTheme()==='dark'?'☀️':'🌙'}</span>${getTheme()==='dark'?'Светлая тема':'Тёмная тема'}<span class="ar">›</span></button>`+
   (u?`<button class="drop-row" data-logout><span>↪</span>Выход<span class="ar">›</span></button>`:`<button class="drop-row" data-login><span>🔑</span>Войти<span class="ar">›</span></button>`);
}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-theme-toggle]')){ setTheme(getTheme()==='dark'?'light':'dark'); renderProfMenu(); if(PAGE==='profile') renderProfile(); }
  if(e.target.closest('[data-logout]')){ closeDrops(); logout(); }
  if(e.target.closest('[data-login]')){ closeDrops(); openLogin(); }
  if(e.target.closest('[data-support]')){ e.preventDefault(); closeDrops(); openSupport(); }
  if(e.target.closest('[data-sell]')){ e.preventDefault(); openSell(); }
  if(e.target.closest('[data-lang]')){ e.preventDefault(); openLang(); }
});

function openLogin(after){
  openModal('Вход в bs',`<p>Введите почту — на неё приходят заказы и чеки.</p>
    <input class="field" id="lg-mail" type="email" placeholder="you@mail.ru" autocomplete="email">
    <button class="btn" id="lg-go">Войти</button>`, m=>{
    const i=m.querySelector('#lg-mail'); i.focus();
    const go=()=>{ const v=i.value.trim(); if(!/^\S+@\S+\.\S+$/.test(v)){ toast('Введите корректную почту'); return; }
      login(v); closeModal(); toast('Вы вошли как '+v); if(after) after(); };
    m.querySelector('#lg-go').onclick=go; i.onkeydown=e=>{ if(e.key==='Enter') go(); };
  });
}
function openSell(){
  openModal('Стать продавцом',`<p>Оставьте заявку — менеджер свяжется с вами в течение дня.</p>
    <input class="field" id="sl-name" placeholder="Название магазина">
    <input class="field" id="sl-mail" type="email" placeholder="Почта" value="${esc(getUser()?.email||'')}">
    <input class="field" id="sl-what" placeholder="Что планируете продавать?">
    <button class="btn" id="sl-go">Отправить заявку</button>`, m=>{
    m.querySelector('#sl-go').onclick=()=>{ if(!m.querySelector('#sl-name').value.trim()||!/^\S+@\S+\.\S+$/.test(m.querySelector('#sl-mail').value)){ toast('Заполните название и почту'); return; }
      closeModal(); toast('Заявка отправлена ✅'); };
  });
}
function openLang(){
  const cur=LS.get('lang','ru');
  openModal('Язык и валюта',`<div class="lbl" style="margin-top:0">Язык</div>
    <div class="pills" id="lang">${[['ru','🇷🇺 Русский'],['en','🇬🇧 English'],['kz','🇰🇿 Қазақша']].map(([k,l])=>`<button class="pill${k===cur?' on':''}" data-k="${k}">${l}</button>`).join('')}</div>
    <div class="lbl">Валюта</div><div class="pills"><button class="pill on">₽ Рубли (RUB)</button></div>
    <p style="margin-top:14px;font-size:13px">Оплата принимается в рублях.</p><button class="btn" data-close>Готово</button>`, m=>{
    m.querySelector('#lang').onclick=e=>{ const b=e.target.closest('.pill'); if(!b) return; LS.set('lang',b.dataset.k);
      m.querySelectorAll('#lang .pill').forEach(x=>x.classList.toggle('on',x===b)); if(b.dataset.k!=='ru') toast('Перевод появится скоро'); };
  });
}

function initHeader(){
  renderCatMenu(); renderProfMenu(); updateCounters();
  const q=$('#q');
  if(q){
    if(qs('q')) q.value=qs('q');
    q.addEventListener('keydown',e=>{ if(e.key==='Enter' && PAGE!=='index' && PAGE!=='favorites') location.href='index.html?q='+encodeURIComponent(q.value.trim()); });
  }
  document.querySelectorAll(`[data-nav="${PAGE}"]`).forEach(a=>a.classList.add('on'));
  const cat=qs('cat'); if(cat) document.querySelectorAll('.cats a').forEach(a=>{ if(a.dataset.cat===cat) a.classList.add('on'); });
}

// поддержка
function openSupport(prefill){
  const s=$('#sup'); s.classList.add('open'); $('#sup-fab').style.display='none';
  const u=getUser(); const m=$('#sup-mail'); if(u&&!m.value) m.value=u.email;
  if(prefill){ $('#sup-text').value=prefill; }
  renderChat(); $('#sup-text').focus();
}
function closeSupport(){ $('#sup').classList.remove('open'); $('#sup-fab').style.display=''; }
function renderChat(){
  const box=$('#sup-msgs'); const chat=LS.get('chat',[]);
  box.innerHTML=`<div class="msg bot">Привет! 👋 Это поддержка bs. Опишите вопрос — ответим в течение 5 минут.</div>`+
    chat.map(c=>`<div class="msg ${c.me?'me':'bot'}">${esc(c.t)}</div>`).join('');
  box.scrollTop=box.scrollHeight;
}
function botReply(text){
  const t=text.toLowerCase();
  if(/возврат|верн/.test(t)) return 'Оформим возврат: пришлите номер заказа (ORD-…) — он есть в разделе «Заказы». Деньги вернутся за 1–3 дня.';
  if(/ключ|код|не работ|активир/.test(t)) return 'Проверьте регион аккаунта и что ключ вводится в нужном магазине. Если не помогло — пришлите номер заказа и скрин ошибки.';
  if(/оплат|деньг|списал/.test(t)) return 'Если деньги списались, а заказа нет — подождите 5 минут. Если не появился, пришлите время оплаты и последние 4 цифры карты.';
  return 'Спасибо! Обращение №'+(1000+Math.floor(Math.random()*9000))+' принято. Оператор ответит здесь и продублирует на почту.';
}
function initSupport(){
  $('#sup-fab').onclick=()=>openSupport();
  $('#sup-close').onclick=closeSupport;
  const send=()=>{
    const mail=$('#sup-mail').value.trim(), txt=$('#sup-text').value.trim();
    if(!/^\S+@\S+\.\S+$/.test(mail)){ toast('Укажите почту для ответа'); return; }
    if(!txt){ toast('Напишите вопрос'); return; }
    const chat=LS.get('chat',[]); chat.push({me:1,t:txt}); LS.set('chat',chat); $('#sup-text').value=''; renderChat();
    const box=$('#sup-msgs'); box.insertAdjacentHTML('beforeend','<div class="typing" id="typing">Оператор печатает…</div>'); box.scrollTop=box.scrollHeight;
    setTimeout(()=>{ const c=LS.get('chat',[]); c.push({me:0,t:botReply(txt)}); LS.set('chat',c); renderChat(); },1200);
  };
  $('#sup-send').onclick=send;
  $('#sup-text').onkeydown=e=>{ if(e.key==='Enter'&&(e.ctrlKey||e.metaKey)) send(); };
}

// каталог (главная + избранное)
let catState={cat:qs('cat')||'Все', q:qs('q')||'', sort:'pop'};
function renderCatalog(){
  const el=$('#catalog'); if(!el) return;
  const favMode = PAGE==='favorites';
  let list = favMode ? PRODUCTS.filter(p=>getFavs().includes(p.id)) : PRODUCTS.slice();
  if(!favMode && catState.cat!=='Все') list=list.filter(p=>p.cat===catState.cat);
  const q=catState.q.toLowerCase(); if(q) list=list.filter(p=>(p.name+' '+shortName(p)+' '+p.cat).toLowerCase().includes(q));
  if(catState.sort==='cheap') list.sort((a,b)=>minOpt(a).price-minOpt(b).price);
  if(catState.sort==='exp') list.sort((a,b)=>minOpt(b).price-minOpt(a).price);
  if(catState.sort==='pop') list.sort((a,b)=>b.sold-a.sold);
  const h=$('#sec-title'); if(h) h.textContent = favMode?'Избранное': q?`Поиск: «${catState.q}»`: catState.cat!=='Все'?catState.cat:'Хиты продаж';
  if(!list.length){
    el.innerHTML = favMode
      ? `<div class="empty"><div>💔</div><h3>В избранном пусто</h3><p>Нажимайте ♡ на карточках, чтобы сохранить товар</p><a class="btn" href="index.html">В каталог</a></div>`
      : `<div class="empty"><div>🔍</div><h3>Ничего не нашли</h3><p>Попробуйте другой запрос или категорию</p><a class="btn" href="index.html">Сбросить</a></div>`;
    return;
  }
  el.innerHTML=list.map(p=>{const o=minOpt(p);return `
    <div class="card">
      <a class="${coverCls(p)}" href="product.html?id=${p.id}">${coverHTML(p)}${favBtn(p)}</a>
      <div class="kind">${p.kind}</div>
      <div class="prices"><span class="now">${fmt(o.price)}</span>${o.old?`<span class="old">${fmt(o.old)}</span>`:''}</div>
      <a class="name" href="product.html?id=${p.id}">${p.name}</a>
      <div class="sold">${p.sold.toLocaleString('ru-RU')} продаж</div>
      <a class="btn" href="product.html?id=${p.id}">Купить</a>
    </div>`;}).join('');
}
function initCatalog(){
  if(!$('#catalog')) return;
  const chips=$('#chips');
  if(chips){
    chips.innerHTML=['Все',...CATS].map(c=>`<button class="chip${c===catState.cat?' on':''}" data-c="${c}">${c}</button>`).join('');
    chips.onclick=e=>{const b=e.target.closest('.chip'); if(!b) return; catState.cat=b.dataset.c;
      chips.querySelectorAll('.chip').forEach(x=>x.classList.toggle('on',x===b));
      history.replaceState(null,'',b.dataset.c==='Все'?location.pathname:'?cat='+encodeURIComponent(b.dataset.c)); renderCatalog();};
  }
  const q=$('#q'); if(q) q.addEventListener('input',()=>{ catState.q=q.value.trim(); renderCatalog(); });
  const s=$('#sort'); if(s) s.onchange=()=>{ catState.sort=s.value; renderCatalog(); };
  renderCatalog();
  if(qs('cat')||qs('q')) setTimeout(()=>$('.sec-h')?.scrollIntoView({behavior:'smooth'}),100);
}
function renderTopup(){
  const f=$('#topup'); if(!f) return;
  const amt=f.querySelector('#tu-amt'), btn=f.querySelector('#tu-buy');
  const upd=()=>{btn.textContent='Купить за '+fmt(Math.round((+amt.value||0)*1.074));};
  amt.oninput=upd;
  f.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>{amt.value=b.dataset.v;upd();});
  f.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{f.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));
    f.querySelector('#tu-login').placeholder=t.dataset.ph; f.dataset.svc=t.textContent;});
  btn.onclick=()=>{const a=+amt.value,l=f.querySelector('#tu-login').value.trim();
    if(a<100){toast('Минимум 100 ₽');return;} if(!l){toast('Укажите логин');return;}
    location.href=`checkout.html?id=steam&amount=${a}&login=${encodeURIComponent(l)}&svc=${encodeURIComponent(f.dataset.svc||'Steam')}`;};
  upd();
}

// товар
function renderProduct(){
  const el=$('#product'); if(!el) return;
  const p=byId(qs('id'))||PRODUCTS[0]; let sel=0;
  document.title=p.name+' — bs';
  const revs=getReviews().filter(r=>r.pid===p.id);
  const lbl=p.cat==='Подписки'?'Выберите срок подписки':(p.cat==='Карты'||p.cat==='Пополнение'||p.id==='psn-usd')?'Выберите номинал':'Выберите вариант';
  const isFav=getFavs().includes(p.id);
  el.innerHTML=`<div class="wrap">
    <div class="crumbs"><a href="index.html">Главная</a> › <a href="index.html">Каталог</a> › <a href="index.html?cat=${encodeURIComponent(p.cat)}">${p.cat}</a> › <span class="d-only" style="display:inline">${p.name}</span></div>
    <div class="pp">
      <div class="pp-cover"><button class="round m-only pp-back" onclick="history.length>1?history.back():location.href='index.html'">←</button><div class="${coverCls(p)}">${coverHTML(p)}</div></div>
      <div class="pp-main">
        <h1 class="pp-title">${p.name}</h1>
        <div class="pp-meta"><span>★ ${p.rating} · ${p.sold.toLocaleString('ru-RU')} продаж · <button class="lnk" id="to-rev">${revs.length} отзывов</button></span>
          <button data-fav="${p.id}">${isFav?'❤️ <u>В избранном</u>':'♡ <u>В избранное</u>'}</button></div>
        <div class="pp-mprice m-only" style="margin-top:12px"><span class="now" id="pnow-m"></span> <span class="old" id="pold-m"></span></div>
        <div class="lbl">${lbl} <i>*</i></div>
        <div class="pills" id="opts">${p.options.map((o,i)=>`<button class="pill${i?'':' on'}" data-i="${i}">${o.label}</button>`).join('')}</div>
        <details class="howto"><summary><span class="q">?</span> Как использовать: ${shortName(p)}<span class="ch">›</span></summary><p>${HOWTO[p.cat]||HOWTO['Карты']}</p></details>
        <h2 class="pp-h">О товаре</h2>
        <div class="about" id="about">${aboutLines(p).map(l=>`<div>${l}</div>`).join('')}</div>
        <button class="more" id="more">Раскрыть</button>
        <h2 class="pp-h" id="reviews">Отзывы <span class="muted">${revs.length}</span></h2>
        ${revs.length?revs.map(r=>`<div class="rev"><div class="av">${esc(r.email[0].toUpperCase())}</div><div><div class="d">${new Date(r.date).toLocaleDateString('ru-RU',{day:'numeric',month:'long'})} · ${esc(r.email.replace(/(.{2}).*@/,'$1***@'))}</div><div class="st">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div><div>${esc(r.text)}</div></div></div>`).join('')
          :`<div class="noreviews">Отзывов пока нет. Купите товар и оставьте первый отзыв в разделе <a href="orders.html"><u>«Заказы»</u></a>.</div>`}
        <h2 class="pp-h">Похожие товары</h2>
        <div class="grid" id="similar" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))"></div>
      </div>
      <aside class="buybox">
        <div class="now bb-price" id="pnow"></div><div class="old" id="pold"></div>
        <div class="seller"><span class="ava">bs</span><b>bs</b> <span class="muted">★ ${p.rating}</span></div>
        <div class="small-muted">${p.sold.toLocaleString('ru-RU')} продаж · онлайн</div>
        <button class="btn" id="buy">Купить</button>
        <button class="btn sec d-only" style="margin-top:8px" data-support>Написать продавцу</button>
        <details class="safe"><summary>🛡 Все сделки на bs — безопасные ⌄</summary><p>Деньги резервируются до выдачи товара. Если код не подойдёт — вернём оплату.</p></details>
      </aside>
    </div></div>`;
  document.body.classList.add('has-buy');
  const sim=PRODUCTS.filter(x=>x.id!==p.id&&x.cat===p.cat).concat(PRODUCTS.filter(x=>x.cat!==p.cat)).slice(0,4);
  $('#similar').innerHTML=sim.map(x=>`<div class="card"><a class="${coverCls(x)}" href="product.html?id=${x.id}">${coverHTML(x)}</a><div class="prices"><span class="now" style="font-size:17px">${fmt(minOpt(x).price)}</span></div><a class="name" href="product.html?id=${x.id}">${x.name}</a></div>`).join('');
  const upd=()=>{const o=p.options[sel];
    ['pnow','pnow-m'].forEach(i=>$('#'+i).textContent=fmt(o.price));
    ['pold','pold-m'].forEach(i=>$('#'+i).textContent=o.old?fmt(o.old):'');
    $('#buy').textContent=innerWidth<900?'Купить за '+fmt(o.price):'Купить';};
  $('#opts').onclick=e=>{const b=e.target.closest('.pill');if(!b)return;sel=+b.dataset.i;
    document.querySelectorAll('#opts .pill').forEach(x=>x.classList.toggle('on',x===b));upd();};
  $('#more').onclick=e=>{const a=$('#about');a.classList.toggle('open');e.target.textContent=a.classList.contains('open')?'Свернуть':'Раскрыть';};
  $('#to-rev').onclick=()=>$('#reviews').scrollIntoView({behavior:'smooth'});
  $('#buy').onclick=()=>location.href=`checkout.html?id=${p.id}&opt=${sel}`;
  addEventListener('resize',upd); upd();
  const seen=LS.get('seen',[]).filter(x=>x!==p.id); seen.unshift(p.id); LS.set('seen',seen.slice(0,8));
}

// оплата
const METHOD_NAME = {sbp:'СБП',card:'Банковская карта',crypto:'Криптовалюта (bsplit)'};
const PROMO = {'BS10':10,'BS15':15,'START5':5};
function renderCheckout(){
  const el=$('#checkout'); if(!el) return;
  const p=byId(qs('id'))||PRODUCTS[0]; let o=p.options[+qs('opt')||0]||p.options[0];
  if(qs('amount')){const a=+qs('amount');o={label:`${qs('svc')||'Steam'}: ${a.toLocaleString('ru-RU')} ₽ на баланс · ${qs('login')||'—'}`,price:Math.round(a*1.074)};}
  let method='sbp', disc=0, code='';
  const total=()=>Math.round(o.price*(100-disc)/100);
  el.innerHTML=`
    <button class="back" onclick="history.length>1?history.back():location.href='index.html'">← Назад</button>
    <h1 class="pp-title" style="margin-bottom:16px">${p.name}</h1>
    <a class="box" href="product.html?id=${p.id}"><div class="box-row"><div><div>Детали заказа</div><div class="small">${esc(o.label)}</div></div><span>›</span></div></a>
    <div class="box">
      <div class="methods">
        <button class="method on" data-m="sbp"><div class="mi">⚡</div><b>СБП</b><span class="chk">✓</span></button>
        <button class="method" data-m="card"><div class="mi">💳</div><b>Карта</b><span class="chk">✓</span></button>
        <button class="method" data-m="crypto"><div class="mi mi-txt">bsplit</div><b>Крипто&shy;валюта</b><span class="chk">✓</span></button>
      </div>
      <div class="pay-sum"><span id="sum"></span><span class="old" id="sum-old"></span></div>
      <input class="field" id="email" type="email" placeholder="Почта для получения заказа" autocomplete="email" value="${esc(getUser()?.email||'')}">
      <div id="payment-container"></div>
      <button class="btn" id="pay" style="padding:20px;font-size:20px">Оплатить</button>
      <p class="terms">Нажимая на кнопку, вы соглашаетесь с <button class="lnk" data-info="terms">Условиями продажи товара</button>, <button class="lnk" data-info="refund">Политикой возврата средств</button> и <button class="lnk" data-info="privacy">Политикой обработки персональных данных</button></p>
    </div>
    <details class="box promo" id="promo"><summary><span class="muted" id="promo-l">Промокод</span><span>›</span></summary>
      <div class="promo-row"><input class="field" id="code" placeholder="Например, BS10" style="text-transform:uppercase"><button class="btn" id="apply">Применить</button></div></details>
    <p class="muted" style="text-align:center;font-size:14px;margin-top:16px;cursor:pointer" data-info="safe">🛡 Деньги резервируются до получения товара</p>`;
  const upd=()=>{ $('#sum').textContent=fmt(total()); $('#sum-old').textContent=disc?fmt(o.price):''; };
  el.querySelectorAll('.method').forEach(b=>b.onclick=()=>{method=b.dataset.m;el.querySelectorAll('.method').forEach(x=>x.classList.toggle('on',x===b));});
  $('#apply').onclick=()=>{ const c=$('#code').value.trim().toUpperCase();
    if(PROMO[c]){ disc=PROMO[c]; code=c; $('#promo-l').textContent=`Промокод ${c}: −${disc}%`; $('#promo-l').style.color='var(--green)'; toast('Скидка '+disc+'% применена 🎉'); upd(); }
    else toast('Промокод не найден'); };
  $('#code').onkeydown=e=>{ if(e.key==='Enter') $('#apply').click(); };
  $('#pay').onclick=()=>{
    const email=$('#email').value.trim();
    if(!/^\S+@\S+\.\S+$/.test(email)){toast('Введите корректную почту');$('#email').focus();return;}
    startPayment({orderId:'ORD-'+Date.now(),amount:total(),currency:'RUB',method,email,promo:code||null,
      product:{id:p.id,name:p.name,option:o.label}});
  };
  upd();
}

// TODO: подключить платёжку. order: {orderId, amount, currency, method: sbp|card|crypto, email, promo, product}
// после успешной оплаты вызвать onPaymentSuccess(order)
function startPayment(order){
  const btn=$('#pay'); btn.disabled=true; btn.textContent='Обработка…';
  setTimeout(()=>onPaymentSuccess(order),1200);
}

function onPaymentSuccess(order){
  const c=()=>Math.random().toString(36).slice(2,7).toUpperCase();
  order.key=`${c()}-${c()}-${c()}`; order.date=Date.now(); order.seller='bs';
  const l=getOrders(); l.unshift(order); LS.set('orders',l);
  if(!getUser()) login(order.email);
  updateCounters();
  $('#checkout').innerHTML=`<div class="done">
    <div class="ok">✓</div><h1 class="pp-title">Оплата прошла</h1>
    <p class="muted" style="margin:10px 0">Заказ ${order.orderId} · ${fmt(order.amount)}<br>Товар отправлен на ${esc(order.email)}</p>
    <div style="font-weight:700;margin-top:14px">${order.product.name}</div>
    <div class="muted" style="margin-top:4px">${esc(order.product.option)}</div>
    <div class="copyrow" style="justify-content:center"><span class="key">${order.key}</span><button class="btn sec" style="width:auto;padding:10px 14px" data-copy="${order.key}">Копировать</button></div>
    <a class="btn" href="orders.html" style="max-width:320px;margin:0 auto 10px">Мои заказы</a><a href="index.html" class="muted">Вернуться в каталог</a></div>`;
}
document.addEventListener('click',e=>{ const b=e.target.closest('[data-copy]'); if(!b) return;
  try{ navigator.clipboard.writeText(b.dataset.copy); }catch(err){} toast('Скопировано 📋'); });

// заказы
function renderOrders(){
  const el=$('#orders'); if(!el) return;
  const all=getOrders(); const s=$('#o-search'); const q=(s?.value||'').toLowerCase();
  const l=all.filter(o=>(o.product.name+o.orderId+o.product.option).toLowerCase().includes(q));
  if(!all.length){ el.innerHTML=`<div class="empty"><div>📦</div><h3>Заказов пока нет</h3><p>Здесь появятся купленные товары и ключи</p><a class="btn" href="index.html">Перейти в каталог</a></div>`; if(s) s.style.display='none'; return; }
  if(!l.length){ el.innerHTML=`<div class="empty"><div>🔍</div><h3>Ничего не найдено</h3></div>`; return; }
  const revd=getReviews().map(r=>r.oid);
  el.innerHTML=l.map(o=>{const p=byId(o.product.id)||PRODUCTS[0];return `
    <div class="order">
      <div class="o-date">Заказ от ${new Date(o.date).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'})}<span class="badge-ok">✓ Выполнен</span></div>
      <div class="o-price">${fmt(o.amount)}</div>
      <div class="o-name">${o.product.name}</div>
      <a class="o-thumb ${coverCls(p)}" href="product.html?id=${p.id}">${coverHTML(p)}</a>
      <div class="o-seller">Продавец: ${o.seller||'bs'} · <span class="muted">${esc(o.product.option)}</span></div>
      <div class="o-act"><button data-det="${o.orderId}">Детали заказа</button>${revd.includes(o.orderId)?'':`<button data-rev="${o.orderId}">★ Оставить отзыв</button>`}</div>
    </div>`;}).join('');
}
function findOrder(id){ return getOrders().find(o=>o.orderId===id); }
function openOrder(id){
  const o=findOrder(id); if(!o) return;
  openModal('Детали заказа',`<div class="kv">
      <span>Номер</span><span>${o.orderId}</span>
      <span>Дата</span><span>${new Date(o.date).toLocaleString('ru-RU')}</span>
      <span>Товар</span><span>${o.product.name}</span>
      <span>Вариант</span><span>${esc(o.product.option)}</span>
      <span>Оплата</span><span>${METHOD_NAME[o.method]||o.method}${o.promo?' · промокод '+o.promo:''}</span>
      <span>Сумма</span><span><b>${fmt(o.amount)}</b></span>
      <span>Почта</span><span>${esc(o.email)}</span>
      <span>Статус</span><span style="color:var(--green)">✓ Выполнен</span></div>
    <div class="lbl" style="margin:16px 0 4px">Ваш товар</div>
    <div class="copyrow"><span class="key">${o.key}</span><button class="btn sec" style="width:auto;padding:10px 14px" data-copy="${o.key}">Копировать</button></div>
    <a class="btn" href="product.html?id=${o.product.id}">Купить ещё раз</a>
    <button class="btn sec" id="od-sup">Проблема с заказом</button>`, m=>{
    m.querySelector('#od-sup').onclick=()=>{ closeModal(); openSupport(`Проблема с заказом ${o.orderId}: `); };
  });
}
function openReview(id){
  const o=findOrder(id); if(!o) return; let stars=5;
  openModal('Отзыв о товаре',`<p>${o.product.name}</p>
    <div class="stars" id="stars">${[1,2,3,4,5].map(i=>`<button class="on" data-s="${i}">★</button>`).join('')}</div>
    <textarea class="field" id="rv-text" placeholder="Расскажите, всё ли пришло и работает"></textarea>
    <button class="btn" id="rv-go">Опубликовать</button>`, m=>{
    m.querySelector('#stars').onclick=e=>{ const b=e.target.closest('button'); if(!b) return; stars=+b.dataset.s;
      m.querySelectorAll('#stars button').forEach(x=>x.classList.toggle('on',+x.dataset.s<=stars)); };
    m.querySelector('#rv-go').onclick=()=>{ const t=m.querySelector('#rv-text').value.trim(); if(t.length<3){ toast('Напишите пару слов'); return; }
      const r=getReviews(); r.unshift({oid:o.orderId,pid:o.product.id,stars,text:t,email:o.email,date:Date.now()}); LS.set('reviews',r);
      closeModal(); toast('Спасибо за отзыв! ⭐'); renderOrders(); };
  });
}
document.addEventListener('click',e=>{
  const d=e.target.closest('[data-det]'); if(d) openOrder(d.dataset.det);
  const r=e.target.closest('[data-rev]'); if(r) openReview(r.dataset.rev);
});

// профиль
function renderProfile(){
  const el=$('#profile'); if(!el) return; const u=getUser();
  if(!u){ el.innerHTML=`<div class="panel empty" style="padding:50px 20px"><div>👤</div><h3>Войдите в аккаунт</h3><p>Чтобы видеть заказы, избранное и отзывы</p><button class="btn" data-login>Войти по почте</button></div>`; return; }
  const ords=getOrders(); const spent=ords.reduce((s,o)=>s+o.amount,0);
  const seen=LS.get('seen',[]).map(byId).filter(Boolean).slice(0,6);
  el.innerHTML=`<div class="panel">
    <div class="prof-head"><div class="prof-ava">${esc(u.email[0].toUpperCase())}</div><div><h1 class="pp-title">${esc(u.email.split('@')[0])}</h1><div class="muted">${esc(u.email)} · с ${new Date(u.since).toLocaleDateString('ru-RU',{month:'long',year:'numeric'})}</div></div></div>
    <div class="stats"><a class="stat" href="orders.html"><b>${ords.length}</b><span>заказов</span></a><div class="stat"><b>${fmt(spent)}</b><span>потрачено</span></div><a class="stat" href="favorites.html"><b>${getFavs().length}</b><span>в избранном</span></a></div>
    <div class="setrow"><span>🌙 Тёмная тема</span><button class="switch ${getTheme()==='dark'?'on':''}" data-theme-toggle></button></div>
    <div class="setrow"><span>🔔 Уведомления о скидках</span><button class="switch ${LS.get('notif',true)?'on':''}" id="notif"></button></div>
    <div class="setrow"><span>🌐 Язык и валюта</span><button class="lnk" data-lang>Русский · ₽</button></div>
    <div class="setrow"><span>💬 Поддержка</span><button class="lnk" data-support>Открыть чат</button></div>
    <div class="setrow"><span>🎁 Ваш промокод</span><span class="copyrow"><b>BS15</b><button class="lnk" data-copy="BS15">копировать</button></span></div>
    <button class="btn sec" style="margin-top:16px" data-logout>Выйти из аккаунта</button></div>
    ${seen.length?`<h2 class="pp-h">Вы смотрели</h2><div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(130px,1fr))">${seen.map(x=>`<div class="card"><a class="${coverCls(x)}" href="product.html?id=${x.id}">${coverHTML(x)}</a><div class="prices"><span class="now" style="font-size:16px">${fmt(minOpt(x).price)}</span></div></div>`).join('')}</div>`:''}`;
  $('#notif').onclick=e=>{ const v=!LS.get('notif',true); LS.set('notif',v); e.target.classList.toggle('on',v); toast(v?'Уведомления включены':'Уведомления выключены'); };
}

// старт
document.addEventListener('DOMContentLoaded',()=>{
  initHeader(); initSupport(); initCatalog(); renderTopup(); renderProduct(); renderCheckout();
  const os=$('#o-search'); if(os) os.oninput=renderOrders;
  renderOrders(); renderProfile();
  // мобильная кнопка «каталог»
  const mc=$('#m-cat'); if(mc) mc.onclick=e=>{ e.stopPropagation(); toggleDrop('catmenu',mc); };
});
