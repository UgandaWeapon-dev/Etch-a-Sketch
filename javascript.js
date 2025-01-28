const gridContainer = document.querySelector("#grid-container");


function gridAmount(amount, color) {

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
            if (color === "rainbow") {
                gridSquare.addEventListener("mouseenter", () => {
                    const randomColor = getRandomColor();
                    gridSquare.style.backgroundColor = randomColor;
                });
            }
            else if (color === "shade") {
                let hoverCount = 0;
                gridSquare.addEventListener("mouseenter", () => {
                    if (hoverCount < 10) {
                        hoverCount++;
                        gridSquare.style.opacity = hoverCount / 10;
                    }
                    gridSquare.classList.add("black");                    
                });
            }
            else {
                gridSquare.addEventListener("mouseenter", () => {
                    gridSquare.classList.add("black");
                });
            }
        }
    }
}

function getRandomColor() {
    // Generate a random color in hexadecimal
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Set grid size
const btnSet = document.querySelectorAll("button");
btnSet.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`${button.className} button clicked!`);
        const amount = prompt("Enter Grid Size", "1-100");

        if (amount > 100) {
            alert ("Grid size is too large :( \nPlease use a smaller grid size");
        }
        else if (amount <= 0 ) {
            alert("Please input a positive integer");
        }
        else {
            gridAmount(amount, button.className);
        }
    });
});

