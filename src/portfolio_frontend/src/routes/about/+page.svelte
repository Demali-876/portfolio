<!-- src/routes/about.svelte -->
<svelte:head>
	<title>About</title>
</svelte:head>

<div class="main_container">
    <section>
        <div class="inner-container">
          <h2 class="about-title">Hi, I'm Demali👋</h2>
          <div class="about-subtitle">
              <p>
                I am a blockchain solutions architect with a background in computer science, 
                I'm passionate about exploring the novel use cases of blockchain technology, 
                I design and develop powerful on-chain applications using the Internet Computer Protocol
                that ensures business security, growth, and scalability with a seamless on-chain user experience.
                When I am not thinking of new use cases for blockchain technology I love meeting new people, learning new languages and experience new cultures. 
                At my core, I'm dedicated to transforming ideas into reality.
 
              </p>
              <p>
                Bring your ideas to life on the internet computer protocol. You can send me 
                 an email at <span class="info-text">demaligregg123@gmail.com</span> 
              </p>
          </div>
        </div>
      </section>
</div>

<style>
    .main_container {
        margin: 0 80px 0 65px;
    }

    .about-title {
        font-size: 4.2rem;
        font-weight: bold;
        margin-top: 11rem;
    }

    .about-subtitle {
        margin-top: -2rem;
    }

    .about-subtitle >p {
        width: 60%;
        font-weight: normal;
        font-size: 1rem;
        line-height: 2rem;
    }

    .info-text {
        font-style: italic;
        font-weight: bold;
    }

</style>