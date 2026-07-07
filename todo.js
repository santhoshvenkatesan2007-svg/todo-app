var input = document.querySelector("#input")
var ul = document.getElementById("list-container")

function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = input.value + "<button type='button' class='button2' onclick='remove(event)'>Delete</button>"
    ul.append(listitem)
}

function remove(event) {
    event.target.parentElement.remove()
}