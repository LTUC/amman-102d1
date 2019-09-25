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
  var order = prompt('What would you like to order today? "hotel" or "house"?');
  var picture = ''; 
  var total = NaN;

  // processing
  while (order !== 'house' && order !== 'hotel') {
    order = prompt('Please enter "house" or "hotel"...');
  }

  while(isNaN(total)) {
    total = prompt('How many would you like?');
  }
  
  for(var models = 0; models < total; models = models + 1) {
    if (order === 'hotel') {
      picture = picture + '<p><img src="images/hotel.png"></p>'
    } else if (order === 'house') {
      picture = picture + '<p><img src="images/house.png"></p>'
    }
  }

  // output
  return picture;
}
