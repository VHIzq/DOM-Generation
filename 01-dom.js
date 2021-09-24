/* devuelve un arreglo de los elementos que tengan esa etiqueta*/
const title =  document.getElementsByTagName("h1");
title[0].innerHTML  = "Titulo cambiado desde JS"

/* recuperar elementos por id */

const texto = document.getElementById("text")
texto.innerHTML = "Escrito agregado desde JS";
texto. textContent = "Modificado con textContent";
texto.style.background = "blue";
texto.style.color = "white";
console.log(texto);

const div = document.createElement("div");
const body = document.querySelector("body");

body.append(div);


