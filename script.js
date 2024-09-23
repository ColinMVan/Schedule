// Get the current date using the Date object
// var currentDate = new Date();

// // Define arrays for day names and month names
// var dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Extract the day, month, and year components
// var day = currentDate.getDate();
// var month = currentDate.getMonth();
// var year = currentDate.getFullYear();

// // Get the day of the week (0-6) and format it
// var dayOfWeek = currentDate.getDay();
// var formattedDayOfWeek = dayNames[dayOfWeek];

// // Format the date as desired (e.g., "Monday, July 4th, 2009")
// var formattedDate =
//   formattedDayOfWeek +
//   ", " +
//   monthNames[month] +
//   " " +
//   day +
//   getDaySuffix(day) +
//   ", " +
//   year;

// // Function to get the appropriate day suffix (e.g., "st", "nd", "rd", or "th")
// function getDaySuffix(day) {
//   if (day >= 11 && day <= 13) {
//     return "th";
//   }
//   switch (day % 10) {
//     case 1:
//       return "st";
//     case 2:
//       return "nd";
//     case 3:
//       return "rd";
//     default:
//       return "th";
//   }
// }

// // Display the formatted date in the <h2> element
// let titleDate = document.querySelector(".fullDateTitle");
// titleDate.textContent = formattedDate;

// let events = document.querySelector(".events");
// if (dayOfWeek == 1) {
//   events.innerHTML =
//     "<tr> <td>6:00 AM</td> <td>Wake up / Shower</td> <td>Teter</td> </tr> <tr> <td>6:20 AM</td> <td>Get Ready</td> <td>Teter</td> </tr> <tr> <td>6:40 AM</td> <td>Study</td> <td>Teter</td> </tr> <tr> <td>7:00 AM</td> <td>Breakfast</td> <td>Teter</td> </tr> <tr> <td>7:30 AM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>8:00 AM</td> <td>Intro to Informatics</td> <td>Myles Brand Hall - 109</td> </tr> <tr> <td>9:20 AM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>9:45 AM</td> <td>Intro to Computers and Programming</td> <td>Geological Sciences - 1050</td> </tr> <tr> <td>11:00 AM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>11:30 AM</td> <td>Calculus</td> <td>Swain East - 105</td> </tr> <tr> <td>12:20 PM</td> <td>Lunch</td> <td>Goodbody Hall</td> </tr> <tr> <td>1:40 PM</td> <td>Study</td> <td></td> </tr> <tr> <td>2:30 PM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>3:00 PM</td> <td>Intro to Informatics</td> <td>Chemistry - 122</td> </tr> <tr> <td>4:30 PM</td> <td>Second Lunch</td> <td>Forest</td> </tr> <tr> <td>5:40 PM</td> <td>Gym</td> <td>SRSC</td> </tr> <tr> <td>8:00 PM</td> <td>Dinner</td> <td>Forest</td> </tr> <tr> <td>9:00 PM</td> <td>Shower / Get Ready for Bed</td> <td>Teter</td> </tr>";
// } else if (dayOfWeek == 2) {
//   events.innerHTML =
//     "<tr> <td>6:00 AM</td> <td>Wake up / Shower</td> <td>Teter</td> </tr> <tr> <td>6:20 AM</td> <td>Get Ready</td> <td>Teter</td> </tr> <tr> <td>6:40 AM</td> <td>Study</td> <td>Teter</td> </tr> <tr> <td>7:00 AM</td> <td>Breakfast</td> <td>Forest</td> </tr> <tr> <td>8:00 AM</td> <td>Study</td> <td></td> </tr> <tr> <td>10:00 AM</td> <td>Second Breakfast</td> <td>Forest</td> </tr> <tr> <td>11:00 AM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>11:30 AM</td> <td>Calculus</td> <td>Swain East - 105</td> </tr> <tr> <td>11:00 AM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>11:30 AM</td> <td>Calculus</td> <td>Swain East - 105</td> </tr> <tr> <td>12:20 PM</td> <td>Walk to Class</td> <td></td> </tr> <tr> <td>12:40 PM</td> <td>Billiards</td> <td>IMU</td> </tr> <tr> <td>1:30 PM</td> <td>Lunch</td> <td></td> </tr> <tr> <td>2:30 PM</td> <td>Read</td> <td></td> </tr> <tr> <td>3:15 PM</td> <td>Gym</td> <td>SRSC</td> </tr> <tr> <td>4:45 PM</td> <td>Study</td> <td>Teter</td> </tr> <tr> <td>6:30 PM</td> <td>Dinner</td> <td>Forest</td> </tr> <tr> <td>8:00 PM</td> <td>Free Time</td> <td>Teter</td> </tr> <tr> <td>9:00 PM</td> <td>Shower / Get Ready for Bed</td> <td>Teter</td> </tr> ";
// }

// need to set local storage with total calorie amount every time the add button is clicked
// need to retrieve the total calorie amount in the local storage and then put that as the left variable

function updateWidth(total) {
  const widthPercentage = Math.round((total / 3600) * 100);
  document.querySelector(".progress_fill").style.width = `${widthPercentage}%`;
  if (widthPercentage > 95) {
    progressText.style.color = "white";
  } else {
    progressText.style.color = "#707070";
  }
  return widthPercentage;
}

let left = 3600;
let total = 0;
const progressText = document.querySelector(".progress_text");
if (localStorage.length > 0) {
  total = parseInt(localStorage.getItem("total"));
  updateWidth(total);
  left = parseInt(localStorage.getItem("left"));
  updateProgressText(left);
}
function updateProgressBar(value) {
  total += value;
  localStorage.setItem("total", total);
  updateWidth(total);
  left -= value;
  updateProgressText(left);
  localStorage.setItem("left", left);
}

const addButton = document.querySelector(".add");
const calorieCount = document.querySelector(".calorieCount");
addButton.addEventListener("click", () => {
  updateProgressBar(parseInt(calorieCount.value));
});

function updateProgressText(left2) {
  left = left2;
  if (left <= 0) {
    progressText.textContent = "Complete!";
  } else {
    progressText.textContent = `${left}`;
  }
  updateWidth(total);
}

const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
  total = 0;
  updateWidth(total);
  updateProgressText(3600);
  localStorage.clear();
});
