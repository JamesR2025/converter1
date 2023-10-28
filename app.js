function convert() {
    const inputValue = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === "kilograms" && toUnit === "pounds") {
        result = inputValue * 2.20462;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
        result = inputValue / 2.20462;
    } else {
        alert ('Select proper unit conversion!');
        return;
    }

    document.getElementById("display").textContent = result.toFixed(2) + " " + toUnit;
}