m = document.getElementById("m")
d = document.getElementById("d")
p = document.getElementById("p")
s = document.getElementById("s")
d.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("div")
})
const highlight = (e) => {
    e.stopPropagation()
    target = e.currentTarget
    target.className = "gold"
    reset(target)
}
const reset = (element) => {
    setTimeout(()=>{element.className = ""},2000)
}
[m,d,p,s].forEach((element)=>{
    element.addEventListener('click',highlight)
})