const sideInput = document.querySelector("#side")
const perimeterInput = document.querySelector("#perimeter")
const calcbutton = document.querySelector("#calcbutton")
calcbutton.addEventListener('click', ()=>{ 
    Start();
})
function Start() {
    const side = Number(sideInput.value)
    const perimeter = calcperimeter(side)
    perimeterInput.value = perimeter
   
}
function calcperimeter(side){
    return side * 4
}