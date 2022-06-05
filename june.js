//Q1=In how many types can we create functions? State the difference between those types by giving examples
//There are 3 ways of writing a function in JavaScript:

//Function Declaration
//Function Expression
//Arrow Function




//function Declaration
function add(a, b) {
    console.log(a + b);
}
add(2, 3)



function minus(x, y) {
    console.log(x - y);
}
minus(9, 5)

//Function Expression: declaire a variable name an function name 

const pooja = function(p, q) {
    console.log(p * q);
}
pooja(2, 3)


//Arrow Function
let pavan = (a, b) => a + b;

console.log(pavan(3, 2));


//Q2=:Write a program to display the cube of the number upto given an integer.

var n = parseInt(prompt('enter the number:'))

var cube;
var cube = n * n * n;
console.log("Cube of a Number = " + cube);
var i, sum = 0;




var sum = 0;
var n = parseInt(prompt('enter the number:'))
for (var i = 1; i < 10; i++) {
    if ((i % 2) !== 0) { //to check whether or odd 
        sum += i;
    }
}
console.log(sum);




// Javascript program to the nth prime number

// initializing the max value
var MAX_SIZE = 1000005;


function SieveOfEratosthenes(primes) {

    var IsPrime = Array(MAX_SIZE).fill(true);

    var p, i;
    for (p = 2; p * p < MAX_SIZE; p++) {

        if (IsPrime[p] == true) {

            for (i = p * p; i < MAX_SIZE; i += p)
                IsPrime[i] = false;
        }
    }


    for (p = 2; p < MAX_SIZE; p++)
        if (IsPrime[p])
            primes.push(p);
}

// Driver Code
// To store all prime numbers
var primes = [];

// Function call
SieveOfEratosthenes(primes);

document.write(
    "5th prime number is " + primes[4] + "<br>"
);
document.write(
    "16th prime number is " + primes[15] + "<br>"
);
document.write(
    "1049th prime number is " + primes[1048] + "<br>"
);