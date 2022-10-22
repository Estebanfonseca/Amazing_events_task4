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