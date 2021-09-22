//
// (function (){
//
// console.log("hello world welcome to another beautiful day of coding");
//
// function sayHello() {
//     console.log("hello");
// }
//
// console.log("another way to define a function")
//
// sayHello();
//
//
//
// //define an anonymous function//
// var sayYo = function () {
//     console.log("you just declared a function :0")
//
// }
//
// // declared functions //
// sayHello()
//
// sayYo()
//
//
//
//
// //arguments and parameters//


//
//
// function add (x,y) {return x + Y;
// }
//
// console.log(add(2,3 ))
//
//
// function subtract(x,y){
//     return x-y;
// }
//
//
// // scope//
//
//
// var student = "darrell";
//
// var friday ="good friday";
//
//
// function tellTheDay() {
// return "tell"+student+"its"+ friday;
// }
//
// function greetings() { var username ="kenneth";
//     return "hi"+ username;
//
// }
//
// console.log(greetings())
// console.log(username)
//
//
// function cheackDay() {
//     var day = "monday";
//     return day;
//
//     console.log("its" + cheackDay())
//
// }}
//








// // quick .math exercise //
//
//
// function rollSixSided(number) {
//
// // for (var i = 0; i < number; i++){}
//
//      return Math.floor(Math.random() * 7)
//
// }
//
// console.log("you rolled a"+' '+rollSixSided())






// function tellFortune(number,partnerName,location,job) {
//
//      console.log(" hi "+" you will be married to "+partnerName+"you will have a job in "+ job+"living in "+ location)
//
//      console.log("you will have "+ number +"kids "+ "when you live in "+ location)
//
//      console.log("hi "+ name +"you will live in " + location+ "with " +number+ "kids !")
//
//
// }
//
// console.log(tellFortune(4,"darrell","killeen","technology"))


// console.log("darrell")
//
// var hasTacos = ["blueberry muffin", "bananas", "yogurt", "cereal", "brisket and egg taco"]
//
// var hasNoTaco = ["parfait", "omlette de frumage", "protein shake", "fasting"]
//
//
//
//
//                function tacoTuesday(arr) {
//
//
//                    for (var i = 0; 1 < arr.length; i++) {
//
//
//                        if(arr[i].include("taco")){
//
//                            return true;
//                        }
//
//                        else {return false}
//                    }
//
//
//                }





//
// //TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times
//
//  let max = 5
// let count = 0;
//
// function showTime() {
//
//     // return new date and time
//     let dateTime = new Date();
//
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//
//     count += 1;
//
//     //if the count reaches 5, stop the program.
//
//     console.log(time)
//
//     if (count>=max){
//         clearInterval()
//
//     }
// }
//
// let display = setInterval(showTime, 5000);





// function logsEven(number) {
//
//
//     // var arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//
//     // for (var i = 0; i < arr.length; i++) {
//     //     if (arr[i] % 2 === 0) {
//     //         console.log((arr[i] ));;
//     //     }}}
//
// // console.log(logsEven());
//
//
// for (var i = 0; i < number; i++) {
//     if (i % 2 === 0) {
//         console.log((i));;
//     }}}



function logNum(number) {

    for (var i = 0; i<number ;i++){

        // IF EVEN //
        if (i % 2 ===0){
            console.log((i) + " is an even number ")
        }
        // IF ODD //
        else if (i % 2 !==0){
            console.log((i) + " is an odd number ")
        }

    }

}
    
