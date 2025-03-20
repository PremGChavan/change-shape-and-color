const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "pink",
  "brown",
  "grey"
];

const shapes = [
    "circle",
    "square",
    "rectangle",
    "triangle",
    "diamond",
    "star",
    "rhombus",
    "oval",
    "pentagon",
    "hexagon",
    "heart",
    "parallelogram",
    "crescent"
  ];

function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("shape").style.backgroundColor = randomColor;
}

function changeShape() {
    const shapeElement = document.getElementById("shape");
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  
    // Store the current background color to preserve it
    const currentBgColor = shapeElement.style.backgroundColor;
  
    // Reset styles before applying a new shape
    shapeElement.style.borderRadius = "";
    shapeElement.style.clipPath = "";
    shapeElement.style.transform = "";
    shapeElement.style.width = "250px"; 
    shapeElement.style.height = "250px"; 
    shapeElement.style.border = "none"; 
    shapeElement.style.backgroundColor = currentBgColor; // Restore color
  
    switch (randomShape) {
      case "circle":
        shapeElement.style.borderRadius = "50%";
        break;
      case "square":
        shapeElement.style.borderRadius = "0";
        break;
      case "rectangle":
        shapeElement.style.width = "300px"; 
        shapeElement.style.height = "150px";
        break;
      case "triangle":
        shapeElement.style.width = "0";
        shapeElement.style.height = "0";
        shapeElement.style.borderLeft = "125px solid transparent";
        shapeElement.style.borderRight = "125px solid transparent";
        shapeElement.style.borderBottom = "200px solid red";
        shapeElement.style.backgroundColor = "transparent";
        break;
      case "diamond":
        shapeElement.style.transform = "rotate(45deg)";
        break;
      case "star":
        shapeElement.style.clipPath =
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
        break;
      case "rhombus":
        shapeElement.style.transform = "rotate(45deg)";
        break;
      case "oval":
        shapeElement.style.borderRadius = "50%";
        shapeElement.style.transform = "scaleX(2)";
        break;
      case "pentagon":
        shapeElement.style.clipPath =
          "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
        break;
      case "hexagon":
        shapeElement.style.clipPath =
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
        break;
      case "heart":
        shapeElement.style.clipPath =
          "polygon(50% 80%, 91% 38%, 78% 10%, 50% 25%, 22% 10%, 9% 38%)";
        break;
      case "parallelogram":
        shapeElement.style.transform = "skew(20deg)";
        break;
      case "crescent":
        shapeElement.style.clipPath =
          "circle(50% at 70% 50%)";
        break;
      default:
    }
  
    // Restore background color
    shapeElement.style.backgroundColor = currentBgColor;
  }
  