function myFunction() {
	"use strict";
	var pic = document.getElementById("orange").style.backgroundImage;
	if (pic.src.match("orange.jpg")) {
		pic.src = "green.jpg";
	}
	else {
		pic.src = "orange.jpg";
	}
}