var arr1 = ["PHP", "JAVA", "PYTHON"];
var arr2 = ["PHP", "RUBY", ".NET"];
var arr3 = ["ANGULAR", "JAVASCRIPT", "TYPSCRIPT"];
var arr4 = ["ECMASCRIPT", "JAVA", "PYTHON"];
var mergedArray = [...new Set([...arr1, ...arr2, ...arr3, ...arr4])];

console.log(mergedArray);

//qstn 3
function Sum(){
    var num1= parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value);
    var op=document.getElementById('op').value;
    
    switch(op){
        case'+':
        Display.value=num1+num2;
        return false;
        case'-':
        Display.value=num1-num2;
        return false;
        case'*':
        Display.value=num1*num2;
        return false;
        case'/':
        Display.value=num1/num2;
        return false;
  
        default:
          break;
  
      }
    }    


//qstn 4

function Diff(){
    var n1=parseFloat(document.getElementById('n1').value);
    var n2=parseFloat(document.getElementById('n2').value);
    var sub = n1 - n2;
    document.getElementById('result').innerHTML='The result is '+ sub; 
}

// qstn 5
function Cube(){
   var c1 = parseFloat(document.getElementById('cube').value);
   document.getElementById('cubeResult').innerHTML='The cube is '+ c1*c1*c1;

}
// qstn  6
function Swap(){
    var sw1= parseFloat(document.getElementById('snum1').value);
    var sw2= parseFloat(document.getElementById('snum2').value);

    var temp= sw1;
    sw1=sw2;
    sw2=temp;
    // document.getElementById('swapped').innerHTML="Num1 = " + sw1 + ", Num2 = " + sw2;
   
    document.getElementById('snum1').value = sw1;
    document.getElementById('snum2').value = sw2;

    // document.getElementById('snum1').innerHTML='sw1';
    // document.getElementById('snum2').innerHTML='sw2';
    

}
let maxStars = 5; 
    let rating = 0;

    function rate(value) {
        rating = value;
        displayResult();
    }

    function displayResult() {
        document.getElementById('Result').innerHTML = `You rated: ${rating} out of ${maxStars} stars.`;
    }
    // qstn 8
    
    function findLargestNumber(){
        var l1=parseFloat(document.getElementById('l1').value);
        var l2=parseFloat(document.getElementById('l2').value);
    
        if (l1 > l2) {
         document.getElementById('largest').innerText="largest number is "+ l1;
            
        }
        else if (l1 < l2) {
              document.getElementById('largest').innerText="largest number is "+ l2;
        }
        else {
            document.getElementById('largest').innerText = "Both numbers are equal."; 
        }
    }
     
    // qstn 9
    function findLargest3(){
        var lr1=parseFloat(document.getElementById('lr1').value);
        var lr2=parseFloat(document.getElementById('lr2').value);
        var lr3=parseFloat(document.getElementById('lr3').value);
        if (lr1 > lr2 && lr1 > lr3) {
            document.getElementById('larger').innerHTML = "The largest number is: " + lr1;
        } else if (lr2 > lr1 && lr2 > lr3) {
            document.getElementById('larger').innerHTML = "The largest number is: " + lr2;
        } 
        else if (lr1 == lr2 && lr2 == lr3) {
            document.getElementById('larger').innerHTML = "numbers are equal";
        } 
        else {
            document.getElementById('larger').innerHTML = "The largest number is: " + lr3;
        }
    };

     // function findLargestNumber() {

    //     const num1 = parseFloat(document.getElementById('l1').value);
    //     const num2 = parseFloat(document.getElementById('l2').value);
    //     console.log(num1, num2)
  
    
    //     if (!isNaN(num1) && !isNaN(num2)) {
          
    //       const largestNumber = num1 > num2 ? num1 : num2;
    //       document.getElementById('largest').innerText = 'The largest number is: ' + largestNumber;
    //     } else {
          
    //       document.getElementById('largest').innerText = 'Please enter valid numbers.';
    //     }
    //   }
     
    // qstn 10

    function Even(){
        var inpt= parseInt(document.getElementById('Even-inpt').value);
         
        if (inpt % 2==0) {
           
        document.getElementById('Even-rslt').innerHTML=" This is an even number";

            
        } else {

          document.getElementById('Even-rslt').innerHTML=" Not an even number";
   
        }
    }
// qstn 11
    function Odd(){
        var odd=parseInt(document.getElementById('inpt-odd').value);
        if (odd % 2 !=0) {
            document.getElementById('odd-rslt').innerHTML=" This is an odd number";    
            
        } else {
             document.getElementById('odd-rslt').innerHTML=" Not an odd number"; 
           
        }
    }

    // qstn 12
    function Divisible(){
        var divisible=parseFloat(document.getElementById('inpt-divisible').value);

        if (divisible % 2===0) {
            if(divisible % 5 === 0){
                document.getElementById('divi-rslt').innerHTML=" The number is divisible by 2 and 5 "; 
            }
            else {
                document.getElementById('divi-rslt').innerHTML=" Invalid number ";
            } 
        
            
        }else {
         
            document.getElementById('divi-rslt').innerHTML=" The number is not divisible by 2 and 5 ";  
        }
        }
    

 // function  Divisible(){
    //     var divisible=parseFloat(document.getElementById('inpt-divisible').value);

    //     if(divisible % 2==0 ){
    //         document.getElementById('divi-rslt').innerHTML=" The number is divisible by 2 "; 
    //       if( divisible % 5==0 ){
    //         document.getElementById('divi-rslt').innerHTML="The number is also divisible 5";  
    //     } else{
    //         document.getElementById('divi-rslt').innerHTML= "Not divisible 5"; 
    //     }

    // }else{
    //     document.getElementById('divi-rslt').innerHTML= "Not divisible 2";
    // }

    // }
      

//     function  Divisible(){
//         var divisible=parseFloat(document.getElementById('inpt-divisible').value);

//         if(divisible % 2==0 && divisible % 5==0 ){
//             document.getElementById('divi-rslt').innerHTML=" The number is divisible by 2 and 5 "; 
//           if( divisible % 2==0 ){
//             document.getElementById('divi-rslt').innerHTML="The number is also divisible 2";  
//         } else if (divisible % 2!=0) {
//             document.getElementById('divi-rslt').innerHTML= "Not divisible 2"; 
//         } else if(divisible % 5==0){
//             document.getElementById('divi-rslt').innerHTML= "Divisible by 5"; 
//         }
//         else if(divisible % 5!=0){
//             document.getElementById('divi-rslt').innerHTML= "Divisible by 5"; 
//         }
//         } 

//      else{
//         document.getElementById('divi-rslt').innerHTML= "Not divisible ";
//     }

// }



// function checkPalindrome() {
     
//     var inputNumber = document.getElementById("palindrome-input").value;

//     // Convert the number to a string to check for palindrome
//     var numberStr = inputNumber.toString();

//     // Reverse the string
//     var reversedStr = numberStr.split('').reverse().join('');

//     // Check if the original and reversed strings are the same
//     if (numberStr === reversedStr) {
//         document.getElementById("palindrome-rslt").innerText = inputNumber + " is a Palindrome!";
//     } else {
//         document.getElementById("palindrome-rslt").innerText = inputNumber + " is not a Palindrome.";
//     }
// }

function checkPalindrome() {
    // Get the input value without jQuery
    var inputNumber = document.getElementById("palindrome-input").value;

    // Convert the number to a string to check for palindrome
    var numberStr = inputNumber.toString();

    // Initialize variables for loop
    var isPalindrome = true;
    var length = numberStr.length;

    // Use a loop to compare characters
    for (var i = 0; i < Math.floor(length / 2); i++) {
        if (numberStr[i] !== numberStr[length - 1 - i]) {
            isPalindrome = false;
            break; // Exit the loop if a mismatch is found
        }
    }

    // Check if the original and reversed strings are the same
    if (isPalindrome) {
        document.getElementById("palindrome-rslt").innerText = inputNumber + " is a Palindrome!";
    } else {
        document.getElementById("palindrome-rslt").innerText = inputNumber + " is not a Palindrome.";
    }
}

function checkPrime() {
    // Get the input value
    var inputNum = document.getElementById("prime-input").value;

    // Convert the input to a number
    var number = parseInt(inputNum);

    // Check if the number is greater than 1
    if (number > 1) {
        // Check for factors from 2 to the square root of the number
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                // If any factor is found, it's not a prime number
                document.getElementById("prime-rslt").innerText = number + " is not a Prime number.";
                return;
            }
        }
        // If no factors are found, it's a prime number
        document.getElementById("prime-rslt").innerText = number + " is a Prime number!";
    } else {
        // If the number is less than or equal to 1, it's not a prime number
        document.getElementById("prime-rslt").innerText = number + " is not a Prime number.";
    }
}

// function Reverse(){
//     var reverse=document.getElementById('reverse-input').value;
    
//     var reversed=reverse.split('').reverse().join('');


//     document.getElementById('reverse-rslt').innerText=reversed;
    


// }
function Reverse() {
    var input = document.getElementById('reverse-input').value;
    var reversed = '';

    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
            
    document.getElementById('reverse-rslt').innerText = reversed;
}


//  function Reversestr(){

//    var Reverse=document.getElementById('reverse-str').value;
    
//   var Reversed=Reverse.split('').reverse().join('');


//    document.getElementById('reverseStr-rslt').innerText=Reversed;
    


//  }
//   qstn 18
function Reversestr() {
    var input = document.getElementById('reverse-str').value;
    var reversed = '';

    for (var i = input.length - 1; i >= 0; i--)
     {
        reversed += input[i];
    }

    document.getElementById('reverseStr-rslt').innerText = reversed;                     
}  

// qstn 21
  function Factorial(){
    var factor = document.getElementById('factorial').value;

    var rslt =1
    for(var i =1; i<=factor;  i++)
    {
    rslt *=i;
    }
   

  document.getElementById('factorial-rslt').innerText =rslt; 

}
// qstn 19

    function Fibonacci() {
        var num = document.getElementById("Fibonacci").value;
        var result = generateFibonacci(num);
        document.getElementById("Fibonacci-rslt").innerHTML = result;
    }

    function generateFibonacci(n) {
        var fibSeries = [];
        for (var i = 0; i < n; i++) {
            fibSeries.push(calculateFibonacci(i));
        }
        return fibSeries.join(", ");
    }

    function calculateFibonacci(index) {
        if (index <= 1) {
            return index;
        } else {
            var a = 0, b = 1, temp;
            for (var i = 2; i <= index; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }
            return b;
        }
    }
// Q 22
    function printPrimes() {
        var limit = parseInt(document.getElementById("primes").value);
        var primesArray = [];

        for (var num = 2; num <= limit; num++) {
            if (isPrime(num)) {
                primesArray.push(num);
            }
        }

        document.getElementById("primes-rslt").textContent = "Prime numbers up to " + limit + ": " + primesArray.join(', ');
    }

    function isPrime(n) {
        if (n <= 1) return false;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    // q 23
    function multiplicationTable() {
        var number = parseInt(document.getElementById("multiplicationtable").value);
        var tableResult = "";

        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            tableResult += number + " x " + i + " = " + result + "<br>";
        }

        document.getElementById("multi-rslt").innerHTML = tableResult;
    }

    // q 24
    function calculateSum() {
        var limit = parseInt(document.getElementById("sums").value);
        var sum = 0;

        for (var i = 1; i <= limit; i++) {
            sum += i;
        }

        document.getElementById("sums-rslt").textContent = "Sum of numbers up to " + limit + " is: " + sum;
    }
    // q 25
    function weeks() {
        // Get the input value
        var inputNumber = document.getElementById("weeks").value;

        // Get the result element
        var resultElement = document.getElementById("weeks-rslt");

        // Convert the input to an integer
        var dayNumber = parseInt(inputNumber);

        // Use a switch statement to determine the day of the week
        switch (dayNumber) {
            case 1:
                resultElement.innerText = "Sunday";
                break;
            case 2:
                resultElement.innerText = "Monday";
                break;
            case 3:
                resultElement.innerText = "Tuesday";
                break;
            case 4:
                resultElement.innerText = "Wednesday";
                break;
            case 5:
                resultElement.innerText = "Thursday";
                break;
            case 6:
                resultElement.innerText = "Friday";
                break;
            case 7:
                resultElement.innerText = "Saturday";
                break;
            default:
                resultElement.innerText = "Invalid input. Please enter a number between 1 and 7.";
        }
    }
// Q 26
    function CheckPalindrome() {
    // Get the input value without jQuery
    var inputNumber = document.getElementById("Palindrome-input").value;

    // Convert the number to a string to check for palindrome
    var numberStr = inputNumber.toString();

    // Initialize variables for loop
    var isPalindrome = true;
    var length = numberStr.length;

    // Use a loop to compare characters
    for (var i = 0; i < Math.floor(length / 2); i++) {
        if (numberStr[i] !== numberStr[length - 1 - i]) {
            isPalindrome = false;
            break; // Exit the loop if a mismatch is found
        }
    }

    // Check if the original and reversed strings are the same
    if (isPalindrome) {
        document.getElementById("Palindrome-rslt").innerText = inputNumber + " is a Palindrome!";
    } else {
        document.getElementById("Palindrome-rslt").innerText = inputNumber + " is not a Palindrome.";
    }
    }
    // q 27

    