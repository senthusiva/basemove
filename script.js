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
    document.getElementById("fcoord").value = ""

    if (document.getElementById("mbase").checked) {
        changeBaseStatus(coordArr, "url('assets/mbase.png') no-repeat center #c4978d")
    } //---------------------------------
    else if (document.getElementById("sbase").checked) {
        changeBaseStatus(coordArr, "url('assets/sbase.png') no-repeat center #bcc48d")
    } //---------------------------------
    else if (document.getElementById("pbase").checked) {
        changeBaseStatus(coordArr, "url('assets/pbase.png') no-repeat center #8dafc4")
    } //---------------------------------
    else if (document.getElementById("logi").checked) {
        changeBaseStatus(coordArr, "url('assets/logi.png') no-repeat center #c48dad")
    } //---------------------------------
    else if (document.getElementById("strike").checked) {
        changeBaseStatus(coordArr, "url('assets/strike.png') no-repeat center #d13a1f")
    } //---------------------------------
    else if (document.getElementById("raid").checked) {
        changeBaseStatus(coordArr, "url('assets/raid.png') no-repeat center #89b2d6")
    } //---------------------------------
    else if (document.getElementById("enmraid").checked) {
        changeBaseStatus(coordArr, "url('assets/enmraid.png') no-repeat center #d6c789")
    } //---------------------------------
    else if (document.getElementById("enmstrike").checked) {
        changeBaseStatus(coordArr, "url('assets/enmstrike.png') no-repeat center #d1871f")
    } //---------------------------------
    else if (document.getElementById("clear").checked) {
        clearField(coordArr)
    }
}

function changeBaseStatus(coordArr, baseIcon) {
    for (let i = 0; i < coordArr.length; i++) {
        document.getElementById(coordArr[i]).style.background = baseIcon;
        document.getElementById(coordArr[i]).innerText = "_"
    }
}

function clearField(coordArr) {
    for (let i = 0; i < coordArr.length; i++) {
        document.getElementById(coordArr[i]).style.backgroundColor = "#c9c8c8"
        document.getElementById(coordArr[i]).style.background = ""
        document.getElementById(coordArr[i]).innerText = coordArr[i]
    }
}