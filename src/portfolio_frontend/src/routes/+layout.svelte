<script>
    import Loading from '../lib/loading.svelte';
    import { navigating } from '$app/stores';
  </script>
  
  <nav>
    <div class="nav-container">
      <a href="/" class="nav-logo" title="Back to Homepage">
        <img src="icplogo.svg" alt="ICP Logo" style="height: 12px; vertical-align: middle;" />
        Home
      </a>
      <div class="nav-links">
        
        <a href="/about" class="link">
          
          About</a>
        <a href="/projects" class="link">Projects</a>
        <a href="/contact" class="link">Contact</a>
      </div>
    </div>
  </nav>
  {#if $navigating}
  <Loading></Loading>
  {:else}
  <div class="container">
    <slot></slot>
  </div>
{/if}
  
  <style>
    .container {
      max-width: 1400px;
      margin: 50px auto;
      background-color: rgba(0, 0, 0, 0); 
      color: #fff;
    }
  </style>
  
