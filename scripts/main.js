let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc == 'https://www.nicepng.com/png/detail/167-1677510_riddler-question-mark-question-mark.png'){
    myImage.setAttribute('src', 'https://www.pngkey.com/png/full/18-182565_eiffel-tower-500-x-500.png');
  }else{
    myImage.setAttribute('src', 'https://www.nicepng.com/png/detail/167-1677510_riddler-question-mark-question-mark.png');
  }
}
