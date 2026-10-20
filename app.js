(function(){
const T=["《敲敲蛤蜊》文蛤粉粉的魚塭冒險", "天還沒全亮，臺南海邊的魚塭已經醒來。水車「噗噗噗」地轉，把空氣打進水裡。阿杰哥哥穿著雨鞋走在塭堤上巡塭。池底的沙泥裡，文蛤寶寶粉粉悄悄探出頭：「早安，魚塭！」", "粉粉的家很熱鬧。虱目魚目目在上層游來游去，白蝦蝦蝦把池底整理得乾乾淨淨。粉粉伸出兩根小水管，把水吸進來、濾下小小的微藻當早餐，再把乾淨的水吐出去。「我們三個，是魚塭的生態三角鏈！」", "粉粉的殼上有一圈圈成長線，像樹的年輪，記錄著長大的日子。牠用白白的斧足鑽沙、走路；遇到危險，就用閉殼肌把殼「喀」一聲關緊。入水管吸水、出水管吐水，一進一出，好像在呼吸。", "這天，五年級的教室鬧哄哄。「聽說今天有『文蛤小王子』要來！」小海興奮地翻著筆記本。阿樂卻皺起眉頭：「我才不吃蛤蜊，每次都咬到沙，喀滋喀滋，好可怕！」", "阿杰哥哥提著一籃亮晶晶的文蛤走進教室。他說，以前他在臺北的精品店工作，有一天接到電話：爸爸在魚塭邊中暑昏倒了。「那一刻我決定回家，當第四代的養殖漁民。」", "小記者時間到！小海舉起麥克風：「養文蛤最難的是什麼？」阿杰哥哥說：「是天氣。寒流太冷、夏天太熱，大雨一下池水變淡，文蛤都會不舒服。所以我每天都要看天氣、測鹽度。」阿樂把每一句話都記下來。", "「你們知道蛤蜊家族有哪些成員嗎？」文蛤光滑有鋸齒紋，花蛤花紋多變，赤嘴蛤殼緣紅紅的，西施舌長長淡紫色，蜆仔小小黑黑亮亮。小海拿著放大鏡，一個一個仔細比對。", "「怎麼挑新鮮的文蛤？」阿杰哥哥拿起兩顆文蛤輕輕互敲——「叩叩！」聲音清脆，代表活力十足；如果是「咚咚」悶悶的，就要挑掉。再看看殼有沒有光澤，聞聞有沒有淡淡的海水味。", "回到家，要先幫文蛤做「吐沙SPA」。刷乾淨外殼，在1000cc的水裡加入18到25克的鹽，讓水鹹鹹的像魚塭的家；再蓋上蓋子，放在陰涼的地方。粉粉安心地伸出水管，把沙慢慢吐出來。", "大家決定做實驗：A盆放清水，B盆放鹽水。兩個小時後，清水盆裡的文蛤緊緊閉著殼，鹽水盆的盆底卻多了一層細沙。「原來文蛤要在像家一樣的鹹水裡，才會放心吐沙！」阿樂恍然大悟。", "「買文蛤時，怎麼知道牠從哪裡來？」小海用平板掃一掃包裝上的追溯QR Code，螢幕上出現了魚塭和阿杰哥哥揮手的畫面。認識三章一Q，選擇安全、在地的食材，吃得更安心。", "美味料理時間到！鍋裡的水滾了，文蛤一個個「啵——」地打開殼，沒有打開的就不吃。阿樂鼓起勇氣喝了一口湯：「哇！好鮮甜，一點沙都沒有！」", "文蛤含有豐富的鐵質、蛋白質和牛磺酸，是大海送來的營養寶藏。大家把碗裡的湯喝得一滴不剩，煮多少、吃多少，不浪費。吃完的蛤殼，也小心收進小竹籃裡。", "蛤殼不是垃圾！洗淨、曬乾的文蛤殼，搖身一變成為小小藝術品。孩子們用碎花布包住蛤殼，放進香草，綁上流蘇和吊繩，做成香香的文蛤香包吊飾。", "冬天，文蛤收成後，阿杰哥哥在魚塭留下淺淺的水。一群黑面琵鷺飛來，用琵琶般的長嘴左右掃動，找小魚小蝦吃。「友善的養殖，讓文蛤、漁民和候鳥都能好好生活。」大家拿著望遠鏡，安靜地看。", "夕陽把魚塭染成金色。小海和阿樂掛著自己做的香包，對著魚塭大聲說：「謝謝文蛤，謝謝阿杰哥哥！」沙裡的粉粉眨眨眼——家鄉的海，有我們一起守護。", "角色介紹"], B=window.BOOK||[]; let i=0, timer=null;
const img=document.getElementById('bookimg'), pg=document.getElementById('pg'), th=[...document.querySelectorAll('.thumbs img')];
function show(n){ if(!B.length) return; i=(n+B.length)%B.length; img.src=B[i];
  pg.textContent = i===0?'封面':(i===B.length-1?'角色介紹':('P. '+String(i).padStart(2,'0')));
  th.forEach((t,k)=>t.classList.toggle('on',k===i)); }
document.querySelector('.prev').onclick=()=>show(i-1); document.querySelector('.next').onclick=()=>show(i+1);
th.forEach(t=>t.onclick=()=>show(+t.dataset.i));
document.addEventListener('keydown',e=>{ if(e.key==='ArrowRight')show(i+1); if(e.key==='ArrowLeft')show(i-1); if(e.key==='Escape')lb.hidden=true; });
let sx=0; img.addEventListener('touchstart',e=>sx=e.touches[0].clientX); img.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-sx; if(Math.abs(d)>40) show(i+(d<0?1:-1));});
function speak(cb){ if(!('speechSynthesis' in window)) return; speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(T[i]||''); u.lang='zh-TW'; u.rate=.92; if(cb) u.onend=cb; speechSynthesis.speak(u); }
document.getElementById('speak').onclick=()=>speak();
const auto=document.getElementById('auto');
auto.onclick=()=>{ if(timer){timer=null; speechSynthesis.cancel(); auto.textContent='自動翻頁'; return;}
  auto.textContent='停止'; timer=true; const step=()=>{ if(!timer) return; speak(()=>{ if(!timer) return; setTimeout(()=>{ if(i<B.length-1){show(i+1); step();} else {timer=null; auto.textContent='自動翻頁';} },700); }); }; step(); };
show(0);
const K='kkc-ninegrid'; let S={}; try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){}
document.querySelectorAll('.cell textarea').forEach(t=>{ t.value=S[t.dataset.k]||''; t.oninput=()=>{S[t.dataset.k]=t.value; try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}; });
const clr=document.getElementById('clr'); if(clr) clr.onclick=()=>{ if(!confirm('確定清除九宮格內容？')) return; S={}; try{localStorage.removeItem(K)}catch(e){} document.querySelectorAll('.cell textarea').forEach(t=>t.value=''); };
const lb=document.getElementById('lb');
document.querySelectorAll('.zoom').forEach(m=>m.addEventListener('click',()=>{lb.querySelector('img').src=m.src; lb.hidden=false;}));
lb.onclick=e=>{ if(e.target.tagName!=='IMG') lb.hidden=true; };
})();
