// ATHENA SYSTEM CORE

console.log("Athena System Core Loaded");


function updateTime(){

    const now = new Date();

    const time =
        now.toLocaleTimeString();

    const clock =
        document.getElementById("clock");


    if(clock){

        clock.innerText = time;

    }

}


setInterval(
    updateTime,
    1000
);


updateTime();



function systemMessage(message){

    console.log(
        "ATHENA:",
        message
    );

}
