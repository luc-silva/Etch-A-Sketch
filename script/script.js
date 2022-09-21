let enableGrid = document.querySelector("grid-checkbox")
let mainScreen = document.querySelector("#screen")

// enableGrid ? pixel.style.outline == "rgb(212, 212, 212) solid 1px" : pixel.style.outline == "none"

function size(){
    for(i = 0; i < 16**2; i++){
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        mainScreen.appendChild(pixel)
    }
}
size()