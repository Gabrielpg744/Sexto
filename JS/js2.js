/*const parrafoInt = document.querySelector("#textoIngr");
const cambiar = document.querySelector("#cambiar");

cambiar.addEventListener("click", function(e){
    let a =Math.floor(
        Math.random()*256);
        let b =Math.floor(
            Math.random()*256);
            let c=Math.floor(
                Math.random()*256);
        parrafoInt.style.color="rgb("+a+","+b+","+c+")";

});*/
alert("Bienvenido, se cambiara el color de la fuente?");

const botonCambiar = document.querySelector("#Cambiar");
const cajaTexto = document.querySelector("#texIngr");


const colores = ["red", "blue", "green", "purple", "orange"];
let indiceColor = 0;

botonCambiar.addEventListener("click", () => {
    indiceColor = (indiceColor + 1) % colores.length;
    cajaTexto.style.color = colores[indiceColor];
});

/*SALEEEEdocument.addEventListener("DOMContentLoaded", function() {
    // Selección CORRECTA de elementos (con # para IDs)
    const inputTexto = document.getElementById("textoIngr");
    const parrafo = document.getElementById("textoMostrado");
    const cambiarBtn = document.getElementById("cambiar");
    
    cambiarBtn.addEventListener("click", function() {
        // 1. Verificar que hay texto
        if(!inputTexto.value.trim()) {
            alert("¡Escribe algo primero!");
            return;
        }
        
        // 2. Mostrar el texto en el párrafo
        parrafo.textContent = inputTexto.value;
        
        // 3. Generar color aleatorio (formato correcto)
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        // 4. Aplicar el color (propiedad CORRECTA: style.color)
        parrafo.style.color = `rgb(${r}, ${g}, ${b})`;
        
        console.log(`Color aplicado: rgb(${r}, ${g}, ${b})`); // Para depuración
    });
});*/
/*alert("Bienvenido se va a cambiar el color de fuente");
const parrafoInt=document.querySelector("p");
const cambiar=document.querySelector("#cambiar");


parrafo.addEventListener("click", function(e) {

    let r =Math.floor(
        Math.random()*256);
        let g =Math.floor(
            Math.random()*256);
            let b=Math.floor(
                Math.random()*256);
        

        parrafo.style.backgroundColor="rgb("+r+","+g+","+b+")";

});
botonmas.addEventListener("click",function(e)
{
    const estilo=window.getComputedStyle(parrafo);
    let tam=parseFloat(estilo.fontSize);
    parrafo.style.fontSize=(tam+2)+ "px";
});

botonmenos.addEventListener("click",function(e)
{
    const estilo=window.getComputedStyle(parrafo);
    let tam=parseFloat(estilo.fontSize);
    parrafo.style.fontSize=(tam-2)+ "px";
});*/