<!-- src/routes/projects.svelte -->
<script>
    let projects = [
      {
        name: "ChatCode",
        description: "A collaborative coding environment with real-time chat features.",
        imageUrl: "/thumbnail1.jpg",
        githubUrl: "https://github.com/Demali-876/ChatCode"
      },
      {
        name: "Time Capsule Network",
        description: "A decentralized app for creating digital time capsules on the blockchain.",
        imageUrl: "/thumbnail2.jpg",
        githubUrl: "https://github.com/Demali-876/timecapsule"
      },
      {
        name: "Portfolio",
        description: "My personal portfolio showcasing my projects and skills.",
        imageUrl: "/thumbnail3.jpg",
        githubUrl: "https://github.com/Demali-876/portfolio"
      }
    ];
  </script>
  
<svelte:head>
	<title>Projects</title>
</svelte:head>
<div class="container">
    <h1 class="heading">Check Out My Projects</h1>
    <div class="projects-container">
        {#each projects as {name, description, imageUrl, githubUrl}, index}
            <div class="project-card">
                <img src={imageUrl} alt={`Screenshot of ${name}`} class="project-image">
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
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center; /* Center content */
}
.heading {
    margin-bottom: 40px; /* Adjust spacing as needed */
}
.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.project-card {
    background-color: transparent;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.project-card:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.project-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
}

.github-link {
    display: block;
    background-color: #007bff;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
}

.github-profile {
    text-align: center;
    margin-top: 40px;
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
    .projects-container {
        grid-template-columns: 1fr;
    }

    .project-card {
        width: 100%;
    }
}

</style>