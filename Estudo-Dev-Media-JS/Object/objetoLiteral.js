let people = {
    name: "Pedro José",
    age: 27,
    height: 1.85,
    weight: 59
}

let bmi = people.weight / (people.height * people.height)

if (bmi > 16.9 && bmi <= 18) {
    console.log(`You are underweight, this is your BMI ${bmi.toFixed(2)}`)
} else if (bmi > 18 && bmi <= 24.9) {
    console.log(`You are of normal weight, this is your BMI ${bmi.toFixed(2)}`)
} else if (bmi > 25 && bmi <= 30) {
    console.log(`You are overweight, this is your BMI ${bmi.toFixed(2)}`)
} else {
    console.log(`You are obese, this is your BMI ${bmi.toFixed(2)}`)
}