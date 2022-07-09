function agregarCard() {
let div = document.getElementById ("card")
let card = document.createElement("div");
    card.classList.add("tituloCard", "imagenCard", "parrafoCard","boton");
    card.innerHTML =  `
        <h2 class="tituloCard">Viajá al caribe</h2>
        <hr>
        <br>
        <img class="imagenCard"src="./assets/img/caribe.jpg">
        <br>
        <p class="parrafoCard"><b>Con nuestros descuentos</b> tu sueño de conocer el mar caribe está al alcance</p>
        <button class="boton">Comprar</button>
    `
    div.appendChild(card);
}

agregarCard();

