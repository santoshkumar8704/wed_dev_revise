const btn = document.getElementById("btn")
const lnk = document.getElementById("lnk")
const txt = document .getElementById("txt")

const btnEventHandler = (e) => {
    console.log(e,e.type,e.target)
}
lnk.addEventListener('click', (e)=>{
    e.preventDefault() // prevents the defualt behaviour of a html element
})

txt.addEventListener('input',(e)=>{
    console.log(e.type, e.target)
})
txt.addEventListener('blur',(e)=>{
    console.log(e.type, e.target)
})
txt.addEventListener('change',(e)=>{
    console.log(e.type, e.target)
})
btn.addEventListener('click',btnEventHandler)

