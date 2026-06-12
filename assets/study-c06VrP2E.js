import{r as t,u as B,j as e,S as P,c as T}from"./SiteNav-BOAyos7E.js";
function D(j){const c=[...j];for(let l=c.length-1;l>0;l--){const f=Math.floor(Math.random()*(l+1));[c[l],c[f]]=[c[f],c[l]]}return c}
function X(){
  const cv=document.createElement('canvas');
  cv.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  cv.width=window.innerWidth;cv.height=window.innerHeight;
  document.body.appendChild(cv);
  const ctx=cv.getContext('2d');
  const colors=['#a8d4e8','#c4b0e8','#4aba5a','#e8c84a','#e05070','#fff','#f0a0c0'];
  const ps=Array.from({length:100},()=>({x:Math.random()*cv.width,y:Math.random()*-cv.height*.6,w:Math.random()*9+4,h:Math.random()*5+2,color:colors[Math.floor(Math.random()*colors.length)],rot:Math.random()*Math.PI*2,vx:(Math.random()-.5)*4,vy:Math.random()*3+2,vrot:(Math.random()-.5)*.18}));
  let fr;const start=Date.now();
  function tick(){
    ctx.clearRect(0,0,cv.width,cv.height);
    const el=Date.now()-start;
    ctx.globalAlpha=el>2800?Math.max(0,1-(el-2800)/600):1;
    for(const p of ps){p.x+=p.vx;p.y+=p.vy;p.rot+=p.vrot;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();}
    if(el<3400){fr=requestAnimationFrame(tick);}else{cv.remove();}
  }
  fr=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(fr);cv.remove();}
}
function W(){
  const[sets,setSets]=t.useState([]);
  const[allCards,setAllCards]=t.useState([]);
  const[setId,setSetId]=t.useState(null);
  const[favOnly,setFavOnly]=t.useState(false);
  const[batchSize,setBatchSize]=t.useState(10);
  const{favorites,toggleFavorite,isFavorite}=B();
  const[queue,setQueue]=t.useState([]);
  const[totalCards,setTotalCards]=t.useState(0);
  const[correct,setCorrect]=t.useState(0);
  const[missedIds,setMissedIds]=t.useState(new Set());
  const[isFlipped,setIsFlipped]=t.useState(false);
  const[showSummary,setShowSummary]=t.useState(false);
  const[pbResult,setPbResult]=t.useState(null);
  const promoIds=t.useMemo(()=>new Set(sets.filter(s=>s.releaseDate===null).map(s=>s.id)),[sets]);
  const touchX=t.useRef(0),touchY=t.useRef(0),didSwipe=t.useRef(false);

  t.useEffect(()=>{
    fetch("/data/sets.json").then(r=>r.json()).then(data=>{
      setSets(data);
      const jp=data.filter(s=>s.language==="ja"&&s.releaseDate!==null).sort((a,b)=>b.releaseDate.localeCompare(a.releaseDate));
      setSetId(jp.length>0?jp[0].id:"");
    }).catch(()=>{setSetId("");});
    fetch("/data/index.json").then(r=>r.json()).then(setAllCards).catch(()=>{});
  },[]);

  function startSession(cards){
    const q=D(cards);
    setQueue(q);setTotalCards(q.length);setCorrect(0);setMissedIds(new Set());setIsFlipped(false);setShowSummary(false);
  }

  t.useEffect(()=>{
    if(setId===null)return;
    let cards=setId?allCards.filter(c=>c.setIdJa===setId):allCards.filter(c=>!promoIds.has(c.setIdJa));
    if(favOnly)cards=cards.filter(c=>favorites.includes(c.id));
    startSession(batchSize&&batchSize<cards.length?D(cards).slice(0,batchSize):cards);
  },[allCards,setId,favOnly,batchSize,promoIds]);// eslint-disable-line

  function onKnew(){
    const[,...rest]=queue;
    setCorrect(n=>n+1);
    if(rest.length===0){setShowSummary(true);}
    else{setQueue(rest);setIsFlipped(false);}
  }
  function onAgain(){
    const[cur,...rest]=queue;
    const at=Math.min(3,rest.length);
    setMissedIds(s=>new Set([...s,cur.id]));
    setQueue([...rest.slice(0,at),cur,...rest.slice(at)]);
    setIsFlipped(false);
  }
  function retryMissed(){startSession(allCards.filter(c=>missedIds.has(c.id)));}
  function restart(){
    let cards=setId?allCards.filter(c=>c.setIdJa===setId):allCards.filter(c=>!promoIds.has(c.setIdJa));
    if(favOnly)cards=cards.filter(c=>favorites.includes(c.id));
    startSession(batchSize&&batchSize<cards.length?D(cards).slice(0,batchSize):cards);
  }

  t.useEffect(()=>{
    function onKey(ev){
      if(showSummary)return;
      if(ev.key===" "){ev.preventDefault();setIsFlipped(f=>!f);}
      else if(ev.key==="ArrowRight"&&isFlipped)onKnew();
      else if(ev.key==="ArrowLeft"&&isFlipped)onAgain();
    }
    window.addEventListener("keydown",onKey);
    return()=>window.removeEventListener("keydown",onKey);
  },[isFlipped,showSummary,queue,correct]);// eslint-disable-line
  t.useEffect(()=>{if(!showSummary||missedIds.size>0||totalCards===0)return;return X();},[showSummary]);// eslint-disable-line
  t.useEffect(()=>{
    if(!showSummary||totalCards===0)return;
    const key=`study_pb_${setId||'all'}${favOnly?'_fav':''}`;
    const acc=Math.round((totalCards-missedIds.size)/totalCards*100);
    const prev=localStorage.getItem(key);
    const prevNum=prev!==null?parseInt(prev):null;
    const isNew=prevNum===null||acc>prevNum;
    if(isNew)localStorage.setItem(key,String(acc));
    setPbResult({acc,prev:prevNum,isNew});
  },[showSummary]);// eslint-disable-line

  function onTouchStart(ev){touchX.current=ev.touches[0].clientX;touchY.current=ev.touches[0].clientY;didSwipe.current=false;}
  function onTouchEnd(ev){
    const dx=ev.changedTouches[0].clientX-touchX.current;
    const dy=ev.changedTouches[0].clientY-touchY.current;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)){
      didSwipe.current=true;
      if(isFlipped){dx<0?onKnew():onAgain();}
    }
  }
  function onCardClick(){if(!didSwipe.current)setIsFlipped(f=>!f);}

  const card=queue[0]??null;
  const progress=totalCards>0?(correct/totalCards)*100:0;

  return e.jsxs("div",{className:"study-page",children:[
    e.jsx(P,{links:[{href:"/cardsearch.html",label:"カード検索"},{href:"/study.html",label:"カード勉強",active:true},{href:"/quiz.html",label:"クイズ"},{href:"/favorites.html",label:"気に入りカード"},{href:"/vocablist.html",label:"日英単語リスト"}]}),
    e.jsx("div",{className:"study-progress-bar",role:"progressbar","aria-valuenow":correct,"aria-valuemax":totalCards,children:e.jsx("div",{className:"study-progress-bar-fill",style:{width:`${progress}%`}})}),
    showSummary
      ?e.jsx("main",{className:"study-main",children:
          e.jsxs("div",{className:"study-summary",children:[
            e.jsxs("h2",{className:"summary-title",children:["セッション終了",e.jsx("span",{className:"summary-title-en",children:"Session Complete"})]}),
            e.jsxs("div",{className:"summary-stats",children:[
              e.jsxs("div",{className:"summary-stat summary-stat--good",children:[
                e.jsx("span",{className:"summary-num",children:totalCards-missedIds.size}),
                e.jsxs("span",{className:"summary-label",children:["完璧 ",e.jsx("span",{className:"summary-label-en",children:"Perfect"})]})
              ]}),
              e.jsxs("div",{className:"summary-stat summary-stat--miss",children:[
                e.jsx("span",{className:"summary-num",children:missedIds.size}),
                e.jsxs("span",{className:"summary-label",children:["間違えた ",e.jsx("span",{className:"summary-label-en",children:"Missed"})]})
              ]})
            ]}),
            pbResult&&pbResult.prev!==null&&e.jsxs("div",{className:`summary-pb${pbResult.isNew?" summary-pb--new":""}`,children:[
              e.jsxs("span",{className:"summary-pb-label",children:[pbResult.isNew?"新記録！":"最高記録 ",e.jsx("span",{className:"summary-pb-label-en",children:pbResult.isNew?"New Record!":"Personal Best"})]}),
              e.jsxs("span",{className:"summary-pb-score",children:[pbResult.isNew?pbResult.acc:pbResult.prev,"%"]})
            ]}),
            missedIds.size>0&&e.jsxs("button",{className:"summary-btn summary-btn--retry",onClick:retryMissed,children:[
              "間違えたカードをやり直す",e.jsx("span",{className:"summary-btn-en",children:"Retry missed cards"})
            ]}),
            e.jsxs("button",{className:"summary-btn summary-btn--restart",onClick:restart,children:[
              "もう一度最初から",e.jsx("span",{className:"summary-btn-en",children:"Start over"})
            ]})
          ]})
        })
      :e.jsxs("main",{className:"study-main",children:[
          e.jsxs("div",{className:"study-toolbar",children:[
            e.jsxs("select",{className:"study-select",value:setId??"",onChange:ev=>setSetId(ev.target.value),children:[
              e.jsxs("option",{value:"",children:["全セット (",allCards.length,")"]}),
              sets.filter(s=>s.language==="ja"&&s.releaseDate!==null).map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))
            ]}),
            e.jsxs("select",{className:"study-select",value:batchSize??0,onChange:ev=>{const v=parseInt(ev.target.value);setBatchSize(v===0?null:v);},children:[
              e.jsx("option",{value:10,children:"10枚"}),
              e.jsx("option",{value:20,children:"20枚"}),
              e.jsx("option",{value:30,children:"30枚"}),
              e.jsx("option",{value:0,children:"全部"})
            ]}),
            e.jsxs("button",{className:`study-shuffle-btn${favOnly?" is-active":""}`,onClick:()=>setFavOnly(f=>!f),"aria-pressed":favOnly,children:[
              e.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:favOnly?"currentColor":"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:
                e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})
              }),
              "気に入り勉強"
            ]}),
            e.jsx("span",{className:"study-progress",children:totalCards>0?`残り ${queue.length} / ${totalCards}枚`:"読み込み中…"})
          ]}),
          e.jsx("div",{className:"study-card-area",children:
            card
              ?e.jsxs("div",{className:"flashcard-scene",onClick:onCardClick,onTouchStart:onTouchStart,onTouchEnd:onTouchEnd,role:"button",tabIndex:0,onKeyDown:ev=>{ev.key==="Enter"&&setIsFlipped(f=>!f)},"aria-label":isFlipped?"表に戻す":"英語版を見る",children:[
                  e.jsx("button",{className:`flashcard-fav-btn${isFavorite(card.id)?" is-active":""}`,onClick:ev=>{ev.stopPropagation();toggleFavorite(card.id)},"aria-label":isFavorite(card.id)?"お気に入りから削除":"お気に入りに追加",children:
                    e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:isFavorite(card.id)?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:
                      e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})
                    })
                  }),
                  e.jsxs("div",{className:`flashcard${isFlipped?" is-flipped":""}`,children:[
                    e.jsx("div",{className:"flashcard-face flashcard-front",children:e.jsx("img",{src:card.imageJa,alt:card.nameJa,className:"flashcard-img",draggable:false})}),
                    e.jsx("div",{className:"flashcard-face flashcard-back",children:
                      card.enAvailable&&card.imageEn
                        ?e.jsx("img",{src:card.imageEn,alt:card.nameEn??card.nameJa,className:"flashcard-img",draggable:false})
                        :e.jsxs("div",{className:"flashcard-no-en",children:[
                            e.jsx("p",{className:"flashcard-no-en-name",children:card.nameEn??card.nameJa}),
                            e.jsx("p",{className:"flashcard-no-en-label",children:"英語版なし"})
                          ]})
                    })
                  ]})
                ]})
              :e.jsx("div",{className:"study-empty",children:"カードがありません"})
          }),
          isFlipped
            ?e.jsxs("div",{className:"study-grade-btns",children:[
                e.jsxs("button",{className:"grade-btn grade-btn--miss",onClick:onAgain,children:[
                  e.jsx("span",{className:"grade-btn-main",children:"もう一回"}),
                  e.jsx("span",{className:"grade-btn-en",children:"Again"})
                ]}),
                e.jsxs("button",{className:"grade-btn grade-btn--knew",onClick:onKnew,children:[
                  e.jsx("span",{className:"grade-btn-main",children:"知ってた！"}),
                  e.jsx("span",{className:"grade-btn-en",children:"Knew it!"})
                ]})
              ]})
            :e.jsxs("p",{className:"study-flip-hint",children:[
                "タップして英語を確認",
                e.jsx("span",{className:"study-flip-hint-en",children:" / Tap to see English"})
              ]}),
          e.jsxs("div",{className:"study-card-name",children:[
            e.jsx("span",{className:"study-name-ja",children:card?.nameJa}),
            isFlipped&&card?.nameEn&&e.jsxs("span",{className:"study-name-en",children:[
              "= ",card.nameEn,
              e.jsx("button",{className:"pronounce-btn",onClick:ev=>{ev.stopPropagation();if(window.speechSynthesis){window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(card.nameEn);u.lang="en-US";window.speechSynthesis.speak(u)}},"aria-label":"Pronounce name",children:
                e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:
                  e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})
                })
              })
            ]})
          ]})
        ]})
  ]});
}
T(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(W,{})}));
