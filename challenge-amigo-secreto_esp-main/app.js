let listaAmigos = [];
let lista ='';

function agregarAmigo(){
    let amigos = document.getElementById('amigo').value;
    if (amigos.trim() !== '') { 
        listaAmigos.push(amigos); 
        console.log('Lista actualizada:', listaAmigos);
        document.getElementById("amigo").value = "";
    } else {
        alert('Por favor, inserte un nombre');
    }
    lista= document.getElementById('listaAmigos'); 
    lista.innerHTML = ''; 

    for (let amigo of listaAmigos) {
        let li = document.createElement('li'); 
        li.textContent = amigo; 
        lista.appendChild(li); 
    }
}

function sortearAmigo(){
    let personaSorteada ='';
    if (listaAmigos.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
        personaSorteada = listaAmigos[indiceSorteado]; 
    } else {
        alert('Lo siento, la lista no puede estar vacía para sortear.');
    }
    let resultado= document.getElementById('resultado'); 
    resultado.innerHTML = `El amigo secreto es: ${personaSorteada}`;

     
}
