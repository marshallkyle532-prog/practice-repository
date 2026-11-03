console.log("Volunteer form JavaScript loaded.");

const form = document.querySelector("#volunteerForm, #volunteer-form, form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");

if (form && nameInput && emailInput && interestInput && result) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestInput.value.trim();

    if (!name || !email || !interest) {
      result.textContent = "Please enter your name and email, and choose an area of interest.";
      return;
    }

    // Basic format check in addition to the required-field validation.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      result.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    result.textContent = `Thanks, ${name}! We're glad you're interested in ${interest}. We'll follow up at ${email}.`;
    form.reset();
  });
} else {
  console.error(
    "Volunteer form setup failed. Check that the page has a form, #name, #email, #interest, and #result elements."
  );
}
