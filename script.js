function two() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.flex = "%";
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


function driver(name, age, country) {
    console.log(`${name} is ${age} years old, and he is from ${country}`);
}

driver("Max Verstappen", 24, "Netherlands");
driver("Lewis Hamilton", 36, "United Kingdom");
document.getElementById('demo').innerHTML = driver(name, age, country);