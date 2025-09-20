import{a as d,S as f,i as y}from"./assets/vendor-CYMld6vM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const g="52360469-04a0681cd82a25280493158e1";function p(r){return d.get("https://pixabay.com/api/",{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data})}const i=document.querySelector(".gallery"),n=document.querySelector(".loader"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const t=r.map(({largeImageURL:s,webformatURL:o,tags:e,likes:a,views:l,comments:c,downloads:u})=>`<li class="gallery-item">
  <a class="gallery-link" href=${s}>
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${a}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${l}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${c}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${u}</span> 
      </div>
    </div>
  </a>
</li>`).join("");i.innerHTML=t,m.refresh()}function v(){i.innerHTML=""}function L(){n.classList.remove("hidden")}function b(){n.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(r){r.preventDefault();const t=r.target.elements.search.value.toLowerCase().trim();t&&(L(),v(),p(t).then(s=>h(s.hits)).catch(s=>q(s.message)).finally(()=>b()))}function q(r){y.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}
//# sourceMappingURL=index.js.map
