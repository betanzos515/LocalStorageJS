//variables
const boton = document.querySelector(".button");
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
const keyStorage = 'Tweets';

//globales
document.addEventListener('DOMContentLoaded',()=>{
    render();
});

//Eventos
formulario.addEventListener("submit",agregarTweet);
listaTweets.addEventListener('click',eliminarTweetDOM);


//funciones
function agregarTweet(e){
    e.preventDefault();
    let tweets = obtenerTweets();
    const tweet = document.querySelector('#tweet').value.trim();
    if(tweet != ''){
        tweets.push(tweet);
        console.log(tweets);
        agregarLocalStorage(tweets);
        console.log(localStorage.getItem(keyStorage));
    }else{
        console.log("No se puede agregar un elemento vacio, por favor redacta un tweet"); 
    }
    render();       
}

function obtenerTweets(){
    let tweets;
    if(localStorage.getItem(keyStorage) === null){
        tweets = [];
    }
    else{
        tweets = JSON.parse(localStorage.getItem(keyStorage));
    }
    return tweets;
}

function render(){
        const tweets = obtenerTweets();
        listaTweets.innerHTML = '';
        tweets.forEach((tweet)=>{
            const li = document.createElement('li');
            const borrar = document.createElement('a');
            borrar.innerText = 'X';
            borrar.classList = 'borrar-tweet';
            li.innerText = tweet;
            li.appendChild(borrar);
            listaTweets.appendChild(li);
        })
}

function eliminarTweetDOM(e){
    //hacemos delegation para identificar el elemento que se eliminará de la lista
    if(e.target.classList.contains('borrar-tweet')){
        const elemento = e.target.parentElement;
        elemento.style.border = "1px solid red";
        elemento.style.background = "#ffebee";
        elemento.style.fontWeight = '700';
        setTimeout(()=>{
            elemento.remove();
        },200)  
    }
    borrarLocalStorage(e);
}

function agregarLocalStorage(tweets){
    localStorage.setItem(keyStorage,JSON.stringify(tweets));
}

function borrarLocalStorage(e){ 
    let tweet = (e.target.parentElement.innerText);
    let tweetEliminar = tweet.substring(0,tweet.length-2);
    console.log(tweetEliminar);
    let arrayTweets = obtenerTweets();
    for(i= 0 ; i < arrayTweets.length ; i++){
        if(arrayTweets[i]=== tweetEliminar){
            arrayTweets.splice(i,1);
            break;
        }
    }
    agregarLocalStorage(arrayTweets);
}