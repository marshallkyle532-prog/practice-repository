const form = document.querySelector("#country-form");
const country = document.querySelector("#country");
const countryName = document.querySelector("#country-name");
const capital = document.querySelector("#capital");
const region = document.querySelector("#region");

// TODO J1: Select the subregion and population elements using querySelector.

form.addEventListener("submit", function(event) {
    // TODO J2: Prevent the default form submission.

    // TODO J3: Retrieve the dropdown value and store it in selectedCountry.
    
    const url = "https://countries.dev/alpha/" + selectedCountry;
    countryName.textContent = "Loading...";

    // TODO J4: Use fetch() to request information from url.
    
    // TODO J5: Add a .then() that parses the response as JSON.
    
    // Insert both lines directly above the .then() below.
        .then(data => {
            console.log(data);
            countryName.textContent = data.name;

            // TODO J6: Display the capital.
            // TODO J7: Display the region.
            // TODO J8: Display the subregion.
            // TODO J9: Display the population.
            // TODO J10: Display your additional detail (Part 4).
        })
        .catch(error => {
            console.error(error);
            countryName.textContent = "Unable to load country information.";
        });
});
