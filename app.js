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
navbar.setAttribute("class","containerHJ")
navLog.setAttribute("class","logo")
navlist.setAttribute("class","navlist")
list.setAttribute("class","list")
aUno.setAttribute("href","#QuienesSomos")
aDos.setAttribute("href","#TrabajosFinalizados")
aTres.setAttribute("href","#Servicios")
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
aTres.textContent = "Nuestros Servicos"

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
divHero.setAttribute("class","containerHJ")
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
divSomos.setAttribute("class","containerHJ");
divLeftSomos.setAttribute("class","divLeft containerHJ");
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
divTrabajos.setAttribute("class","containerHJ");
h2Trabajos.setAttribute("class","TituloTrabajos");
pTrabajos.setAttribute("class","textoTrabajo");
buttonTrabajos.setAttribute("class","btnTrabajos btn-outline-secondary")
//  AGREGANDO LOS NODOS HIJOS
Trabajos.appendChild(divTrabajos);
divTrabajos.appendChild(h2Trabajos);
divTrabajos.appendChild(pTrabajos);
divTrabajos.appendChild(buttonTrabajos);
//DANDO VALORES
h2Trabajos.textContent = "Trabajos finalizados"
pTrabajos.textContent = "Mira todos nuestros trabajos Finalizados !Te van a encantar!"
buttonTrabajos.textContent = "MIRA AQUI"
// -----------------------------------------------------------------------------------------------------------------------------------

// CRECION DE MAIN / SERVICIOS
// ------------------------------------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const divServicios = document.createElement("div");
const divLeftServicios = document.createElement("div");
const divRightServicios = document.createElement("div");
const divConstruccion = document.createElement("div");
const divDiseño = document.createElement("div");
const divPlanos = document.createElement("div");
const divCotizacion = document.createElement("div");
const formCotizaicon = document.createElement("form")
const divNombre = document.createElement("div");
const divApellido = document.createElement("div");
const divCorreo = document.createElement("div");
const divCiudad = document.createElement("div");
const divDepartamento = document.createElement("div");
const divComentario = document.createElement("div");
const labelNombre = document.createElement("label");
const labelApellido = document.createElement("label");
const labelCorreo = document.createElement("label");
const labelCiudad = document.createElement("label");
const labelDepartamento = document.createElement("label");
const labelComentario = document.createElement("label");
const inputNombre = document.createElement("input");
const inputApellido = document.createElement("input");
const inputCorreo = document.createElement("input");
const iinputCiudad = document.createElement("input");
const inputDepartamento = document.createElement("input");
const inputComentario = document.createElement("input");
const btnCotizacion = document.createAttribute("button");
const textServicios1 = document.createElement("div");
const textServicios2 = document.createElement("div");
const textServicios3 = document.createElement("div");
const iconServicio1 = document.createElement("div");
const iconServicio2 = document.createElement("div");
const iconServicio3 = document.createElement("div");
const h2Servicios = document.createElement("h2");
const h2Cotizacion = document.createElement("h2");
const h3Construccion = document.createElement("h3");
const h3Diseño = document.createElement("h3");
const h3Planos = document.createElement("h3");
const pConstruccion = document.createElement("p");
const pDiseño = document.createElement("p");
const pPlanos = document.createElement("p");
//ASIGNANDO EL NODO PADRE 
const Servicos = document.querySelector("#Servicios");
//AGREGANDO ATRIBUTOS 
divServicios.setAttribute("class","containerHJ");
divLeftServicios.setAttribute("class","containerHJ divLeft");
divRightServicios.setAttribute("class","containerHJ divRight");
divConstruccion.setAttribute("class","containerHJ divConstruccion");
divDiseño.setAttribute("class","containerHJ divDiseño");
divPlanos.setAttribute("class","containerHJ divPlanos");
h2Servicios.setAttribute("class","titulo tituloServicio");
h2Cotizacion.setAttribute("class","titulo tituloCotizacion");
h3Construccion.setAttribute("class","subTitulo TituloConstruccion");
h3Diseño.setAttribute("class","subTitulo TituloDiseño");
h3Planos.setAttribute("class","subTitulo TituloPlanos");
textServicios1.setAttribute("class","textoServicio");
textServicios2.setAttribute("class","textoServicio");
textServicios3.setAttribute("class","textoServicio");
iconServicio1.setAttribute("class","icon iconConstruccion");
iconServicio2.setAttribute("class","icon iconDiseño");
iconServicio3.setAttribute("class","icon iconPlanos");
divCotizacion.setAttribute("class","divCotizacion containerHJ");
formCotizaicon.setAttribute("class","formularioCotazacion");
inputNombre.setAttribute("type","text");
inputNombre.setAttribute("id","nombre");
inputNombre.setAttribute("class","formNombre");
labelNombre.setAttribute("for","nombre");
inputApellido.setAttribute("type","text");
inputApellido.setAttribute("id","Apellido");
inputApellido.setAttribute("class","formApellido");
labelApellido.setAttribute("for","Apellido");
//AGREGANDO LOS NODOS HIJOS
Servicos.appendChild(divServicios);
divServicios.appendChild(divLeftServicios);
divServicios.appendChild(divRightServicios);
divLeftServicios.appendChild(h2Servicios);
divRightServicios.appendChild(h2Cotizacion);
divLeftServicios.appendChild(divConstruccion);
divLeftServicios.appendChild(divDiseño);
divLeftServicios.appendChild(divPlanos);
divConstruccion.appendChild(iconServicio1);
divDiseño.appendChild(iconServicio2);
divPlanos.appendChild(iconServicio3);
divConstruccion.appendChild(textServicios1);
divDiseño.appendChild(textServicios2);
divPlanos.appendChild(textServicios3);
textServicios1.appendChild(h3Construccion);
textServicios2.appendChild(h3Diseño);
textServicios3.appendChild(h3Planos);
textServicios1.appendChild(pConstruccion);
textServicios2.appendChild(pDiseño);
textServicios3.appendChild(pPlanos);
// DANDO VALORES
h2Servicios.textContent = "SERVICIóS";
h2Cotizacion.textContent = "¡HAZ TU COTIZACIóN AQUI!";
h3Construccion.textContent = "Construccion";
h3Diseño.textContent = "Diseño";
h3Planos.textContent = "Planos";
pConstruccion.textContent = "Gestión y construcción de todo tipo de edificacion, proyectos de construccion, edificaciónes, proyectos urbanísticos y proyectos de ingeniería"
pDiseño.textContent = "Prestación de servicios profesionales y/o tecnológicos especializados en desarrollo urbano, diseño arquitectónico, estudio y levantamiento topográfico, planeación y gestión publica."
pPlanos.textContent = "Creacion y entregas de planos, con una gran profesionalismo en cada detalle. para que pueda tener una gran idea, sobre tu vienda"
labelNombre.textContent = "Nombre";
labelApellido.textContent = "Apellido";
// -----------------------------------------------------------------------------------------------------------------------------------

// CRECION DE MAIN / FOOTER
// ------------------------------------------------------------------------------------------------------------------------------------
// CREACION DE LOS CREATEELEMENTS
const divFooter = document.createElement("div");
const divLogoFotter = document.createElement("div");
const divUnoFotter = document.createElement("div");
const divDosFotter = document.createElement("div");
const divTresFotter = document.createElement("div");

// ----------------------------------------------------------------------------------------------------------------------------------------
// FUNCIONES DE LA PAGINA

document.querySelector(".tituloCotizacion").addEventListener("click",()=>{
    divRightServicios.appendChild(divCotizacion);
    divCotizacion.appendChild(divNombre);
    divCotizacion.appendChild(divApellido);
    divNombre.appendChild(labelNombre);
    divNombre.appendChild(inputNombre);
    divApellido.appendChild(labelApellido);
    divApellido.appendChild(inputApellido);

})

document.querySelector(".tituloCotizacion").addEventListener("dblclick",()=>{
    divCotizacion.remove();
})






