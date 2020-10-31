//criar mapa
const map = L.map('mapid').setView([-27.8931629,-48.5950872], 15)

//criar e adicionar tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criar icone
const icon = L.icon({
    iconUrl: '/images/map-marker.svg', 
    iconSize:[58, 68], 
    iconAnchor: [29, 68]
})

let marker;

//criar e adicionar um marcador
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //guardar valor
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icone anterior
    marker && map.removeLayer(marker)

    //adicionar um icone 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//adicionar campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == ""){
        return 
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value=""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

//deletar link de foto
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event) {
    //retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}

function validate(event) {
    //validar se lat e lng estão preenchidos
    const needsLatAndLng = true;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }

}