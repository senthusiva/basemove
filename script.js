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
        button.title = btnID
        button.type = "button"
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
    document.getElementById("submit").disabled = false
    document.getElementById(btn.id).disabled = true

}

function submit() {
    const coordArr = document.getElementById("fcoord").value.split(';')

    if (document.getElementById("mbase").checked) {
        changeBaseStatus(coordArr, "url('assets/mbase.png') no-repeat center #b3b6e6")
    } else if (document.getElementById("sbase").checked) {
        changeBaseStatus(coordArr, "url('assets/sbase.png') no-repeat center #b3b6e6")
    } else if (document.getElementById("pbase").checked) {
        changeBaseStatus(coordArr, "url('assets/pbase.png') no-repeat center #b3b6e6")
    } else if (document.getElementById("logi").checked) {
        changeBaseStatus(coordArr, "url('assets/logi.png') no-repeat center #b3b6e6")
    } else if (document.getElementById("strike").checked) {
        changeBaseStatus(coordArr, "url('assets/strike.png') no-repeat center #b3b6e6")
    } else if (document.getElementById("enmstrike").checked) {
        changeBaseStatus(coordArr, "url('assets/enmstrike.png') no-repeat center #b3b6e6")
    }
}

function changeBaseStatus(coordArr, baseIcon) {
    for (let i = 0; i < coordArr.length; i++) {
        document.getElementById(coordArr[i]).style.background = baseIcon;
        document.getElementById(coordArr[i]).innerText = "_"
    }
}