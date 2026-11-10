/* HUB-014: Ícones informativos (sem links oficiais), busca e legibilidade do menu. */
(function(){
'use strict';
const icons = {"whatsapp":"<circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"/><path d=\"m4.8 19.4-1.9 3.1 4.6-1.2M8 7.6c-.4.8-.6 1.5-.5 2.3.3 2.3 3.8 5.8 6.5 6.6.9.3 1.8 0 2.4-.5l.7-1.1-3-1.4-.8 1.1c-2.1-1.1-3.4-2.5-4.2-4.4l1.1-.8L9 6.9Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","instagram":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/><circle cx=\"17.6\" cy=\"6.6\" r=\"1.25\" fill=\"currentColor\"/>","x":"<path d=\"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.801-7.586-6.65 7.586H.463l8.599-9.826L0 1.153h7.594l5.243 6.932Zm-1.29 19.491h2.039L6.486 3.24H4.298Z\"/>","youtube":"<path d=\"M23.498 6.186c-.276-1.04-1.092-1.858-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.376.504C1.594 4.328.778 5.146.502 6.186 0 8.072 0 12 0 12s0 3.928.502 5.814c.276 1.04 1.092 1.858 2.122 2.136 1.871.504 9.376.504 9.376.504s7.505 0 9.376-.504c1.03-.278 1.846-1.096 2.122-2.136C24 15.928 24 12 24 12s0-3.928-.502-5.814ZM9.545 15.568V8.432L15.818 12 9.545 15.568Z\"/>","facebook":"<path d=\"M22 12.06C22 6.52 17.52 2 12 2S2 6.52 2 12.06C2 17.07 5.66 21.23 10.44 22v-7.06H7.9V12.06h2.54V9.78c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.97h2.78l-.45 2.88h-2.33V22C18.34 21.23 22 17.07 22 12.06Z\"/>"};
const socialLabels = [['whatsapp','WhatsApp'],['instagram','Instagram'],['x','X'],['youtube','YouTube'],['facebook','Facebook']];
const officialUrls={whatsapp:'',instagram:'',x:'',youtube:'',facebook:''};
const styles = [
'header .hub-mainhead .head-right{display:flex!important;flex-direction:column!important;align-items:flex-end!important;justify-content:center;position:relative;overflow:visible!important}',
'#hub-header-socials{display:flex;position:relative;top:-5px;flex-wrap:nowrap;justify-content:flex-end;align-items:center;gap:5px;margin:0 0 7px;white-space:nowrap;z-index:8}',
'#hub-header-socials .hub-social-icon{width:23px;height:23px;display:inline-flex;justify-content:center;align-items:center;border-radius:50%;background:#fff;border:1px solid rgba(7,30,82,.15);box-shadow:0 2px 8px rgba(4,24,53,.18);flex:0 0 auto;line-height:1}',
'#hub-header-socials .hub-social-icon svg{display:block;width:13px;height:13px;fill:currentColor}',
'#hub-header-socials [data-platform="whatsapp"]{color:#159b58}',
'#hub-header-socials [data-platform="instagram"]{color:#c13584}',
'#hub-header-socials [data-platform="x"]{color:#111827}',
'#hub-header-socials [data-platform="youtube"]{color:#e52222}',
'#hub-header-socials [data-platform="facebook"]{color:#1877f2}',
'#hub-header-socials a.hub-social-icon:hover,#hub-header-socials a.hub-social-icon:focus-visible{background:#edf4fb;outline:2px solid #ff9100;outline-offset:2px}',
'#search-form button{display:inline-flex;align-items:center;justify-content:center;gap:5px}',
'#search-form .hub-search-label{font:700 12px/1 system-ui,Arial,sans-serif;white-space:nowrap}',
'#menu-drawer .drawer-links a{font-size:1.13rem!important;line-height:1.5!important;font-weight:650!important;padding-top:11px!important;padding-bottom:11px!important}',
'#menu-drawer .drawer-label{font-size:1.02rem!important;font-weight:800!important}',
'#menu-drawer .drawer-head strong{font-size:1.14rem!important}',
'@media(max-width:680px){header .hub-mainhead{min-height:137px!important;padding-top:34px!important;overflow:visible!important}header .hub-mainhead .head-right{min-width:0!important;overflow:visible!important}#hub-header-socials{position:absolute;top:-40px;right:0;margin:0;gap:5px}#hub-header-socials .hub-social-icon{width:22px;height:22px}#hub-header-socials .hub-social-icon svg{width:12px;height:12px}#search-form .hub-search-label{display:none}#menu-drawer .drawer-links a{font-size:1.1rem!important;line-height:1.48!important}}',
'@media(max-width:365px){#hub-header-socials{gap:4px;right:0}#hub-header-socials .hub-social-icon{width:20px;height:20px}}'
].join('\n');
function install(){
const right=document.querySelector('header .hub-mainhead .head-right');
const form=document.querySelector('#search-form');
const menu=document.querySelector('#menu-drawer');
if(!right||!form||!menu||document.getElementById('hub-header-socials'))return;
const st=document.createElement('style');st.id='hub-014-css';st.textContent=styles;document.head.appendChild(st);
const row=document.createElement('div');row.id='hub-header-socials';
row.setAttribute('aria-label','Redes sociais; perfis oficiais ainda não informados');
socialLabels.forEach(([key,label])=>{
const url=officialUrls[key];const item=document.createElement(url?'a':'span');
item.className='hub-social-icon';item.dataset.platform=key;
item.title=url?label:label+': perfil oficial ainda não informado';
item.setAttribute('aria-label',url?label:label+': perfil oficial não configurado');
if(url){item.href=url;item.target='_blank';item.rel='noopener noreferrer';}
else{item.setAttribute('role','img');}
item.innerHTML='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+icons[key]+'</svg>';
row.appendChild(item);
});
right.insertBefore(row,form);
const btn=form.querySelector('button');
if(btn&&!btn.querySelector('.hub-search-label')){
btn.type='submit';btn.setAttribute('aria-label','Buscar notícias');
const label=document.createElement('span');label.className='hub-search-label';label.textContent='Buscar';btn.appendChild(label);
}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();