// JavaScript Document
function myFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("name").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x)) {
    text = "Input not valid， Name should not be type in number";
	  document.getElementById("demo").innerHTML = text;
}
}