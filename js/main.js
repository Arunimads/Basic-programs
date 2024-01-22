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

    
    function acceptArray() {
        // Get the input value and split it into an array
        var inputText = document.getElementById('array-input').value;
        var inputArray = inputText.split(' ');

        // Check if the inputArray has exactly 10 elements
        if (inputArray.length !== 10) {
            alert('Please enter exactly 10 numbers separated by space.');
            return;
        }

        // Convert the input values to numbers
        var numbersArray = inputArray.map(function (value) {
            return parseFloat(value);
        });

        // Display the entered array
        document.getElementById('array-rslt').innerText = 'Entered array: [' + numbersArray.join(', ') + ']';
    }
    // q 28
    function acceptArray2() {
        // Get the input value and split it into an array
        var inputText = document.getElementById('array2-input').value;
        var numbersArray = inputText.split(' ').map(parseFloat);

        // Check if the array has exactly 10 elements
        if (numbersArray.length !== 10 || numbersArray.some(isNaN)) {
            alert('Please enter exactly 10 valid numbers separated by space.');
            return;
        }

        // Display the entered array
        document.getElementById('array2-rslt').innerText = 'Entered array: [' + numbersArray.join(', ') + ']';
    }
    // Q 29
    function arrayelementSum() {
        // Get the input value and split it into an array
        var inputText = document.getElementById('inputarray').value;
        var inputArray = inputText.split(' ').map(parseFloat);

        // Check if the array is not empty
        if (inputArray.length === 0 || inputArray.some(isNaN)) {
            alert('Please enter valid numbers separated by space.');
            return;
        }

        // Calculate the sum of array elements
        var sum = inputArray.reduce(function (acc, currentValue) {
            return acc + currentValue;
        }, 0);

        // Display the sum of array elements
        document.getElementById('sumArrayElements').innerText = 'Sum of array elements: ' + sum;
    }
    // q 30
    function arraySum() {
        // Get the input values
        var num1Input = document.getElementById('num1array').value;
        var num2Input = document.getElementById('num2array').value;

        // Convert the input values to arrays
        var num1Array = num1Input.split(' ').map(parseFloat);
        var num2Array = num2Input.split(' ').map(parseFloat);

        // Check if both arrays have the same length
        if (num1Array.length !== num2Array.length) {
            alert('Please enter arrays with the same length.');
            return;
        }
         // Calculate the sum of the arrays
         var sumArray = num1Array.map(function (value, index) {
            return value + num2Array[index];
        });

        // Display the sum array
        document.getElementById('sumArray').innerText = 'Sum of arrays: [' + sumArray.join(', ') + ']';
    }

    // q 31
    function largeArray() {
        // Get the input value and split it into an array of numbers
        var inputArray = document.getElementById('largeArray').value.split(' ').map(Number);
    
        // Check if the input is not empty
        if (inputArray.length > 0) {
            // Find the largest element in the array
            var largestElement = Math.max.apply(null, inputArray);
    
            // Display the result
            document.getElementById('largeArrayRslt').innerText = 'Largest Element: ' + largestElement;
        } else {
            // Display an error message if the input is empty
            document.getElementById('largeArrayRslt').innerText = 'Please enter numbers in the input field.';
        }
    }

    // q 32
    function sortArray() {
        // Get the input value and split it into an array of numbers
        var inputArray = document.getElementById('sortArray').value.split(' ').map(Number);
    
        // Check if the input is not empty
        if (inputArray.length > 0) {
            // Sort the array in ascending order
            var sortedArray = inputArray.sort(function(a, b) {
                return a - b;
            });
    
            // Display the sorted array
            document.getElementById('sortArrayRslt').innerText = 'Sorted Array (Ascending): ' + sortedArray.join(', ');
        } else {
            // Display an error message if the input is empty
            document.getElementById('sortArrayRslt').innerText = 'Please enter numbers in the input field.';
        }
    }
    // q 33
    function searchArray() {
        // Get the input values and split them into an array of numbers
        var inputArray = document.getElementById('Arrayinput').value.split(' ').map(Number);
        var searchElement = Number(document.getElementById('searchArray').value);
    
        // Check if the input array is not empty
        if (inputArray.length > 0) {
            // Use indexOf to find the index of the search element in the array
            var index = inputArray.indexOf(searchElement);
    
            if (index !== -1) {
                // Display the result if the element is found
                document.getElementById('searchArrayRslt').innerText = 'Element found at index ' + index;
            } else {
                // Display a message if the element is not found
                document.getElementById('searchArrayRslt').innerText = 'Element not found in the array.';
            }
        } else {
            // Display an error message if the input array is empty
            document.getElementById('searchArrayRslt').innerText = 'Please enter numbers in the input field.';
        }
    }
    // q 34

    function sameArray() {
        // Get the input values and split them into arrays of numbers
        var array1 = document.getElementById('samearray1').value.split(' ').map(Number);
        var array2 = document.getElementById('samearray2').value.split(' ').map(Number);
    
        // Check if both input arrays have the same length
        if (array1.length === array2.length) {
            // Check if each element in the arrays is the same
            var areEqual = true;
            for (var i = 0; i < array1.length; i++) {
                if (array1[i] !== array2[i]) {
                    areEqual = false;
                    break;
                }
            }
    
            // Display the result
            if (areEqual) {
                document.getElementById('sameArrayRslt').innerText = 'Arrays are the same.';
            } else {
                document.getElementById('sameArrayRslt').innerText = 'Arrays are not the same.';
            }
        } else {
            // Display a message if the arrays have different lengths
            document.getElementById('sameArrayRslt').innerText = 'Arrays have different lengths.';
        }
    }

    // q 35
    function removeArray() {
        // Get the input values and split them into arrays of numbers
        var fullArray = document.getElementById('fullarray').value.split(' ').map(Number);
        var elementToRemove = Number(document.getElementById('removedarray').value);
    
        // Check if the input array is not empty
        if (fullArray.length > 0) {
            // Use indexOf to find the index of the element to remove
            var indexToRemove = fullArray.indexOf(elementToRemove);
    
            if (indexToRemove !== -1) {
                // Remove the element from the array using splice
                fullArray.splice(indexToRemove, 1);
    
                // Display the modified array
                document.getElementById('removeArrayRslt').innerText = 'Array after removal: ' + fullArray.join(', ');
            } else {
                // Display a message if the element is not found in the array
                document.getElementById('removeArrayRslt').innerText = 'Element not found in the array.';
            }
        } else {
            // Display an error message if the input array is empty
            document.getElementById('removeArrayRslt').innerText = 'Please enter numbers in the input field.';
        }
    }
    // q 36
    function matrix() {
        // Get the input value and split it into an array of numbers
        var inputMatrix = document.getElementById('inputmatrix').value.split(' ').map(Number);
    
        // Check if the input array has exactly 4 elements
        if (inputMatrix.length === 4) {
            // Create a 2x2 matrix
            var matrix = [
                [inputMatrix[0], inputMatrix[1]],
                [inputMatrix[2], inputMatrix[3]]
            ];
    
            // Display the matrix
            document.getElementById('matrixRslt').innerText = 'Matrix:\n' + matrix.map(row => row.join(' ')).join('\n');
        } else {
            // Display an error message if the input is not valid
            document.getElementById('matrixRslt').innerText = 'Please enter exactly 4 numbers for a 2x2 matrix.';
        }
    }
    // q 37
    function transpose() {
        // Get the input value and split it into an array of numbers
        var inputMatrix = document.getElementById('transposematrix').value.split(' ').map(Number);
    
        // Check if the input array has a valid square matrix shape (n x n)
        var matrixSize = Math.sqrt(inputMatrix.length);
        if (matrixSize % 1 === 0) {
            // Create the original matrix
            var originalMatrix = [];
            for (var i = 0; i < matrixSize; i++) {
                originalMatrix.push(inputMatrix.slice(i * matrixSize, (i + 1) * matrixSize));
            }
    
            // Calculate the transpose of the matrix
            var transposeMatrix = originalMatrix[0].map((col, i) => originalMatrix.map(row => row[i]));
    
            // Display the transpose matrix
            document.getElementById('transposematrixRslt').innerText =
                'Original Matrix:\n' + originalMatrix.map(row => row.join(' ')).join('\n') +
                '\n\nTranspose Matrix:\n' + transposeMatrix.map(row => row.join(' ')).join('\n');
        } else {
            // Display an error message if the input is not a valid square matrix
            document.getElementById('transposematrixRslt').innerText =
                'Please enter a valid square matrix (n x n) with correct number of elements.';
        }
    }
    // Q 38
    function sumMatrix() {
        // Get the input values and split them into arrays of numbers
        var matrix1 = document.getElementById('matrix1').value.split(' ').map(Number);
        var matrix2 = document.getElementById('matrix2').value.split(' ').map(Number);
    
        // Check if the input arrays have the same number of elements
        if (matrix1.length === matrix2.length) {
            // Determine the size of the matrices (assuming both are square matrices)
            var matrixSize = Math.sqrt(matrix1.length);
            if (matrixSize % 1 === 0) {
                // Create the matrices
                var matrix1Array = [];
                var matrix2Array = [];
                for (var i = 0; i < matrixSize; i++) {
                    matrix1Array.push(matrix1.slice(i * matrixSize, (i + 1) * matrixSize));
                    matrix2Array.push(matrix2.slice(i * matrixSize, (i + 1) * matrixSize));
                }
    
                // Calculate the sum of the matrices
                var sumMatrixArray = matrix1Array.map((row, i) =>
                    row.map((element, j) => element + matrix2Array[i][j])
                );
    
                // Display the sum matrix
                document.getElementById('sumMatrixRslt').innerText =
                    'Matrix1:\n' + matrix1Array.map(row => row.join(' ')).join('\n') +
                    '\n\nMatrix2:\n' + matrix2Array.map(row => row.join(' ')).join('\n') +
                    '\n\nSum Matrix:\n' + sumMatrixArray.map(row => row.join(' ')).join('\n');
            } else {
                // Display an error message if the input is not square matrices
                document.getElementById('sumMatrixRslt').innerText =
                    'Please enter square matrices with the same number of elements.';
            }
        } else {
            // Display an error message if the input arrays have different lengths
            document.getElementById('sumMatrixRslt').innerText =
                'Please enter matrices with the same number of elements.';
        }
    }
    // q 39
    function multiMatrix() {
        // Get the input values and split them into arrays of numbers
        var matrix1 = document.getElementById('multimatrix1').value.split(' ').map(Number);
        var matrix2 = document.getElementById('multimatrix2').value.split(' ').map(Number);
    
        // Check if the input arrays have the correct number of elements (9 elements for 3x3 matrices)
        if (matrix1.length === 9 && matrix2.length === 9) {
            // Create the matrices
            var matrix1Array = [];
            var matrix2Array = [];
            for (var i = 0; i < 3; i++) {
                matrix1Array.push(matrix1.slice(i * 3, (i + 1) * 3));
                matrix2Array.push(matrix2.slice(i * 3, (i + 1) * 3));
            }
    
            // Calculate the multiplication of the matrices
            var resultMatrixArray = [];
            for (var i = 0; i < 3; i++) {
                resultMatrixArray.push([]);
                for (var j = 0; j < 3; j++) {
                    var sum = 0;
                    for (var k = 0; k < 3; k++) {
                        sum += matrix1Array[i][k] * matrix2Array[k][j];
                    }
                    resultMatrixArray[i].push(sum);
                }
            }
    
            // Display the result matrix
            document.getElementById('multiMatrixRslt').innerText =
                'Matrix1:\n' + matrix1Array.map(row => row.join(' ')).join('\n') +
                '\n\nMatrix2:\n' + matrix2Array.map(row => row.join(' ')).join('\n') +
                '\n\nResult Matrix:\n' + resultMatrixArray.map(row => row.join(' ')).join('\n');
        } else {
            // Display an error message if the input arrays have incorrect number of elements
            document.getElementById('multiMatrixRslt').innerText =
                'Please enter two 3x3 matrices with a total of 9 elements each.';
        }
    }
    // q 40
    function sameMatrix() {
        // Get the input values and split them into arrays of numbers
        var matrix1 = document.getElementById('samematrix1').value.split(' ').map(Number);
        var matrix2 = document.getElementById('samematrix2').value.split(' ').map(Number);
    
        // Check if the input arrays have the same number of elements
        if (matrix1.length === matrix2.length) {
            // Determine the size of the matrices (assuming both are square matrices)
            var matrixSize = Math.sqrt(matrix1.length);
            if (matrixSize % 1 === 0) {
                // Create the matrices
                var matrix1Array = [];
                var matrix2Array = [];
                for (var i = 0; i < matrixSize; i++) {
                    matrix1Array.push(matrix1.slice(i * matrixSize, (i + 1) * matrixSize));
                    matrix2Array.push(matrix2.slice(i * matrixSize, (i + 1) * matrixSize));
                }
    
                // Check if each corresponding element in the matrices is the same
                var areEqual = true;
                for (var i = 0; i < matrixSize; i++) {
                    for (var j = 0; j < matrixSize; j++) {
                        if (matrix1Array[i][j] !== matrix2Array[i][j]) {
                            areEqual = false;
                            break;
                        }
                    }
                    if (!areEqual) {
                        break;
                    }
                }
    
                // Display the result
                if (areEqual) {
                    document.getElementById('sameMatrixRslt').innerText = 'Matrices are the same.';
                } else {
                    document.getElementById('sameMatrixRslt').innerText = 'Matrices are not the same.';
                }
            } else {
                // Display an error message if the input is not square matrices
                document.getElementById('sameMatrixRslt').innerText =
                    'Please enter square matrices with the same number of elements.';
            }
        } else {
            // Display an error message if the input arrays have different lengths
            document.getElementById('sameMatrixRslt').innerText =
                'Please enter matrices with the same number of elements.';
        }
    }
   
    //qstn 41

function Matrixreplace() {
    var matrxrplce = document.getElementById("matrixrplceinpt1");


    var items = matrxrplce.value.split(" ");
    var arr = new Array(2); // declaring array variable
    let count = 0;
    

    if (matrxrplce.value === "") {
        matrixrplcerslt.innerHTML = "Please enter valid numbers.";
        return;
    }


    // declare 2d array
    for (let i = 0; i < 2; i++) {
        arr[i] = [];
    }

    // loop to input 2d array elements
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            arr[i][j] = items[count++];
        }
    }

    // display array
    matrixrplcerslt.innerHTML = "<strong>Original matrix:</strong> <br>";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matrixrplcerslt.innerHTML += `${arr[i][j]}&nbsp;`;
        }
        matrixrplcerslt.innerHTML += `<br>`;
    }

    if (arr[0][0] < arr[1][1]) {
        arr[1][1] = 1;
    } else if (arr[0][0] > arr[1][1]) {
        arr[0][0] = 0;
    }

    // display result
    matrixrplcerslt.innerHTML += "<strong>Result:</strong> <br>";
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            matrixrplcerslt.innerHTML += `${arr[i][j]}&nbsp;`;
        }
        matrixrplcerslt.innerHTML += `<br>`;
    }
}

//qstn 42
function Asciivalue() {
    const inpVal = asciiInpt.value;
    // const asc = inpVal.charCodeAt(0); OR
    const asc = inpVal.codePointAt(0);
    Asciirslt.innerHTML = `ASCII value of letter ${inpVal} is ${asc}`;
}


//qstn 43


function windChill() {
    var windSpeed = windspeedInpt.value;
    var temp = airtempInpt.value;
    var res;
    if (windSpeed <= 4) {
        res = temp;
    } else if (windSpeed <= 45) {
        res = (1.6 * temp) - 55;
    } else {
        res = 91.4 + (91.4 - temp) * (0.0203 * windSpeed - 0.304 * (windSpeed) * 1 / 2 - 0.474);
    }
    windChillrslt.innerHTML = `Windchill Index : ${res} &deg; F`;

}

//qstn 44
function numdivisible() {
    var Num = parseInt(inptdivisible.value);
    if (!isNaN(Num)) {
        if (Num % 5 == 0) {
            if (Num % 6 == 0) {
                inptdivisiblerslt.innerHTML = Num + " is divisible by 5 and 6";
            } else {
                inptdivisiblerslt.innerHTML = Num + " is divisible only by 5";
            }
        } else {
            if (Num % 6 == 0) {
                inptdivisiblerslt.innerHTML = Num + " is divisible only by 6";
            } else {
                inptdivisiblerslt.innerHTML = Num + " is not divisible by 5 and 6";
            }
        }
    } else {
        inptdivisiblerslt.innerHTML = "Please enter a valid number.";
    }
}


//qstn 45
function chooseFood() {
    var Food = items.value;
    if (Food == "Tuna Salad") { foodrate.innerHTML = "4.50"; }
    else if (Food == "Chiken Biriyani") { foodrate.innerHTML = "9.32"; }
    else if (Food == "Pizza") { foodrate.innerHTML = "10.14"; }
}
function Invoice() {

    var Food = items.value;
    var total = 0;
    let itemPrice = parseFloat(foodrate.innerHTML);
    var Dchoice = document.querySelector("input[type='radio']:checked");

    if (Dchoice.value == "YES") {
        if (itemPrice < 10) {
            //total= 0 + itemPrice + shipping-charge + overnight delivery charge
            total = total + itemPrice + 2 + 5;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $2.00 <br>
                                Overnight delivery  &nbsp:&nbsp $5<br>
                                Total &nbsp : &nbsp $${total}`;
        } else {
            total = total + itemPrice + 3 + 5;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $3.00 <br>
                                Overnight delivery &nbsp:&nbsp $5<br>
                                Total &nbsp : &nbsp $${total}`;
        }
    } else {
        if (itemPrice < 10) {
            //total=  0 + itemPrice + shipping-charge 
            total = total + itemPrice + 2;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $2.00 <br>
                                Total &nbsp : &nbsp $${total}`;
        } else {
            total = total + itemPrice + 3;
            invoicerslt.innerHTML = `My Java Cafe Invoice:<br><br>
                                ${Food} &nbsp : &nbsp $${itemPrice} <br>
                                Shipping &nbsp : &nbsp $3.00 <br>
                                Total &nbsp : &nbsp $${total}`;
        }
    }
}



//qstn 46

function Testscores() {
    var studArr = stdnameinpt.value.split(","); // Use "stdnameinpt" for student names
    var scoreArr = stdmarkinpt.value.split(","); // Use "stdmarkinpt" for test scores

    if (studArr.length !== scoreArr.length) {
        Testscorerslt.innerHTML = `Student count doesn't match with Score count`;
        return; // Exit the function if there's an error
    }

    var sum = scoreArr.reduce((acc, element) => acc + parseInt(element), 0);
    var avg = sum / studArr.length;
    var highestScore = Math.max(...scoreArr);

    var belowAverageStudents = [];
    var highestScoreInfo = '';

    for (let i = 0; i < studArr.length; i++) {
        if (parseInt(scoreArr[i]) === highestScore) {
            highestScoreInfo = `<span class="text-success"><strong>Highest test score:<br>
                                Name:</strong> ${studArr[i]} &nbsp;&nbsp;<strong>Marks:</strong> ${scoreArr[i]}</span> <br><br>`;
        } else if (parseInt(scoreArr[i]) < avg) {
            belowAverageStudents.push(`<span class="text-black">${studArr[i]} </span>`);
        }
    }

    var belowAverageMessage = belowAverageStudents.join(', ');

    Testscorerslt.innerHTML = `${highestScoreInfo}<strong>Students below average:-  ${belowAverageMessage}Needs improvement </strong><br><span class="text-primary"><strong>Average Score:</strong> ${avg.toFixed(2)}</span>`;
}


//qstn 47,48

  // Class declaration
  class Person {
    constructor(name) {
        this.name = name;
    }
  }

// Function to handle button click and display result
function createPersonInstance() {
    // Get user input

    let userName = document.getElementById("usernameInput").value.trim();

    // Create an instance of the Person class


    if (userName === '' ) {
        ClassInstancerslt.innerText = "Please enter a valid name.";
        return;
    }
    let personInstance = new Person(userName);

    // Display result in the "ClassInstancerslt" element
    ClassInstancerslt.innerText = `Created a person instance with Name:- ${personInstance.name}`;
}


//qstn 49

   //straight 
   function straight1() {
    var n = pyramidinpt1.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          rightpatternrslt.innerHTML += "* ";
        }
        rightpatternrslt.innerHTML += "<br>";
    }
}
//Upside down
function upside1() {
    var n = pyramidinpt1.value;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n - i; j++) {
            rightpatternrslt.innerHTML += "* ";
        }
       rightpatternrslt.innerHTML += "<br>";
    }
}



//qstn 50
function straight2() {
    var n =  pyramidinpt2.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
           leftpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= i; k++) {
            leftpatternrslt.innerHTML += "* ";
        }
        leftpatternrslt.innerHTML += "<br>";
    }
}
// Upside down
function upside2() {
    var n =  pyramidinpt2.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            leftpatternrslt.innerHTML += ``;
        }
        for (let k = 0; k <= n - i; k++) {
            leftpatternrslt.innerHTML += "* ";
        }
        leftpatternrslt.innerHTML += "<br>";
    }
}

//qstn 51
function straight3() {
    var n = pyramidinpt3.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            starpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            starpatternrslt.innerHTML += "* ";
        }
        starpatternrslt.innerHTML += "<br>";
    }
}
function upside3() {
    var n = pyramidinpt3.value;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            starpatternrslt.innerHTML += ``;
        }
        for (let k = 1; k <= ((2 * n) - ((2 * i) - 1)); k++) {
            starpatternrslt.innerHTML += "* ";
        }
        starpatternrslt.innerHTML += "<br>";
    }
}

    
