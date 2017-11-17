var rental = {
	businessname: 'Enterprise Car Rental',
	rentername: "",
};
var carRental = {
	EconomyCars: {
		rentalprice: 50,
		carsavailable: 9
	},
	MidsizeCars: {
		rentalprice: 80,
		carsavailable: 10
	}
};
window.onload = function() {
	document.getElementById("busiName").innerHTML = rental.businessname;
};

function displayCar(val) {
	document.getElementById('displayInfo').innerHTML = carRental[val].carsavailable + "  " + val + " Available" + "<br>" + "$" + carRental[val].rentalprice + "  / day";
}

function rentFunction() {
	var cartype = document.forms["carSelect"]['cartype'].value;
	var renter = document.forms["carSelect"]['rentername'].value;
	if (cartype == "none") {
		alert("Please select a car type");
	} else if (renter == "") {
		alert("Please enter the Renter's name");
	} else {
		carRental[cartype].carsavailable--;
		document.getElementById('displayInfo').innerHTML = "Your Rental Car is ready for pick up!";
	}
	return false;
}