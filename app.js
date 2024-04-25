const map = new Map()


btnSubmit = document.querySelector("#submit");
btnEdit = document.querySelector("#edit");
btnDelete = document.querySelector("#delete");
btnDeleteAll = document.querySelector("#deleteAll");

List = document.querySelectorAll("p")

input = document.querySelector("#inputGrocery");
output = document.querySelector("#outputFields");

id = 0;


// AddventListener



// click on Button

btnSubmit.addEventListener("click", e => {
    if(input.value == ""){
        alert("no Grocery to add")
    } else {
        pushData()
        createElement()
    }

})

// press Enter Key

document.addEventListener("keypress", e => {
    if(e.key === 'Enter'){
        if(input.value == ""){
            alert("no Grocery to add")
        } else {
            pushData()
            createElement()
        }
    }
 })


// Funktion

// create Element


function createElement(){
        newGrocery = document.createElement("p")
        newGrocery.innerText = map.get(id)
        newGrocery.setAttribute("value", id)
        output.appendChild(newGrocery);
        createEditElement();
        newGrocery.appendChild(editElement);
        createDeleteElement();
        newGrocery.appendChild(deleteElement);
}



// set Data to map and delete input field

function pushData(){
    data = input.value
    map.set(id, data)
    input.value = ""
    console.log(map)
}


// delete Element

function deleteThisElement(value){
    btnDeleteValue = value
    
    console.log(List)

    map.delete(btnDeleteValue)
}



btnDeleteAll.addEventListener("click", e =>{
    map = ""
    console.log(map)
 })


// create Edit Element

function createEditElement(){
    editElement = document.createElement("button")
    editElement.innerHTML = "&#9998;"
    editElement.setAttribute("id", "edit")
    editElement.setAttribute("class", "btn")
}


// create Delete Element

function createDeleteElement(){
    deleteElement = document.createElement("button")
    deleteElement.innerHTML = "&#9747;"
    deleteElement.setAttribute("id", "delete")
    deleteElement.setAttribute("class", "btn")
    deleteElement.setAttribute("value", id)
    deleteElement.setAttribute("onclick", `deleteThisElement(${id})`)
    id++;
    
}