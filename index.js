import{S as l,a as c,i as u}from"./assets/vendor-DcJ-KoJm.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();let i;function f(e){const s=document.querySelector("ul.gallery"),a=e.map(o=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${o.webformatURL}"
                    data-source="${o.largeImageURL}"
                    alt="${o.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${o.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${o.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${o.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${o.downloads}</span>
                </li>
            </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",a),i?i.refresh():i=new l(".gallery a",{captionsData:"alt",captionDelay:250})}function p(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function d(){const e=document.querySelector(".loader");e&&(e.style.display="block")}function m(){const e=document.querySelector(".loader");e&&(e.style.display="none")}function y(e){const s="https://pixabay.com/api/";return d(),c.get(s,{params:{key:"53364117-23ce706026567dc1d7b8b2eb2",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0},timeout:3e3}).then(a=>{if(a.data.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(a.data.hits)}).catch(a=>{console.error(a)}).finally(()=>{m()})}const g=document.querySelector(".form"),h=document.querySelector("button");h.disabled=!1;g.addEventListener("submit",e=>{if(e.preventDefault(),p(),document.querySelector("input").value.trim()==="")return;const s=document.querySelector("input").value;y(s)});
//# sourceMappingURL=index.js.map
