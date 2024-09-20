function convert() {
    let temperature = document.getElementById("numValue").value;
    let from = document.getElementById("option1").value;
    let to = document.getElementById("option2").value;
    let converted = document.getElementById("result");

    if (temperature === "") {
        converted.innerText = `Enter a value to convert Temperature`;
        return;
    }

    let result;
    if (from === "Fahrenheit" && to === "Celsius") {
        result = (temperature- 32) * (5 / 9);
        converted.innerText = `Converted Temperature: ${result.toFixed(2)} °C`;
    } else if (from === "Celsius" && to === "Fahrenheit") {
        result = temperature * (9 / 5) + 32;
        converted.innerText = `Converted Temperature: ${result.toFixed(2)} °F`;
    } else {
        converted.innerText = `Invalid value. Please select different units.`;
    }
}




function reset(){
    document.getElementById("numValue").value = "";
    document.getElementById("result").innerText = "";
}