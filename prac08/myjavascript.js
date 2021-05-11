let message = "Hello!";
alert(message);
message = "What is your name?";

let userName = prompt(message);
alert("You said: " + userName);
// for the user name
while (userName.length <= 0){
 userName = prompt("Please enter a user name that has at least
 one letter.");
 }
				   
 if (userName.length < 2){
 alert("I see you are using an initial");
 }
 else{
 alert("Your userName is now updated");
 }
 
if (userName.length = 1){
 alert("I see you are using an initial");
 }
 else{
 alert("Your userName is now updated");
 }

// a new trigger for the get user Age
let age = "May I know your age?";
alert(age);
age = "What is your age?";


let userAge = prompt(age);
alert('Your age is: ' + age)

if (userAge > 50){
	alert('Wow, you are so healthy!')
}
else{
	alert("Wow, you are a yong person isn't it?")
}
	
function showMessage(prompt) {
 alert(prompt)
 }

function showTime(prompt){	
var d = new Date()
document.write(d.getTime() + " milliseconds since 1970/01/01")
	alert(prompt)
}