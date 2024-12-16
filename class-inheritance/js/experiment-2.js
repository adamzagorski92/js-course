// Referencje do elementów
const heightInput = document.getElementById("height");
const widthInput = document.getElementById("width");
const lengthInput = document.getElementById("length");
const submitButton = document.getElementById("submit-btn");
const drawingArea = document.getElementById("drawing-area");

// Funkcja rysująca prostopadłościan
function drawCuboid(event) {
  event.preventDefault();

  // Pobierz wartości z inputów
  const height = parseFloat(heightInput.value) || 100;
  const width = parseFloat(widthInput.value) || 100;
  const length = parseFloat(lengthInput.value) || 100;

  // Usuń poprzedni prostopadłościan
  drawingArea.innerHTML = "";

  // Stwórz kontener na prostopadłościan
  const cuboid = document.createElement("div");
  cuboid.className = "cuboid";
  cuboid.style.setProperty("--height", `${height}px`);
  cuboid.style.setProperty("--width", `${width}px`);
  cuboid.style.setProperty("--length", `${length}px`);

  // Dodaj ściany
  ["front", "back", "top", "bottom", "left", "right"].forEach(face => {
    const div = document.createElement("div");
    div.className = `face ${face}`;
    cuboid.appendChild(div);
  });

  // Dodaj prostopadłościan do obszaru rysowania
  drawingArea.appendChild(cuboid);
  console.log(cuboid);
}

// Nasłuchiwanie kliknięcia przycisku
submitButton.addEventListener("click", drawCuboid);

