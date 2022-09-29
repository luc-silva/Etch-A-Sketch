let enableClick = document.querySelector("#click-checkbox")
let enableGrid = document.querySelector("#grid-checkbox")
let colorSelector = document.querySelector("#color-selector")
let randomColor = document.querySelector("#random")
let mainScreen = document.querySelector("#screen")
let eraserButton = document.querySelector("#eraser")
let gridSize = document.querySelector("#grid-size")
let lastColors = []
let color = "#000000"

//Div creation and class atribution
for(i = 0; i < 16**2; i++){
    let pixel = document.createElement("div")
    pixel.classList.add("pixel")
    mainScreen.appendChild(pixel)
}
let pixels = document.querySelectorAll(".pixel")

gridSize.addEventListener("change", () => {
    console.log(gridSize.value)
})

let randomizerInterval
randomColor.addEventListener("click",randomizer)
function randomizer() {
    randomizerInterval = setInterval(() => {
        let colors = ['#1038d5', '#8610d5', '#d510c5', '#d51079', '#d51010', '#d57910', '#bed510', '#3bd510', '#10d579', '#10a4d5']
        color = colors[Math.round(Math.random() * 10 - 1)]
    })
}


eraserButton.addEventListener("click", eraser)
function eraser() {
    clearInterval(randomizerInterval)
    color = "#FFFFFF"
}


colorSelector.addEventListener("change", () => {
    clearInterval(randomizerInterval)
    color = colorSelector.value
})

enableClick.addEventListener("change", checkEnableCLick)
function checkEnableCLick(){
    (enableClick.checked)
    ? pixels.forEach((pixel) => {
        pixel.removeEventListener("mouseover", paint)
        pixel.addEventListener("click", paint)
    })
    : pixels.forEach((pixel) => {
        pixel.removeEventListener("click", paint)
        pixel.addEventListener("mouseover", paint)
    });
}

enableGrid.addEventListener("change", checkEnableGrid)
function checkEnableGrid() {
    (enableGrid.checked)
    ? pixels.forEach((pixel) => {
        pixel.style.outline = "rgb(212, 212, 212) solid 1px"
    })
    : pixels.forEach((pixel) => {
        pixel.style.outline = "none"
    })
}


function paint(){
    if(lastColors.length >= 5){
        lastColors.pop()
    }
    lastColors.unshift(color)
    this.style.backgroundColor = color
}
checkEnableCLick()