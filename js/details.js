let card = document.getElementById("detail")


function cards (array){
        card.innerHTML = `
<a href="./index.html" class="nav-link text-white btn btn-secondary"> 
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>Back
</a>

            <div class="card rounded-4 p-3 ms-5 d-flex flex-column" id="card_detail">
            <img src="${array.image}" class=" rounded-5 " alt="${array.name}" >
            <article class="card-body">
                <h3 class="card-title">${array.name}</h3>
                <p class="card-text">${array.description}</p>
                <h6 class="card-title">Date:</h6>
                <p class="card-text">${array.date}</p>
                <h6 class="card-title">Place:</h6>
                <p class="card-text">${array.place}</p>
                <h6 class="card-title">Capacity:</h6>
                <p class="card-text">${array.capacity}</p>
                <h6 class="card-title">${array.assistance? "Assistance:" : "Estimate:"}</h6>
                <p class="card-text">${array.assistance ? array.assistance : array.estimate}</p>
                <h6 class="card-title">Price:</h6>
                <p class="card-text">$${array.price}</p>
            </article>
            </div>`
}
let query = location.search
let getter = new URLSearchParams(query)
let id = getter.get("id")

async function data(id){
    try{
        let data = await fetch("https://mh-amazing.herokuapp.com/amazing/"+id)
        data = await data.json()
        let card = data.event
        cards(card)
    }
    catch{
        alert("404 not found")
    }
}
data(id)






