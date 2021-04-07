canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var color = "black";
var width = 1;
var radius = 50;
document.getElementById("color").value = color;
document.getElementById("width").value = width;
document.getElementById("radius").value = radius;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

mouseEvent = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
        ctx.stroke();
        console.log("Current position of x and y coordnates = ");
        console.log("x = "+current_position_x+" y = "+ current_position_y);
        }
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}