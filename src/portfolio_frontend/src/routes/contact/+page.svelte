<script>
    let platforms = [
        { 
            name: "Discord", 
            link: "https://discord.com/users/784929659854782524", 
            icon: "discord.svg",
            description: "Join me on Discord for lively discussions on Web3 and more.", 
            cta: "Connect on Discord"
        },
        {
            name: "OpenChat", 
            link: "https://oc.app", 
            icon: "OpenChat.svg",
            description: "Be sure to check out OpenChat Username Darckhorse87.", 
            cta: "Connect on OpenChat"
        },
        {
            name: "Gmail", 
            link: "mailto:demaligregg123@gmail.com",
            icon: "gmail.svg",
            description: "Feel free to send an email if you have any questions", 
            cta: "Send me an email"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/demali-gregg-5552392a1/",
            icon: "linkedin.svg",
            description: "If you are a linkedin user feel free visit My Linkedin Page, lets connect!", 
            cta: "Connect on linkedin"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/demali_icp", 
            icon: "twitter.svg",
            description: "I created a Twitter(X) account specifically for this so be sure to follow me on there :-)", 
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
.heading {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
    transition: transform 0.3s ease;
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
    transition: background-color 0.3s;
}
.platform-card .cta-button:hover{
    background-color: rgb(174, 1, 174);
    color: white;
}
@media (max-width: 768px) {
    .platforms-grid {
        justify-content: center; 
        display: flex;
        flex-direction: column;
    }
    .heading {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 3.5rem;
    }

    .platform-card {
        width: 100%;
        margin:auto 25px;
        margin-bottom: 20px;
    }
}
</style>