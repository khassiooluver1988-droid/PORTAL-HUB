/* HUB-015 — navegar dentro do HUB NOTÍCIA; créditos autorais mantidos. */
(function(){
  'use strict';
  const article = './artigos/sebastiana-86-anos-direito-enem-2026.html';
  const image = '';
  function isFromConecta(raw){
    try {
      const host = new URL(raw, location.href).hostname.toLowerCase();
      return host === 'conectapiaui.com.br' || host.endsWith('.conectapiaui.com.br');
    } catch(error) {return false;}
  }
  function isExternal(raw){
    try {
      const url = new URL(raw, location.href);
      return /^https?:$/.test(url.protocol) && url.host !== location.host;
    } catch(error) {return false;}
  }
  function showNote(message){
    const toast = document.querySelector('#toast');
    if (toast) {
      toast.textContent=message; toast.classList.add('show');
      window.setTimeout(()=>toast.classList.remove('show'),3400);
    }
  }
  // Impede a saída involuntária via URL de origem em qualquer cartão/modal da notícia.
  document.addEventListener('click',function(event){
    const target=event.target;
    if(!(target instanceof Element))return;
    const card=target.closest('[data-post]');
    if(card && /sebastiana|aos\s+86\s+anos/i.test(card.textContent||card.getAttribute('aria-label')||'')){
      event.preventDefault();
      event.stopImmediatePropagation();
      location.href=article;
      return;
    }
    const anchor=target.closest('a[href]');
    if(!anchor)return;
    const href=anchor.getAttribute('href')||'';
    if(isFromConecta(href) || (anchor.closest('#modal-source') && isExternal(href) && !anchor.href.includes('rh.g3pi.app.br'))){
      event.preventDefault();
      event.stopImmediatePropagation();
      showNote('Continue lendo as notícias no HUB NOTÍCIA.');
    }
  },true);
  function sanitizeModal(){
    const source=document.getElementById('modal-source');
    if(!source)return;
    const links=[...source.querySelectorAll('a[href]')];
    for (const anchor of links) {
      if(!isExternal(anchor.href)||anchor.href.includes('rh.g3pi.app.br'))continue;
      let host='fonte consultada';
      try{host=new URL(anchor.href).hostname.replace(/^www\./,'')}catch(error){}
      const span=document.createElement('span');
      span.className='hub-source-attribution';
      span.textContent='Informações de referência: '+host+'. Edição e apresentação: Redação HUB NOTÍCIA.';
      anchor.replaceWith(span);
    }
    const text=document.getElementById('modal-text');
    if(text && /Consulte a publicação original no link abaixo/.test(text.textContent||'')){
      text.textContent=text.textContent.replace('Consulte a publicação original no link abaixo.','Esta seleção apresenta um resumo editorial elaborado para o HUB NOTÍCIA.');
    }
  }
  function addSebastiana(){
    if(document.getElementById('hub-sebastiana-feature-20261110'))return;
    const section=document.querySelector('#editoria-educacao') || document.querySelector('#editorial-sections');
    if(!section)return;
    const item=document.createElement('a');
    item.id='hub-sebastiana-feature-20261110';
    item.href=article;
    item.style.cssText='display:block;background:linear-gradient(100deg,#f1f7ff,#fff7ed);border:1px solid #b6cee4;border-left:5px solid #ed820a;border-radius:12px;padding:18px 20px;margin:13px 0 16px;text-decoration:none;color:#153c5d;box-shadow:0 5px 16px rgba(15,59,90,.06)';
    item.innerHTML='<span style="display:block;color:#a45c0f;font-weight:850;font-size:12px;letter-spacing:.06em;margin-bottom:7px">EDUCAÇÃO | REDAÇÃO HUB NOTÍCIA</span><strong style="display:block;font-size:clamp(19px,2.3vw,24px);line-height:1.25;margin-bottom:7px">Aos 86 anos, Sebastiana enfrenta o Enem para realizar o sonho de cursar Direito e ser delegada</strong><span style="display:block;color:#455f74;font-size:14px;line-height:1.5">Conheça a história da alagoana que frequenta cursinho gratuito e segue em busca de uma vaga na universidade.</span><span style="display:block;color:#0c5b9a;font-weight:800;font-size:13px;margin-top:11px">LER NOTÍCIA NO HUB →</span>';
    const heading=section.querySelector('.cat-head');
    if(heading)heading.insertAdjacentElement('afterend',item);
    else section.insertAdjacentElement('afterbegin',item);
  }
  function init(){
    const s=document.createElement('style');
    s.textContent='.hub-source-attribution{display:block;margin-top:8px;border-left:3px solid #f28c16;padding:10px 12px;background:#f1f6fc;color:#38566e;font-size:.85rem;line-height:1.5}#hub-sebastiana-feature-20261110:hover,#hub-sebastiana-feature-20261110:focus-visible{outline:2px solid #fa9200;outline-offset:2px}';
    document.head.appendChild(s);
    const source=document.querySelector('#modal-source');
    if(source){const observer=new MutationObserver(sanitizeModal);observer.observe(source,{childList:true,subtree:true});sanitizeModal();}
    addSebastiana();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();