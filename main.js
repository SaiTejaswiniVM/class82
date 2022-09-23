canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width = 1;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last_position_of_x and y coordinates is equal to");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y); 

        console.log("current positions of x and y coordinates is equal to");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_y; 
}