
(function() {
    "use strict";

// TODO: complete this method
// hint: area = pi * radius^2


    // create a circle object//

    var circle = {
        radius: 3,

        getArea: function circleArea() {

            var circleAreaTotal = this.radius * this.radius * Math.PI;

            return circleAreaTotal

        },









// NEW PROBLEM //


// TODO: complete this method.

// If doRounding is true, round the result to the nearest integer.
// Otherwise, output the complete value



        logInfo: function (doRounding) {

            if (doRounding == true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));

            } else {            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());


            }


        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("28.27");
    circle.logInfo(true);
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