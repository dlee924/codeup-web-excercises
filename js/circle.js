(function() {
    "use strict";

// TODO: complete this method
// hint: area = pi * radius^2


    // create a circle object
    var circle = {
        radius: 3,}

        getArea: function circleArea() {

            return circle.radius * circle.radius * Math.PI;
        };


console.log(circleArea())





// NEW PROBLEM //


// TODO: complete this method.

// If doRounding is true, round the result to the nearest integer.
// Otherwise, output the complete value

    let radiusRounding = Math.round(circleArea())

        logInfo: function  (doRounding) {




        if (doRounding === true){
           return  radiusRounding
        }
        else {circleArea()}

            console.log("Area of a circle with radius: " + this.radius + ", is: "+ radiusRounding);

    }



    // log info about the circle
    console.log("Raw circle information");
    circle.log(false);
    console.log("28.27");
    circle.log(true);
//
    console.log("=======================================================");
// //     // TODO: Change the radius of the circle to 5.
//
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);




})();