var carType ={
    color : "red",

    make: "bmw",

    model: "320i",

    engine: "2L turbo"

};



console.log(carType)









carType.features = ["leather ", 'self diagnostics', '2L turbo', 'bose speakers' ]


for (var i = 0; i < carType.features.length; i++ ){

    console.log(carType.features[i])
}









var vehicleOn = function () {
    alert("Turning the car on" + this.make + this.model)

}
        carType.turnOn = vehicleOn;


var spouseCar = {
    color: "grey",

    make: "honda",

    model: "civic",

    engine: " 6 speed",

    turnOn:  vehicleOn}




var ourGarage = [spouseCar , carType]


console.log(ourGarage)







