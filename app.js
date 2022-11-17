// CREACINO DEL HEADER
// ---------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const navbar = document.createElement("div");
const navLog = document.createElement("div");
const navlist = document.createElement("div");
const list = document.createElement("ul");
const liUno = document.createElement("li");
const liDos = document.createElement("li");
const liTres = document.createElement("li");
const aUno = document.createElement("a");
const aDos = document.createElement("a");
const aTres = document.createElement("a");
// ASIGNANDO DEL NODO PADRE
const nav = document.querySelector("#nav")
// AGREGANDO LOS ATRIBUTOS
navbar.setAttribute("class","container")
navLog.setAttribute("class","logo")
navlist.setAttribute("class","navlist")
list.setAttribute("class","list")
aUno.setAttribute("href","#")
aDos.setAttribute("href","#")
aTres.setAttribute("href","#")
// AGREGANDO LOS NODOS HIJOS
nav.appendChild(navbar)
navbar.appendChild(navLog)
navbar.appendChild(navlist)
navlist.appendChild(list)
list.appendChild(liUno)
list.appendChild(liDos)
list.appendChild(liTres)
liUno.appendChild(aUno)
liDos.appendChild(aDos)
liTres.appendChild(aTres)
// DATON VALORES
navLog.textContent = "ConstrusarHJ"
aUno.textContent = "Quienes Somos"
aDos.textContent = "Trabajos Finalizados"
aTres.textContent = "Servicos "

// -----------------------------------------------------------------------------------------------------------------------------------

// CRECION DE MAIN / HERO
// ------------------------------------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const divHero = document.createElement("div")
const h1Hero = document.createElement("h1")
// ASIGNANDO DEL NODO PADRE
const hero = document.querySelector("#hero")
// AGREGANDO LOS ATRIBUTOS
hero.setAttribute("class","hero")
divHero.setAttribute("class","container")
h1Hero.setAttribute("class","")
// AGREGANDO LOS NODOS HIJOS
hero.appendChild(divHero)
divHero.appendChild(h1Hero)




