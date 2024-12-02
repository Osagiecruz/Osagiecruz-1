let display = document.getElementById("results")


document.getElementById("btn-1").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 1
})
document.getElementById("btn-2").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 2
})
document.getElementById("btn-3").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 3
})
document.getElementById("btn-4").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 4
})
document.getElementById("btn-5").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 5
})
document.getElementById("btn-6").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 6
})
document.getElementById("btn-7").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 7
})
document.getElementById("btn-8").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 8
})
document.getElementById("btn-9").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 9
})
document.getElementById("btn-0").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + 0
})
document.getElementById("btn-").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "-"
})
document.getElementById("btn+").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "+"
})
document.getElementById("btn*").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "*"
})
document.getElementById("btn/").addEventListener("click", ()=>{
    display.innerHTML = display.innerHTML + "/"
})
document.getElementById("btn=").addEventListener("click", ()=>{
    display.innerHTML = eval(display.innerHTML)
})
document.getElementById("btn-clr").addEventListener("click", ()=>{
    display.innerHTML = ""
})