$(document).ready(function() {
  //constants and variables
  const table = $('#pixelCanvas'),  //select table
  buildGrid = $('#submitButton'),  //select submit button
  reset = $('#resetButton'), //select reset button
        clean = $('#clean'); //select clean button


  let theHeight = $('#inputHeight'),
  theWidth = $('#inputWeight'),
  color = $('#colorPicker');


  //functions
  function makeGrid() {  //builds grid when called

    let numberOfRows = theHeight.val();  //get dimensions
    let numberOfColumns = theWidth.val();  //get height and width values

    for (let r = 0; r < numberOfRows; r++) {   //add rows until row height === height selected
      table.append('<tr></tr>'); // add row to table
      let row = $('tr').last(); // create row object
      for (let c = 0; c < numberOfColumns; c++) { // add data cells to row until row width === width selected
        row.append('<td></td>');  //add cell element to row
      }
    } return false; //don't reload page
  };

  buildGrid.click(function(evt) {  // monitor and respond to cell clicks
    evt.preventDefault(); // prevent page from refreshing
    $('tr').remove(); //remove old table if one exists
    makeGrid(); //call make grid function
  });

  table.on('click', 'td', function() { //change cell colors
    let colorSelected = color.val();  //set color value
    if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)') {
      $(this).css('background-color', colorSelected);
    } else {
      $(this).css('background-color', '');
    }
  });

  reset.click(function(evt) {
    $('td').remove();
    $('#colorPicker').val('');
  });

  clean.click(function(evt) {
    $('td').css('background-color', '');
    $('#colorPicker').val('');
  });
});
