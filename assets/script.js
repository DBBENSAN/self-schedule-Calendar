// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.


$(function () {
  //Add code to display the  date in the header of the page.
  var today = dayjs().format('MMMM DD, YYYY')
  $('#currentDay').append(today);

  // Create a variable for the current hour
  var hourNow = Number(dayjs().format('H'))
  console.log(hourNow);

  $('.time-block').each(function () {
    console.log(this);
    if (this.id === hourNow) {
      $(this).removeClass('past future').addClass('present');
    } else if (this.id < hourNow) {
      $(this).removeClass('present future').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  })

  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

})




// var main = $('.container-lg')
// for (var i = 9; i = 17; i++) {
//   var div = $('<div>').addClass('row time-block future').attr('id', i);
//   var textArea = $('<textarea>').addClass('col-8 col-md-10 description');
// } 



// // $(".saveBtn").on("click", function () {
  // //   console.log(this);
  // //   var text = $(this).siblings(".description").val();
  // //   var time = $(this).parent().attr("id");

  // //   localStorage.setItem(time, text);
  // })
  // //Can I make this into a for-loop?
