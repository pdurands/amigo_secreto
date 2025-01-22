// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea array vacio que almacenará los amigos
let amigos = [];
// Se crea expresión regular para validar que el nombre solo contenga letras
let patternNombre = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;

// Función que muestra un mensaje en pantalla
function message(msn){
    let messageValidacion = document.getElementById('message');
    messageValidacion.innerHTML = msn;
}

// Se obtiene el elemento que contiene la lista de amigos
let listaAmigos = document.getElementById('listaAmigos');

// Función que agrega un amigo a la lista, valida que el campo no esté vacío y que solo contenga letras
function agregarAmigo(nombreAmigo) {
    let amigo = document.getElementById('amigo').value.trim();
    if (amigo === '') {
        message("El campo no puede estar vacío");
    } 
    else if(!patternNombre.test(amigo)){
        message("Solo se permiten letras");
    }
    else {
        // Se limpia el mensaje del sorteo si existe
        messageSorteo.innerHTML !== '' ? messageSorteo.innerHTML = '' : '';
        amigos.push(amigo.toUpperCase());
        message(`${amigos.length <= 1 ? 'Amigo agregado' : 'Amigos agregados'}`);
        document.getElementById('amigo').value = '';
        document.getElementById('amigo').focus();
        // Se crea un elemento li y se agrega un amigo por cada iteración
        let li = document.createElement('li');
        li.innerHTML = amigo.toUpperCase();
        listaAmigos.appendChild(li);
        
    }
}


// 
document.getElementById('sortear').disabled = false;
let messageSorteo = document.getElementById('resultado');
function sortearAmigo(){
    // Se limpia el mensaje de sorteo si existe
    messageSorteo.innerHTML !== '' ? messageSorteo.innerHTML = '' : '';
    if (amigos.length < 2) {
        message("Debes agregar al menos 2 amigos");
        return;
    }
    else{
        message("");
        // Escoge un amigo aleatorio según la cantidad de amigos en la lista
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(indiceAleatorio);
        let amigoSorteado = amigos[indiceAleatorio];
        messageSorteo.innerHTML = `El amigo secreto es:<br> ${amigoSorteado}`;
        amigos.length = 0;
        listaAmigos.innerHTML = '';
    }
    
}


