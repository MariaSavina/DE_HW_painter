let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let myColor = 'black';
let size=12
let result=document.querySelector('#thickResult')
let myCanv
let save=document.getElementById('save')

class Canvas{
    constructor(size,color){
        this.size=size;
        this.color=color;
    }
    draw(event) {
        var x = event.offsetX;
        var y = event.offsetY;
        ctx.fillRect(x-5, y-5, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

document.getElementById('color').oninput = function(){
	myColor = this.value;
}
document.getElementById('thick').oninput = function(){
	size = + this.value;
    result.innerHTML =size
}

canvas.onmouseover=function(){
    myCanv=new Canvas(size,myColor)
    console.log(myCanv)
    canvas.onmousedown = function(event){
        canvas.onmousemove = function(event){
            myCanv.draw(event)
        }
        canvas.onmouseup = function(){
            canvas.onmousemove = null;
        }
    }
}

save.onclick=function(event){
    console.log(event)
}