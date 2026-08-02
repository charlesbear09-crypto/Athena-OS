const status = document.getElementById("status");
const bar = document.getElementById("bar");

const steps = [
    "Initializing Core...",
    "Loading AI Engine...",
    "Connecting Memory System...",
    "Synchronizing Finance Module...",
    "Starting Garage Interface...",
    "Loading Academy...",
    "All Systems Online.",
    "Welcome Back, Charles."
];

let current = 0;

function bootSequence(){

    if(current < steps.length){

        status.innerText = steps[current];

        let progress =
            ((current + 1) / steps.length) * 100;

        bar.style.width = progress + "%";

        current++;

        setTimeout(
            bootSequence,
            900
        );

    } else {

        setTimeout(()=>{

            document.getElementById("boot").style.opacity = "0";

        },1200);

    }

}


window.onload = bootSequence;
