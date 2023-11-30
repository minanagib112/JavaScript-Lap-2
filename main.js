//Taking data from user
function getData() {
  var age = Number(prompt("What's Your Age ?"));
  //Validating the input data
  if (age > 1 && age <= 10) {
    alert("You are child");
    getData();
  } else if (age > 10 && age <= 18) {
    alert("You are teenager");
    getData();
  } else if (age > 18 && age <= 50) {
    alert("You are Grown up");
    getData();
  } else if (age > 50) {
    alert("You are old, Goodbye");
  } else {
    alert("Invalid Age");
    getData();
  }
}
getData();

//Program to count the number of vowels in a string
function vowelsCheck() {
  const vowels = ["a", "e", "i", "o", "u"];
  //Take input and setting counter
  let count = 0;
  let input = prompt("Enter any word: ");
  //Looping through the string
  for (let i = 0; i < input.length; i++) {
    //Checking for vowel
    if (vowels.includes(input[i])) {
      count++;
    }
  }
  //Displaying the number of vowels
  alert("Number of vowels: " + count);
}
vowelsCheck();

let input = prompt("The Time Is: ");
let time = input.split(":");
// lets set the array of time
let hours = Number(time[0]);
let minutes = Number(time[1]);
//Time convert to 12-format
if (hours == 0) {
  alert(`It's mid-night, it's 12:${minutes} am`);
} else if (hours < 12) {
  alert(`It's ${hours}:${minutes} am`);
} else if (hours > 12) {
  alert(`It's ${hours - 12}:${minutes} pm`);
}
