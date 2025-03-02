var number = 0;
var x = 0;
var y = 0;
function up(){
    number = number + 1;
    x = x+1;
    document.getElementById("thecounter").textContent = number;
    document.getElementById("upper").textContent = "Up: " + x;
}
function down(){
    number = number - 1;
    y = y+1;
    document.getElementById("thecounter").textContent = number;
    document.getElementById("downer").textContent = "Down: " + y;
}