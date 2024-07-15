const containerDiv = document.querySelector("div");

function hoverBlack(){
    this.style.backgroundColor = "black";
}


// Create 16x16 grid
function createGrid(size) {
    for (let row = 0; row<size; row++) {
        const div = document.createElement("div");
        div.classList.add("row");
        for (let col = 0; col < size; col++) {
            const subDiv = document.createElement("div");
            subDiv.classList.add("item");
            subDiv.addEventListener("mouseover", hoverBlack);
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
containerDiv.appendChild(button);
