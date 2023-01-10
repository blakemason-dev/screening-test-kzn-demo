// Notes: Node.js to be installed. Run at command line:
//    node 19_reverse.js <YOUR_STRING>

// grab commands
let commands = process.argv;

// check have string
if (commands.length === 3) {
    commands.forEach((value, index) => {
        if (index === 2 && value) {
            let reverseString = "";
            for (let i = value.length-1; i > -1; i--) {
                reverseString += value[i];
            }
            console.log('Your string reversed => ' + reverseString);
        }
    });
} else {
    console.log('Enter argument to reverse. Try again...');
}
