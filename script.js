var btn1 = document.getElementById("btn1")
var overlay = document.getElementById("overlay")
var popup = document.getElementById("popup")

btn1.addEventListener("click",function() {
    overlay.style.display = "block"
    popup.style.display = "block"
})

cancelbtn.addEventListener("click",function(event) {
    event.preventDefault()
    overlay.style.display = "none"
    popup.style.display = "none"
})

var main = document.getElementById("main")
var addbtn = document.getElementById("addbtn")
var movtit = document.getElementById("movtit")
var actname = document.getElementById("actname")
var dirname = document.getElementById("dirname")
var mdirname = document.getElementById("mdirname")
var descp = document.getElementById("descp")

addbtn.addEventListener("click",function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","box")
    div.innerHTML = `<h1><strong>${movtit.value}</strong></h1>
                     <h4>${actname.value}</h4>
                     <h4>${dirname.value}</h4>
                     <h4>${mdirname.value}</h4>
                     <p>${descp.value}</p>
                     <button id="btn2" onclick="deleteItem(this)"><strong>Delete</strong></button>`
    
    main.append(div)
    overlay.style.display = "none"
    popup.style.display = "none"

    movtit.value = ""
    actname.value = ""
    dirname.value = ""
    mdirname.value = ""
    descp.value = ""
})

function deleteItem(button)
{
    var r=button.parentElement
    r.parentElement.removeChild(r)
}