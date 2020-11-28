let myImage = document.querySelector('img');

function display_random_image(){
  var images = [{src : "images/greatwall.jpg", width : "500", height : "500"},
                {src : "images/Eiffel.jpg", width : "500", height : "500"}];
  var pre_buffer = [];
  for (var i = 0; j = images.length; i < j; i++){
    pre_buffer[i] = new Image();
    pre_buffer[i].src = images[i].src;
    pre_buffer[i].width = images[i].width;
    pre_buffer[i].height = images[i].height;
  }
  
  function get_rand_int(min, max){
    im_num = Math.floor(Math.random() * (max - min + 1)) + min;
    return pre_buffer[im_num];
  }
  
  var new_image = get_rand_int(0, pre_buffer.length - 1);
  var image = document.getElementsByTagName('img');
  var l = image.length;
  for (var p = 0; p < l; p++){
    image[0].parentNode.removeChild(images[0]);
  }
  document.body.appendChild(new_image);
  
}

myImage.onclick = function() {
  display_random_image();
//   let mySrc = myImage.getAttribute('src');
//   if (mySrc == 'images/questionmark.png'){
//     myImage.setAttribute('src', 'images/greatwall.jpg');
//   }else{
//     myImage.setAttribute('src', 'images/questionmark.png');
//   }
}

let myButton = document.querySelector('button2');
let myHeading = document.querySelector('h1');

function setUsersName() {
  let myName = prompt('Please enter your user name.');
  if(!myName) {
    setUserName();
  } else { 
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hey, ' + myName + ', Click the question mark to see the most popular destination our users have selected!';
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
