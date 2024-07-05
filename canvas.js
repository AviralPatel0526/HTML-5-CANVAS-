var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');
// c.fillStyle = "teal"
// c.fillRect(100,100,100,100);

// // line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "blue"
// c.stroke();


// // arc / circle

// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false)
// c.stroke()

// for (var i = 1; i <= 50; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//     c.stroke();
// }

// c.beginPath();   c.clearRect isko show nhi horaha
// c.arc(200, 200, 340, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


// var x=Math.random()*innerWidth;
// var y=Math.random()*innerHeight;
// var dy=(Math.random()-0.5)*16;
// var dx=(Math.random()-0.5)*16;
// var radius=30;

function Circle(x,y,dx,dy,radius,r,g,b){
    this.x=x;
    this.y=y;
    this.dx=dx; 
    this.dy=dy;
    this.radius=radius;
    this.draw=function(){
        c.beginPath();   
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        c.fillStyle = `rgb(${r}, ${g}, ${b})`;
        c.fill()
        
    }
    this.update=function(){
        if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx=-this.dx;
        }
        if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

var circleArray=[];
for(var i=0;i<150;i++){
    var radius=Math.random()*10; 
    var x=Math.random()*(innerWidth - radius*2) + radius;
    var y=Math.random()*(innerWidth - radius*2) +  radius;
    var dy=(Math.random()-0.5)*8;
    var dx=(Math.random()-0.5)*8;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    circleArray.push(new Circle(x,y,dx,dy,radius,r,g,b))
}
function animate(){  
    requestAnimationFrame(animate);

    c.clearRect(0,0,innerWidth,innerHeight)
    for(var i=0;i<circleArray.length;i++)
    {
        circleArray[i].update();
    }
    circle.update(); 
}

animate();