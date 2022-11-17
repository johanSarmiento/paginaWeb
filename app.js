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
h1Hero.setAttribute("class","TituloHero")
// AGREGANDO LOS NODOS HIJOS
hero.appendChild(divHero)
divHero.appendChild(h1Hero)
// DATON VALORES
h1Hero.textContent = "CONSTRUSARHJ"

// -----------------------------------------------------------------------------------------------------------------------------------

// CRECION DE MAIN / QUIENES SOMOS
// ------------------------------------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const divSomos = document.createElement("div");
const divLeftSomos = document.createElement("div");
const divRightSomos = document.createElement("div");
const h2Somos = document.createElement("h2");
const pSomos1 = document.createElement("p");
const pSomos2 = document.createElement("p");
const h2span = document.createElement("span");
const SaltoDeLinea = document.createElement("br")
// ASIGANDO EL NODO PADRE
const QuieneSomos = document.querySelector("#QuienesSomos")
// AGREGANDO ATRIBUTOS  
divSomos.setAttribute("class","container");
divLeftSomos.setAttribute("class","divLeft container");
divRightSomos.setAttribute("class","divRight");
h2Somos.setAttribute("class","TituloSomos");
pSomos1.setAttribute("class","textoSomos1");
pSomos2.setAttribute("class","textoSomos2");
h2span.setAttribute("class","h2span")
// AGREGANDO LOS NODOS HIJOS
QuieneSomos.appendChild(divSomos);
divSomos.appendChild(divLeftSomos);
divSomos.appendChild(divRightSomos);
divLeftSomos.appendChild(h2Somos);
divLeftSomos.appendChild(pSomos1);
divLeftSomos.appendChild(pSomos2);
h2Somos.appendChild(h2span);
// DANDO VALORES
h2Somos.textContent = "Somos"
h2span.textContent = "CONSTRUSARHJ"
pSomos1.textContent = "Precisión. Puntualidad. Profesionalismo."
pSomos2.textContent = "ConstrusarHJ Somos un equipo de profesionales certificados capaces de materializar cualquier proyecto independientemente de su complejidad. Nos motiva el compromiso con la excelencia e invertimos el esfuerzo y tiempo necesarios para conseguir la completa satisfacción de nuestros clientes."
// -----------------------------------------------------------------------------------------------------------------------------------

// CRECION DE MAIN / TRABAJOS FINALIZADOS
// ------------------------------------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const divTrabajos = document.createElement("div");
const h2Trabajos = document.createElement("h2");
const pTrabajos = document.createElement("p");
const buttonTrabajos = document.createElement("button");
// ASIGANAR EL NODO PADRE
const Trabajos = document.querySelector("#TrabajosFinalizados")
// AGREGANDO ATRIBUTOS 
divTrabajos.setAttribute("class","container");
h2Trabajos.setAttribute("class","TituloTrabajos");
pTrabajos.setAttribute("class","textoTrabajo");
buttonTrabajos.setAttribute("class","btnTabajos")
//  AGREGANDO LOS NODOS HIJOS
Trabajos.appendChild(divTrabajos);
divTrabajos.appendChild(h2Trabajos);
divTrabajos.appendChild(pTrabajos);
divTrabajos.appendChild(buttonTrabajos);
//DANDO VALORES
h2Trabajos.textContent = "Trabajos finalizados"




