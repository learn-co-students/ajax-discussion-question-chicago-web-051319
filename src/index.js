const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const dateOfBirth = document.getElementById("date_of_birth");
const profilePicture = document.getElementById("profile_picture");


const newPersonBtn = document.querySelector("button");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  newPersonBtn.addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(json => {
      const person = json.results[0];
      const personName = person.name;
      const personLocation = person.location;
      const personEmail = person.email;
      const personPhone = person.phone;
      const personCell = person.cell;
      const personDOB = person.dob;
      const personPhoto = person.picture;

      fullname.textContent = capitalize(personName.title) + " " + capitalize(personName.first) + " " + capitalize(personName.last);
      email.textContent = personEmail;
      street.textContent = personLocation.street;
      city.textContent = personLocation.city;
      state.textContent = personLocation.state;
      postcode.textContent = personLocation.postcode;
      phone.textContent = personPhone;
      cell.textContent = personCell;
      dateOfBirth.textContent = personDOB.date;
      profilePicture.setAttribute("src", personPhoto.large)
    });
  });

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
});
