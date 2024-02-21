<!-- src/routes/+layout.svelte -->
<nav>
    <div class="nav-container">
        <a href="/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai" class="nav-logo" title="Back to Homepage">Home</a>
        <div class="nav-links">
            <a href="/about?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai" class="link">About</a>
            <a href="/projects?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai" class="link">Projects</a>
            <a href="/contact?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai" class="link">Contact</a>
        </div>
    </div>
</nav>

<div class="container">
  <!-- Pages will be injected below -->
     <slot></slot>
</div>

<style>
     .container {
        max-width: 1400px;
        margin: 50px auto;
        background-color: rgba(0, 0, 0, 0); 
        color: #fff
    }
</style>

