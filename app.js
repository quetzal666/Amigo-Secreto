// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigosAgregados = inputAmigo.value.trim();
    
    if (amigosAgregados === "") {
        alert("Por favor, ingresa un nombre");
    } else {
        amigos.push(amigosAgregados);
        actualizarLista();
        inputAmigo.value = ""; 
    }
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos un amigo para realizar el sorteo");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos = [];
}