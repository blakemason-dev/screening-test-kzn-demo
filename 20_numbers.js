// Notes: Node.js to be installed. Run at command line:
//    node 20_numbers.js <YOUR_NUMBER (DEFAULT = 100 if no arg passed)>

// define function to print numbers
const printNumbers = (num) => {
    let i = 1;
    let printString = "";
    while (i <= num) {
        let mult3 = i % 3 > 0 ? false : true;
        let mult5 = i % 5 > 0 ? false : true;

        if (mult3 && mult5) {
            printString += "FB ";
        } else if (mult3) {
            printString += "F ";
        } else if (mult5) {
            printString += "B ";
        } else {
            printString += i + " ";
        }

        i++;
    }
    console.log(printString);
}

// grab command line args
let commands = process.argv;

// check arg numbers
if (commands.length < 3) {
    printNumbers(100);
} else if (commands.length > 2) {
    const num = parseInt(commands[2]);
    if (typeof(num) === 'number') {
        printNumbers(num);
    } else {
        console.log('Argument was not a number, try again...');
    }
}
