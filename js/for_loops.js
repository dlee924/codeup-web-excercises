var i=1;

function showMultiplicationTable(num) {

    var num = parseInt(prompt('Enter a number: '));

    for(var i = 1; i <= 10; i++) {

        // multiply i with number
        var result = i * num;

        // display the result
        console.log(`${num} * ${i} = ${result}`);



}}

showMultiplicationTable(3);



// generating 10 random numbers Exercise//



//for loop with var declaring the min and max values//

for(var num=20; num<=200; num++) {

    //code creating random number
    random = Math.floor(Math.random() * 10 + 1)


    // send user message asking for random number.//

    var userNum = prompt("choose a random number between 20 and 200");


    // shows a message in console displaying if number is even or odd//
    // num % 2 == 0 ? console.log(`${num} is even`) : console.log(`${num} is odd`);

    if (userNum % 2 == 0 ) {
        console.log(userNum + "is even")
    } else {
        console.log(userNum + "is odd")
    }
    ;
    break;


}




new problem//


for (var j = 1; j <= 9; j = j +1) {
    console.log(j.toString().repeat(i));
}


