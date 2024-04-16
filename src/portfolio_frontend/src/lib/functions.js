export const contentMap = {
    'Architect': { phrase1: 'Tech Expertise', phrase2: 'Role Offering' },
    'Personal': { phrase1: 'Leadership Style', phrase2: 'Engagement Style' },
    'Diplomat': { phrase1: 'Languages', phrase2: 'Tech Focus' },
    'Vanguard': { phrase1: 'Future Vision', phrase2: 'Join In' }
  };
  
  export function setupDestinations(destinations) {
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
  
  export function setupCrew(crew) {
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
  
  export function setupTechnologies(technologies) {
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
  
        technologyImg.src = tech.images.webp;
        technologyImgDesktop.src = tech.images.webp;
      });
    });
  }
  