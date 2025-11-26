// Element selectors

const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")
const lapButton = document.querySelector(".lap")
const timer = document.querySelector(".timer")

// Variables

let timerInterval = null
let time = 0
let lastDate

// Functions

const updateTime = () => {
    const dateNow = Date.now()

    time += dateNow - lastDate

    lastDate = dateNow

    timer.textContent = formatTime()
}

const formatTime = () => {
    let tempTime = time

    const minutes = String(Math.floor(tempTime / 60000))

    tempTime = tempTime % 60000

    const seconds = String(Math.floor(tempTime / 1000))

    tempTime = tempTime % 1000

    const milliseconds = String(Math.floor(tempTime / 10))

    return `${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}:${milliseconds.padStart(2, "0")}`
}

const showNode = (node) => {
    node.classList.remove("hide")
}

const hideNode = (node) => {
    node.classList.add("hide")
}

const enableNode = (node) => {
    node.removeAttribute("disabled")
}

const disableNode = (node) => {
    node.setAttribute("disabled", "")
}

// Event handlers

const handleStartButtonClick = () => {
    if (timerInterval) return

    lastDate = Date.now()
    timerInterval = setInterval(updateTime, 10)

    showNode(stopButton)
    hideNode(startButton)

    enableNode(lapButton)
    enableNode(resetButton)
}

const handleStopButtonClick = () => {
    clearInterval(timerInterval)
    timerInterval = null

    showNode(startButton)
    hideNode(stopButton)

    disableNode(lapButton)
}

const handleResetButtonClick = () => {
    clearInterval(timerInterval)
    timerInterval = null

    time = 0
    timer.textContent = formatTime()

    showNode(startButton)
    hideNode(stopButton)

    disableNode(lapButton)
    disableNode(resetButton)
}

// Define event listeners

startButton.addEventListener("click", handleStartButtonClick)
stopButton.addEventListener("click", handleStopButtonClick)
resetButton.addEventListener("click", handleResetButtonClick)

document.addEventListener("keydown", (e) => {
    e.preventDefault()

    e.key == "Backspace" && resetButton.click()
})

document.addEventListener("keyup", (e) => {
    e.key == " " && (!timerInterval ? startButton.click() : stopButton.click())
})

// Init

timer.textContent = formatTime(time)