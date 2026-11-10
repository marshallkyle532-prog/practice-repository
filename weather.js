//Select the empty paragraph that will show the current temperature using querySelector

const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=39.81&longitude=-75.93" +
    "&current=temperature_2m" +
    "&temperature_unit=fahrenheit";

fetch(url)
    .then(response => response.json())
    .then(data => {
        //Set the text of paragraph to reflect the current temperature. Include an F after the value
        // (to represent Fahrenheit)
        
    });