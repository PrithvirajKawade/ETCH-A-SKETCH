
// create default grid

createGrid(16)

// create slider and get its value

const slideValue = document.querySelector("span")
const inputSlider = document.querySelector("#slider")
//get inputSlider value from input.value
inputSlider.oninput = (() => {
    let size = inputSlider.value;
    slideValue.textContent = (`${size}x${size}`)
    slideValue.classList.add("show");
    // create grid with slider input
    createGrid(size)
});

// let default color be black
let color = "black"
let click = true
//creating a grid
function createGrid(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => { div.remove() });
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = (size * size)
    for (let c = 0; c < amount; c++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement("beforeend", square);
    }
}


// check for random colour

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// color choice

function changeColor(choice) {
    color = choice;
}

// if new input reset grid

function reset() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white");
}

// function to not change color mode when clicking on buttons
// and sliders

document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector(".mode").textContent = "Mode: Coloring"
        } else {
            document.querySelector(".mode").textContent = "Mode: Not Coloring"
        }
    }
})
