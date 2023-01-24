let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d"); 
let canvasElem = document.querySelector("canvas");
g.beginPath();
g.arc(100, 75, 50, 0, 2 * Math.PI);
g.stroke();