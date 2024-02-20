<script>
    let platforms = [
        { 
            name: "Discord", 
            link: "https://discord.com", 
            icon: "discord.svg", 
            description: "Join me on Discord for lively discussions on Web3 and more.", 
            cta: "Connect on Discord"
        },
        {
            name: "OpenChat", 
            link: "https://oc.app", 
            icon: "OpenChat.svg",
            description: "Be Sure to check out OpenChat Username Darckhorse87.", 
            cta: "Connect on OpenChat"
        },
        {
            name: "Gmail", 
            link: "mailto:demaligregg123@gmail.com",
            icon: "gmail.svg",
            description: "Feel free to send emails if you have any questions", 
            cta: "Send me an email"
        },
        {
            name: "LinkedIn",
            link: "https://linkedin.com",
            icon: "linkedin.svg",
            description: "If you are a linkedin user feel free visit My Linkedin Page, lets connects", 
            cta: "Connect on linkedin"
        },
        {
            name: "Twitter",
            link: "https://twitter.com", 
            icon: "twitter.svg",
            description: "I am trying to use Twitter(X) more so be sure to follow me on there", 
            cta: "Follow me on twitter"
        },
    ];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>


<div class="container">
    <div class="contact-page">
        <h1 class="heading">Contact Me</h1>
        <div class="platforms-grid">
            {#each platforms as {name, link, icon, description, cta}, index}
                <div class="platform-card {index % 2 === 0 ? 'left' : 'right'}">
                    <a href={link} target="_blank">
                        <img src={`/${icon}`} alt={name}>
                    </a>
                    <p>{description}</p>
                    <a href={link} target="_blank" class="cta-button">{cta}</a>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
.container {
    max-width: 800px;
    margin: 50px auto;
}
.contact-page {
    text-align: center;
}

.platforms-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.platform-card {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    width: 48%;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transition: transform 0.3s ease; /* Smooth hover effect */
}

.platform-card:hover {
    transform: translateY(-5px);
}

.platform-card img {
    width: 60px;
    height: auto;
    margin-bottom: 10px;
}

.platform-card .cta-button {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
}
</style>