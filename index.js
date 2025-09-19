import{a as m,i as g,S as y}from"./assets/vendor-DzBlEn4a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="52360469-04a0681cd82a25280493158e1";function h(o){return m.get("https://pixabay.com/api/",{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0)throw new Error;return console.log(r.data),r.data}).catch(r=>n())}function n(){g.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function L(o){const r=o.map(({largeImageURL:i,webformatURL:e,tags:t,likes:s,views:u,comments:f,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href=${e}>
    <img
      class="gallery-image"
      src="${i}"
      alt="${t}"
      width="360"
      height="200"
    />
    <div class="gallery-info">
      <p class="gallery-stats">
        <span class="gallery-likes">Likes: ${s}</span>
        <span class="gallery-views">Views: ${u}</span>
        <span class="gallery-comments">Comments: ${f}</span>
        <span class="gallery-downloads">Downloads: ${d}</span>
      </p>
    </div>
  </a>
</li>`).join("");l.innerHTML=r,new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function w(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",$);function $(o){o.preventDefault();const r=o.target.elements.search.value.trim();r&&(b(),w(),h(r).then(a=>L(a.hits)).catch(a=>n()).finally(()=>v()))}
//# sourceMappingURL=index.js.map
