const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const module =
        button.innerText;

        openModule(module);

    });

});
