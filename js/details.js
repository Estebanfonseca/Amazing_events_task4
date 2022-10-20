async function data(){
    await fetch("https://mind-hub.up.railway.app/amazing")
    .then(response => response.json())
    .then(json=> data = json)
}



let query = location.search


let getter = new URLSearchParams(query)


let id = parseInt(getter.get("id"))


let evento = detail.find((item) => item._id === id)


let card = document.getElementById("detail")

card.innerHTML = `

<a href="./index.html" class="nav-link text-white btn btn-secondary"> 
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>Back
</a>

            <div class="card rounded-4 p-3 ms-5" id="card_detail">
            <img src="${evento.image}" class=" rounded-5 " alt="${evento.name}">
            <article class="card-body">
                <h3 class="card-title">${evento.name}</h3>
                <p class="card-text">${evento.description}</p>
                <h6 class="card-title">Date:</h6>
                <p class="card-text">${evento.date}</p>
                <h6 class="card-title">Place:</h6>
                <p class="card-text">${evento.place}</p>
                <h6 class="card-title">Capacity:</h6>
                <p class="card-text">${evento.capacity}</p>
                <h6 class="card-title">${evento.assistance? "Assistance:" : "Estimate:"}</h6>
                <p class="card-text">${evento.assistance ? evento.assistance : evento.estimate}</p>
                <h6 class="card-title">Price:</h6>
                <p class="card-text">${evento.price}</p>
            </article>
            </div>`
// 



