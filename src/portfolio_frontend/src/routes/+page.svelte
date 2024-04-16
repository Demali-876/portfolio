<script>
  import "../style.css";
  import { onMount } from 'svelte';
  import { setupDestinations, setupCrew, setupTechnologies, contentMap } from '../lib/functions.js';

  let activeTab = 'Architect';

  onMount(async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    setupDestinations(data.destinations);
    setupCrew(data.crew);
    setupTechnologies(data.technology);
  });

  function selectTab(tab) {
    activeTab = tab;
  }
</script>
<div class="display-grid gap-2 margin-btm-3" id="home">
  <main class="lh-100 margin-top-4 margin-left">
    <h1 class="uppercase fw-100 fs-500 margin-block-index clr-light">So, Blockchain is the new<br><span class="bold ff-serif">Cloud</span></h1>
    <p class="text-width main-p fw-100 clr-light">It's not a dream; it’s a reality unfolding powered by the Internet Computer Protocol. Hi! I'm Demali, a blockchain solution architect. Welcome to my and now our shared exploration of this new frontier, a recognition of the eventuality for blockchain to transform every facet of existing systems, services, and the very fabric of society.</p>
  </main>
  <div>
    <a href="#start" class="explore-btn ff-serif uppercase">Explore</a>
  </div>
 </div>
 <main id="whoami">
  <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3">
    <span class="clr-light">01 </span>DFX identity whoami
  </h1>
  <div class="display-grid gap-desktop margin-top-4 margin-btm-3">
    <div class="img-part display-flex align-items-center justify-content-center">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="astronaut.webp" class="destination-img mobile-img-width">
    </div>
    <div class="text-part">
      <nav>
        <ul class="display-flex gap-2 justify-content-center">
          {#each Object.keys(contentMap) as tab}
          <li class="fw-50 " >
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="javascript:void(0);" class="destination clr-light uppercase {activeTab === tab ? 'active-destination' : ''}"
              on:click={() => selectTab(tab)}>
              {tab}
            </a>
          </li>
          {/each}
        </ul>
      </nav>
      <h2 class="destination-place margin-btm-1 margin-top-3 ff-serif fs-800 fw-100 uppercase">Explorer</h2>
      <p class="btm-line description main-p fw-100 clr-light text-width">
        Internet Computer Astronaut, builder of the digital future. With a solid computer science background, I specialize in crafting decentralized applications on the Internet Computer Protocol. My focus is on transforming businesses by leveraging blockchain to enhance data integrity, and foster innovation.
      </p>
      <div class="justify-content-center display-flex"><div class="destination-underline"></div></div>
      <div class="numbers-info justify-content-center display-flex gap-2">
        <div>
          <p class="uppercase numbers-heading fw-100">{contentMap[activeTab].phrase1}</p>
          <p class="uppercase numbers-value ff-serif distance">ICP & Motoko</p>
        </div>
        <div>
          <p class="uppercase numbers-heading fw-100">{contentMap[activeTab].phrase2}</p>
          <p class="uppercase numbers-value ff-serif travel">Developer</p>
        </div>
      </div>
    </div>
  </div>
</main>
<main id = "start">
  <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3"><span class="clr-light">02 </span>dfx start</h1>
  <div class="display-grid gap-2 margin-top-4 margin-left">
      <div class=" crew img-part justify-content-center display-flex">
          <img src="icp.svg"  alt="icp" class="member-photo mobile-img-width align-self-end">
      </div>
      <div class="text-part grid-reverse display-grid-members">
          <div class="members-btn margin-btm-3 display-flex gap-1 justify-content-center">
              <button class="option member active-crew"></button>
              <button class="option member"></button>
              <button class="option member"></button>
              <button class="option member"></button>
          </div>
          <div>
              <p class="crew-member-role ff-serif fw-100 margin-btm-1 margin-top-4 uppercase">What is the</p>
              <h2 class="crew-member ff-serif margin-btm-2 fw-100 uppercase fs-600">Internet Computer</h2>
              <p class="member-bio margin-btm-3 main-p fw-100 clr-light text-width">ICP is a platform that redefines blockchain technology by reconceptualizing it as a decentralized cloud computing environment. This innovation enables software to run not only securely but with high efficiency directly on the public internet, creating a serverless cloud.</p>
          </div>
      </div>
  </div>
</main>
<main id="deploy">
  <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3"><span class="clr-light">03</span> dfx deploy</h1>
  <div class="tech display-grid gap-2 margin-top-4 margin-left margin-btm-3">
    <picture class="img-part">
      <source srcset="astro.svg" alt="launch vehicle" class="technology-img-desktop" media="(min-width: 768px)"> 
      <img src="astro.png" alt="launch vehicle" class="technology-img"> 
    </picture>
    <div class="text-part grid-reverse">
      <div class="display-flex-tech display-flex">
        <div class="technology-btn-part display-flex justify-content-center gap-2">
          <div class="btn-wrapper active-tech">
            <button class="technology-btn ff-serif fw-100">1</button>
          </div>
          <div class="btn-wrapper">
            <button class="technology-btn ff-serif fw-100">2</button>
          </div>
          <div class="btn-wrapper">
            <button class="technology-btn ff-serif fw-100">3</button>
          </div>
        </div>
        <div>
          <p class="uppercase main-p fw-100 clr-light terminology-p">Why build on icp...</p>
          <h2 class="technology-type ff-serif margin-btm-2 fw-100 uppercase fs-600">Enhanced Security</h2>
          <p class="technology-description main-p fw-100 clr-light text-width">The Internet Computer offers unmatched security by utilizing advanced cryptographic protocols, FULLY ON-CHAIN computation, and a decentralized infrastructure. This combination ensures that applications are resilient and tamper-proof, maintaining their integrity and reliability at all times.</p>
        </div>
      </div>
    </div>
  </div>
</main>
<section class="main" id="linktree">
  <div class="container">
    <div class="container_component">
      <div class="profile">
        <div class="profile_image"></div>
        <div class="text text_center text_large">
          <span class="crew-member ff-serif margin-btm-2 fw-100 uppercase fs-600">Demali.icp</span>
        </div>
        <div class="text text_center">
          <h4 class="crew-member-role ff-serif fw-100 margin-btm-1 margin-top-3 uppercase">Motoko Developer</h4>
        </div>
        <div class="social">
          <a href="https://twitter.com/demali_icp" target="_blank" rel="noopener noreferrer" class="social_link social_link_circle" style="background-color:#321033;">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="social_icon" src="x.svg">
          </a>
          <a href="https://discord.com/users/784929659854782524" target="_blank" rel="noopener noreferrer" class="social_link social_link_circle" style="background-color:#321033;">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="social_icon" src="discord.svg">
          </a>
          <a href="mailto:demaligregg123@gmail.com" target="_blank" rel="noopener noreferrer" class="social_link social_link_circle" style="background-color:#321033;">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="social_icon" src="gmail.svg">
          </a>
        </div>
        <div class="container_link">
          <div class="link_outer">
            <a href="https://github.com/Demali-876/portfolio/tree/master" target="_blank" rel="noopener noreferrer" class="link link_circle link_circle_shadow" style="background-color: #321033;">
              <div class="link_icon">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="link_image" src="git.svg">
              </div>
              <div class="link_outer_text">
                <div class="text text_center ">
                  <strong class="main-p fw-100 clr-light text-width">Source Code</strong>
                </div>
              </div>
              <div class="link_end"></div>
          </div>
        </div>
        <div class="container_link">
          <div class="link_outer">
            <a href="https://github.com/Demali-876" class="link link_circle link_circle_shadow" style="background-color: #321033;">
              <div class="link_icon">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="link_image" src="github.svg">
              </div>
              <div class="link_outer_text">
                <div class="text text_center">
                  <strong class="main-p fw-100 clr-light text-width">My GitHub</strong>
                </div>
              </div>
              <div class="link_end"></div>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div class="container_link">
        <div class="link_outer">
          <a href="https://nuance.xyz/elcommandante/5155-434go-diaaa-aaaaf-qakwq-cai/the-superiority-of-decentralized-systems"  class="link link_circle link_circle_shadow" style="background-color: #321033;">
            <div class="link_icon">
              <!-- svelte-ignore a11y-missing-attribute -->
              <img class="link_image" src="nuance.svg">
            </div>
            <div class="link_outer_text">
              <div class="text text_center ">
                <strong class=" fw-100 clr-light">Nuance Article</strong>
              </div>
            </div>
            <div class="link_end"></div>
        </div>
      </div>
      <div class="container_link">
        <div class="link_outer">
          <a href="https://kit.svelte.dev/"  class="link link_circle link_circle_shadow" style="background-color: #321033;">
            <div class="link_icon">
              <!-- svelte-ignore a11y-missing-attribute -->
              <img class="link_image" src="svelte.svg">
            </div>
            <div class="link_outer_text">
              <div class="text text_center ">
                <strong class="main-p fw-100 clr-light text-width">Sveltekit</strong>
              </div>
            </div>
            <div class="link_end"></div>
        </div>
      </div>
      <div class="container_link">
        <div class="link_outer">
          <a href="https://internetcomputer.org/" target="_blank"  class="link link_circle link_circle_shadow" style="background-color: #321033;">
            <div class="link_icon">
              <!-- svelte-ignore a11y-missing-attribute -->
              <img class="link_image" src="icp-logo.svg">
            </div>
            <div class="link_outer_text">
              <div class="text text_center ">
                <strong class=" fw-100 clr-light">Internet Computer</strong>
              </div>
            </div>
            <div class="link_end"></div>
        </div>
      </div>
    <div>
      <p class="fw-100 clr-ligh text_center margin-top-3 margin-btm-2">100% on-chain</p>
    </div>
</section>