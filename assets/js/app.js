//variables
const boton = document.querySelector(".button");
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');

//Eventos
formulario.addEventListener("submit",agregarTweet);
listaTweets.addEventListener('click',eliminarTweet);

//funciones
function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value.trim();
    if(tweet != ''){
        const li = document.createElement('li');
        const borrar =  document.createElement('a');
        borrar.innerText = 'X';
        borrar.classList = "borrar-tweet";
        li.innerText = tweet;
        li.appendChild(borrar);
        listaTweets.appendChild(li);
        formulario.reset();
    }
    console.log("No se puede agregar un elemento vacio, por favor redacta un tweet");
    
}

function eliminarTweet(e){
    //hacemos delegation para identificar el elemento que se eliminará de la lista
    if(e.target.classList.contains('borrar-tweet')){
        e.target.parentElement.remove();
    }
}

function borrarTweet(e){    
    console.log(e.target.classList);
}