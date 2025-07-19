let size=16;
const container=document.querySelector(".container");
generate_grid(size)
function generate_grid(size){
    while (container.firstChild){
    container.firstChild.remove()
    }
    for (let i=0; i<size; i++){
        const row=document.createElement("div");
        row.classList.toggle("row");
        for(let j=0; j<size; j++){
            const divy= document.createElement("div");
            divy.classList.toggle("square");
            row.append(divy);
        }
        container.append(row);
    }
    let squares=document.querySelectorAll(".square");
    squares.forEach(element => add_event_listener(element));
}

const btn=document.querySelector("button");
btn.addEventListener("click", function(){
    do{
    size=prompt("What should the size of each side be?", 16);
    } while (!(size>0 && size<=100));
    generate_grid(size);
});

function add_event_listener(element){
    element.addEventListener("mouseover", function () {
            let currentOpacity=parseFloat(getComputedStyle(this).opacity);
            this.style.opacity=currentOpacity+0.1;
    })
}