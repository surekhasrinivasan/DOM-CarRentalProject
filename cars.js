var carRental = {
	businessname: 'Enterprise Car Rental',
	EconomyCars: {
		rentalprice: 50,
		carsavailable: 9
	},
	MidsizeCars: {
		rentalprice: 80,
		carsavailable: 10
	}
};
var rental = {
	EconomyCars:[],
	MidsizeCars: []
};
window.onload = function() {
	document.getElementById("busiName").innerHTML = carRental.businessname;
};

function displayCar(val) {
	document.getElementById('displayInfo').innerHTML = carRental[val].carsavailable + "  " + val + " Available" + "<br>" + "$" + carRental[val].rentalprice + "  / day";
}

function rentFunction() {
	var cartype = document.forms["carSelect"]['cartype'].value;
	//console.log(cartype);
	var renter = document.forms["carSelect"]['rentername'].value;
	//console.log(renter);
	if (cartype == "none") {
		alert("Please select a car type");
		return false;
	} else if (renter == "") {
		alert("Please enter the Renter's name");
		return false;
	} else if(carRental[cartype].carsavailable <= 0){
		alert(cartype + " not available");
		return false;
	}
	else {
		rental[cartype].push({name:renter});
		carRental[cartype].carsavailable--;
		document.getElementById('displayInfo').innerHTML = "Your Rental Car is ready for pick up!";
		event.preventDefault();
		return true;
		
	}
	
}