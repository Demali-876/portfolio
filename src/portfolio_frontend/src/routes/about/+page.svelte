<!-- src/routes/about.svelte -->
<script>
  import { slide } from 'svelte/transition';
  let faqs = [
    {
      question: "What is Blockchain Technology?",
      answer: "Blockchain technology is a revolutionary method of recording data across a network of computers secured by cryptographic methods, making it tamper-proof. Data is verified by network participants in the form of new blocks, ensuring permanence and transparency. This method removes the need for intermediaries, revolutionizing trust in digital transactions."
    },
    {
      question: "What is the Internet Computer Protocol?",
      answer: "Developed by the Dfinity Foundation, the Internet Computer Protocol (ICP) is an innovative blockchain platform designed to extend the capabilities of the public internet, allowing for the native hosting of websites, software systems, and services directly on the blockchain. This groundbreaking approach enables developers to deploy their applications directly onto the public internet, with all activities and operations hosted on-chain, offering a seamless and decentralized web experience. This website is hosted on the Internet Computer!"
    },
    {
      question: "How Does Building on the Internet Computer Benefit Individuals and Businesses?",
      answer: "Building on the Internet Computer provides unparalleled security, transparency, and scalability. It enables the creation of tamper-proof, efficient, and globally accessible applications, reducing operational costs and enhancing user trust."
    },
    {
      question: "What design approach do I employ in my solutions?",
      answer: "Enterprise Architecture is a strategic planning framework that aligns IT projects with business objectives, ensuring that technology investments add value. Software Oriented Architecture is an approach to software development that allows services to communicate over a network. In my blockchain solutions, EA ensures that blockchain projects align with broader business goals, while SOA enables modular, reusable components that increase the flexibility and scalability of applications."
    },
    {
      question: "What is Motoko and SvelteKit?",
      answer: "Motoko is a programming language designed specifically for the Internet Computer, offering a seamless development experience for building scalable, secure blockchain applications. SvelteKit, as a frontend framework, complements Motoko by enabling fast, reactive user interfaces. This combination ensures efficient, user-friendly applications built on a robust blockchain foundation."
    },
    {
      question: "How can Businesses and Individuals Get Started with Blockchain Solutions?",
      answer: "To get started, reach out for a consultation. We'll discuss your needs, the potential blockchain can bring to your project, and how our services can help you achieve your goals. From ideation to launch, we guide you through every step, ensuring a smooth journey into the world of blockchain technology."
    }
  ];

  let activeFaq = null;
  import { backend } from "$lib/canisters";

  let greeting = "";

  function onSubmit(event) {
    const name = event.target.name.value;
    backend.greet(name).then((response) => {
      greeting = response;
    });
    return false;
  }

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
                    specializing in the Internet Computer Protocol, I enable businesses to build scalable, secure, and efficient decentralized applications directly on the blockchain. This cuts costs, enhances data integrity, and opens new innovation channels.
                    When I am not thinking of new use cases for blockchain technology I love meeting new people, learning new languages and experience new cultures. 
                    At my core, I'm dedicated to transforming ideas into reality.
                  </p>
                  <p>
                    Bring your ideas to life on the internet computer protocol.
                    The future is ON-CHAIN! Let's Build!
                  </p>
              </div>
              <div class="canister-interact">
                <h2>Interact with a Canister</h2>
                <form action="#" on:submit|preventDefault={onSubmit}>
                    <input id="name" name="name" alt="Enter your name" placeholder="Enter your name" type="text" />
                    <button type="submit">Submit</button>
                </form>
                {#if greeting}
                    <p class="greeting-response">Backend Canister b77ix-eeaaa-aaaaa-qaada-cai says: {greeting}</p>
                {/if}
            </div>
            </div>
            <aside class="faq-container">
                <h2>FAQs</h2>
                {#each faqs as {question, answer}, index}
                  <button class="faq-question {activeFaq === index ? 'active' : ''}" on:click={() => activeFaq = activeFaq === index ? null : index}>
                    {question}
                    <span class="arrow">{activeFaq === index ? '▲' : '▼'}</span>
                  </button>
                  {#if activeFaq === index}
                    <div transition:slide class="faq-answer {activeFaq === index ? 'active' : ''}">{answer}</div>
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
        width: 90%;
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
    display: block;
    margin-bottom: 1px;
    background-color: transparent;
    border: none;
    border-top: 1px solid #ccc;
    text-align: left;
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
    transition: max-height 1.5s ease, opacity 1.5s ease;
    opacity: 0;
}
.faq-answer.active {
    max-height: 1000px;
    opacity: 1;
}
@media (max-width: 768px) {
    .inner-container {
        flex-direction: column;
        justify-content: flex-start;
    }
    .about-content, .faq-container {
        flex: none;
        width: 100%;
        margin: 0;
    }
    .about-title{
      margin-left: 5rem;
    }
    .faq-container{
      margin-left: 2.5rem;
    }
    .main_container, .about-subtitle > p {
        margin: 0 20px;
    }

    .about-subtitle > p {
        width: auto;
        margin-left: 5rem;
    }
}
.canister-interact h2 {
    margin-top: 2rem;
}
.canister-interact form {
    margin-top: 1rem;
}
.canister-interact input, .canister-interact button {
    line-height: 1;
    height: auto;
    width: auto;
    font-size: 1rem;
    color: white;
    padding: 0.5em 1em;
    border-radius: 10px;
    transition: background-color 0.3s;
    border: none;
    background-color: purple;
}

.canister-interact input {
    margin-right: 0.5rem;
    background-color: transparent;
    border: 1px solid white;
}

.canister-interact button:hover {
    background-color: #570271;
}

.greeting-response {
    margin-top: 1rem;
    color: white;
}
</style>