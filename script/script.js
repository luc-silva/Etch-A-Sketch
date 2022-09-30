let enableClick = document.querySelector("#click-checkbox")
let enableGrid = document.querySelector("#grid-checkbox")
let colorSelector = document.querySelector("#color-selector")
let randomColor = document.querySelector("#random")
let mainScreen = document.querySelector("#screen")
let eraserButton = document.querySelector("#eraser")
let cleanButton = document.querySelector("#clean")
let gridSizeText = document.querySelector("#current-grid-size")
let gridSize = document.querySelector("#grid-size")
let lastColors = []
let color = "#000000"

//misc
function paint(){
    if(lastColors.length >= 5){
        lastColors.pop()
    }
    if(!lastColors.includes(color)){
        lastColors.unshift(color)
    }
    this.style.backgroundColor = color
}

//Div creation and class atribution
gridSize.addEventListener("change", () => {
    gridSizeText.textContent = `${gridSize.value}x${gridSize.value} `
    createPixel()
})

let pixels
function createPixel(){
    mainScreen.textContent = ""
    for(i = 0; i < gridSize.value**2; i++){
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        mainScreen.appendChild(pixel)
    }
    pixels = document.querySelectorAll(".pixel")

    mainScreen.setAttribute("style", `grid-template-columns: repeat(${gridSize.value}, auto); grid-template-rows: repeat(${gridSize.value}, auto);`)
    checkEnableCLick()
}

//buttons
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
cleanButton.addEventListener("click", clean)
function clean(){
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "#FFFFFF"
    })
}

colorSelector.addEventListener("change", () => {
    clearInterval(randomizerInterval)
    color = colorSelector.value
})

//features
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


createPixel()
checkEnableCLick()