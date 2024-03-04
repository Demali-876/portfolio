<script>
  import Loading from '../lib/loading.svelte';
  import { navigating } from '$app/stores';
  
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
</script>
<nav>
  <ul class="sidebar">
    <li on:click={hideSidebar}><a href="#" class="nav-logo" title="close menu">
      <img src="/close.svg" alt="close" style="height: 24px; vertical-align: middle;" />
    </a></li>
    <li><a href="/about">
    <img src="/about.svg" alt="about logo" style="height: 36px; vertical-align: middle;" />
    About
    </a></li>
    <li><a href="/projects">
    <img src="/project.svg" alt="project" style="height: 36px; vertical-align: middle;" /> 
    Projects</a></li>
    <li><a href="/contact">
      <img src="/contact.svg" alt="contact" style="height: 36px; vertical-align: middle;" />
    Contact</a></li>
  </ul>
  <ul>
    <li><a href="/" class="nav-logo" title="Back to Homepage">
      <img src="/icplogo.svg" alt="ICP Logo" style="height: 24px; vertical-align: middle;" />
      Home
    </a></li>
    <li class="hideOnMobile"><a href="/about">
    <img src="/about.svg" alt="about" style="height: 36px; vertical-align: middle;" />
    About
    </a></li>
    <li class="hideOnMobile"><a href="/projects">
    <img src="/project.svg" alt="project" style="height: 36px; vertical-align: middle;" /> 
    Projects</a></li>
    <li class="hideOnMobile"><a href="/contact">
      <img src="/contact.svg" alt="contact" style="height: 36px; vertical-align: middle;" />
    Contact</a></li>
    <li class="menu-button" on:click={showSidebar}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>" </li>
  </ul>
</nav>
  

  {#if $navigating}
  <Loading></Loading>
  {:else}
  <div class="container">
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
  background-color: rgba(118, 20, 118, 0);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
  nav ul{
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  nav li{
    height: 50px;
  }
  nav a{
    height: 100%;
    padding: 0 30px;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
  }
  nav a:hover{
    background-color: blueviolet;
  }
  nav li:first-child{
    margin-right: auto;
  }
  .sidebar{
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    backdrop-filter: blur(10px);
    background-color: rgba(126, 13, 126, 0.3);
    box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .menu-button{
    display: none;
  }
  .sidebar li{
    width: 100%;
  }
  .sidebar a{
    width: 100%;
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
  @media(max-width:768px){
    .hideOnMobile{
      display: none;
    }
    .menu-button{
      display: block;
    }
  }
  @media(max-width:400px){
    .sidebar {
      width: 100%;
    }
  }

</style>
