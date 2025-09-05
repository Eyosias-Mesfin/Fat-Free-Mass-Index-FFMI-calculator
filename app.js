const btnEl = document.getElementById("btn");
const ffmiInputEl = document.getElementById("ffmi-result");
const muscularityLevelEl = document.getElementById("muscularityLevel");

function calculateFfmi() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;
    const fatPercentage = document.getElementById("bodyFat").value / 100;
    const ffmiValue = weightValue * (1 - fatPercentage) / (heightValue * heightValue);
    ffmiInputEl.value = ffmiValue;

    if (ffmiValue < 17) {
        muscularityLevelEl.innerText = "Below Average (Low lean mass; typical of sedentary or undertrained individuals)";
    } else if (ffmiValue >= 17 && ffmiValue <= 19) {
        muscularityLevelEl.innerText = "Average (Normal lean mass for general population)";
    } else if (ffmiValue > 19 && ffmiValue <= 22) {
        muscularityLevelEl.innerText = "Above Average (Fit and active individuals; solid muscular base)";
    } else if (ffmiValue > 22 && ffmiValue <= 25){
        muscularityLevelEl.innerText = "Excellent (Highly trained athletes or bodybuilders; near genetic potential)";
    } else if (ffmiValue > 25 && ffmiValue <= 27){
        muscularityLevelEl.innerText = "Superior (Exceptional muscularity; rare without elite genetics or enhanced training methods)"
    } else{
        muscularityLevelEl.innerText = "Elite (Max natural potential; often debated if achievable without performance enhancers)"
    }
}

btnEl.addEventListener("click", calculateFfmi);