<script>
  import { writable } from 'svelte/store';

  const isVisible = writable(false);
  export function toggleMenu(callback) {
    isVisible.update(value => {
      const newValue = !value;
      if (callback && !newValue) {
        setTimeout(callback, 300); 
      }
      return newValue;
    });
  }
  function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  function handleNavLinkClick(targetId) {
    toggleMenu(() => smoothScrollTo(targetId));
  }
</script>

<svelte:head>
  <script src="src/lib/nav.js" defer></script>
</svelte:head>
<header class="primary-header flex">
  <div>
    <a href="#home" on:click={() => handleNavLinkClick('home')}>
      <img src="/icp-logo.svg" alt="IcpLogo" style="height: 36px;" class="logo">
    </a>
  </div>
  <button class="mobile-nav-toggle" on:click={() => toggleMenu(null)}
          aria-controls="primary-navigation" aria-expanded={$isVisible}>
  </button>
  <nav>
    <ul id="primary-navigation" class="primary-navigation flex fw-200 " class:visible={$isVisible}>
      <li class="active">
        <a href="#whoami" on:click={() => handleNavLinkClick('whoami')}>
          <span aria-hidden="true">00</span>Meet Demali
        </a>
      </li>
      <li>
        <a href="#start" on:click={() => handleNavLinkClick('start')}>
          <span aria-hidden="true">01</span>Explore IC 
        </a>
      </li>
      <li>
        <a href="#deploy" on:click={() => handleNavLinkClick('deploy')}>
          <span aria-hidden="true">02</span>Advantages
        </a>
      </li>
      <li>
        <a href="#linktree" on:click={() => handleNavLinkClick('linktree')}>
          <span aria-hidden="true">03</span>Connect 
        </a>
      </li>
    </ul>
  </nav>
</header>
<slot/>

<style>

  .flex{
    display: flex;
    gap: var(--gap,1rem);
  }
  .logo{
    margin: 2rem;
  }
  .primary-header{
    align-items: center;
    justify-content: space-between;
  }
  .mobile-nav-toggle{
    display: none;
  }
  .primary-navigation{
    list-style: none;
    padding: 2rem 2rem 2rem 2rem;
    margin : 0;
    z-index: 1000;
    background: hsl(0 0% 0% 0.5);
  }
  @supports(backdrop-filter: blur(1rem)){
    .primary-navigation{
    background: hsl(0 0% 100% /0.05);
    backdrop-filter: blur(1.5rem);
    }
    .primary-navigation a{
      -webkit-text-fill-color: transparent;
    }
  }
  .primary-navigation a {
  --b: 0.1em;  
  --c: #935b98; 
  
  color: #ffff;
  padding-block: var(--b);
  background: 
    linear-gradient(var(--c) 50%, #fff 0) 0% calc(100% - var(--_p, 0%))/100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;
  -webkit-background-clip: text, padding-box;
          background-clip: text, padding-box;
  transition: .3s var(--_s, 0s) linear, background-size .3s calc(.3s - var(--_s, 0s));
  }
.primary-navigation a:hover {
  --_p: 100%;
  --_s: .3s;
}

  .primary-navigation a >[aria-hidden ="true"]{
    font-weight: 700;
    margin-inline-end: 0.75rem;
  }
  @media (min-width:35em) and (max-width:55em){
    .primary-navigation a> span[aria-hidden="true"]{
        display: none;
    }
  }
  @media (min-width:35em){
    .primary-navigation{
        --gap: clamp(1rem,5vw,2rem);
        padding-block: 1rem;
        padding-inline: clamp(2rem,6vw,6rem);
    }

  }

  @media(max-width: 35em){
    .primary-navigation {
      z-index: 1000;
      --gap : 2em;
      position: fixed;
      inset: 0 0 0 30%;
      flex-direction: column;
      padding: min(30vh,10rem) 2em;
      border-radius: 0px;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
    }
    .primary-navigation[data-visible="false"] {
    transform: translateX(0%);
    }
  
    .mobile-nav-toggle{
      display: block;
    position: fixed;
    z-index: 9999;
    background: url(/hamburger.svg) no-repeat; 
    width: 2rem;
    height: 2rem; 
    border: none; 
    top: 2rem;
    right: 2rem;
  }
  .mobile-nav-toggle[aria-expanded="true"]{
    background: url(/close3.svg);
    background-repeat: no-repeat;
    width: 2rem;
    aspect-ratio: 1;
  }
  .visible {
    transform: translateX(0%);
  }
}
</style>