<script>
    import "../style.css";
    import Doodle from "../lib/doodle.svelte";
    import { onMount } from 'svelte';
    let activeTab = 'Architect';

  const contentMap = {
    'Architect': { phrase1: 'Tech Expertise', phrase2: 'Role Offering' },
    'Personal': { phrase1: 'Leadership Style', phrase2: 'Tech Focus' },
    'Diplomat': { phrase1: 'Culture Embrace', phrase2: 'Innovation Stance' },
    'Vanguard': { phrase1: 'Future Vision', phrase2: 'Join In' }
  };

  function selectTab(tab) {
    activeTab = tab;
  }
  onMount(async () => {
    const response = await fetch('data.json');
    const data = await response.json();

    setupDestinations(data.destinations);
    setupCrew(data.crew);
    setupTechnologies(data.technology);
  });

  function setupDestinations(destinations) {
    const destinationPlace = document.querySelector(".destination-place");
    const description = document.querySelector(".description");
    const destinationImg = document.querySelector(".destination-img");
    const distance = document.querySelector(".distance");
    const travel = document.querySelector(".travel");
    document.querySelectorAll(".destination").forEach((destination, index) => {
      destination.addEventListener("click", () => {
        const dest = destinations[index];
        destinationPlace.textContent = dest.name;
        description.textContent = dest.description;
        destinationImg.src = dest.images.webp;
        distance.textContent = dest.distance;
        travel.textContent = dest.travel;
        document.querySelector(".active-destination")?.classList.remove("active-destination");
        destination.classList.add("active-destination");
      });
    });
  }

  function setupCrew(crew) {
    const memberPhoto = document.querySelector(".member-photo");
    const memberBio = document.querySelector(".member-bio");
    const crewMember = document.querySelector(".crew-member");
    const position = document.querySelector(".crew-member-role");
    document.querySelectorAll(".member").forEach((member, index) => {
      member.addEventListener("click", () => {
        const memberData = crew[index];
        position.textContent = memberData.role;
        crewMember.textContent = memberData.name;
        memberBio.textContent = memberData.bio;
        memberPhoto.src = memberData.images.webp;
        document.querySelector(".active-crew")?.classList.remove("active-crew");
        member.classList.add("active-crew");
      });
    });
  }

  function setupTechnologies(technologies) {
    const technologyType = document.querySelector(".technology-type");
    const technologyDescription = document.querySelector(".technology-description");
    const technologyImg = document.querySelector(".technology-img");
    const technologyImgDesktop = document.querySelector(".technology-img-desktop");
    document.querySelectorAll(".technology-btn").forEach((technology, index) => {
      technology.addEventListener("click", () => {
        const tech = technologies[index];
        technologyType.textContent = tech.name;
        technologyDescription.textContent = tech.description;
        document.querySelector(".active-tech")?.classList.remove("active-tech");
        technology.classList.add("active-tech");
        const mediaMatch = window.matchMedia("(min-width: 769px)");
        if (mediaMatch.matches) {
          technologyImgDesktop.src = tech.images.portrait;
        } else {
          technologyImg.src = tech.images.landscape;
        }
      });
    });
  }
</script>
  <div class="display-grid gap-2 margin-btm-3">
    
    <main class="lh-100 margin-top-4 margin-left">
      <h1 class="uppercase fw-100 fs-500 margin-block-index clr-light">So, Blockchain is the new<br><span class="bold ff-serif">Cloud</span></h1>
      <p class="text-width main-p fw-100 clr-light">It's not a dream; it’s a reality unfolding powered by the Internet Computer Protocol. Hi! I'm Demali, a blockchain solution architect. I am an innovator, adaptor, and an avid advocate of blockchain technology. Welcome to my and now our shared exploration of this new frontier, which is not just a concept but a recognition of the eventuality for blockchain to transform every facet of existing systems, services, and the very fabric of current society</p>
    </main>
    <div>
      <a href="#about" class="explore-btn ff-serif uppercase">Explore</a>
    </div>
   </div>

    <main>
      <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3">
        <span class="clr-light">01 </span>DFX identity whoami
      </h1>
      <div class="display-grid gap-desktop margin-top-4 margin-btm-3">
        <div class="img-part display-flex align-items-center justify-content-center">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src="astronaut.webp" class="destination-img mobile-img-width">
        </div>
        <div class="text-part">
          <nav>
            <ul class="display-flex gap-2 justify-content-center">
              {#each Object.keys(contentMap) as tab}
              <li class="fw-50 " >
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a href="javascript:void(0);" class="destination clr-light uppercase {activeTab === tab ? 'active-destination' : ''}"
                  on:click={() => selectTab(tab)}>
                  {tab}
                </a>
              </li>
              {/each}
            </ul>
          </nav>
          <h2 class="destination-place margin-btm-1 margin-top-3 ff-serif fs-800 fw-100 uppercase">Visionary</h2>
          <p class="btm-line description main-p fw-100 clr-light text-width">
            Internet Computer Astronaut, builder of the digital future. With a solid computer science background, I specialize in crafting decentralized applications on the Internet Computer Protocol. My focus is on transforming businesses by leveraging blockchain to enhance data integrity, and foster innovation.
          </p>
          <div class="justify-content-center display-flex"><div class="destination-underline"></div></div>
          <div class="numbers-info justify-content-center display-flex gap-2">
            <div>
              <p class="uppercase numbers-heading fw-100">{contentMap[activeTab].phrase1}</p>
              <p class="uppercase numbers-value ff-serif distance">ICP & Motoko</p>
            </div>
            <div>
              <p class="uppercase numbers-heading fw-100">{contentMap[activeTab].phrase2}</p>
              <p class="uppercase numbers-value ff-serif travel">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main >
        <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3"><span class="clr-light">02 </span>dfx start</h1>
        <div class="display-grid gap-2 margin-top-4 margin-left">
            <div class=" crew img-part justify-content-center display-flex">
                <img src="canister.svg" alt="Douglas Hurley" class="member-photo mobile-img-width align-self-end">
            </div>
            <div class="text-part grid-reverse display-grid-members">
                <div class="members-btn margin-btm-3 display-flex gap-1 justify-content-center">
                    <button class="option member active-crew"></button>
                    <button class="option member"></button>
                    <button class="option member"></button>
                    <button class="option member"></button>
                </div>
                <div>
                    <p class="crew-member-role ff-serif fw-100 margin-btm-1 margin-top-4 uppercase">Commander</p>
                    <h2 class="crew-member ff-serif margin-btm-2 fw-100 uppercase fs-600">Douglas Hurley</h2>
                    <p class="member-bio margin-btm-3 main-p fw-100 clr-light text-width">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
            </div>
        </div>
    </main>
    <main>
        <h1 class="uppercase fw-100 fs-500 margin-btm-3 h1-margin-left margin-top-3"><span class="clr-light">03</span> Space launch 101</h1>
        <div class="tech display-grid gap-2 margin-top-4 margin-left margin-btm-3">
          <picture class="img-part">
            <source srcset="astro.svg" alt="launch vehicle" class="technology-img-desktop" media="(min-width: 768px)"> 
            <img src="astro.png" alt="launch vehicle" class="technology-img"> 
          </picture>
          <div class="text-part grid-reverse">
            <div class="display-flex-tech display-flex">
              <div class="technology-btn-part display-flex justify-content-center gap-2">
                <div class="btn-wrapper active-tech">
                  <button class="technology-btn ff-serif fw-100">1</button>
                </div>
                <div class="btn-wrapper">
                  <button class="technology-btn ff-serif fw-100">2</button>
                </div>
                <div class="btn-wrapper">
                  <button class="technology-btn ff-serif fw-100">3</button>
                </div>
              </div>
              <div>
                <p class="uppercase main-p fw-100 clr-light terminology-p">The terminology...</p>
                <h2 class="technology-type ff-serif margin-btm-2 fw-100 uppercase fs-600">Launch vehicle</h2>
                <p class="technology-description main-p fw-100 clr-light text-width">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

  