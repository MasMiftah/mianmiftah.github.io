let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/questionmark.png'){
    myImage.setAttribute('src', 'images/Eiffel.jpg');
  }else{
    myImage.setAttribute('src', 'images/questionmark.png');
  }
}
