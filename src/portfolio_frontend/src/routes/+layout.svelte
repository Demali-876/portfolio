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
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
    </a></li>
    <li><a href="/about">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>    
      About
    </a></li>
    <li><a href="/projects">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg>    
      Projects</a></li>
    <li><a href="/contact">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"/></svg>    
      Contact</a></li>
  </ul>
  <ul>
    <li><a href="/" class="nav-logo" title="Back to Homepage">
      <img src="/icplogo.svg" alt="ICP Logo" style="height: 24px; vertical-align: middle;" />
      Home
    </a></li>
    <li class="hideOnMobile"><a href="/about">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>    
    About
    </a></li>
    <li class="hideOnMobile"><a href="/projects">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Z"/></svg> 
    Projects</a></li>
    <li class="hideOnMobile"><a href="/contact">
      <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"/></svg>
    Contact</a></li>
    <li class="menu-button" on:click={showSidebar}><a href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="cyan" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>" </li>
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
    font-weight: bold;
    font-size: 1.2rem;
  }
  nav a{
    height: 100%;
    padding: 0 30px;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;
    transition: background-color 0.5s ease;
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
