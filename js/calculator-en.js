function calculateBMR(weight, height, age, gender) {
    let bmr = 0;
    if (gender === "male") {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === "female") {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    return bmr;
}

document.querySelector("form").addEventListener("submit" , e => {
    e.preventDefault()
    document.querySelector(".result-box").classList.add("d-block")
    document.querySelector(".result-box").classList.remove("d-none")
})


function calculateCalories() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const activityLevel = document.getElementById("activity-level").value;
    
    
    const bmr = calculateBMR(weight, height, age, gender);
    
    let calorieNeeds = 0;
    switch (activityLevel) {
        case "sedentary":
        calorieNeeds = bmr * 1.2;
        break;
        case "lightly-active":
        calorieNeeds = bmr * 1.375;
        break;
        case "moderately-active":
        calorieNeeds = bmr * 1.55;
        break;
        case "very-active":
        calorieNeeds = bmr * 1.725;
        break;
        case "extra-active":
        calorieNeeds = bmr * 1.9;
        break;
    }
    
    const maintainWeightCalories = calorieNeeds.toFixed(0);
    const mildWeightLossCalories = (calorieNeeds * 0.89).toFixed(0);
    const weightLossCalories = (calorieNeeds * 0.78).toFixed(0);
    const extremeWeightLossCalories = (calorieNeeds * 0.56).toFixed(0);
    const mildWeightGainCalories = (calorieNeeds * 1.11).toFixed(0);
    const weightGainCalories = (calorieNeeds * 1.22).toFixed(0);
    const fastWeightGainCalories = (calorieNeeds * 1.44).toFixed(0);
    
    document.querySelector(".daily").textContent = `Your daily calorie needs are ${calorieNeeds.toFixed(2)} calories`
    document.querySelector(".mantain").textContent = `${maintainWeightCalories} calories/day`
    document.querySelector(".mild-loss").textContent = `${mildWeightLossCalories} calories/day`
    document.querySelector(".weight-loss").textContent = `${weightLossCalories} calories/day`
    document.querySelector(".extreme-loss").textContent = ` ${extremeWeightLossCalories} calories/day`
    document.querySelector(".mild-gain").textContent = ` ${mildWeightGainCalories} calories/day`
    document.querySelector(".weight-gain").textContent = ` ${weightGainCalories} calories/day`
    document.querySelector(".fast-gain").textContent = ` ${fastWeightGainCalories} calories/day`
}


{/* Bu yangi js code shuni ishlating eski o'rniga */}