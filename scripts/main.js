let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc == 'https://ih1.redbubble.net/image.465732423.4753/flat,1000x1000,075,f.jpg'){
    myImage.setAttribute('src', 'https://www.pngkey.com/png/full/18-182565_eiffel-tower-500-x-500.png');
  }else{
    myImage.setAttribute('src', 'https://ih1.redbubble.net/image.465732423.4753/flat,1000x1000,075,f.jpg');
  }
}
