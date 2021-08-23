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

