const CONFIG={email:"cleanconnect03@gmail.com",phone:"09561862068",facebook:"https://www.facebook.com/CleanConnectPH",address:"Davao Del Norte, Philippines"};
const pages=[["index.html","Home"],["prototype.html","Our Prototype"],["about.html","About Us"],["contact.html","Contact Us"]];
const here=location.pathname.split("/").pop()||"index.html";

document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap bar">
<a href="index.html" aria-label="CleanConnect home"><img src="assets/logo.webp" alt="CleanConnect logo"></a>
<button id="menu" aria-label="Toggle menu" aria-expanded="false">☰</button>
<nav id="nav" aria-label="Main"><ul>${pages.map(([h,t])=>`<li><a href="${h}"${h===here?' aria-current="page"':""}>${t}</a></li>`).join("")}</ul></nav></div></header>`);

document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><img src="assets/logo.webp" alt="CleanConnect"><p><strong>One Click, Full Services.</strong></p><p>© ${new Date().getFullYear()} CleanConnect. All rights reserved.</p></div></footer>`);

const menu=document.getElementById("menu"),nav=document.getElementById("nav");
menu.onclick=()=>{const o=nav.classList.toggle("open");menu.setAttribute("aria-expanded",o)};

const sp=document.getElementById("splash");
if(sp){if(sessionStorage.getItem("cc")){sp.remove()}else{setTimeout(()=>{sp.classList.add("hide");sessionStorage.setItem("cc",1);setTimeout(()=>sp.remove(),700)},1800)}}

/* social links gkgwhrgviwr*/
const info=document.getElementById("info");
if(info){
  info.innerHTML=[
    CONFIG.email&&`<p>✉️ <a href="mailto:${CONFIG.email}">${CONFIG.email}</a></p>`,
    CONFIG.phone&&`<p>📞 ${CONFIG.phone}</p>`,
    CONFIG.address&&`<p>📍 ${CONFIG.address}</p>`,
    CONFIG.facebook&&`<p>🌐<i class="fa-brands fa-facebook" style="color: #1877F2; margin-right: 6px;"></i> <a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a></p>`
  ].filter(Boolean).join("")
}

const f=document.getElementById("contact-form");
if(f)f.onsubmit=e=>{e.preventDefault();const m=document.getElementById("msg"),d=new FormData(f);
if(!CONFIG.email){m.textContent="Contact email not set yet. Add it in script.js (CONFIG).";return}
location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent("CleanConnect inquiry from "+d.get("name"))}&body=${encodeURIComponent(d.get("message")+"\n\nFrom: "+d.get("name")+" ("+d.get("email")+")")}`;
m.textContent="Opening your email app…";f.reset()};