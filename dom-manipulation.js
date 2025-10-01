// Select the necessary DOM elements
const createBoxButton = document.getElementById("createBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

// Function to create a box
function createBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomColor();
    box.innerText = document.querySelectorAll(".box").length + 1;

    boxContainer.appendChild(box);
}

// Function to remove all boxes
function removeAllBoxes() {
    boxContainer.innerHTML = "";
}

// Function to get a random color
function getRandomColor() {
    const colors = ['red', 'orange', 'green', 'blue', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Attach event listeners to buttons
createBoxButton.addEventListener("click", createBox);
removeBoxesButton.addEventListener("click", removeAllBoxes);
