const fifthElement = document.getElementById("fifth");
const sixthElement = document.querySelector(".sixth");

let isActiveFifth = false;
let isActiveSixth = false;

fifthElement.addEventListener("click", () => {
    isActiveFifth = !isActiveFifth;
    fifthElement.classList.toggle("active-background", isActiveFifth);
});

sixthElement.addEventListener("click", () => {
    isActiveSixth = !isActiveSixth;
    sixthElement.classList.toggle("active-background", isActiveSixth);
});