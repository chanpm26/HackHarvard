(()=>{"use strict";let e=[];function t(e,t){let n;return t<=10?"easy"==e?n=40:"medium"==e?n=20:"hard"==e&&(n=10):t>10&&t<=25?"easy"==e?n=75:"medium"==e?n=40:"hard"==e&&(n=20):"easy"==e?n=185:"medium"==e?n=100:"hard"==e&&(n=45),n}function n(e,t){let n=!1;return t.map((t=>{t==e&&(n=!0)})),n}function o(e,t){document.getElementById("round").textContent=`Round ${e}. Tries Left: ${t}`}let d,l,m=1,r=document.getElementById("submit");function a(d,l){o(m,l),function(e){document.getElementById("number-range").textContent=e<=10?"The range is from 0 to 50":e<=25?"The range is from 0 to 100":"The range is from 0 to 250"}(m);let i,s=function(t){let o;if(t<=10)for(o=Math.floor(51*Math.random());n(o,e);)o=Math.floor(51*Math.random());else if(t<=25&&t>11)for(o=Math.floor(101*Math.random());n(o,e);)o=Math.floor(101*Math.random());else if(t>25)for(o=Math.floor(251*Math.random());n(o,e);)o=Math.floor(251*Math.random());return o}(m);console.log(s),r.addEventListener("click",(function(){if(l>0){i=document.getElementById("player-input").value;let r=function(t,n,o){let d;return n==t?(d=0,e.push(n)):t>n?d=1:t<n&&(d=-1),d}(i,s);n=r,document.getElementById("over-or-under").textContent=0==n?"Correct Guess!":-1==n?"(Your guess is too small)":"(Your guess is too big)",0==r?(m++,l=t(d,m),a(d,l)):o(m,l-=1)}else location.reload();var n}))}!function(){let e=document.getElementById("easy"),n=document.getElementById("medium"),o=document.getElementById("hard");e.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),l="easy";let o=t(l,m);d=o,a(l,d)})),n.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),l="medium";let o=t(l,m);d=o,a(l,d)})),o.addEventListener("click",(function(){let e=document.getElementById("mode-select-screen"),n=document.getElementById("main");e.classList.add("hidden"),n.classList.remove("hidden"),l="hard",console.log(l);let o=t(l,m);d=o,a(l,d)}))}()})();