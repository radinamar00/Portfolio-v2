//--- add function to scroll
window.onscroll = function () {
	onScrollChecks()
};

function onScrollChecks() {
	//--- get elements for easier naming in the code
	let illustration1 = document.querySelector("#illustration1");
	//--- get length of plant line
	let plantPath = document.querySelector(".plantPath");




	//check position
	if (window.pageYOffset >= illustration1.offsetTop - illustration1.offsetHeight) {

		document.getElementById(
			"Layer5"
		).style.transform="translateY(" + (-1*(window.pageYOffset-illustration1.offsetTop)/2) + "px)";

		document.getElementById(
			"Layer4"
		).style.transform="translateY(" + (-1*(window.pageYOffset-illustration1.offsetTop)/4) + "px)";

		document.getElementById(
			"Layer3"
		).style.transform="translateY(" + (-1*(window.pageYOffset-illustration1.offsetTop)/6) + "px)";

		document.getElementById(
			"Layer2"
		).style.transform="translateY(" + (-1*(window.pageYOffset-illustration1.offsetTop)/4) + "px)";

		document.getElementById(
			"Layer6"
		).style.transform="translateY(" + (-1*(window.pageYOffset-illustration1.offsetTop)/5) + "px)";
	}

	if(window.pageYOffset >= illustration1.offsetTop) {
		plantPath.classList.add("grow"); 
		document.querySelector(".leaf0").classList.add("growLeaf0"); 
		document.querySelector(".leaf1").classList.add("growLeaf1"); 
	}

};