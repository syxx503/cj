const e=document.querySelector(".main"),t=document.querySelectorAll(".start__slider-column").length,s=document.querySelector(".start__slider-row"),r=document.querySelector(".slider-nav__line-thumb"),d=document.querySelector(".slider-nav");sliderClose=document.querySelector(".start__close-wrap"),advSlideTimeout=800;let o=0,a=!1;const l=e=>{if(!a||"number"!=typeof e||e<1||e>t||e===o)return;d.classList.add("slider-nav_active"),sliderClose.classList.add("start__close-wrap_active");const r=0===e?"0":`-${e}00`,l=e>o?"right":"left",c=document.querySelectorAll(".slide")[e],n=document.querySelectorAll(".slide")[o];"right"===l?(n.classList.add("slide_prev-slide"),n.classList.remove("slide_next-slide")):"left"===l&&(n.classList.add("slide_next-slide"),n.classList.remove("slide_prev-slide")),c.classList.remove("slide_next-slide"),c.classList.remove("slide_prev-slide"),a=!1,setTimeout((()=>{a=!0}),800),s.style.transform=`translateX(${r}%)`,i(e)},i=e=>{if("number"!=typeof e||e<0||e>t)return;const s=`${((e-1)/(t-2)*100).toFixed(3)}%`;r.style.width=s,o=e},c=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",n=(/Mobi/.test(navigator.userAgent),e=>{const t=e.target.closest(".pressable");t&&(e=>{const t=e.getAttribute("data-scrollto");if(t)return document.querySelector(t)?void(Math.abs(window.pageYOffset-document.querySelector(t).offsetTop)>=1&&e.classList.add("pressable_pressed")):void 0;e.classList.add("pressable_pressed")})(t)}),u=e=>{const t=e.target.closest(".pressable");t&&(e=>{e.classList.remove("pressable_pressed")})(t)},m=document.body;m.addEventListener("pointerdown",n),m.addEventListener("mousedown",n),m.addEventListener("mouseout",u),m.addEventListener("mouseup",u),m.addEventListener("pointerup",u),m.addEventListener("pointerout",u);const h=document.getElementById("theme-switch"),v=[],L=document.querySelectorAll("img[data-ondark][data-onlight]");let g=localStorage.getItem("code-webshare-theme");g=g||c,L.forEach((e=>{e.getAttribute("data-onlight")&&e.getAttribute("data-ondark")&&v.push(e)}));const p=e=>{"light"===e?(document.body.classList.remove("dark-mode"),h&&(h.classList.remove("theme-switch_dark"),h.classList.add(`theme-switch_${e}`))):"dark"===e&&(document.body.classList.add("dark-mode"),h&&(h.classList.remove("theme-switch_light"),h.classList.add(`theme-switch_${e}`)));for(let t=0;t<v.length;t++){let s=v[t];const r=JSON.parse(s.getAttribute(`data-on${e}`)).changeSrc;r&&(s.classList.add("illustration_fade-out"),clearTimeout(s.timeoutID),s.timeoutID=setTimeout((()=>{s.setAttribute("src",r),s.classList.remove("illustration_fade-out")}),Math.ceil(125)))}};p(g),h&&h.addEventListener("click",(()=>{"dark"===g?(p("light"),g="light"):(p("dark"),g="dark")})),window.addEventListener("beforeunload",(()=>{localStorage.setItem("code-webshare-theme",g)}));const y=document.querySelectorAll(".prev-preview-slide"),_=document.querySelectorAll(".next-preview-slide"),w=document.querySelectorAll(".skip-advantages"),f=document.getElementById("start-advantages");y.forEach((e=>{e.addEventListener("click",(e=>{o&&a&&l(o-1)}))})),_.forEach((e=>{e.addEventListener("click",(e=>{o!==t-1&&a&&l(o+1)}))})),f.addEventListener("click",(e=>{l(1)})),w.forEach((e=>{e.addEventListener("click",(e=>{l(t-1)}))})),document.body.addEventListener("keydown",((e,t)=>{let s;return function(){const r=this,d=arguments;clearTimeout(s),s=setTimeout((()=>{e.apply(r,d)}),t)}})((e=>{"ArrowLeft"!==e.key?"ArrowRight"!==e.key||l(o+1):l(o-1)}),50)),setTimeout((()=>{e.classList.add("main_active"),a=!0}),1e3),localStorage.setItem("code-juggernaut-service-opened","true");