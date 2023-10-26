(()=>{"use strict";let e=[];function t(e,t){let n;return t<=10?"easy"==e?n=40:"medium"==e?n=20:"hard"==e&&(n=10):t>10&&t<=25?"easy"==e?n=75:"medium"==e?n=40:"hard"==e&&(n=20):"easy"==e?n=185:"medium"==e?n=100:"hard"==e&&(n=45),n}function n(t){let n;if(t<=10)for(n=Math.floor(51*Math.random());o(n,e);)n=Math.floor(51*Math.random());else if(t<=25&&t>11)for(n=Math.floor(101*Math.random());o(n,e);)n=Math.floor(101*Math.random());else if(t>25)for(n=Math.floor(251*Math.random());o(n,e);)n=Math.floor(251*Math.random());return n}function o(e,t){let n=!1;return t.map((t=>{t==e&&(n=!0)})),n}function r(){return document.getElementById("player-input").value}function i(t,n){if(isNaN(t))return 2;{let o;return n==t?(o=0,e.push(n)):t>n?o=1:t<n&&(o=-1),o}}function d(){let e=document.getElementById("difficulty-screen");document.getElementById("player-screen").classList.add("hidden"),e.classList.remove("hidden")}function l(){let e=document.getElementById("difficulty-screen"),t=document.getElementById("main");e.classList.add("hidden"),t.classList.remove("hidden")}function u(e,t){document.getElementById("round").textContent=`Round ${e}. Tries Left: ${t}`}function c(e){document.getElementById("number-range").textContent=e<=10?"The range is from 0 to 50":e<=25?"The range is from 0 to 100":"The range is from 0 to 250"}function s(e){document.getElementById("over-or-under").textContent=0==e?"Correct Guess!":-1==e?"(Your guess is too small)":1==e?"(Your guess is too large)":"(Your input is not valid)"}let a=document.getElementById("submit"),m=document.getElementById("player-input");function f(e,t,o){u(t,e),c(t);let r=n(t);m.addEventListener("keypress",(function(n){"Enter"===n.key&&-1==y(r,e,t,o)&&e--})),a.addEventListener("click",(function(){-1==y(r,e,t,o)&&e--}))}function y(e,n,o,d){let l,c;if(c=n,c>0){l=r();let a=i(l,e);if(s(a),0==a)f(n=t(d,++o),o,d);else if(2!=a)return c--,u(o,c),-1}else location.reload()}let g=document.getElementById("submit"),h=document.getElementById("player-input"),E=1,I=0,B=0;function p(e,t,o,r){!function(){let e=document.getElementById("description");e.innerText="You are in two player mode. Players will take turns guessing the number for 10 rounds. The score is counted by totaling the number of tries a player takes to guess a number correctly. Like golf, whichever player has the LOWER score at the end wins.",e.style.fontSize="1.3rem"}(),u(o,t),c(o),function(e){let t=document.getElementById("current-player");t.classList.remove("hidden"),t.textContent=1==e?"Player 1's Turn":"Player 2's Turn"}(E);let i=n(o);if(console.log(i),o<11)h.addEventListener("keypress",(function(n){"Enter"===n.key&&-1==L(i,e,t,o,r)&&t--})),g.addEventListener("click",(function(){-1==L(i,e,t,o,r)&&t--}));else{let e;e=I<B?"Player One Wins":B<I?"Player Two Wins":"It is a tie",function(e,t,n){let o=document.getElementById("player-scores"),r=document.getElementById("main");document.getElementById("player-one-score").innerText=`Player One Score: ${e}`,document.getElementById("player-two-score").innerText=`Player Two Score: ${t}`,document.getElementById("winner").innerText=n,r.classList.add("hidden"),o.classList.remove("hidden")}(I,B,e)}}function L(e,n,o,d,l){let c,a;if(a=o,a>0){c=r();let m=i(c,e);if(s(m),0==m)!function(e,t){1==e?I+=t:B+=t}(E,n-a),2==E&&d++,E=1==E?2:1,p(n,o=t(l,d),d,l);else if(2!=m)return a--,u(d,a),-1}}let v,k,T;function M(){let e=document.getElementById("easy"),n=document.getElementById("medium"),o=document.getElementById("hard");e.addEventListener("click",(function(){l(),k="easy";let e=t(k,1);v=e,w(v,e,T,1,k)})),n.addEventListener("click",(function(){l(),k="medium";let e=t(k,1);v=e,w(v,e,T,1,k)})),o.addEventListener("click",(function(){l(),k="hard";let e=t(k,1);v=e,w(v,e,T,1,k)}))}function w(e,t,n,o,r){2==n?p(t,e,o,r):f(e,o,r)}!function(){let e=document.getElementById("one-player"),t=document.getElementById("two-player");e.addEventListener("click",(function(){d(),T=1,M()})),t.addEventListener("click",(function(){d(),T=2,M()}))}()})();