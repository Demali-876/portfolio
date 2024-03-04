<!-- src/routes/projects.svelte -->
<script>
    let projects = [
      {
        name: "ChatCode",
        description: "Smart Contract programming language created using lark parser in python, leverages AI and API calls for Interpretation.",
        githubUrl: "https://github.com/Demali-876/ChatCode"
      },
      {
        name: "Time Capsule Network",
        description: "A decentralized app for creating digital time capsules on the blockchain.",
        githubUrl: "https://github.com/Demali-876/timecapsule"
      },
      {
        name: "Portfolio",
        description: "My personal portfolio created using sveltekit. You are currently view this project!",
        githubUrl: "https://github.com/Demali-876/portfolio"
      }
    ];
  </script>

<svelte:head>
	<title>Projects</title>
</svelte:head>
<div class="container">
    <h1 class="heading">My Projects</h1>
    <div class="projects-container">
        {#each projects as {name, description, githubUrl}}
            <div class="project-card">
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={githubUrl} target="_blank" class="github-link">View on GitHub</a>
            </div>
        {/each}
    </div>
    <div class="github-profile">
        <a href="https://github.com/Demali-876" target="_blank">
            <img src="/github.svg" alt="GitHub Logo" class="github-logo">
            Visit my GitHub profile
        </a>
    </div>
</div>

<style>
.container {
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    
    text-align: center;
}
.heading {
    margin-bottom: 20px;
}
.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;
    padding: 20px;
    align-items: center;

}

.project-card {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    background-color: transparent;
    border-radius: 8px;
    align-items: center;
    padding: 20px;
    --g: 4px;
    --b: 12px;
    --c: purple;
  
  
    padding: calc(var(--g) + var(--b));
    --_c: #0000 0 25%, var(--c) 0 50%;
    --_g1: repeating-linear-gradient(90deg ,var(--_c)) repeat-x;
    --_g2: repeating-linear-gradient(180deg,var(--_c)) repeat-y;
    background:
        var(--_g1) var(--_p, 25%) 0   ,var(--_g2) 0    var(--_p,125%),
        var(--_g1) var(--_p,125%) 100%,var(--_g2) 100% var(--_p, 25%);
    background-size: 200% var(--b),var(--b) 200%;
    cursor: pointer;
    filter: grayscale(50%);
    transition: .3s;
    }

.project-card:hover {
    box-shadow: 0 5px 15px rgba(174, 1, 174, 0.7);
    --_p: 75%;
    filter: grayscale(0%); 
}

.github-link {
    display: block;
    align-self:center;
    background-color: purple;
    color: white;
    width: 150px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
}
.github-link:hover{
        background-color: rgb(174, 1, 174);
        color: white;
    }
.github-profile {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
    border-radius: 8px;
}

.github-profile a {
    display: inline-block;
    color: #007bff;
    text-decoration: none;
}

.github-logo {
    width: 40px;
    margin-right: 10px;
    vertical-align: middle;
}
@media (max-width: 600px) {
    
    .heading {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
    }
    .project-card {
        width: 90%;
        margin-left: 0%;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(174, 1, 174, 1);
    }
}
</style>