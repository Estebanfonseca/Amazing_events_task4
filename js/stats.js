let trs = document.querySelectorAll("tr.tables")

function singleRow (array,index){
    trs[index].innerHTML += `<td>${array.name}</td>`
}

async function tableSingle(){
    try{
        let table = await fetch("https://mind-hub.up.railway.app/amazing?time=past")
        table = await table.json()
        let assisMax = table.events.map((item) => item).sort((a,b) => b.assistance - a.assistance)
        assisMax = assisMax[0]
        singleRow(assisMax,0)
        let assisMin = table.events.map((item) => item).sort((a,b) => a.assistance - b.assistance)
        assisMin = assisMin[0]
        singleRow(assisMin,0)
        let capMax = table.events.map((item) => item).sort((a,b) => b.capacity - a.capacity)
        capMax = capMax[0]
        singleRow(capMax,0)
    }
    catch{
        alert("404 not found")
    }
}
tableSingle()

async function tableFuture(){
    try{
        let table = await fetch("https://mind-hub.up.railway.app/amazing?time=upcoming")
        table = await table.json()
        let data = table.events.sort((a,b)=> a.category.localeCompare(b.category))
        let category = new Set(data.map(item => item.category))
        category = [...category]
    }
    catch{
        alert("404 not found")
    }
}
tableFuture()

async function tablePast(){
    try{
        let table = await fetch("https://mind-hub.up.railway.app/amazing?time=past")
        table = await table.json()
        let data = table.events.sort((a,b)=> a.category.localeCompare(b.category))
        let category = data.filter(item => item.category.toLowerCase().includes("book"))
        let assis = category.map((item)=>{
           return item.price * item.assistance
        })
        let suma = assis[0] + assis[1] + assis[2]


        
        
    }
    catch{
        alert("404 not found")
    }
}
tablePast()