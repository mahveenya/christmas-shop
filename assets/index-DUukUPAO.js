(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const x=[{name:"Bug Magnet",description:"Able to find bugs in code like they were placed there on purpose.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Console.log Guru",description:"Uses console.log like a crystal ball to find any issue.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Shortcut Cheater",description:"Knows every keyboard shortcut like they were born with them.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+200"}},{name:"Merge Master",description:"Merges branches in Git without conflicts, like a wizard during an exam.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Async Tamer",description:"Handles asynchronous code and promises like well-trained pets.",category:"For Work",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+300"}},{name:"CSS Tamer",description:"Can make Flexbox and Grid work together like they were always best friends.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Time Hacker",description:"Writes code at the last moment but always meets the deadline.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Layout Master",description:"Creates perfect layouts on the first try, like they can read the designer's mind.",category:"For Work",superpowers:{live:"+500",create:"+300",love:"+200",dream:"+200"}},{name:"Documentation Whisperer",description:"Understands cryptic documentation as if they wrote it themselves.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+100"}},{name:"Feedback Master",description:"Accepts client revisions with the Zen calm of Buddha.",category:"For Work",superpowers:{live:"+300",create:"+500",love:"+300",dream:"+400"}},{name:"Code Minimalist",description:"Writes code so concise that one line does more than a whole file.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Pixel-Perfect Magician",description:"Aligns elements to the last pixel, even when the design looks abstract.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+400"}},{name:"Posture Levitation",description:"Can sit for hours, but maintains perfect posture like a ballerina.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+400"}},{name:"Step Master",description:"Gets 10,000 steps a day even while sitting at the computer.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+400"}},{name:"Snack Resister",description:"Ignoring desktop snacks like a strict dietician.",category:"For Health",superpowers:{live:"+400",create:"+100",love:"+200",dream:"+400"}},{name:"Hydration Bot",description:"Drinks the recommended 2 liters of water a day like a health-programmed robot.",category:"For Health",superpowers:{live:"+500",create:"+300",love:"+500",dream:"+500"}},{name:"Sleep Overlord",description:"Sleeps 6 hours but feels like they had 10.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+500"}},{name:"Break Guru",description:"Takes a stretch break every hour without forgetting, no matter how focused.",category:"For Health",superpowers:{live:"+300",create:"+300",love:"+300",dream:"+400"}},{name:"Eye Protector",description:"Can work all day at the monitor without feeling like their eyes are on fire.",category:"For Health",superpowers:{live:"+100",create:"+300",love:"+500",dream:"+400"}},{name:"Stress Dodger",description:"Masters meditation right at the keyboard.",category:"For Health",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+400"}},{name:"Yoga Coder",description:"Easily switches from coding to yoga and back.",category:"For Health",superpowers:{live:"+400",create:"+400",love:"+400",dream:"+400"}},{name:"Healthy Snacker",description:"Always picks fruit, even when chocolate is within arm’s reach.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+200",dream:"+400"}},{name:"Chair Exerciser",description:"Manages to work out without leaving the chair.",category:"For Health",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+400"}},{name:"Caffeine Filter",description:"Drinks coffee at night and still falls asleep with no problem.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+200"}},{name:"Joy Charger",description:"Finds joy in the little things—even in a build that finishes unexpectedly fast.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Error Laugher",description:"Laughs at code errors like they’re jokes instead of getting angry.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Bug Acceptance Guru",description:"Accepts bugs as part of the journey to perfection — it’s just another task.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Spontaneous Coding Philosopher",description:"Philosophically accepts any client suggestion after a long refactor.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Deadline Sage",description:"Remains zen even when the deadline is close and the project manager is stressed.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+300",dream:"+500"}},{name:"Inspiration Maestro",description:"Finds inspiration on an empty screen as if masterpieces are already there.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+400",dream:"+100"}},{name:"Peace Keeper",description:"Maintains inner calm even in moments of intense crisis.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Empathy Guru",description:"Feels the team’s mood and can lift everyone’s spirits.",category:"For Harmony",superpowers:{live:"+500",create:"+200",love:"+500",dream:"+500"}},{name:"Laughter Generator",description:"Can lighten any tense situation with a joke that even bugs laugh at.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+200",dream:"+500"}},{name:"Pause Master",description:"Knows when to just step back from the keyboard and breathe.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+100",dream:"+100"}},{name:"Coder Healer",description:"Can support a colleague in their darkest hour, even if it’s a 500 error.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Music Code Curator",description:"Creates work playlists so good, even deadlines follow the rhythm.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+300",dream:"+200"}}],B={data:x};function I(t){const{data:e}=B;return t?e.slice().sort(()=>Math.random()-.5).slice(0,t):e}const w="/christmas-shop/assets/gift-for-harmony-z4b6XnmG.png",W="/christmas-shop/assets/gift-for-health-D7aCJwWG.png",T={"for-harmony":w,"for-health":W,"for-work":w};function A(t){const e=document.createElement("figure"),o=document.createElement("div"),a=document.createElement("img"),s=document.createElement("figcaption"),r=document.createElement("h4"),n=document.createElement("h3"),c=t.category.toLowerCase(),l=c.replace(" ","-");return e.classList.add("gifts__card"),o.style.width="310px",o.style.height="230px",a.src=T[l],a.alt="gift image",a.classList.add("gifts__card-img"),s.classList.add("gifts__card-figcaption"),r.dataset.label=l,r.textContent=c,n.textContent=t.name,s.append(r,n),o.append(a),e.append(o,s),e}function G(t){const e=I(t).map(A);document.querySelector(".gifts__cards").append(...e)}const P="/christmas-shop/assets/santa-D8Vfrbdr.png",j="/christmas-shop/assets/snowman-CtIqi_Y3.png",O="/christmas-shop/assets/christmas-trees-hbGs1Mjd.png",D="/christmas-shop/assets/christmas-tree-ball-Cula2XyV.png",Y="/christmas-shop/assets/fairytale-house-Dya4diNh.png";let z=`<section class="section hero">
  <div class="hero__content">
    <span class="caption">Merry Christmas</span>
    <h1>Gift yourself the magic of new possibilities</h1>
    <button class="hero__button cta-s" data-url="/mahveenya-JSFE2024Q4/christmas-shop/gifts">
      Explore Magical Gifts
    </button>
    <span class="caption">and Happy New Year</span>
  </div>
</section>
<section id="about" class="section about">
  <div class="about__container">
    <div class="about__content">
      <span class="caption about__caption">About</span>
      <h2>Unleash your inner superhero!</h2>
      <p>
        This New Year marks the beginning of your journey to inner harmony and
        new strengths. We offer unique gifts that will help you improve your
        life.
      </p>
    </div>
    <div class="about__img-container">
      <img
        src="${P}"
        alt="Santa Claus"
        class="about__img"
      />
    </div>
  </div>
</section>
<section class="section advice">
  <div class="advice__texts">
    <span class="caption">Become Happier!</span>
    <h2>in the new 2025</h2>
  </div>
  <div class="slider">
    <div class="slider__slides">
      <span>live</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${j}"
          alt="snowman"
        />
      </div>
      <span>create</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${O}"
          alt="christmas-trees"
        />
      </div>
      <span>love</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${D}"
          alt="christmas-tree-ball"
        />
      </div>
      <span>dream</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${Y}"
          alt="fairytale-house"
        />
      </div>
    </div>
    <div class="slider__arrows">
      <button class="slider__arrow slider__arrow--disabled slider__arrow--left">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="slider__arrow slider__arrow--right">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</section>
<section id="gifts" class="section gifts best-gifts">
  <div class="gifts__texts best-gifts__texts">
    <span class="caption">Best Gifts</span>
    <h2>especially for you</h2>
  </div>
  <div class="gifts__cards"></div>
</section>
<section class="section countdown">
  <div class="countdown__content">
    <h2>Ready to start your journey to a better version of yourself?</h2>
    <button class="countdown__button cta-s" data-url="/mahveenya-JSFE2024Q4/christmas-shop/gifts">
      Explore Magical Gifts
    </button>
    <div class="countdown__clock-and-caption">
      <span class="caption">The New Year is Coming Soon...</span>
      <div class="countdown__clock">
        <div class="countdown__clock-time-cell">
          <h2 id="days" class="countdown__clock-time-value">47</h2>
          <h4 class="countdown__clock-time-label">days</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell">
          <h2 id="hours" class="countdown__clock-time-value">5</h2>
          <h4 class="countdown__clock-time-label">hours</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell">
          <h2 id="minutes" class="countdown__clock-time-value">34</h2>
          <h4 class="countdown__clock-time-label">minutes</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell">
          <h2 id="seconds" class="countdown__clock-time-value">12</h2>
          <h4 class="countdown__clock-time-label">seconds</h4>
        </div>
      </div>
    </div>
  </div>
</section>`,q=`
<button id="scroll-to-top-button" class="scroll-to-top-button">
  <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H13.5M13.5 7L7.5 1M13.5 7L7.5 13"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
  </svg>
</button>
<section class="gifts section">
  <div class="gifts__texts">
    <h1>Achieve health, harmony, and inner strength</h1>
  </div>
  <div class="gifts__tabs">
    <button class="gifts__tab cta-s gifts__tab--active">all</button>
    <button class="gifts__tab cta-s">for work</button>
    <button class="gifts__tab cta-s">for health</button>
    <button class="gifts__tab cta-s">for harmony</button>
  </div>
  <div class="gifts__cards"></div>
</section>`;const N={"/mahveenya-JSFE2024Q4/christmas-shop/":z,"/mahveenya-JSFE2024Q4/christmas-shop/gifts":q};document.addEventListener("click",t=>{var r;const e=t.target.closest("a, button, [data-url]");if(!e)return;const o=e.tagName==="A"&&e.href.includes("#"),a=e.closest("footer");if(o||a)return;const s=((r=e.dataset)==null?void 0:r.url)||(e==null?void 0:e.href);s&&(t.preventDefault(),R(s))});const R=t=>{let e=t;t.includes("http")&&(e=new URL(t).pathname),(window.history.state||{}).path!==e&&(window.history.pushState({path:e},"",e),h(),window.scrollTo({top:0}))},h=()=>{const t=window.location.pathname,e=t==="/mahveenya-JSFE2024Q4/christmas-shop/",o=document.getElementById("main");o.innerHTML=N[t],G(e?4:null)};window.onpopstate=h;h();const y=document.getElementById("burger__button"),_=document.getElementById("burger__menu");y.addEventListener("click",()=>{b(),k(),F()});_.addEventListener("click",t=>{t.target.classList.contains("burger__menu-link")&&(b(),k(),F())});function b(){_.classList.toggle("burger__menu--active")}function k(){y.classList.toggle("burger__button--active")}function F(){document.body.classList.toggle("no-scroll")}const L={childList:!0,subtree:!0},J=(t,e)=>{const o=document.getElementById("scroll-to-top-button");if(o){const a=()=>{const c=window.scrollY,l=window.innerWidth;c>300&&l<=768?o.style.display="flex":o.style.display="none"},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};o.addEventListener("click",s),document.addEventListener("scroll",a),window.addEventListener("resize",a);const r=()=>{o.removeEventListener("click",s),document.removeEventListener("scroll",a),window.removeEventListener("resize",a)},n=new MutationObserver(()=>{document.body.contains(o)||(r(),n.disconnect())});n.observe(document.body,L)}},$=new MutationObserver(J);$.observe(document.body,L);let m,p,f,d=0,u,i=0;const U=document.querySelector(".slider"),g=document.querySelector(".slider__slides"),Q=document.querySelector(".content"),E=document.querySelector(".slider__arrow--left"),S=document.querySelector(".slider__arrow--right");S.addEventListener("click",t=>M(t,"next"));E.addEventListener("click",t=>M(t,"prev"));g.addEventListener("transitionend",()=>{v()});window.addEventListener("load",()=>{const t=new ResizeObserver(e=>{const o=e[0],a=e[1],s=e[2];m!=o.contentRect.width&&(d=0,i=0,H(),v(0)),m=o.contentRect.width;const r=a.contentRect.width,n=s.target.scrollWidth;u=m>768?3:6,f=n-r,p=Math.ceil(f/u)});t.observe(Q),t.observe(U),t.observe(g)});function v(t){g.style.transform=`translateX(${t}px)`}function M(t,e){e==="next"&&i<u?(i++,d-=p):e==="prev"&&i>0&&(i--,d+=p),H(),v(d)}function H(){E.classList.toggle("slider__arrow--disabled",i===0),S.classList.toggle("slider__arrow--disabled",i===u)}function C(){const t=new Date,e=t.getFullYear()+1,a=new Date(Date.UTC(e,0,1,0,0,0))-t,s=Math.floor(a/(1e3*60*60*24)),r=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),n=Math.floor(a%(1e3*60*60)/(1e3*60)),c=Math.floor(a%(1e3*60)/1e3);document.getElementById("days").textContent=s,document.getElementById("hours").textContent=r,document.getElementById("minutes").textContent=n,document.getElementById("seconds").textContent=c}setInterval(C,1e3);C();
//# sourceMappingURL=index-DUukUPAO.js.map
