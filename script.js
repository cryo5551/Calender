function updateCalendar() {
  // Get the selected month and year, or use the current month and year if none are selected
  var month = document.getElementById('month').value || new Date().getMonth() + 1;
  var year = document.getElementById('year').value || new Date().getFullYear();

  // Get the entered date, or use the current date if none is entered
  var enteredDate = document.getElementById('date').value;
  enteredDate = enteredDate ? new Date(enteredDate) : new Date();

  // Get the number of days in the month and the day of the week that the month starts on
  var numDays = new Date(year, month, 0).getDate();
  var startDay = new Date(year, month - 1, 1).getDay();

  // Clear the calendar
  var calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = '';

  // Add cells for the empty days at the beginning of the month
  var row = document.createElement('tr');
  for (var i = 0; i < startDay; i++) {
    var cell = document.createElement('td');
    row.appendChild(cell);
  }

  // Add cells for each day of the month
  for (var i = 1; i <= numDays; i++) {
    // Create a new row if needed
    if (i % 7 === 1) {
      calendarBody.appendChild(row);
      row = document.createElement('tr');
    }

    // Create a cell for the day
    var cell = document.createElement('td');
    cell.textContent = i;

    // Check if the day matches the entered date
    if (i=== enteredDate.getDate()) {
      // Toggle the selected class for the cell
      cell.classList.toggle('selected');
    }

    // Add the cell to the row
    row.appendChild(cell);
  }

  // Add cells for the empty days at the end of the month
  while (row.childNodes.length < 7) {
    var cell = document.createElement('td');
    row.appendChild(cell);
  }

  // Add the final row to the calendar
  calendarBody.appendChild(row);

  // Prevent the form from being submitted
  return false;
}

// Update the calendar when the page loads
updateCalendar();
