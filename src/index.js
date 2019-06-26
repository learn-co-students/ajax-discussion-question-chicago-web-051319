document.addEventListener("DOMContentLoaded", () => {

  const profilePic = document.getElementById('profile_picture');
  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zipcode = document.getElementById('postcode');
  const phone = document.getElementById('phone');
  const cellphone = document.getElementById('cell');
  const dateOfBirth = document.getElementById('date_of_birth');
  const button = document.getElementsByTagName('button');

  const getData = () => {
    return fetch('https://randomuser.me/api/').then(resp => resp.json()).then(json => {

      const person = json.results[0];
      profilePic.src = person.picture.large;
      fullname.innerText = person.name.title + '. ' + person.name.first + ' ' + person.name.last;
      email.innerText = person.email;
      street.innerText = person.location.street;
      city.innerText = person.location.city;
      state.innerText = person.location.state;
      zipcode.innerText = person.location.postcode;
      phone.innerText = person.phone;
      cellphone.innerText = person.cell;
      dateOfBirth.innerText = person.dob.date.split('T')[0];
    });
  }
  button.addEventListener('click', () => getData());
});
