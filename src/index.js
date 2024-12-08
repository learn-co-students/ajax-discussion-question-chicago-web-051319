const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


function fetchData(){
        return fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => data(json) );
}
// fetchData()


function data(json){
  let fullname = document.getElementById("fullname");
  let title = json.results[0].name.title;
  let first = json.results[0].name.first;
  let last = json.results[0].name.last;
  fullname.innerText = `${title} ${first} ${last}`;

  let email = document.getElementById("email");
  let adress = json.results[0].email;
  email.innerText = `${adress}`;

  let locStreet = document.getElementById("street");
  let street = json.results[0].location.street;
  locStreet.innerText = `${street}`;

  let cityid = document.getElementById("city");
  let stateid = document.getElementById("state");
  let zipid = document.getElementById("postcode");
  let city = json.results[0].location.city;
  let state = json.results[0].location.state;
  let zip = json.results[0].location.postcode;
  cityid.innerText = `${city}`;
  stateid.innerText = `${state}`;
  zipid.innerText = `${zip}`;

  let cellid = document.getElementById("cell");
  let phid = document.getElementById("phone");
  let cell = json.results[0].cell;
  let phone = json.results[0].phone;
  phid.innerText = `${phone}`;
  cellid.innerText = `${cell}`;

  let dobid = document.getElementById("date_of_birth");
  let dob = json.results[0].dob.date.split("T")[0];
  dobid.innerText = `${dob}`;

  let pic = json.results[0].picture.large;
  let picid = document.getElementById("profile_picture");
  picid.src = pic;
}

const bt = document.querySelector('.btn');
bt.addEventListener('click', function(e){
  // alert('INSTALLING DATA!!! BROTHA!!@o@');
  fetchData()
})
