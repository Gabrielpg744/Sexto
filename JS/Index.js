const caja = document.querySelector("#caja1");
const texto = document.querySelector(".alert-info");
const btn1 = document.querySelector("#b1");

const btn2 = document.querySelector("#b2");
const btn3 = document.querySelector("#b3");
const btn4 = document.querySelector("#b4");

btn1.addEventListener("click", function()
{
    let txt = caja.value;/*obtengo el texto de la caja y lo guardo en txt*/
    texto.innerText = txt;/*Lo que manda el txt se modifica con innertext */
    /*caja.classList.add("is-invalid");*/
});

btn2.addEventListener("click", function()
{
    /*let txt = caja.value;*/
    a = caja.getAttribute("type");
    if(a=="text"){
        caja.setAttribute("type","password");
    }else{
        caja.setAttribute("type","text");
    }
});

btn3.addEventListener("click", function()
{
    caja.classList.remove("is-invalid");
    caja.classList.add("is-valid")
});

btn4.addEventListener("click", function()
{
    caja.classList.remove("is-valid");
    caja.classList.add("is-invalid")
});

