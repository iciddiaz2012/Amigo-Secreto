// Lista para almacenar los nombres de los amigos
const amigos = []; // Inicializar el array

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Verificar si el campo de entrada no está vacío
    if (nombreAmigo !== "") {
        // Agregar el amigo al array
        amigos.push(nombreAmigo);

        // Actualizar la lista visualmente
        actualizarLista();

        // Limpiar el campo de entrada después de agregar
        inputAmigo.value = "";
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); // ID corregido

    // Limpiar la lista antes de agregar los nuevos amigos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        listaAmigos.appendChild(nuevoElemento);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado"); // ID corregido
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
