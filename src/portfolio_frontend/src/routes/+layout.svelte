<script>
  import { onMount } from 'svelte';
  import Loading from '../lib/loading.svelte';
  import { navigating } from '$app/stores';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  function closeMenu() {
    isMenuOpen = false;
  }
  onMount(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav') && isMenuOpen) {
        isMenuOpen = false;
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>
  <nav>
    <a href="/" class="nav-logo" title="Back to Homepage">
      <img src="/icplogo.svg" alt="ICP Logo" style="height: 16px; vertical-align: middle;" />
      Home
    </a>
    <button aria-label="Toggle Menu" on:click={toggleMenu}>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <ul class="{isMenuOpen ? 'menu-open' : ''}">
      <li class="link"><a href="/about" on:click={closeMenu}>About</a></li>
      <li class="link"><a href="/projects" on:click={closeMenu}>Projects</a></li>
      <li class="link"><a href="/contact" on:click={closeMenu}>Contact</a></li>
    </ul>
  </nav>

  {#if $navigating}
  <Loading></Loading>
  {:else}
  <div class="container" class:blur={isMenuOpen}>
    <slot></slot>
  </div>
{/if}
  <footer>
        <a href="https://internetcomputer.org" target="_blank">
            <img src="/logo2.svg" alt="Logo" id="footer-logo">
        </a>
  </footer>
  <style>
  
  .container {
  max-width: 1400px;
  flex: 1 0 auto;
  margin: 50px auto;
  background-color: rgba(0, 0, 0, 0); 
  color: #fff;
  align-items: center;
  justify-content: center;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  }
  nav {
  width: 100%;
  margin-bottom: 10px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 3em;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  }
  .blur{
    filter: blur(5px);
  }
  .nav-logo, nav ul li a {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px; 
  border-radius: 5px;
  }
  .nav-logo:hover, nav ul li a:hover {
  background-color: purple;
  color: white;
  }
  nav ul li, .nav-logo {
  display: inline-block; 
  }
  
  nav ul {
  display: flex;
  gap: 2em;
  list-style: none;
  z-index: 100;
  }
  nav ul li {
  opacity: .8;
  cursor: pointer;
  }
  nav ul li:hover {
  opacity: 1;
  }
  nav button {
  position: relative;
  width: 25px;
  height: 25px;
  background: transparent;
  outline: none;
  border: none;
  }
  nav button span {
  width: 100%;
  height: 5px;
  background: white;
  position: absolute;
  border-radius: 1em;
  transition: .3s;
  }
  nav button span:nth-of-type(1) {
  top: 0;
  left: 0;
  box-shadow: 0px 10px 0 white;
  }
  nav button span:nth-of-type(2) {
  bottom: 0;
  left: 0;
  }
.menu-open {
  transform: translateX(0%);
}
.blur {
  filter: blur(5px);
}
.container.blur {
  filter: blur(5px);
  pointer-events: none;
}
  @media (min-width: 768px) {
  nav button {
    display: none;
    }
  }
  @media (max-width: 768px) {
  nav ul {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: transparent;
    flex-direction: column;
    align-items: flex-end;
    padding: 2em 5em;
    transform: translateX(100%);
    transition: .3s;
    }
  
  
  nav button:focus ~ ul {
    transform: translateX(0%);
    }
  nav button:focus span {
    box-shadow: none;
    transform: rotate(40deg) translateY(13px);
    }
  
  nav button:focus span:nth-of-type(2) {
    transform: rotate(-40deg) translateY(-13px);
    }
  }
  footer {
  position: static;
  text-align: center;
  padding: 10px 0;
  background: transparent;
  width: 100%;
  margin-top: auto;
  }
  #footer-logo {
        width: 140px;
        height: auto;
  }
</style>
