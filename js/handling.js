// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here


function firstButton() {
  'use strict';

  document.getElementById('red').className = 'red_button_1';
  document.getElementById('blueIn').className = 'blue_in_button_1';
  document.getElementById('blueBottom').className = 'hidden';
  document.getElementById('green').className = 'hidden';
}

function secondButton () {
  'use strict';

  document.getElementById('red').className = 'red_button_2';
  document.getElementById('blueIn').className = 'hidden';
  document.getElementById('blueBottom').className = 'blue_bottom_button_2';
  document.getElementById('green').className = 'hidden';
}

function thirdButton () {
  'use strict';
  
  document.getElementById('red').className = 'red_button_3';
  document.getElementById('blueIn').className = 'hidden';
  document.getElementById('blueBottom').className = 'blue_bottom_button_3';
  document.getElementById('green').className = 'hidden';
}

function fourthButton () {
  'use strict';
  
  document.getElementById('red').className = 'red_button_4';
  document.getElementById('blueIn').className = 'hidden';
  document.getElementById('blueBottom').className = 'blue_bottom_button_4';
  document.getElementById('green').className = 'hidden';
}

function fifthButton () {
  'use strict';
  
  document.getElementById('red').className = 'red_button_5';
  document.getElementById('blueIn').className = 'blue_in_button_5';
  document.getElementById('blueBottom').className = 'hidden';
  document.getElementById('green').className = 'hidden';
}

function sixthButton () {
  'use strict';
  
  document.getElementById('red').className = 'red_button_6';
  document.getElementById('blueIn').className = 'blue_in_button_6';
  document.getElementById('blueBottom').className = 'hidden';
  document.getElementById('green').className = 'green_button_6';
}


function init() {
  "use strict";

  // All event listeners here
  document.getElementById('button-1').addEventListener('click',firstButton);
  document.getElementById('button-2').addEventListener('click',secondButton);
  document.getElementById('button-3').addEventListener('click',thirdButton);
  document.getElementById('button-4').addEventListener('click',fourthButton);
  document.getElementById('button-5').addEventListener('click',fifthButton);
  document.getElementById('button-6').addEventListener('click',sixthButton);
}

window.onload = init;