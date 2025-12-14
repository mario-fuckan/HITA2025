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
	let height = null
	let weight = null
	let gender = null

	console.log("Let's test your BMI index!")

	while (true) {
		do {
			height = parseFloat(prompt("Enter your height:")) / 100

			if (isNaN(height)) console.log("Please enter a valid number.")
		} while (isNaN(height))

		do {
			weight = parseFloat(prompt("Enter your weight:"))

			if (isNaN(weight)) console.log("Please enter a valid number.")
		} while (isNaN(weight))

		do {
			gender = prompt("Enter your gender (M/F):").toLowerCase()

			if (gender != "m" && gender != "f") console.log("Please, try again")
		} while (gender != "m" && gender != "f")

		console.log(gender)

		const bmi = parseFloat((weight / height ** 2).toFixed(6))

		console.log(bmi, weight, height)
		console.log(`BMI is: ${bmi}`)
		console.log(getBMIResult(gender, bmi))

		const more = prompt("More: Y / N").toLowerCase()

		if (more != "y") break
	}
}

// BMI END

// CALORIE CALCULATOR START

const activityLevels = new Map([
	[1, 1.2],
	[2, 1.375],
	[3, 1.55],
	[4, 1.725],
	[5, 1.9]
])

const getBMR = (gender, weight, height, age) => {
	return gender == "m" ? (10 * weight) + (6.25 * height) - (5 * age) + 5 : (10 * weight) + (6.25 * height) - (5 * age) - 161
}

const calorieCalculator = () => {
	let age = null
	let gender = null
	let height = null
	let weight = null
	let activityLevel = null

	console.log("Let's calculate how many calories do you need!")

	while (true) {
		do {
			age = parseInt(prompt("How old are you?"))

			if (isNaN(age)) console.log("Please enter a valid number.")
		} while (isNaN(age))

		do {
			gender = prompt("Enter your gender (M/F):").toLowerCase()

			if (gender != "m" && gender != "f") console.log("Please, try again")
		} while (gender != "m" && gender != "f")

		do {
			height = parseFloat(prompt("Enter your height:"))

			if (isNaN(height)) console.log("Please enter a valid number.")
		} while (isNaN(height))

		do {
			weight = parseFloat(prompt("Enter your weight:"))

			if (isNaN(weight)) console.log("Please enter a valid number.")
		} while (isNaN(weight))

		do {
			console.log(`
			1 - Sedentary (little to no exercise)
			2 - Light (exercise 1-3 times a week)
			3 - Moderate (exercise 4-5 times a week)
			4 - Active (daily exercise)
			5 - Very active (exercising 6-7 times a week)
			`)

			activityLevel = parseInt(prompt("How active are you? (1-5):"))
		} while (isNaN(activityLevel) || activityLevel < 1 || activityLevel > 5)

		const bmr = getBMR(gender, weight, height, age)
		const tdee = bmr * activityLevels.get(activityLevel)

		console.log(`Your basal metabolic rate is: ${bmr} calories/day.`)
		console.log(`Your Total Daily Energy Expenditure: ${tdee} calories/day`)
		console.log(`If you want to lose weight, you should eat: ${tdee - 500} calories/day`)
		console.log(`If you want to gain weight, you should eat: ${tdee + 500} calories/day`)

		const more = prompt("More: Y / N").toLowerCase()

		if (more != "y") break
	}
}

// CALORIE CALCULATOR END

// HEART RATE CALCULATOR START

const heartRateCalculator = () => {

}

// HEART RATE CALCULATOR END

// MAIN LOOP AND CONFIG

/*
const botName = "Aid"
const botYear = 2025
console.log(`Hello! My name is ${botName}.
I was created in ${botYear}.`)

const yourName = prompt("Please, remind me of your name.")
*/

let run = true

while (run) {
	const select = prompt(`Hello ${yourName}! Which calculator would you like to use?
	1 - BMI calculator
	2 - Calorie calculator
	3 - Heart Rate calculator
	4 - Exit`)

	switch (select) {
		case "1":
			BMICalculator()
			break
		case "2":
			calorieCalculator()
			break
		case "3":
			heartRateCalculator()
			break
		default:
			run = false
			break
	}
}