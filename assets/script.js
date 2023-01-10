// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO:  This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the  hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
//  hour in 24-hour time?
//
/* Add code to get any user input that was saved in localStorage and set
 the values of the corresponding textarea elements. 
 
 Add a listener for click events on the save button.*/


//


$(function () {
  //Add code to display the  date in the header of the page.
  var today = dayjs().format('MMM DD, YYYY')
  $('#currentDay').append(today);

  var hour = dayjs().format('[hour-]HH')


  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
  //Can I make this into a for-loop?
  $("9".description).value(localStorage.getItem("9"));
  $("10".description).value(localStorage.getItem("10"));
  $("11".description).value(localStorage.getItem("11"));
  $("12".description).value(localStorage.getItem("12"));
  $("13".description).value(localStorage.getItem("13"));
  $("14".description).value(localStorage.getItem("14"));
  $("15".description).value(localStorage.getItem("15"));
  $("16".description).value(localStorage.getItem("16"));
  $("17".description).value(localStorage.getItem("17"));


  

  $("time-block").each(function () {
     if (this.id === hour) {
      $(this).removeClass('past future').addClass('present');
    } else if (this.id < hour) {
      $(this).removeClass('present future').addClass('past');
    } else if (this.id > hour) {
      $(this).removeClass('past present').addClass('future');
    }
  }
  )
})