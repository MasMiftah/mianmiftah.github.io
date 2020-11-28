function copy(){
	var copyText = document.getElementById("");

	copyText.select();
	document.execCommand("copy");

	alert("Copied link to clipboard");
}
