const pages = {

    home: `
        <h1>Welcome back, Charles.</h1>

        <p>
            Athena OS is online.
        </p>
    `,

    ai: `
        <h1>AI Core</h1>

        <p>
            Athena Brain will appear here.
        </p>
    `,

    finance: `
        <h1>Finance</h1>

        <p>
            Portfolio coming soon.
        </p>
    `,

    garage: `
        <h1>Garage</h1>

        <p>
            Silverado workspace coming soon.
        </p>
    `,

    academy: `
        <h1>Academy</h1>

        <p>
            Cybersecurity lessons coming soon.
        </p>
    `,

    diagnostics: `
        <h1>Diagnostics</h1>

        <p>
            System health will appear here.
        </p>
    `,

    settings: `
        <h1>Settings</h1>

        <p>
            Athena configuration.
        </p>
    `

};

const content =
document.getElementById("content");

const title =
document.getElementById("page-title");

document.querySelectorAll(".nav-button").forEach(button=>{

    button.onclick=()=>{

        const page=button.dataset.page;

        title.innerText=
        page.charAt(0).toUpperCase()+page.slice(1);

        content.innerHTML=
        pages[page];

    };

});

function updateClock(){

    const now=new Date();

    document.getElementById("clock").innerText=
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();
