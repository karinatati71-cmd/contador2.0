const boton=document.querySelector("button");

/*boton.addEventListener('click', saludar);

function saludar() {
    console.log("Holiiii");
}

boton.onclick = function saludar() {
    console.log("Holiiiiiii");
}

boton.addEventListener('mouseover', function() {
    boton.style.backgroundColor = 'blue';
});

boton.removeEventListener('mouseover', function() {
    boton.style.backgroundColor = 'blue';
});
boton.addEventListener('contextmenu', saludar);

function saludar() {
    alert("Diste click derecho");
}

boton.addEventListener('dblclick', saludar);

function saludar() {
    alert("Diste doble click");
}*/

boton.addEventListener('dblclick', saludar);

function saludar() {
    console.log("Diste doble click");
}