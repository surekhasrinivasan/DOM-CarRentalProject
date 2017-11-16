var carsRental = { 
    businessname: 'Enterprise Rent-A-Car',
    econCars: 500,
    midsizeCars: 200,
    renter: "",
};

var rental = {
    types: ['Economy','Midsize'],
    econcarprice: "$200",
    midsizecarprice: "$300"
};

window.onload = function(){
    document.getElementById("busiName").innerHTML = carsRental.businessname;
};

function validateForm() {
    var x = document.forms["myForm"]["rentername"].value;
    if (x == "") {
        alert("Renter's Name must be filled out");
        return false;
    }
};


