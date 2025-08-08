//inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo").value;
  //validación para asegurarse de que el campo no esté vacío
  if (input !== "") {
    // Validar que no esté vacío
    amigos.push(input); // Agregar amigo a la lista
    actualizarAmigos(amigos); // actualizas la lista visible
    console.log(amigos);
  } else {
    alert("Por favor, inserte un nombre.");
  }
  limpiarCaja();
}

function newGame() {
  // Vaciar el array para reiniciar el juego
  amigos = [];
  actualizarAmigos(amigos); // actualizas la lista visible
  // Limpiar la lista visual en pantalla
  limpiarCaja();
  console.clear();

}

// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

//función para actualizar la lista de amigos
function actualizarAmigos(amigos) {
  let lista = document.getElementById("listaAmigos"); // <ul id="listaAmigos">

  // Limpia la lista antes de agregar nuevos elementos
  lista.innerHTML = "";

  // Recorre el arreglo y agrega cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const elementoLista = document.createElement("li");
    elementoLista.textContent = amigo;
    lista.appendChild(elementoLista);
    //console.log(amigos.length);
  }
}

// función para sortear los amigos
function sortearAmigo() {
  //comprobar si el array amigos no está vacío.
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }
  //Generar un índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  // Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
  let amigoSorteado = amigos[indice];
  //Mostrar el resultado
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
