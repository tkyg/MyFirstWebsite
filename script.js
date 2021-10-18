function two() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "25%";
    }
  }

document.getElementById("max").onclick = maxVerstappen;

function maxVerstappen() {
  document.getElementById("max").innerHTML="Max Verstappen is from Netherlands, and he is 24 years old";
}

document.getElementById("lewis").onclick = lewisHamilton;

function lewisHamilton() {
  document.getElementById("lewis").innerHTML="Lewis Hamilton is from United Kingdom, and he is 36 years old";
}

const driverNames = ["Max Verstappen", "Lewis Hamilton", "Valtteri Bottas"];
function driver(name, team, age) {
    return name;
    return team;
    return age; 
}