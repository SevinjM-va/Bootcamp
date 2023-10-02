

const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById("mail");
const name = document.getElementById("name");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
  });

      form.addEventListener("submit", function (event) {
        if(!email.validity.valid) {
            email.setCustomValidity("I am expecting an e-mail address!");
        } else {
            email.setCustomValidity("");
        }
      });