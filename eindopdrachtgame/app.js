let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d"); 
let canvasElem = document.querySelector("canvas");
let randomGetal = Math.random();
let gradient = g.createLinearGradient(5,100,10,5);
gradient.addColorStop(0, "red")
gradient.addColorStop(1, "green")




function circleClick(evt)
{
    if (evt.target.name == "red")
        {
           
           newLevel();
        }
        else{
            ClickedBlueCircle();
            //score -= score; 
            //output.text = "score: " + score;
            //canvas.update();
        }
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
  

    
    
    //houses
    const house1 = new House(620, 400 , 100 , 85);
    const house2 = new House(420, 400 , 100 , 85);
    const house3 = new House(220, 400 , 100 , 85);
    const house4 = new House(20, 400 , 100 , 85);
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

    //lights
    const light1 = new Lights(300,200);
    const light2 = new Lights(200,200);
    const light3 = new Lights(250, 200);
    const light4 = new Lights(450, 200);
    const light5 = new Lights(400, 200);
    const light6 = new Lights(150, 200);
    const light7 = new Lights(100, 200);
    const light8 = new Lights(50, 200);
    const light9 = new Lights(350, 200);
    const light10 = new Lights(500, 200);
}


class Lights{
    constructor(x,y){
        g.beginPath();
        if (randomGetal < 0.5)
            {
        g.fillStyle = "blue";
            }
        else if (randomGetal > 0.5)
        {
            g.fillStyle = "red";
        }
        g.arc(100 + x, 300 - y, 10, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

    }
}

class House{
    constructor(x, y , width , height) 
    {
         
        
        let g = canvas.getContext("2d"); 
        g.beginPath()
        if (randomGetal < 0.5)
            {
        g.fillStyle = "yellow";
            }
        else if (randomGetal > 0.5)
        {
            g.fillStyle = "black";
        }
        g.rect(x, y , width , height);
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
        g.arc(100 + x, 300 - y, 10, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle =  "white";
        g.arc(100 + x, 320 - y, 10, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();


        g.beginPath();
        g.fillStyle =  "white";
        g.arc(100 + x, 340 - y, 10, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();


        g.beginPath()
        g.fillStyle = "black";
        g.arc(96 + x, 296 - y, 1, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "black";
        g.arc(104 + x, 296 - y, 1, 0, 2 * Math.PI);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "orange";
        g.arc(100 + x, 304 - y, 1, 0, 2 * Math.PI);
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