'use strict';

UserInput.order = [];

//DOM Access
var submitInfo = document.getElementById('submitInfo');

//make an object of everything the user selects incl their info
function UserInput(productName, qty, firstName, lastName, street, city, state, zipCode) {
  this.productName = productName;
  this.qty = qty;
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
  UserInput.order.push(this);
}

//check localStorage
function checkStorage() {
  if(localStorage.newOrder) {
    var newOrderString = localStorage.getItem('newOrder');
    UserInput.order = JSON.parse(newOrderString);
  }
}

//target the submit button on index.html
function handleSubmitInfo(event) {
  event.preventDefault();
  var productName = event.target.choices.value;
  var qty = event.target.quantity.value;
  var custFirstName = event.target.firstName.value;
  var custLastName = event.target.lastName.value;
  var custStreet = event.target.street.value;
  var custCity = event.target.city.value;
  var custState = event.target.state.value;
  var custZipCode = event.target.zipCode.value;

  if(!UserInput.order.length) {
    new UserInput(productName, qty, custFirstName, custLastName, custStreet, custCity, custState, custZipCode);
  } else {
    localStorage.setItem('newOrder', JSON.stringify(UserInput.order));
  }

  //store both arrays into localstorage
  localStorage.setItem('newOrder', JSON.stringify(UserInput.order));

  //clear form
event.target.reset();
}

function handleDeletInfo(event){
//delete 1 from UserInput.order
}

//check localStorage
checkStorage();
//event listener on index.html
submitInfo.addEventListener('submit', handleSubmitInfo);
//event listener on cart.html
deletInfo.addEventListener('submit', handleDeletInfo);