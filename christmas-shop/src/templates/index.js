import santaImage from '/src/assets/img/santa.png'
import snowmanImage from '/src/assets/img/snowman.png'
import christmasTreesImage from '/src/assets/img/christmas-trees.png'
import christmasTreeBallImage from '/src/assets/img/christmas-tree-ball.png'
import fairytaleHouseImage from '/src/assets/img/fairytale-house.png'

export let index = `<section class="section hero">
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
        src="${santaImage}"
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
          src="${snowmanImage}"
          alt="snowman"
        />
      </div>
      <span>create</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${christmasTreesImage}"
          alt="christmas-trees"
        />
      </div>
      <span>love</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${christmasTreeBallImage}"
          alt="christmas-tree-ball"
        />
      </div>
      <span>dream</span>
      <div class="slider__slide-img-container">
        <img
          class="slider__slide-img"
          src="${fairytaleHouseImage}"
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
        <div class="countdown__clock-time-cell" data-time-unit="days">
          <h2 class="countdown__clock-time-value">47</h2>
          <h4 class="countdown__clock-time-label">days</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell" data-time-unit="hours">
          <h2 class="countdown__clock-time-value">5</h2>
          <h4 class="countdown__clock-time-label">hours</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell" data-time-unit="minutes">
          <h2 class="countdown__clock-time-value">34</h2>
          <h4 class="countdown__clock-time-label">minutes</h4>
        </div>
        <div class="countdown__clock-time-cell-separator"></div>
        <div class="countdown__clock-time-cell" data-time-unit="seconds">
          <h2 class="countdown__clock-time-value">12</h2>
          <h4 class="countdown__clock-time-label">seconds</h4>
        </div>
      </div>
    </div>
  </div>
</section>`
