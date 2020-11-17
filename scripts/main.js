let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/questionmark.png'){
    myImage.setAttribute('src', 'images/Eiffel.jpg');
  }else{
    myImage.setAttribute('src', 'images/questionmark.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsersName() {
  let myName = prompt('Please enter your user name.');
  if(!myName) {
    setUserName();
  } else { 
    localStorage.setItem('name', myName);
    myheading.textContent = 'Hey, ' + myName + ', Click the question mark to see the most popular destination our users have selected!';
  }
}

if(!localStorage.getItem('name')){
  setUsersName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hey, ' + myName + ', Click the question mark to see the most popular destination our users have selected!';
}

myButton.onclick = function() {
  setUsersName();
}
