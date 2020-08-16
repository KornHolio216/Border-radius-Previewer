// getting accesss to box element 
var box = document.querySelector(".box")

// change box radius function
function changeBoxRadius(topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius){
    // coutning radius of each corner,
    box.style.borderTopLeftRadius = topLeftRadius + "px"
    box.style.borderTopRightRadius = topRightRadius + "px"
    box.style.borderBottomLeftRadius = bottomLeftRadius + "px" 
    box.style.borderBottomRightRadius = bottomRightRadius  + "px"
    generateCssCode() // calling function what will generate css code
}
// adding change event  listner for evry input 
document.querySelectorAll(".input").forEach(input => { 
    input.addEventListener("change", (e) => {
        //getting each inpuit value
        const topLeftRadius = document.getElementById("top-left").value
        const topRightRadius = document.getElementById("top-right").value
        const bottomLeftRadius = document.getElementById("bottom-left").value
        const bottomRightRadius = document.getElementById("bottom-right").value
    if(topLeftRadius,topRightRadius,bottomLeftRadius, bottomRightRadius) {
        changeBoxRadius(Number.parseInt(topLeftRadius),Number.parseInt(topRightRadius),Number.parseInt(bottomLeftRadius),Number.parseInt(bottomRightRadius));
        }
    }) 
})

//fucnction what will generate css code
function generateCssCode(){
    var codeBox = document.querySelector(".cssCode")
    var styles = getComputedStyle(box)
    codeBox.textContent = `border-radius: ${styles.borderRadius};` // making output to be easy to past into your css code
}

var copyBtn = document.querySelector(".copyCodeBtn")

//adding event listner for button
copyBtn.addEventListener("click", copyToClipboard)

//copy to clipboard function
function copyToClipboard(){
    var textToCopy = document.querySelector(".cssCode")
    textToCopy.select() //select all content from  css code box
    document.execCommand("copy") //copy selected text
}

