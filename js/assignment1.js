let serena = "Serena Williams";
let worldGreeting = "Hello, World!";
console.log(worldGreeting)

function addNumbers(a, b) {
    return a + b;
}   

function subtractNumbers(a, b) {
    return a - b;
}
function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

let sum = addNumbers(5,3)
console.log("Sum:", sum);

const selectElement = document.querySelector(".select");
selectElement.addEventListener("click", (event) => {
    const optionValues = document.getElementsByClassName("optionValue");
    for (let i = 0; i < optionValues.length; i++) {
        if (optionValues[i].value === event.target.value) {
            console.log("Selected value:", optionValues[i].value);
        }
    }
    event.preventDefault();
})