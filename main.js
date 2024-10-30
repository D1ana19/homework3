let numberOfCubes = prompt("Введите количество кубиков:");

numberOfCubes = Math.min(parseInt(numberOfCubes), 15); 
const colors = ["red", "green", "blue"];
const container = document.getElementById("kvadrat");

for (let i = 0; i < numberOfCubes; i++) {
    const cube = document.createElement("div");
    cube.className = "cube";
    cube.style.backgroundColor = colors[i % colors.length]; 
    container.appendChild(cube);
}
