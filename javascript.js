const gridContainer = document.querySelector("#grid-container");


function gridAmount(amount) {

    // Remove all existing rows
    const rows = gridContainer.querySelectorAll(".row");
    rows.forEach(row => row.remove());

    console.log(`Grid has ${amount**2} squares (${amount}x${amount})`);
    for (let i = 1; i <= amount; i++) {
        // Create row
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        gridContainer.appendChild(gridRow);

        // Create square
        for (let j = 1; j <= amount; j++) {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("square");
            gridRow.appendChild(gridSquare);

            // Add Hover Effect
            gridSquare.addEventListener("mouseenter", () => {
                gridSquare.classList.add("black");
            });
        }
    }
}

// Set grid size
const btnSet = document.querySelector(".btn-set");
btnSet.addEventListener("click", () => {
    console.log("Button clicked!"); 
    const amount = prompt("Enter Grid Size", "1-100");
    
    if (amount > 100) {
        alert ("Grid size is too large :( \nPlease use a smaller grid size");
    }
    else if (amount <= 0 ) {
        alert("Please input a positive integer");
    }
    else {
        gridAmount(amount);
    }
});


