
let ourForm = document.getElementById("ourForm")
let ourText = document.getElementById("ourText")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    inputText(ourText.value)
})
function inputText(x) {
let textInput = `<li>${x} <button onclick= "inputDelete(this)">Delete</button></li>`
ourList.insertAdjacentHTML("afterend" ,textInput)
ourText.value = "";
ourText.focus()
}
function inputDelete(deleteText){
deleteText.parentElement.remove()
}


