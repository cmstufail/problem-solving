// Toggle result visibility
function toggleResult( resultId, testFunction ) {
    const resultElement = document.getElementById( resultId );
    if ( resultElement.style.display === "block" ) {
        resultElement.style.display = "none";
    } else {
        testFunction();
        resultElement.style.display = "block";
    }
}

// Problem 1: Reverse a String
function reverseString( str ) {
    let reversed = "";
    for ( let i = str.length - 1; i >= 0; i-- ) {
        reversed += str[ i ];
    }
    return reversed;
}

// Problem 2: Count Vowels in a String
function countVowels( str ) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for ( let char of str ) {
        if ( vowels.includes( char ) ) {
            count++;
        }
    }
    return count;
}

// Problem 3: Check for Palindrome
function isPalindrome( str ) {
    const cleanedStr = str.replace( /[^a-zA-Z0-9]/g, "" ).toLowerCase();
    const reversedStr = reverseString( cleanedStr );
    return cleanedStr === reversedStr;
}

// Problem 4: Find the Maximum Number
function findMax( arr ) {
    let max = arr[ 0 ];
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[ i ] > max ) {
            max = arr[ i ];
        }
    }
    return max;
}

// Problem 5: Remove Duplicates from an Array
function removeDuplicates( arr ) {
    const uniqueArray = [];
    for ( let item of arr ) {
        if ( !uniqueArray.includes( item ) ) {
            uniqueArray.push( item );
        }
    }
    return uniqueArray;
}

// Problem 6: Sum of All Numbers in an Array
function arraySum( arr ) {
    let sum = 0;
    for ( let num of arr ) {
        sum += num;
    }
    return sum;
}

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers( arr ) {
    const evenNumbers = [];
    for ( let num of arr ) {
        if ( num % 2 === 0 ) {
            evenNumbers.push( num );
        }
    }
    return evenNumbers;
}

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords( str ) {
    const words = str.split( " " );
    const capitalizedWords = [];
    for ( let word of words ) {
        if ( word.length > 0 ) {
            capitalizedWords.push( word[ 0 ].toUpperCase() + word.slice( 1 ) );
        } else {
            capitalizedWords.push( "" );
        }
    }
    return capitalizedWords.join( " " );
}

// Problem 9: Find the Factorial of a Number
function factorial( n ) {
    if ( n === 0 || n === 1 ) {
        return 1;
    }
    let result = 1;
    for ( let i = 2; i <= n; i++ ) {
        result *= i;
    }
    return result;
}

// Problem 10: PingPong Challenge
function pingPong() {
    const results = [];
    for ( let i = 1; i <= 20; i++ ) {
        if ( i % 15 === 0 ) {
            results.push( "PingPong" );
        } else if ( i % 3 === 0 ) {
            results.push( "Ping" );
        } else if ( i % 5 === 0 ) {
            results.push( "Pong" );
        } else {
            results.push( i.toString() );
        }
    }
    return results;
}

// Test functions
function testReverseString() {
    const result = reverseString( "hello" );
    const resultElement = document.getElementById( "result1" );
    resultElement.innerHTML = `<strong>Output:</strong> "${ result }"`;
    resultElement.className =
        result === "olleh" ? "result success" : "result";
}

function testCountVowels() {
    const result = countVowels( "programming" );
    const resultElement = document.getElementById( "result2" );
    resultElement.innerHTML = `<strong>Output:</strong> ${ result }`;
    resultElement.className = result === 3 ? "result success" : "result";
}

function testIsPalindrome() {
    const result1 = isPalindrome( "madam" );
    const result2 = isPalindrome( "hello" );
    const resultElement = document.getElementById( "result3" );
    resultElement.innerHTML = `<strong>"madam":</strong> ${ result1 }<br><strong>"hello":</strong> ${ result2 }`;
    resultElement.className =
        result1 === true && result2 === false ? "result success" : "result";
}

function testFindMax() {
    const result = findMax( [ 5, 1, 9, 3 ] );
    const resultElement = document.getElementById( "result4" );
    resultElement.innerHTML = `<strong>Output:</strong> ${ result }`;
    resultElement.className = result === 9 ? "result success" : "result";
}

function testRemoveDuplicates() {
    const result = removeDuplicates( [ 1, 2, 2, 3, 4, 4 ] );
    const resultElement = document.getElementById( "result5" );
    resultElement.innerHTML = `<strong>Output:</strong> [${ result.join(
        ", "
    ) }]`;
    resultElement.className =
        JSON.stringify( result ) === JSON.stringify( [ 1, 2, 3, 4 ] )
            ? "result success"
            : "result";
}

function testArraySum() {
    const result = arraySum( [ 1, 2, 3, 4 ] );
    const resultElement = document.getElementById( "result6" );
    resultElement.innerHTML = `<strong>Output:</strong> ${ result }`;
    resultElement.className = result === 10 ? "result success" : "result";
}

function testFindEvenNumbers() {
    const result = findEvenNumbers( [ 1, 2, 3, 4, 5, 6 ] );
    const resultElement = document.getElementById( "result7" );
    resultElement.innerHTML = `<strong>Output:</strong> [${ result.join(
        ", "
    ) }]`;
    resultElement.className =
        JSON.stringify( result ) === JSON.stringify( [ 2, 4, 6 ] )
            ? "result success"
            : "result";
}

function testCapitalizeWords() {
    const result = capitalizeWords( "hello world" );
    const resultElement = document.getElementById( "result8" );
    resultElement.innerHTML = `<strong>Output:</strong> "${ result }"`;
    resultElement.className =
        result === "Hello World" ? "result success" : "result";
}

function testFactorial() {
    const result = factorial( 5 );
    const resultElement = document.getElementById( "result9" );
    resultElement.innerHTML = `<strong>Output:</strong> ${ result }`;
    resultElement.className = result === 120 ? "result success" : "result";
}

function testPingPong() {
    const result = pingPong();
    const resultElement = document.getElementById( "result10" );
    resultElement.innerHTML = `<strong>Output:</strong> ${ result.join(
        ", "
    ) }`;

    // Check if the first 15 elements are correct
    const expected = [
        "1",
        "2",
        "Ping",
        "4",
        "Pong",
        "Ping",
        "7",
        "8",
        "Ping",
        "Pong",
        "11",
        "Ping",
        "13",
        "14",
        "PingPong",
    ];
    const isCorrect =
        JSON.stringify( result.slice( 0, 15 ) ) === JSON.stringify( expected );
    resultElement.className = isCorrect ? "result success" : "result";
}
