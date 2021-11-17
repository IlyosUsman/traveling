
var elForm = document.querySelector("#form");
var elSubmit = document.querySelector("#submit");
var elInput = document.querySelector("#input");

var elResultWalker = document.querySelector("#resultWalker");
var elResultBike = document.querySelector("#resultBike");
var elResultCar = document.querySelector("#resultCar");
var elResultPlane = document.querySelector("#resultPlane");

var walkerSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;




//     var elInput = document.querySelector("#input").value.trim();

function calculateDistance(distance, speed){
    var hours = Math.floor(distance / speed);
    var minuts = Math.floor((distance / speed - hours) * 60);
    var seconds = Math.ceil(((distance / speed - hours) * 60 - minuts) * 60);

    var minutjon = minuts? `${minuts} minut` : "" ;
    var secundjon = seconds? `${seconds} second` : "" ;

    if (hours === 0 && minuts === 0) {
        return `${minutjon} ${seconds}`;
    }else if(hours === 0) {
        return `${minutjon} ${secundjon}`
    }else {
        return `${hours} hour ${minutjon} ${secundjon}`
    }
}

    elForm.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var input = Number(elInput.value.trim());
        
        if (input <=0) {
            alert("Enter a number greater than zero");
            return console.log("Enter a number greater than zero");
        } else if (isNaN(input)) {
            alert("Enter the number");
            return console.log("Enter the number");
        }

        elResultWalker.textContent = calculateDistance(input, walkerSpeed );
        elResultBike.textContent = calculateDistance(input, bikeSpeed);
        elResultCar.textContent = calculateDistance(input, carSpeed);
        elResultPlane.textContent = calculateDistance(input, planeSpeed);
    })



    // var spendTimeWalker = elInput / walkerSpeed;
    // var spendTimeBike = elInput / bikeSpeed;
    // var spendTimeCar = elInput / carSpeed;
    // var spendTimePlane = elInput / planeSeed;
    // var minutWalker = Math.ceil(((spendTimeWalker - Math.floor(spendTimeWalker)) * 60));
    // var minutBike = Math.ceil(((spendTimeBike - Math.floor(spendTimeBike)) * 60));
    // var minutCar = Math.ceil(((spendTimeCar - Math.floor(spendTimeCar)) * 60));
    // var minutPlane = Math.ceil(((spendTimePlane - Math.floor(spendTimePlane)) * 60));

    // elResultWalker.textContent = Math.floor(spendTimeWalker) + " h " + minutWalker + " min ";
    // elResultBike.textContent = Math.floor(spendTimeBike) + " h " + minutBike + " min ";
    // elResultCar.textContent = Math.floor(spendTimeCar) + " h " + minutCar + " min ";
    // elResultPlane.textContent = Math.floor(spendTimePlane) + " h " + minutPlane + " min ";
    
