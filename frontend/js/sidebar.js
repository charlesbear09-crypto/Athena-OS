document.querySelectorAll(".side-btn").forEach(btn=>{

    btn.onclick=()=>{

        const page=btn.dataset.page;

        console.log("Opening:",page);

    };

});
