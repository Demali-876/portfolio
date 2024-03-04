<svelte:head>
  <title>Demali Gregg</title>
</svelte:head>

<div class="container">
  <div class="info">
    <div class="animate-background">
      <div class="container info-container">
        <div class="info-text">
          <h1>
            <p class="animate-text-1">Demali Gregg</p>
            <p class="text-2">Blockchain Solutions Architect</p>
          </h1>
        </div>
        <h2 class="subtitle">
          On a mission to bring blockchain solutions to businesses and individuals.
        </h2>
        <div style="color:cyan" class="scroll-button">
          <a style="color:cyan" href="/about">Learn more about me →</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="background-div"></div>


<style>
  .info {
    text-align: center;
    position: relative;
  }
  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: flex-start;
  }
  .container {
    max-width: 1400px;
    margin: 190px 0 0 2rem;
  }
  .info h1 {
    font-size: 4rem;
    margin: 0;
  }
  @media (max-width: 390px) {
    .info h1 {
      font-size: 1.5rem;
    }
  }
  .info h1 p {
    position: relative;
    font: inherit;
    margin: 0;
    text-align: left;
    line-height: 130%;
    width: fit-content;
    font-weight: 800;
    letter-spacing: -0.03em;
  }
  .info h2 {
    max-width: 65ch;
    font-weight: 200;
    margin-top: 0.50rem;
  }
  .background-div {
    background-color: var(--background);
    width: 100%;
    height: 2vh;
    margin: 150px auto;
  }
  .info .info-text {
    position: relative;
  }
</style>

