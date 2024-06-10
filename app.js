let blueScore = 0
let redScore = 0


function addBlueScore() {
    blueScore++
    console.log('You increased Blue team score');
}
function subtractBlueScore() {
    blueScore - 1
}
function addRedScore() {
    redScore++
    console.log('You increased Red team score');
}
function subtractRedScore() {
    redScore - 1
}

function updateRedScore() {
    let redScoreElement = document.getElementById('redScore')
    console.log("this is the red score element", redScoreElement);
    redScore++
    redScoreElement.innerText = redScore
    checkMaxScore()
}
function decreaseRedScore() {
    if (redScore >= 1) {
        redScore--
        let redScoreElement = document.getElementById('redScore')
        redScoreElement.innerText = redScore
    }
}

function updateBlueScore() {
    let blueScoreElement = document.getElementById('blueScore')
    console.log('this is the blue score element', blueScoreElement);
    blueScore++
    blueScoreElement.innerText = blueScore
    checkMaxScore()
}
function decreaseBlueScore() {
    if (blueScore >= 1) {
        blueScore--
        let blueScoreElement = document.getElementById('blueScore')
        blueScoreElement.innerText = blueScore
    }
}

function checkMaxScore() {
    const blueScoreElement = document.getElementById('blueScore')
    const redScoreElement = document.getElementById('redScore')
    if (blueScore == 12) {
        console.log(`Blue Team Wins with ${blueScore} Points`)
        document.body.style.backgroundColor = "blue"
        blueScoreElement.innerText = "WINS 🥶"
    }
    if (redScore == 12) {
        console.log(`Red Team Wins with ${redScore} Points`)
        document.body.style.backgroundColor = "red"
        redScoreElement.innerText = "WINS 🔥"
    }
    if (redScore == 13) {
        resetScore()
    }
    if (blueScore == 13) {
        resetScore()
    }
}

function resetScore() {
    location.reload()
}

