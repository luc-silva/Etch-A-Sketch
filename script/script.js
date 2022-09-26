let enableClick = document.querySelector("#click-checkbox")
let enableGrid = document.querySelector("#grid-checkbox")
let colorSelector = document.querySelector("#color-selector")
let randomColor = document.querySelector("#random")
let mainScreen = document.querySelector("#screen")
let eraser = document.querySelector("#eraser")
let lastColors = []
let color = "#000000"

randomColor.addEventListener("click", randomizer)
function randomizer() {
    let colors = ['#327abd', '#324abd', '#7132bd', '#bd3298', '#bd3232', '#bd8a32', '#adbd32', '#63bd32', '#32bd4a', '#32bd8f']
    color = colors[Math.round(Math.random() * 10)]

    return color
}

eraser.addEventListener("click", () => {
    color = "#FFFFFF"
})

for(i = 0; i < 16**2; i++){
    let pixel = document.createElement("div")
    pixel.classList.add("pixel")
    mainScreen.appendChild(pixel)
}
let pixels = document.querySelectorAll(".pixel")

colorSelector.addEventListener("change", () => {
    if(lastColors.length >= 5){
        lastColors.pop()
    }
    lastColors.unshift(color)
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
    this.style.backgroundColor = color
    console.log("oi")
}
checkEnableCLick()