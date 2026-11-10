(function(){
  function addSpotlight(){
    if(document.getElementById('hub-feature-20261110-moraes'))return;
    var main=document.querySelector('main')||document.querySelector('[role="main"]')||document.body;
    var s=document.createElement('section');
    s.id='hub-feature-20261110-moraes';
    s.setAttribute('aria-label','Destaque editorial — Política');
    s.innerHTML='<a href="./artigos/impeachment-moraes-senado-2027.html" style="display:grid;grid-template-columns:minmax(180px,39%) 1fr;gap:0;text-decoration:none;background:#fff;color:#132e44;overflow:hidden;border:1px solid #dce7ee;border-radius:14px;box-shadow:0 8px 26px rgba(17,47,76,.08)"><img src="./assets/capa-congresso-moraes.avif" alt="Arte ilustrativa sobre o Congresso Nacional" style="width:100%;height:100%;min-height:170px;max-height:310px;object-fit:cover" loading="lazy"><span style="padding:clamp(17px,3vw,32px);display:flex;flex-direction:column;justify-content:center"><span style="font:800 12px system-ui,Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#ba6020;margin-bottom:10px">POLÍTICA | PUBLICADO EM 10/11/2026</span><span style="font:800 clamp(21px,2.7vw,33px)/1.2 system-ui,Arial,sans-serif;color:#103656">Impeachment de Moraes: 10 parlamentares ampliam articulação no Senado para 2027</span><span style="font:400 15px/1.5 system-ui,Arial,sans-serif;color:#556b7a;margin-top:12px">Os nomes citados na articulação, o peso da presidência do Senado e o que realmente pode acontecer.</span><span style="color:#0a6298;font:800 14px system-ui,Arial,sans-serif;margin-top:15px">LER MATÉRIA COMPLETA →</span></span></a>';
    var st=document.createElement('style');
    st.textContent='@media(max-width:570px){#hub-feature-20261110-moraes>a{grid-template-columns:1fr !important}#hub-feature-20261110-moraes img{height:175px !important}}';
    document.head.appendChild(st);
    s.style.cssText='max-width:1200px;margin:18px auto 30px;padding:0 16px;width:100%;box-sizing:border-box;display:block';
    main.insertBefore(s, main.firstChild);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addSpotlight);else addSpotlight();
})();