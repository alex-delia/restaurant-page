(()=>{"use strict";function e(){const e=document.querySelector("#content"),n=document.createElement("img");n.src="../images/food.jpeg",e.appendChild(n);const t=document.createElement("div");t.classList.add("home");const o=document.createElement("h1");o.textContent="Bubby's";const c=document.createElement("p");c.innerHTML="<em>SERVED EVERY DAY SINCE 1990</em>";const r=document.createElement("p");r.innerText=" Bubby's opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.",t.appendChild(o),t.appendChild(c),t.appendChild(r),e.append(t)}const n=document.querySelector("#content"),t=document.querySelector("#home"),o=document.querySelector("#menu"),c=document.querySelector("#about");e(),t.addEventListener("click",(()=>{n.innerHTML="",e()})),o.addEventListener("click",(()=>{n.innerHTML=""})),c.addEventListener("click",(()=>{n.innerHTML=""}))})();