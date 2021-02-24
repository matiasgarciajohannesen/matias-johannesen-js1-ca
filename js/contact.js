const form = document.querySelector(".contact");
form.addEventListener("submit", validateForm);

const name = document.querySelector ("input#name");
const subject = document.querySelector ("input#subject");
const email = document.querySelector ("input#email");
const address = document.querySelector ("input#address");

const nameTxt = document.querySelector ("span#nameTxt");
const subTxt = document.querySelector ("span#subTxt");
const emailTxt = document.querySelector ("span#emailTxt");
const addressTxt = document.querySelector ("span#addressTxt");

function validateForm(e) {
    let submittedName = name.value.trim();
    console.log("Name: " + submittedName);
    nameTxt.innerHTML = "";
    if (submittedName.length < 2) {
        nameTxt.innerHTML += "Name has to be a minimum of 2 characters!";
    }
    if (/\d/.test(submittedName)) {
        nameTxt.innerHTML += "The name cant contain numbers!";
    }

    let submittedEmail = email.value.trim();
    console.log("Email: " + submittedEmail);
    emailTxt.innerHTML = "";
    let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailPattern.test(submittedEmail)) {
    emailTxt.innerHTML += "Please enter a valid email";
  }

  let submittedSub = subject.value.trim();
  console.log("Subject: " + submittedSub);
  subTxt.innerHTML = "";
  if (submittedSub.length < 10) {
      subTxt.innerHTML += "Must be at least 10 characters."
  }

  

}