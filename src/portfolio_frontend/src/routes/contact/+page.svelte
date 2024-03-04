<script>
    let platforms = [
        { 
            name: "Discord", 
            link: "https://discord.com/users/784929659854782524", 
            icon: "discord.svg",
            cta: "Connect on Discord"
        },
        {
            name: "OpenChat", 
            link: "https://oc.app", 
            icon: "OpenChat.svg",
            cta: "Connect on OpenChat"
        },
        {
            name: "Gmail", 
            link: "mailto:demaligregg123@gmail.com",
            icon: "gmail.svg",
            cta: "Send me an email"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/demali-gregg-5552392a1/",
            icon: "linkedin.svg",
            cta: "Connect on linkedin"
        },
        {
            name: "Twitter",
            link: "https://twitter.com/demali_icp", 
            icon: "twitter.svg",
            cta: "Follow me on Twitter"
        },
    ];
</script>

<svelte:head>
    <title>Contact</title>
</svelte:head>

<div class="container">
    <div class="contact-page">
        <h2 class="subheading">Contact</h2>
        <div class="buttons-container">
            {#each platforms as {name, link, icon, cta}}
                <a href={link} target="_blank" class="contact-button">
                    <img src={`/${icon}`} alt={name} class="icon">
                    <span>{cta}</span>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
.container {
    max-width: 800px;
    margin: 50px auto;
    padding: 0 20px;
}

.contact-page {
    text-align: center;
}

.subheading {
    margin-bottom: 2rem;
    color: white;
}

.buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, skyblue, purple);
    color: white;
    width: 100%;
    max-width: 300px;
    padding: 15px;
    border-radius: 5px;
    text-decoration: none;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}

.contact-button:hover {
    transform: translateY(-2.5px);
}

.icon {
    margin-right: 10px;
    width: 24px;
    height: 24px;
}

@media (max-width: 768px) {
    .contact-page {
        padding: 0 15px;
    }
    .contact-button {
        width: 90%;
    }
}
</style>