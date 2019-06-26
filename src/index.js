const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  function fetchData(){
    fetch('https://randomuser.me/api/').then(response => response.json()).then(json => renderPerson(json));
  };

  function renderPerson(json){
    let photo = document.getElementById('profile_picture');
    photo.src = json.results[0].picture.medium;
    let fullName = document.getElementById('fullname');
    fullName.innerText = `${json.results[0].name.title} ${json.results[0].name.first} ${json.results[0].name.last}`
    let emailAddress = document.getElementById('email');
    emailAddress.innerText = json.results[0].email;
    let streetAddress = document.getElementById('street');
    streetAddress.innerText = json.results[0].location.street;
    let cityAddress = document.getElementById('city');
    cityAddress.innerText = json.results[0].location.city;
    let stateAddress = document.getElementById('state');
    stateAddress.innerText = json.results[0].location.state;
    let zipCode = document.getElementById('postcode');
    zipCode.innerText = json.results[0].location.postcode;
    let phoneNumber = document.getElementById('phone');
    phoneNumber.innerText = json.results[0].phone;
    let cellPhone = document.getElementById('cell');
    cellPhone.innerText = json.results[0].cell;
    let birthday = document.getElementById('date_of_birth');
    birthday.innerText = json.results[0].dob.date.split('T')[0];
  };

  fetchData();

  const button = 
  document.getElementsByClassName('btn-primary')[0].addEventListener('click', function(){
    fetchData();
  });
});
