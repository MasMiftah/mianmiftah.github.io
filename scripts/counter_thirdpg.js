
function updateCounter(){
	fetch('https://api.countapi.xyz/update/greatwall/china/?amount=1')
	.then(res => res.json())
	.then(data => counterElement.innerHTML = data.value)
}

updateCounter()

counterElement = document.getElementsByClassName('count')[0];

//Author: Charles