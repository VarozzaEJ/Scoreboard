let blueScore = 1
let redScore = 1

console.log(blueScore);

function addBlueScore() {
    blueScore++
    console.log('You increased Blue team score');
}

function addRedScore() {
    redScore++
    console.log('You increased Red team score');
}

function updateRedScore() {
    const redScoreElement = document.getElementById('redScore')
    console.log("this is the red score element", redScoreElement);
    redScoreElement.innerText = redScore
    redScore++
    checkMaxScore()
}

function updateBlueScore() {
    const blueScoreElement = document.getElementById('blueScore')
    console.log('this is the blue score element', blueScoreElement);
    blueScoreElement.innerText = blueScore
    blueScore++
    checkMaxScore()
}

function checkMaxScore() {
    const blueScoreElement = document.getElementById('blueScore')
    const redScoreElement = document.getElementById('redScore')
    if (blueScore == 12) {
        console.log(`Blue Team Wins with ${blueScore} Points`)
        document.body.style.backgroundColor = "blue"
        blueScoreElement.innerText = "WINS"
    }
    if (redScore == 12) {
        console.log(`Red Team Wins with ${redScore} Points`)
        document.body.style.backgroundColor = "red"
        redScoreElement.innerText = "WINS"
    }
}

function resetScore() {
    location.reload()
}