// Here's a test channel number, check the console!
//console.log(getRandomColorChannel())

// 1) Built a colour string using `getRandomColorChannel()` for each of the three colour channels (R, G, B)

// 2) Update user interface (`document`), setting the new colour to the body's background

// 3) Use the new RGB value to update the label "rgb(###, ####, ###)" (replacing ###s with the Number values)

// 4) Wrap the random colour procedure in a function named `setNewColour()`, call it from the `console` to test


//let theMain = document.querySelector('.main')
/*let redCol = 35
let greenCol = 150
let blueCol = 255*/

 
//change style

//theMain.style.setProperty(`background-color`, `rgb(255, 35, 150)`)
    function setNewColour(){
        let theMain = document.querySelector('.main')
        let theButton = document.querySelector('.button')
        let theText = document.querySelector('.text')

        let redCol = getRandomColorChannel()
        let greenCol = getRandomColorChannel()
        let blueCol = getRandomColorChannel()
        theMain.style.setProperty(`background-color`, `rgb(${redCol}, ${greenCol}, ${blueCol})`)
        theButton.style.setProperty(`background-color`, `rgb(${redCol}, ${greenCol}, ${blueCol}, 0.5)`)
        theText.style.setProperty(`background-color`, `rgb(${redCol}, ${greenCol}, ${blueCol}, 0.5)`)
        theText.textContent = `rgb(${redCol}, ${greenCol}, ${blueCol})` 

}


