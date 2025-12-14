// BMI START

const getBMIResult = (gender, bmi) => {
	if (gender == "m") {
		if (bmi < 20.7) {
			return "Too low"
		} else if (bmi < 26.4) {
			return "Ideal"
		} else if (bmi < 27.8) {
			return "A little above normal"
		} else if (bmi < 31.1) {
			return "High"
		} else if (bmi < 45.3) {
			return "Too high"
		} else {
			return "Extremely high"
		}
	} else {
		if (bmi < 19.1) {
			return "Too low"
		} else if (bmi < 25.8) {
			return "Ideal"
		} else if (bmi < 27.3) {
			return "A little above normal"
		} else if (bmi < 32.2) {
			return "High"
		} else if (bmi < 44.7) {
			return "Too high"
		} else {
			return "Extremely high"
		}
	}
}

const BMICalculator = () => {
	console.log("Let's test your BMI index!")

	const height = Number(prompt("Enter your height:")) / 100

	console.log(`> ${height}`)

	if (isNaN(height)) {
		console.log("That is not a number, please try again")
		return
	}

	const weight = Number(prompt("Enter your weight:"))

	console.log(`> ${weight}`)

	if (isNaN(weight)) {
		console.log("That is not a number, please try again")
		return
	}

	const gender = prompt("Enter your gender (M/F):").toLowerCase()
	console.log(`> ${gender}`)

	if (gender != "m" && gender != "f") {
		console.log("Please, try again")
		return
	}

	const bmi = Number((weight / height ** 2).toFixed(6))
	console.log(`BMI is: ${bmi}`)

	console.log(getBMIResult(gender, bmi))
}

const BMIloop = () => {
	BMICalculator()

	const more = prompt("More: Y / N").toLowerCase()

	if (more == "y") return BMIloop()
}

// BMI END

// Main loop and config

/*
const botName = "Aid"
const botYear = 2025
console.log(`Hello! My name is ${botName}.
I was created in ${botYear}.`)

const yourName = prompt("Please, remind me of your name.")
console.log(`> ${yourName}`)
*/

let run = true

while (run) {
	const select = prompt(`Which calculator would you like to use?
	1 - BMI calculator
	2 - Calorie calculator
	3 - Heart Rate calculator
	4 - Medication Dosage calculator
	5 - Exit`)

	switch (select) {
		case "1":
			BMIloop()
			break
		default:
			run = false
			break
	}
}