const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const kelvin = document.getElementById("kelvin");

function kelvinConversion(kelvin) {
celsius.value = (kelvin - 273.1).toFixed(1);
fahrenheit.value = ((kelvin * (9 /5 ) - 459.67).toFixed(1));
transferBackground((kelvin - 273.1).toFixed(0));
}

function celsiusConversion(celsius) {
kelvin.value = (celsius + 273.1).toFixed(1);
fahrenheit.value = ((celsius * 1.8 ) + 32).toFixed(1);
transferBackground(celsius.toFixed(0));
}

function fahrenheitConversion(fahrenheit) {
kelvin.value = ((fahrenheit + 459.67) * (5 / 9)).toFixed(1);
celsius.value = ((fahrenheit  - 32) * (5 / 9)).toFixed(1);
transferBackground(((fahrenheit  - 32) * (5 / 9)).toFixed(0));
}

function transferBackground(celsius) {
    if (celsius < 0) document.body.style.background = "white";
    else if (celsius > 0 && celsius < 100) document.body.style.background = "blue";
    else document.body.style.background = "red"
}