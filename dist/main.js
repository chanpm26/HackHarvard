(()=>{"use strict";let e=[];function t(e,t){let n;return t<=10?"easy"==e?n=40:"medium"==e?n=20:"hard"==e&&(n=10):t>10&&t<=25?"easy"==e?n=75:"medium"==e?n=40:"hard"==e&&(n=20):"easy"==e?n=185:"medium"==e?n=100:"hard"==e&&(n=45),n}function n(e,t){let n=!1;return t.map((t=>{t==e&&(n=!0)})),n}function o(e,t){document.getElementById("round").textContent=`Round ${e}. Tries Left: ${t}`}let d,r,l=1,m=document.getElementById("submit"),i=document.getElementById("player-input");function a(n,d){let m,i;if(i=d,i>0){m=document.getElementById("player-input").value;let u=function(t,n,o){let d;return n==t?(d=0,e.push(n)):t>n?d=1:t<n&&(d=-1),d}(m,n);if(a=u,document.getElementById("over-or-under").textContent=0==a?"Correct Guess!":-1==a?"(Your guess is too small)":"(Your guess is too large)",0!=u)return i--,o(l,i),-1;l++,s(0,d=t(r,l))}else location.reload();var a}function s(t,d){o(l,d),function(e){document.getElementById("number-range").textContent=e<=10?"The range is from 0 to 50":e<=25?"The range is from 0 to 100":"The range is from 0 to 250"}(l);let r=function(t){let o;if(t<=10)for(o=Math.floor(51*Math.random());n(o,e);)o=Math.floor(51*Math.random());else if(t<=25&&t>11)for(o=Math.floor(101*Math.random());n(o,e);)o=Math.floor(101*Math.random());else if(t>25)for(o=Math.floor(251*Math.random());n(o,e);)o=Math.floor(251*Math.random());return o}(l);console.log(r),i.addEventListener("keypress",(function(e){"Enter"===e.key&&-1==a(r,d)&&d--})),m.addEventListener("click",(function(){-1==a(r,d)&&d--}))}!function(){let e=document.getElementById("easy"),n=document.getElementById("medium"),o=document.getElementById("hard");e.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),r="easy";let o=t(r,l);d=o,s(0,d)})),n.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),r="medium";let o=t(r,l);d=o,s(0,d)})),o.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),r="hard";let o=t(r,l);d=o,s(0,d)}))}()})();