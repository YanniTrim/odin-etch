const containerDiv = document.querySelector("#main-contain");

function hoverBlack(){
    this.style.backgroundColor = "black";
}

function hoverColor() {
    const redRand = Math.random()*255;
    const greenRand = Math.random()*255;
    const blueRand = Math.random()*255;
    this.style.backgroundColor = `rgb(${redRand},${greenRand},${blueRand})`;
}

function darken() {
    const redRand = Math.random()*255;
    const greenRand = Math.random()*255;
    const blueRand = Math.random()*255;
    this.style.backgroundColor = `rgb(${redRand},${greenRand},${blueRand})`; //set random color
    this.setAttribute("timesHovered",parseInt(this.getAttribute("timesHovered"))+1); // increase timesHovered by 1
    console.log(this.getAttribute("timesHovered"));
    this.style.opacity = 1 - (parseInt(this.getAttribute("timesHovered"))/10);

}


// Create 16x16 grid
function createGrid(size) {
    for (let row = 0; row<size; row++) {
        const div = document.createElement("div");
        document.createAttribute("timesHovered");
        div.classList.add("row");
        for (let col = 0; col < size; col++) {
            const subDiv = document.createElement("div");
            subDiv.classList.add("item");
            subDiv.setAttribute("timesHovered", 0);
            subDiv.addEventListener("mouseover", darken);
            div.appendChild(subDiv);
        }
        containerDiv.appendChild(div);
        containerDiv.style.backgroundColor = "black";
    }
}

function removeGrid() {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {row.remove()})
}

const button = document.createElement("button");
button.textContent = "Create New Grid";
button.addEventListener("click", () => {
    let size;
    while (true) {
        size = prompt("What size grid do you want? (less than 100)");
        if (size < 100) {
            break;
        }
    }
    removeGrid();
    createGrid(size); 
    
})
const header = document.querySelector("div")
header.appendChild(button);
