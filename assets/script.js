// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function(){
    ///console.log('blahhh');
      // Pull text event description box
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      console.log("This ran 16");
      // save in localStorage
      localStorage.setItem(time, value);
  });

   // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function hourUpdater() {
    // get current number of hours
    const d = new Date();
    let currentHour = d.getHours();
    console.log(`the current time is: ${currentHour}`);

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
        console.log(`${blockHour} recieved a class of past`)

        var classList = this.classList;
        console.log(classList);

      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        console.log(`${blockHour} recieved a class of present`)
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log(`${blockHour} recieved a class of future`)
      }
    });
  
  };

  hourUpdater();
  //


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

   // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // display current day on page
    const d = new Date();
    console.log(d);
    $("#currentDay").text(d);
});



