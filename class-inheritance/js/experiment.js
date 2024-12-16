// Poprawiony kod
console.log("Inheritance in ES6 standard");

class Line {
    constructor(length = 0) {
        this.length = length;
    }
    setLength(length = 0) {
        this.length = length;
    }
}

let firstLine = new Line(108);
firstLine.setLength(110);
console.log(firstLine);

class Rectangle extends Line {
    constructor(width = 0, length = 0) {
        super(length);
        this.width = width;
    }
    setWidth(width = 0) {
        this.width = width;
    }
}

class Cuboid extends Rectangle {
    constructor(height = 0, width = 0, length = 0) {
        super(width, length);
        this.height = height;
    }
    setHeight(height = 0) {
        this.height = height;
    }
}

let firstRectangle = new Rectangle(10, 20);
firstRectangle.setWidth(100);
firstRectangle.setLength(200);
console.log(firstRectangle);

let firstCuboid = new Cuboid(100, 200, 300);
firstCuboid.setHeight(20);
firstCuboid.setWidth(40);
firstCuboid.setLength(70);
console.log(firstCuboid);

// Referencje do elementów
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");
const lengthInput = document.getElementById("length");
const section = document.querySelector("section");
const submitButton = document.querySelector("button[type='submit']");

// Funkcja aktualizująca rozmiary prostopadłościanu
function updateCuboid(event) {
    // Zapobiega przeładowaniu strony po kliknięciu submit
    event.preventDefault();

    const height = parseFloat(heightInput.value) || 100;
    const width = parseFloat(widthInput.value) || 100;
    const length = parseFloat(lengthInput.value) || 100;

    // Tworzenie prostopadłościanu
    const cuboid = document.createElement("div");
    cuboid.classList.add("red-semi-transparent");
    cuboid.style.setProperty("--height", `${height}px`);
    cuboid.style.setProperty("--width", `${width}px`);
    cuboid.style.setProperty("--length", `${length}px`);

    // Czyszczenie sekcji przed dodaniem nowego
    section.innerHTML = "";
    section.appendChild(cuboid);

    console.log(firstLine);
    console.log(firstRectangle);
    console.log({height,width,length});
}

// Nasłuchiwanie kliknięcia przycisku submit
if (submitButton) {
    submitButton.addEventListener("click", updateCuboid);
} else {
    console.error("Przycisk submit nie został znaleziony w dokumencie.");
}
