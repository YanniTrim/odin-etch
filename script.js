const containerDiv = document.querySelector("div");

function hoverBlack(){
    this.style.backgroundColor = "black";
}

function hoverColor() {
    const redRand = Math.random()*255;
    const greenRand = Math.random()*255;
    const blueRand = Math.random()*255;
    this.style.backgroundColor = `rgb(${redRand},${greenRand},${blueRand})`;
}


// Create 16x16 grid
function createGrid(size) {
    for (let row = 0; row<size; row++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for (let col = 0; col < size; col++) {
            const subDiv = document.createElement("div");
            subDiv.classList.add("item");
            subDiv.addEventListener("mouseover", hoverColor);
            div.appendChild(subDiv);
        }
        containerDiv.appendChild(div);
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
