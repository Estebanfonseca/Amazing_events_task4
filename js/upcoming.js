let fecha = Date.parse(currentDate)

let upcomming = events.filter(function(date){
    return Date.parse(date.date) > fecha
}).sort((a,b)=> a.name.localeCompare(b.name))


let card = document.getElementById('section1')
let search = document.getElementById("buscador2")
let searchTexto= document.getElementById("buscar-text2")
let checkBox = document.getElementById("check2")



function cards (data){
    card.innerHTML= ''
    data.forEach(item => {
        let carta = document.createElement('div')
        carta.className ='card rounded-4 '
        carta.innerHTML+=` <img class="p-3 rounded-5" src="${item.image}" alt="${item.name}" height="250" />
        <article class="card-body">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <a href="./details.html?id=${item._id}" class="nav-link text-white btn btn-secondary" id="btn-details">see more</a>
        </article>`
        card.appendChild(carta)
    })
}

cards(upcomming)

function searchText(text , array){
    let arrayFilter = array.filter(event => event.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFilter
}

function filterCategory(array){
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    let newCheckbox = Array.from(checkbox)
    let filterCheck = newCheckbox.filter(check => check.checked)
    let checkMark = filterCheck.map(box => box.value)
    if(checkMark.length > 0){
        let arrayFiltrado = array.filter(event => checkMark.includes(event.category))
        return arrayFiltrado
    }
    return array
}

search.addEventListener("click",()=>{
    let filterText = searchText(searchTexto.value,upcomming)
    let filterCat = filterCategory(filterText)
    cards(filterCat)
})

checkBox.addEventListener("change",()=>{
    let filterText = searchText(searchTexto.value,upcomming)
    let filterCat = filterCategory(filterText)
    cards(filterCat) 
})