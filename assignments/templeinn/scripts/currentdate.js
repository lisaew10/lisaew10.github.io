// create script to get and format current date
// current date
var today = new Date();

// get full year
var fullYear = today.getFullYear();

// get day of the week

var dayOfWeekNumber = today.getDay();

var dayName = new Array(7);
dayName[0] = 'Sunday';
dayName[1] = 'Monday';
dayName[2] = 'Tuesday';
dayName[3] = 'Wednesday';
dayName[4] = 'Thursday';
dayName[5] = 'Friday';
dayName[6] = 'Saturday';
var dayOfWeek = dayName[dayOfWeekNumber];

// get month

var monthNames = new Array(12);
monthNames[0] = 'January';
monthNames[1] = 'February';
monthNames[2] = 'March';
monthNames[3] = 'April';
monthNames[4] = 'May';
monthNames[5] = 'June';
monthNames[6] = 'July';
monthNames[7] = 'August';
monthNames[8] = 'September';
monthNames[9] = 'October';
monthNames[10] = 'November';
monthNames[11] = 'December';

var month = monthNames[today.getMonth()];

var fullDate = dayOfWeek + ', ' + month + ' ' + today.getDate() + ', ' + fullYear;

document.getElementById("currentDate").innerHTML = fullDate;
document.getElementById("copyright-year").innerHTML = fullYear;