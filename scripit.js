const titulo = document.getElementById('titulo');

// titulo.onclick = function(){
//     console.log("esse é meu console.log")


// }

// titulo.addEventListener('click', function(){
//     console.log("esse é meu console.log")


// })

function mostrarMensagem(){
    console.log('esse é meu console.log')
}
titulo.addEventListener('click', mostrarMensagem)

const subtitulo = document.getElementById('subtitulo');

function interromperOnclick(){
    titulo.removeEventListener('click', mostrarMensagem)

}

subtitulo.addEventListener('click', mostrarMensagem)


const items = document.getElementsByClassName('itemPC')

function aviso(){
    console.log('clicou')
}

for(let i = 0; 1 < items.length; i++){
    items[i].addEventListener('click', aviso)
}

items.forEach((item) => {
    item.addEventListener('click', aviso);

});

console.log(items)
