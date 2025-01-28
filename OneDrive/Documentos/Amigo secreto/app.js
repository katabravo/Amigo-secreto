// Arreglo para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar un nombre al arreglo y mostrarlo en la lista
function agregarNombre() {
    const nombreInput = document.getElementById('nombreInput');
    const nombre = nombreInput.ariaValueMax.trim();

    //Validación: Si el campo esta vacío, mostramos un mensaje de alerta
    if (nombre === '') {
        alert('Por favor, ingresa un nombre valido');
        return;
    }

    //Añadimos el nombre al arreglo
    amigos.push(nombre);

    //Limpiamos el campo de entrada
    nombreInput.value = '';

    //Actualizamos la lista de amigos de la interfaz
    function actualizarLista() {
        const listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = ''; //Limpiar la lista antes de actualizar

        amigos.forEach(amigo => {
            const li =document.createElement('li');
            li.textContent = amigo;
            listaAmigos.appendChild(li);

        });

        //Funcion para realizar el sorteo aleatoriamente
        function realizarSorteo() {
            if (amigos.length === 0){
                alert('No hay amigos para sortear. Agrega al menos un nombre.');
                return;
        
           }

           //Elegir un amigo aleatoriamente
           const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

           //Mostrar el resultado del sorteo
           const resultadoDiv = document.getElementById('resultado');
           resultadoDiv.textContent = `El amigo secreto es: ${amigoSecreto}`;
        }
    }
}