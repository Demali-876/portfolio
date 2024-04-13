<script>
  import { onMount } from 'svelte';

  onMount(() => {
    import('css-doodle');
  });
</script>

<div class="doodle-container">
  <css-doodle>
    <style>
      @grid: 50x1 / 110vmax;
      :container {
        perspective: 25vmin;
      }
      background: @m(
        @r(200, 240), 
        radial-gradient(
          @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
          transparent 50%
        ) @r(100%) @r(100%) / @r(1%, 3%) @lr no-repeat
      );
  
      @size: 80%;
      @place-cell: center;
  
      border-radius: 50%;
      transform-style: preserve-3d;
      animation: scale-up 20s linear infinite;
      animation-delay: calc(@i * -.5s);
  
      @keyframes scale-up {
        0% {
          opacity: 0;
          transform: translate3d(0, 0, 0) rotate(0);
        }
        10% { 
          opacity: 1; 
        }
        95% {
          transform:
            translate3d(0, 0, @r(50vmin, 55vmin))
            rotate(@r(-360deg, 360deg));
        }
        100% {
          opacity: 0;
          transform: translate3d(0, 0, 1vmin);
        }
      }
    </style>
  </css-doodle>
</div>

<style>
  .doodle-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
  }
</style>
