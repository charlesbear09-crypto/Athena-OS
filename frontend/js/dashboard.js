console.log(
"Athena Command Center Online"
);


const buttons =
document.querySelectorAll("button");


buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{

console.log(
button.innerText +
" module selected"
);

}

);


});
