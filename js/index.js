let card = document.getElementById("section")
let search = document.getElementById("buscador")
let searchTexto= document.getElementById("buscar-text")
let checkBox = document.getElementById("check")


function cards (data){
    card.innerHTML= ''
    data.forEach(item => {
        let carta = document.createElement('div')
        carta.className ='card rounded-4 '
        carta.innerHTML+=` <img class="p-3 rounded-5" src="${item.image}" alt="${item.name}" height="250" />
        <article class="card-body">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <a href="./details.html?id=${item.id}" class="nav-link text-white btn btn-secondary" id="btn-details">see more</a>
        </article>`
        card.appendChild(carta)
    })
}

function checks(data){
    data.forEach(item => {
        checkBox.innerHTML += `
        <input type="checkbox" id="${item}" value="${item}" name="${item}" />
        <label class="pe-3" for="${item}">${item}</label>`
    })
}
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



async function cardApi (){
    try{
        let data = await fetch("https://mind-hub.up.railway.app/amazing")
        data = await data.json()
        let events = data.events.sort((a,b)=> a.name.localeCompare(b.name))
        cards(events)

        let category = new Set(events.map(item => item.category))
        category =[...category]

        checks(category)

        search.addEventListener("click",()=>{
            let filterText = searchText(searchTexto.value,data.events)
            let filterCat = filterCategory(filterText)
            cards(filterCat)
        })
        
        checkBox.addEventListener("change",()=>{
            let filterText = searchText(searchTexto.value,data.events)
            let filterCat = filterCategory(filterText)
            cards(filterCat) 
        })
    }
    catch{
        alert("404 not found")
    }
}
cardApi()








