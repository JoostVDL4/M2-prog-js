let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d"); 
let canvasElem = document.querySelector("canvas");
let randomGetal = Math.random();
let gradient = g.createLinearGradient(5,100,10,5);
var colorArray = ["#0000CC", "#000000", "#CCCC00", "#FF0000", "#193300", "#80FF00"];
var colorArrayLights = ["#b3000f", "#0330fc"];
gradient.addColorStop(0, "red")
gradient.addColorStop(1, "green")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function drawHouses(){
    var color1 = Math.floor(getRandomInt(6));
    var color2 = Math.floor(getRandomInt(6));
    var color3 = Math.floor(getRandomInt(6));
    var color4 = Math.floor(getRandomInt(6));
    //houses
    const house1 = new House(620, 400 , 100 , 85, color1);
    const house2 = new House(420, 400 , 100 , 85, color2);
    const house3 = new House(220, 400 , 100 , 85, color3);
    const house4 = new House(20, 400 , 100 , 85, color4);
    var newTimeOut = Math.random()* 700;
    setTimeout(drawHouses, newTimeOut);
}

function drawLights(){
    //lights
    var colorLight1 = Math.floor(getRandomInt(2));
    var colorLight2 = Math.floor(getRandomInt(2));
    var colorLight3 = Math.floor(getRandomInt(2));
    var colorLight4 = Math.floor(getRandomInt(2));
    var colorLight5 = Math.floor(getRandomInt(2));
    var colorLight6 = Math.floor(getRandomInt(2));
    var colorLight7 = Math.floor(getRandomInt(2));
    var colorLight8 = Math.floor(getRandomInt(2));
    var colorLight9 = Math.floor(getRandomInt(2));
    var colorLight10 = Math.floor(getRandomInt(2));

    const light1 = new Lights(300,200,colorLight1);
    const light2 = new Lights(200,200,colorLight2);
    const light3 = new Lights(250, 200,colorLight3);
    const light4 = new Lights(450, 200,colorLight4);
    const light5 = new Lights(400, 200,colorLight5);
    const light6 = new Lights(150, 200,colorLight6);
    const light7 = new Lights(100, 200,colorLight7);
    const light8 = new Lights(50, 200,colorLight8);
    const light9 = new Lights(350, 200,colorLight9);
    const light10 = new Lights(500, 200,colorLight10);
    var newTimeOut = Math.random()* 700;
    setTimeout(drawLights, newTimeOut);
    
}


function kaart(){
    g.beginPath();
    g.fillStyle = "lightgray";
    g.rect(20, 20, 700, 600);
    g.stroke();
    g.fill();
    g.closePath();
    g.fillStyle = gradient;
    g.font = "40px Comic Sans MS"; 
    g.fillText("Fijne Kerst!", 250, 70);

    drawHouses();
  
   



    //trees
    Tree(30,120);
    Tree(30,150);
    Tree(30,180);
    treeStump(70,179,20,60)

    Tree(600,120);
    Tree(600,150);
    Tree(600,180);
    treeStump(640,179,20,60)

    //snowmans

    const snowman1 = new snowMan(450,100);
    const snowman2 = new snowMan(50,100);
    const snowman3 = new snowMan(250, 80);
    const snowman4 = new snowMan(100, -200);
    const snowman5 = new snowMan(500, -200);
    const snowman6 = new snowMan(490, -50);
    const snowman7 = new snowMan(80,-100);
    const snowman8 = new snowMan(300,-250);

    

    drawLights();
    
}


class Lights{
    constructor(x,y,colorLight){
        g.beginPath();
        //if (randomGetal < 0.5)
            //{
        g.fillStyle = colorArrayLights[colorLight];
            //}
        //else if (randomGetal > 0.5)
        //{
            //g.fillStyle = "red";
        //}
        g.arc(100 + x, 300 - y, 10, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

    }
}

class House{
    constructor(x, y , width , height, color) 
    {
        
        
        let g = canvas.getContext("2d"); 
        g.beginPath()
        //if (randomGetal < 0.5)
            //{
        g.fillStyle = colorArray[color]; 
            //}
        //else if (randomGetal > 0.5)
        //{
            //g.fillStyle = "color";
        //}
        var rectHouse = g.rect(x, y , width , height);
        //g.rect(x, y , width , height);
        g.stroke();
        g.fill();
        g.closePath();
        

        g.beginPath();
        g.fillStyle = "brown"
        g.moveTo(x + 100, y + 0);
        g.lineTo(x + 0,y  - 110);
        g.lineTo(x + 0,y -1);
        g.fill();
        
    }
    
}
function Tree(x,y){   
        g.fillStyle = "green";
        
            
        
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + 50, y-50);
        g.lineTo(x + 100, y);
        
          
        g.fill();
        g.closePath();

        g.fill();
        
    
}

function treeStump(x,y,width,height){
        g.fillStyle = "brown";
        g.fillRect(x,y,width,height);
}

class snowMan{
    constructor(x,y){

        g.beginPath();
        g.fillStyle =  "white";
        g.arc(100 + x, 300 - y, 15, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle =  "white";
        g.arc(100 + x, 320 - y, 15, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();


        g.beginPath();
        g.fillStyle =  "white";
        g.arc(100 + x, 340 - y, 15, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        //oogjes
        g.beginPath()
        g.fillStyle = "black";
        g.arc(96 + x, 295 - y, 1, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "black";
        g.arc(104 + x, 295 - y, 1, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "orange";
        g.arc(100 + x, 301 - y, 1, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();
    }
}



//class Tree{
    //constructor(x,y)
    //{

    //}
//}
        



function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
}

canvasElem.addEventListener("mousedown", function(e)
            {
                getMousePosition(canvasElem, e);
            });






kaart();


console.log (randomGetal)