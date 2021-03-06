
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Pegar valores do html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//criar mapa
const map = L.map('mapid', options).setView([lat, lng], 15)

//criar e adicionar tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: '/images/map-marker.svg', 
    iconSize:[58, 68], 
    iconAnchor: [29, 68], 
    popupAnchor: [170,2]
})

// criar e adicionar marcador
L.marker([lat, lng], { icon }).addTo(map)


/* galeria de imagens */

function selectImage(event) {
    const button = event.currentTarget

    //remover classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar de volta a classe .active para o botao
    button.classList.add('active')
}



