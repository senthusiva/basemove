var btnCounter = 0;

let gridLetter = ["a", "b", "c", "d", "e", "f", "g", "h"]
let gridLetterCounter = 0
let gridNumberCounter = 0

function createBtn() {
    for (let i = 1; i <= 64; i++) {
        var btnID = gridLetter[gridLetterCounter] + (gridNumberCounter + 1)

        const button = document.createElement("button")
        button.innerText = btnID
        button.id = btnID
        document.body.appendChild(button)

        gridNumberCounter++

        if (i % 8 == 0) {
            const newDiv = document.createElement("div")
            document.body.append(newDiv)
            gridLetterCounter++
            gridNumberCounter = 0
        }
        if (i == 32) {
            const hLine = document.createElement("HR")
            document.body.append(hLine)
        }
    }
}

function disableButton(btn) {
    document.getElementById(btn.id).disabled = true;
}

document.getElementById("m-h1").addEventListener("click", function() {
    alert("I am an alert box!");
});