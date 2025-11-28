// Element selectors

const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")
const resetButton = document.querySelector(".reset")
const lapButton = document.querySelector(".lap")
const timer = document.querySelector(".timer")
const tableBody = document.querySelector("tbody")
const lapsParent = document.querySelector(".laps")

// Variables

let timerInterval = null
let time = 0
let lastDate
let laps = []
let lapsSorted = []

// Functions

const updateTime = () => {
<<<<<<< HEAD
	const dateNow = Date.now()

	time += dateNow - lastDate

	lastDate = dateNow

	timer.textContent = formatTime(time)
}

const formatTime = (ms) => {
	const minutes = String(Math.floor(ms / 60000))

	ms = ms % 60000

	const seconds = String(Math.floor(ms / 1000))

	ms = ms % 1000

	const milliseconds = String(Math.floor(ms / 10))

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

const renderLaps = () => {
	tableBody.innerHTML = ""

	for (const [i, lap] of laps.entries()) {
		const tableRow = document.createElement("tr")

		const lapsTd = document.createElement("td")
		const timeTd = document.createElement("td")
		const totalTd = document.createElement("td")

		lapsTd.textContent = i + 1 + (lap == lapsSorted[0] ? " Fastest" : lap == lapsSorted[lapsSorted.length - 1] && " Slowest")
		timeTd.textContent = formatTime(lap.time)
		totalTd.textContent = formatTime(lap.total)

		tableRow.append(lapsTd, timeTd, totalTd)

		tableBody.append(tableRow)
	}

	lapsParent.scroll(0, lapsParent.scrollHeight)
=======
  const dateNow = Date.now()

  time += dateNow - lastDate

  lastDate = dateNow

  timer.textContent = formatTime(time)
}

const formatTime = (ms) => {
  const minutes = String(Math.floor(ms / 60000))

  ms = ms % 60000

  const seconds = String(Math.floor(ms / 1000))

  ms = ms % 1000

  const milliseconds = String(Math.floor(ms / 10))

  return `${minutes.padStart(2, "0")}:${seconds.padStart(
    2,
    "0"
  )}:${milliseconds.padStart(2, "0")}`
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

const renderLaps = () => {
  tableBody.innerHTML = ""

  for (const [i, lap] of laps.entries()) {
    const tableRow = document.createElement("tr")

    const lapsTd = document.createElement("td")
    const timeTd = document.createElement("td")
    const totalTd = document.createElement("td")

    lapsTd.textContent =
      i +
      1 +
      (lap == lapsSorted[0]
        ? " Fastest"
        : lap == lapsSorted[lapsSorted.length - 1] && " Slowest")
    timeTd.textContent = formatTime(lap.time)
    totalTd.textContent = formatTime(lap.total)

    tableRow.append(lapsTd, timeTd, totalTd)

    tableBody.append(tableRow)
  }

  lapsParent.scroll(0, lapsParent.scrollHeight)
>>>>>>> 31c7b2375cc9c86ce5f07ccf23323eab9fb39c5e
}

// Event handlers

const handleStartButtonClick = () => {
<<<<<<< HEAD
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
	timer.textContent = formatTime(time)

	showNode(startButton)
	hideNode(stopButton)

	disableNode(lapButton)
	disableNode(resetButton)

	laps = []
	lapsSorted = []

	renderLaps()
}

const handleLapButtonClick = () => {
	laps.push({
		time: laps.length > 0 ? time - laps[laps.length - 1].total : time,
		total: time
	})

	lapsSorted = laps.toSorted((a, b) => a.time - b.time)

	renderLaps()
=======
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
  timer.textContent = formatTime(time)

  showNode(startButton)
  hideNode(stopButton)

  disableNode(lapButton)
  disableNode(resetButton)

  laps = []
  lapsSorted = []

  renderLaps()
}

const handleLapButtonClick = () => {
  laps.push({
    time: laps.length > 0 ? time - laps[laps.length - 1].total : time,
    total: time,
  })

  lapsSorted = laps.toSorted((a, b) => a.time - b.time)

  renderLaps()
>>>>>>> 31c7b2375cc9c86ce5f07ccf23323eab9fb39c5e
}

// Define event listeners

startButton.addEventListener("click", handleStartButtonClick)
stopButton.addEventListener("click", handleStopButtonClick)
resetButton.addEventListener("click", handleResetButtonClick)
lapButton.addEventListener("click", handleLapButtonClick)

document.addEventListener("keydown", (e) => {
<<<<<<< HEAD
	e.preventDefault()

	e.key == "Backspace" && resetButton.click()
})

document.addEventListener("keyup", (e) => {
	e.key == " " && (!timerInterval ? startButton.click() : stopButton.click())
=======
  e.key == " " &&
    (e.preventDefault(),
    !timerInterval ? startButton.click() : stopButton.click())

  e.key == "Backspace" && (e.preventDefault(), resetButton.click())

  e.key == "Enter" && (e.preventDefault(), lapButton.click())
>>>>>>> 31c7b2375cc9c86ce5f07ccf23323eab9fb39c5e
})

// Init

timer.textContent = formatTime(time)
