
class App
{


    tekenKerstBoom(g,x,y){
 
        
        
        g.fillStyle = "green";
        
     
        g.fillRect(150, 350, 100, 50);
        
    
        g.beginPath();
        g.moveTo(250, 350);
        g.lineTo(100, 200);
        g.lineTo(200, 100);
        g.lineTo(300, 200);
        g.lineTo(400, 100);
        g.lineTo(250, 350);
        g.closePath();
        g.fill();
        
       
        g.beginPath();
        g.fillStyle = "yellow";
        for (let i = 0; i < 20; i++) {
          g.arc(100 + Math.random() * 300, 100 + Math.random() * 200, 5, 0, 2 * Math.PI);
        }
        g.fill()
    }

    
    som(a, b)
    {
       
        return a + b;
    }


     scriptFunction()
    {
    console.log("Mario");
    }

     lachFunction()
    {
        let lach = "bahaha"; 
        console.log(lach);
    }

    runApplication()
    {
        this.scriptFunction();
        this.lachFunction();
        this.som();
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d"); 
        this.tekenKerstBoom(g,200,200);
        
        /*g.beginPath();
        g.fillStyle = "black";
        // dak
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();

        // vlak
        g.beginPath();
        g.fillStyle = "gray";
        g.moveTo(20,50);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(60,60);
        g.closePath();
        g.stroke();
        g.fill();

        // zijkant
        g.beginPath();
        g.fillstyle = "black";
        g.moveTo(60,40);
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        // ramen
        g.beginPath();
        let randomGetal = Math.random();
        if (randomGetal < 0.5)
        {
            g.fillStyle = "yellow";
        }
        else if (randomGetal > 0.5)
        {
            g.fillStyle = "black";
        }
        g.moveTo(28,39);
        g.lineTo(28,46);
        g.lineTo(43,48);
        g.lineTo(44,41);
        g.closePath();
        g.stroke();
        g.fill();

        */
        let title = document.getElementById("newstitle");
        console.log (randomGetal);
       
        document.getElementById("canvasId");
        console.log(canvas);
        
 
    }
    
    
}


let app = new App();
let app2 = new App();
app.runApplication();
app2.som(2, 3);
let result = app.som(300, 3);
console.log(result);
let result2 = app2.som(3220, 3);
console.log(result2);
