import{a as f,S as y,i as g}from"./assets/vendor-CYMld6vM.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="52360469-04a0681cd82a25280493158e1";function m(r){return f.get("https://pixabay.com/api/",{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>{if(a.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.data})}const i=document.querySelector(".gallery"),n=document.querySelector(".loader");function h(r){const a=r.map(({largeImageURL:o,webformatURL:e,tags:t,likes:l,views:c,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href=${e}>
    <img
      class="gallery-image"
      src="${o}"
      alt="${t}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${l}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${c}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${u}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${d}</span> 
      </div>
    </div>
  </a>
</li>`).join("");i.innerHTML=a,new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){i.innerHTML=""}function L(){n.classList.remove("hidden")}function b(){n.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(r){r.preventDefault();const a=r.target.elements.search.value.toLowerCase().trim();a&&(L(),v(),m(a).then(s=>h(s.hits)).catch(s=>q(s.message)).finally(()=>b()))}function q(r){g.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:r||"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}
//# sourceMappingURL=index.js.map
