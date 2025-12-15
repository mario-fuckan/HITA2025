// BMI START

const BMICalculator = () => {
	let height = null
	let weight = null
	let gender = null

	console.log("Let's test your BMI index!")

	while (true) {
		do {
			height = parseFloat(prompt("Enter your height (cm):")) / 100

			if (isNaN(height)) console.log("Please enter a valid number.")
		} while (isNaN(height))

		do {
			weight = parseFloat(prompt("Enter your weight (kg):"))

			if (isNaN(weight)) console.log("Please enter a valid number.")
		} while (isNaN(weight))

		do {
			gender = prompt("Enter your gender (M/F):").toLowerCase()

			if (gender !== "m" && gender !== "f") console.log("Please, try again")
		} while (gender !== "m" && gender !== "f")

		console.log(gender)

		const bmi = parseFloat((weight / height ** 2).toFixed(6))

		console.log(bmi, weight, height)
		console.log(`BMI is: ${bmi}`)
		console.log(config.bmi[gender].find(item => bmi < item.max).result)

		const more = prompt("More: Y / N").toLowerCase()

		if (more !== "y") break
	}
}

// BMI END

// CALORIE CALCULATOR START

const getBMR = (gender, weight, height, age) => {
	return gender === "m" ? (10 * weight) + (6.25 * height) - (5 * age) + 5 : (10 * weight) + (6.25 * height) - (5 * age) - 161
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

			if (gender !== "m" && gender !== "f") console.log("Please, try again")
		} while (gender !== "m" && gender !== "f")

		do {
			height = parseFloat(prompt("Enter your height (cm):"))

			if (isNaN(height)) console.log("Please enter a valid number.")
		} while (isNaN(height))

		do {
			weight = parseFloat(prompt("Enter your weight (kg):"))

			if (isNaN(weight)) console.log("Please enter a valid number.")
		} while (isNaN(weight))

		do {
			for (const [k, v] of Object.entries(config.activityLevels)) {
				console.log(`${k} - ${v.name}`)
			}

			activityLevel = parseInt(prompt("How active are you? (1-5):"))
		} while (isNaN(activityLevel) || activityLevel < 1 || activityLevel > 5)

		const bmr = getBMR(gender, weight, height, age)
		const tdee = Math.round(bmr * config.activityLevels[activityLevel].multiplier)

		console.log(`Your basal metabolic rate is: ${bmr} calories/day.`)
		console.log(`Your Total Daily Energy Expenditure: ${tdee} calories/day`)
		console.log(`If you want to lose weight, you should eat: ${tdee - 500} calories/day`)
		console.log(`If you want to gain weight, you should eat: ${tdee + 500} calories/day`)

		const more = prompt("More: Y / N").toLowerCase()

		if (more !== "y") break
	}
}

// CALORIE CALCULATOR END

// HEART RATE CALCULATOR START

const calculateTargetHeartRate = (hrr, intensity, rhr) => {
	return Math.round((hrr * intensity) + rhr)
}

const heartRateCalculator = () => {
	let age = null
	let rhr = null

	console.log("Let's estimate your heart rate!")

	while (true) {
		do {
			age = parseInt(prompt("How old are you?"))

			if (isNaN(age)) console.log("Please enter a valid number.")
		} while (isNaN(age))

		do {
			rhr = parseInt(prompt("What's your resting heart rate?"))

			if (isNaN(rhr)) console.log("Please enter a valid number.")
		} while (isNaN(rhr))

		const mhr = 220 - age
		const hrr = mhr - rhr

		for (const item of config.heartRateZones) {
			console.log(`${item.name}: ${item.min * 100}% - ${item.max * 100}%`)
			console.log(`Target zone: ${calculateTargetHeartRate(hrr, item.min, rhr)} - ${calculateTargetHeartRate(hrr, item.max, rhr)} bpm`)
		}

		const more = prompt("More: Y / N").toLowerCase()

		if (more !== "y") break
	}
}

// HEART RATE CALCULATOR END

// MAIN LOOP AND CONFIG

const config = {
	botName: "Aid",
	botYear: 2025,
	bmi: {
		m: [
			{ max: 20.7, result: "Too low" },
			{ max: 26.4, result: "Ideal" },
			{ max: 27.8, result: "A little above normal" },
			{ max: 31.1, result: "High" },
			{ max: 45.3, result: "Too high" },
			{ max: Infinity, result: "Extremely high" }
		],
		f: [
			{ max: 19.1, result: "Too low" },
			{ max: 25.8, result: "Ideal" },
			{ max: 27.3, result: "A little above normal" },
			{ max: 32.2, result: "High" },
			{ max: 44.7, result: "Too high" },
			{ max: Infinity, result: "Extremely high" }
		]
	},
	activityLevels: {
		1: { name: "Sedentary (little to no exercise)", multiplier: 1.2 },
		2: { name: "Light (exercise 1-3 times a week)", multiplier: 1.375 },
		3: { name: "Moderate (exercise 4-5 times a week)", multiplier: 1.55 },
		4: { name: "Active (daily exercise)", multiplier: 1.725 },
		5: { name: "Very active (exercising 6-7 times a week)", multiplier: 1.9 }
	},
	heartRateZones: [
		{ name: "Fat burning", min: 0.6, max: 0.7 },
		{ name: "Cardio/aerobic", min: 0.7, max: 0.85 },
		{ name: "Max effort/performance", min: 0.85, max: 0.95 }
	]
}

console.log(`Hello! My name is ${config.botName}.
I was created in ${config.botYear}.`)

const yourName = prompt("Please, remind me of your name.")

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