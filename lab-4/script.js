const fifthElement = document.getElementById("fifth");
const sixthElement = document.querySelector("#sixth");

let firstElementClicked = false;
let secondElementClicked = false;

fifthElement.addEventListener("click", () => {
    if (!firstElementClicked) {
        fifthElement.classList.add('first-click');
        firstElementClicked = true;
    } else {
        fifthElement.classList.toggle('second-click');
        firstElementClicked = false;
    }
});

sixthElement.addEventListener("click", () => {
    if (!secondElementClicked) {
        sixthElement.classList.add('first-click');
        secondElementClicked = true;
    } else {
        sixthElement.classList.toggle('second-click');
        secondElementClicked = false;
    }
});