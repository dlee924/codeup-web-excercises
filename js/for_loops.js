console.log('hello')


var i=1;

function showMultiplicationTable(num) {

    var num = parseInt(prompt('Enter a number: '));

    for(var i = 1; i <= 10; i++) {

        // multiply i with number
        var result = i * num;

        // display the result
        console.log(`${num} * ${i} = ${result}`);



}}

showMultiplicationTable(7)