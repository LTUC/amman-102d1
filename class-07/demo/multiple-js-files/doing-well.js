'use strict'

var doingWell = confirm('Are you doing well today?');
var output;

if (doingWell) {
  output = 'Glad to hear it!';
} else {
  output = 'I hope you will be ok soon!';
}

document.write('<h3>' + output + '</h3>');
