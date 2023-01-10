// Notes: Node.js to be installed. Run at command line:
//    node 22_palindrome.js <YOUR_STRING>

// define function to check for a palindrome in a string
const isPalindrome = (str) => {
    if (typeof(str) !== 'string') {
        console.log(str, ' is not of type string');
        return false;
    }

    let j = str.length-1;
    for (let i = 0; i < Math.ceil(str.length/2); i++) {
        if (str[i] !== str[j]) {
            return false;
        }
        j--;
    }

    return true;
}

// grab command line arguments
const commands = process.argv;

let longestPalindromeLength = 0;
let longestPalindromeString = "";

// check we got correct number args
if (commands.length === 3) {
    const str = commands[2];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const strPartial = str.substring(i, j+1);
            console.log(strPartial);
            if (isPalindrome(strPartial) && strPartial.length > longestPalindromeLength) {
                longestPalindromeLength = strPartial.length;
                longestPalindromeString = strPartial;
            }
        }
    }
    // output results
    console.log('Longest palindrome is: ', longestPalindromeString);
} else {
    console.log('Please provide one argument to process. Try again...');
}
