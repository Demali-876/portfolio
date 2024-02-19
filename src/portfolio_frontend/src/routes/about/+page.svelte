<!-- src/routes/about.svelte -->
<script>
  let faqs = [
    {
      question: "What is blockchain technology?",
      answer: "Blockchain technology is a decentralized, distributed ledger that records the provenance of a digital asset."
    },
    {
      question: "How does building on-chain benefit individuals and businesses?",
      answer: "Building on-chain ensures transparency, security, and immutability, providing benefits like reduced fraud, faster transactions, and lower costs."
    },
    {
      question: "What is the Internet Computer Protocol?",
      answer: "The Internet Computer Protocol (ICP) aims to extend the public internet so it can natively host websites, software systems, and open internet services."
    },
    {
      question: "What design approach do I employ in my solutions?",
      answer: "I focus on user-centric design, ensuring that solutions are accessible, intuitive, and leverage blockchain technology effectively to meet users' needs."
    }
  ];

  let activeFaq = null;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="main_container">
    <section>
        <div class="inner-container">
            <div class="about-content">
              <h2 class="about-title">Hi, I'm Demali</h2>
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
                    Bring your ideas to life on the internet computer protocol.
                  </p>
              </div>
            </div>
            <aside class="faq-container">
                <h2>FAQs</h2>
                {#each faqs as {question, answer}, index}
                  <button class="faq-question {activeFaq === index ? 'active' : ''}" on:click={() => activeFaq = activeFaq === index ? null : index}>
                    {question}
                    <span class="arrow">▼</span>
                  </button>
                  {#if activeFaq === index}
                    <div class="faq-answer {activeFaq === index ? 'active' : ''}">{answer}</div>
                  {/if}
                {/each}
              </aside>
        </div>
    </section>
</div>

<style>
    .main_container {
        margin: 0 80px 0 60px;
    }
    .about-title {
        font-size: 2.2rem;
        font-weight: bold;
        margin-top: 1rem;
    }
    .about-subtitle {
        margin-top: 1rem;
    }
    .about-subtitle >p {
        width: 80%;
        font-weight: normal;
        font-size: 1rem;
        line-height: 2rem;
    }
    .inner-container {
    display: flex;
    justify-content: space-between;
}
.about-content, .faq-container {
    flex: 1;
}

.faq-container {
    margin-left: 1px;
}

.faq-question {
    position: relative;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    text-align: left;
    width: 100%;
    padding: 0.5em 0;
    color: inherit; 
    display: block; /* Ensure it fills the container width */
    margin-bottom: 1px; /* For the separator line */
    background-color: transparent;
    border: none;
    text-align: left;
    width: 100%;
}

.faq-question:not(:last-child) {
    border-bottom: 1px solid #ccc;
}
.arrow {
    position: absolute;
    right: 0;
    transition: transform 0.5s ease;
}
.faq-question.active .arrow {
    transform: rotate(180deg);
}
.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    opacity: 0;
}
.faq-answer.active {
    max-height: 1000px;
    opacity: 1;
}

</style>