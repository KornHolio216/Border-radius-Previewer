var box = document.querySelector(".box")

function changeBoxRadius(topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius){
    box.style.borderTopLeftRadius = topLeftRadius + "px"
    box.style.borderTopRightRadius = topRightRadius + "px"
    box.style.borderBottomLeftRadius = bottomLeftRadius + "px" 
    box.style.borderBottomRightRadius = bottomRightRadius  + "px"
    generateCssCode()
}

document.querySelectorAll(".input").forEach(input => { 
    input.addEventListener("change", (e) => {
        const topLeftRadius = document.getElementById("top-left").value
        const topRightRadius = document.getElementById("top-right").value
        const bottomLeftRadius = document.getElementById("bottom-left").value
        const bottomRightRadius = document.getElementById("bottom-right").value
    if(topLeftRadius,topRightRadius,bottomLeftRadius, bottomRightRadius) {
        changeBoxRadius(Number.parseInt(topLeftRadius),Number.parseInt(topRightRadius),Number.parseInt(bottomLeftRadius),Number.parseInt(bottomRightRadius));
        }
    }) 
})

function generateCssCode(){
    var codeBox = document.querySelector(".cssCode")
    var styles = getComputedStyle(box)
    codeBox.textContent = `border-radius: ${styles.borderRadius};`
}

var copyBtn = document.querySelector(".copyCodeBtn")

copyBtn.addEventListener("click", copyToClipboard)

function copyToClipboard(){
    var textToCopy = document.querySelector(".cssCode").textContent
    document.execCommand("copy")
    window.prompt("")
}

