// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.textContent = "Erick is the champion";
newHeader.id = "victory";