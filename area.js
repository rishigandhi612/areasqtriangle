const button = document.getElementById("calculate");
let area = 0;

function calculateArea() {
  // get the selected shape
  let shape = document.getElementById("id_shapes").value;
  // calculate the shape's area
  switch (shape) {
    case "circle":
      let radius = document.getElementById("id_radius").value;
      area = Math.PI * radius * radius;
      break;
      case "triangle":
        let base = document.getElementById("id_base").value;
        let height = document.getElementById("id_height").value;
        area = (base * height) / 2;
        break;
      case "square":
        let side = document.getElementById("id_side").value;
        area = side * side;
        break;
      case "rectangle":
        let length = document.getElementById("id_length").value;
        let width = document.getElementById("id_width").value;
        area = length * width;
        break;
    }
    document.getElementById("id_output").innerHTML = "Area = " + area;
  }
  
  button.addEventListener("click", calculateArea);
        