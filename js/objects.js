//(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */


    var firstLastnames = {

        first : 'Darrell',

        Last : 'Armstrong'

    };

    var person = firstLastnames;

        console.log(person);



// another way//

// var person = {
//
//     first : 'Darrell',
//
//     Last : 'Armstrong'}
//
// console.log(person.first)
// console.log(person.Last)
// }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var sayHello = function () {
         return ("Hi my name is " +" "+ firstLastnames.first +" "+ firstLastnames.Last);
    }



            console.log(sayHello());








    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */




   // array variable with parameters "name" and "amount" //
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



// creating a function with a .forEach loop for shopper to get there "discounts Amount" //
        function discountsAmount() {

            shoppers.forEach(function (shopper) {

                if (shopper.amount > 200){

                    var discountPrice = shopper.amount - shopper.amount * 0.12;

                    var beforeDiscount = shopper.amount * 0.12;

                    console.log("Hi "+ shopper.name +','+"you amount total is"+','+ shopper.amount +',' +"your discount is"+' '+ +beforeDiscount +',' +','+"Your price after discount"+ discountPrice )
                }

                else {
                    console.log(shopper.name +','+ shopper.amount+','+ "you need to spend over 200$ to get the discount")
                }

            })


        }

// logging the discountsAmounts//

console.log(discountsAmount())




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */



    // creating an Array inside an object with parameters"title" and "author"//
    var books = [

        {title: "To Kill A Mockingbird", author:"Harper Lee"},

        {title:"the Great Gatsby", author:"f. scott Fitzgerald"},

        {title: "Junie B. Jones ", author:"Barbara Parks"},

        {title:" The Art Of War", author:"Sun Tzu"},

        {title:"Emotions Revealed", author:"Paul Eckman"}]



       // logging the book var//
        console.log(books);









    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */









    // loop through the array and log the values//



function f() {
        
    }


 // books.forEach(function (book, index) {
 //     console.log()

// })





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    









//})();