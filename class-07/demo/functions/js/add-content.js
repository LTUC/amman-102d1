'use strict'

function createGreeting() {
  // input
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  // processing:
  if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow >= 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  //output:
  return greeting;
}

var showOrder = function() {
  // input
  var order = prompt('What would you like to order today?');
  var picture; 

  // processing
  if (order === 'hotel') {
    picture = '<img src="images/hotel.png">'
  } else if (order === 'house') {
    picture = '<img src="images/house.png">'
  }

  // output
  return picture;
}
