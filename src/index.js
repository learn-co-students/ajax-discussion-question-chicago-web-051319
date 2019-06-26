const fullname = document.getElementById("fullname");
const profilePic = document.getElementById("profile_picture");
const email = document.getElementById('email');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');
const phone = document.getElementById('phone');
const cell = document.getElementById('cell');
const birthday = document.getElementById('date_of_birth');
const button = document.getElementsByClassName('btn')[0];

console.log("CONTENT NOT YET LOADED!", fullname, profilePic, email, street, city, state, postcode, phone, cell, birthday, button); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
        fetch('https://randomuser.me/api/')
            .then( res => res.json())
            .then( json => renderPerson(json) );
  }

  function renderPerson(json) {
      fullname.innerHTML = json.results[0].name;
      profilePic.src = json.results[0].picture.medium;
      email.innerHTML = json.results[0].email;
      street.innerHTML = json.results[0].location.street;
      city.innerHTML = json.results[0].location.city;
      state.innerHTML = json.results[0].location.state;
      postcode.innerHTML = json.results[0].location.postcode;
      phone.innerHTML = json.results[0].phone;
      cell.innerHTML = json.results[0].cell;
      birthday.innerHTML = json.results[0].dob.date.split("T")[0];
    }

fetchData()

button.addEventListener("click", fetchData)

});

// document.addEventListener("click", )
//   asynchronousFetch("https://randomuser.me/api/", fakerInfo => sequenceClone(fakerInfo)); // Line 1
//     let lis = document.querySelector("li")
  // var data = fetch('https://randomuser.me/api/')
  //   .then( res => res.json() )
  //   .then( json => console.log(json) )
