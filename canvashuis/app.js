class App
{
    runApplication()
    {
        
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d"); 
        g.beginPath();
        g.fillStyle = "black";
        // dak
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();

        // vlak
        g.beginPath();
        g.fillStyle = "gray"
        g.moveTo(200,500);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();

        // ramen
        g.beginPath()
        g.fillStyle = "blue"
        g.moveTo(287,399);
        g.lineTo(280,465);
        g.lineTo(410,493);
        g.lineTo(477,421);
        g.lineTo(287,399);
       
        g.closePath();
        g.stroke();
        g.fill();



       
        document.getElementById("canvasId")
        console.log(canvas)
        
        
 
    }
}

let app = new App();
app.runApplication();
