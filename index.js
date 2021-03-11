/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  const timeInt = parseInt(timeString.split(':')[0]);
  if (timeInt < 12) {
    return "Good Morning";
  } else if (timeInt < 17) {
    return "Good Afternoon";
  } else {
  return "Good Evening"}
}
/* Write your implementation of displayMessage() */

function displayMessage(timeString) {
  greet(timeString);
}
