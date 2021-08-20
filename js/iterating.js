console.log("hello")



// (function(){
    "use strict";

    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */

    var names = ["Darrell", "daryl", "aj","alex"]



    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log([names])


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("the name is" + names[0] )
    console.log("the name is" + names[1] )
    console.log("the name is" + names[2] )
    console.log("the name is" + names[3] )


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

        for (var start = 0 ; start < names.length ; start++){
            console.log("the names of my family" + start+ names[start])
        }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */


   names.forEach(function (name) {

       console.log(" The names of my family are "+names)
   });



    // /**
    //  * TODO:
    //  * Create the following three functions, each will accept an array and
    //  * return an an element from it
    //  * - first: returns the first item in the array
    //  * - second: returns the second item in the array
    //  * - last: returns the last item in the array
    //  *
    //  * Example:
    //  *  > first([1, 2, 3, 4, 5]) // returns 1
    //  *  > second([1, 2, 3, 4, 5]) // returns 2
    //  *  > last([1, 2, 3, 4, 5]) // return 5



function returnFirstItem(array0) {

    console.log(names[0]);

}

returnFirstItem();




function returnSecondItem(array1) {

    console.log(names[1]);

}

returnSecondItem();



function returnLastItem(array4) {
    console.log(names[3])

}

returnLastItem()




// })();