import{a as m,i as g,S as p}from"./assets/vendor-DzBlEn4a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y="52360469-04a0681cd82a25280493158e1";function h(o){return m.get("https://pixabay.com/api/",{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0)throw new Error;return t.data}).catch(t=>n())}function n(){g.error({title:"Error",titleColor:"#fff",iconColor:"#fff",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"./img/error-icon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,close:!0})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function L(o){const t=o.map(({largeImageURL:i,webformatURL:e,tags:r,likes:s,views:u,comments:f,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href=${e}>
    <img
      class="gallery-image"
      src="${i}"
      alt="${r}"
      width="360"
      height="152"
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
</li>`).join("");l.innerHTML=t,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function w(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",$);function $(o){o.preventDefault();const t=o.target.elements.search.value.trim();t&&(b(),w(),h(t).then(a=>L(a.hits)).catch(a=>n()).finally(()=>v()))}
//# sourceMappingURL=index.js.map
