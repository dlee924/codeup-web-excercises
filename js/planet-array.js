(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

     console.log('Adding "The Sun" to the beginning of the planets array.');

        // adding the sun to the beginning of the array//
        console.log(planets.unshift("sun"))


        // log what we did //
        console.log(planets);



    //new problem//
     console.log('Adding "Pluto" to the end of the planets array.');

     // removing the last item in the array or ['pluto']
     console.log(planets.push("pluto"));


    // log what we did //

    console.log(planets);




    // new problem //

    console.log('Removing "The Sun" from the beginning of the planets array.')


    // maiking a variable with .shift to remove the ['sun'] Array//
    var removedItem = planets.shift();


    //removing the first index in the array or ['sun']//
    console.log("here" + removedItem)


    // log what we did //

    console.log(planets)


    // new problem //

    console.log('Removing "Pluto" from the end of the planets array.');


    console.log('removing pluto: ' + planets[planets.length - 1])

    var removedItem = planets.pop();

    console.log("here" + removedItem)

    console.log(planets)


    // new problem //

    console.log("Reversing the order of the planets array.");


    planets.reverse()

    console.log(planets)




    // new problem //
    console.log("Sorting the planets array.");

    planets.sort()

    console.log(planets);


})();

