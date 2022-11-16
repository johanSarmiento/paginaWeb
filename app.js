// CREACION DE LOS CREATEELEMENTS
const navbar = document.createElement("div");
const navLog = document.createElement("div");
const navlist = document.createElement("div");
const list = document.createElement("ul")
const sublist = document.createElement("li")
const linksPagina = document.createElement("a")
// ASIGNANDO DEL NODO PADRE
const nav = document.querySelector("#nav")
// AGREGANDO LOS ATRIBUTOS
navbar.setAttribute("class","navbar")
navLog.setAttribute("class","logo")
navlist.setAttribute("class","navlist")
// AGREGANDO LOS NODOS HIJOS
nav.appendChild(navbar)
navbar.appendChild(navLog)
navbar.appendChild(navlist)
navlist.appendChild(list)
list.appendChild(sublist)
// DATON VALORES
navLog.textContent = "ConstrusarHJ"





