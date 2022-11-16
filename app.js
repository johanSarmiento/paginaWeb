const navbar = document.createElement("div");
const button = document.createElement("button")
let texto = document.createElement("p")
navbar.setAttribute("id","navbar");
navbar.setAttribute("class","nav");
navbar.textContent = "hola puta";
document.querySelector("#nav").appendChild(navbar)
button.setAttribute("id","button")
button.setAttribute("value","click aqui")
button.textContent = "click aqui"
document.querySelector("#main").appendChild(button)
document.querySelector("#button").addEventListener("click",()=>{
    document.getElementById("navbar").style.background="red"
    document.getElementById("navbar").style.height="800px"
    texto.setAttribute("id","texto")
    texto.textContent = "soy la mera verga"
    texto.style.fontSize = "10em"
    document.querySelector("#navbar").appendChild(texto)
})
document.querySelector("#button").addEventListener("dblclick",()=>{
    document.getElementById("navbar").style.background="blue"
    document.getElementById("navbar").style.height="100px"
    let eliminar = document.querySelector("#texto")
    eliminar.remove()   
})