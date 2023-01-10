$(function () {
  //Add code to display the  date in the header of the page.
  var today = dayjs().format('MMMM DD, YYYY')
  $('#currentDay').append(today);

  // Create a variable for the current hour
  var hourNow = Number(dayjs().format('H'))
  console.log(hourNow);

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.


  $('.time-block').each(function () {
    // console.log(this);
    if (Number(this.id) === hourNow) {
      $(this).removeClass('past future').addClass('present');
    } else if (this.id < hourNow) {
      $(this).removeClass('present future').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  
  })


  // Add a listener for click events on the save button.
  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    console.log(text);
    var time = $(this).parent().attr("id");
    console.log(time); 


    // var savedData = [];

    // localStorage.setItem()

  })



})




// var main = $('.container-lg')
// for (var i = 9; i = 17; i++) {
//   var div = $('<div>').addClass('row time-block future').attr('id', i);
//   var textArea = $('<textarea>').addClass('col-8 col-md-10 description');
// } 




