$('document').ready(function(){
  console.log('jQuery sourced');

//
  // Click handlers for the buttons
  $('#btnOne').on('click', function() {
    $('#container').append('<div class="blockRed"></div>');
    console.log('red button clicked');
  });
  $('#btnTwo').on('click', function() {
    $('#container').append('<div class="blockBlue"> </div>');
    console.log('red button clicked');
  });
  $('#btnThree').on('click', function() {
    $('#container').append('<div class="blockGreen"></div>');
    console.log('red button clicked');
  });
  $('#btnFour').on('click', function() {
    $('#container').append('<div class="blockYellow"></div>');
    console.log('red button clicked');
  });
//Click handlers for Counting
var numClickedRed = 1;
var numClickedBlue = 1;
var numClickedGreen = 1;
var numClickedYellow = 1;

  $('#btnOne').on('click', function() {
    $('#redCount').empty();
    $('#redCount').append(numClickedRed);
    numClickedRed+= 1;
  });
  $('#btnTwo').on('click', function() {
    $('#blueCount').empty();
    $('#blueCount').append(numClickedBlue);
    numClickedBlue+= 1;
  });
  $('#btnThree').on('click', function() {
    $('#greenCount').empty();
    $('#greenCount').append(numClickedGreen);
    numClickedGreen+= 1;
  });
  $('#btnFour').on('click', function() {
    $('#yellowCount').empty();
    $('#yellowCount').append(numClickedYellow);
    numClickedYellow+= 1;
  });

});
