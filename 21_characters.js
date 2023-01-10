// Notes: Node.js to be installed. Run at command line:
//    node 21_characters.js <YOUR_TEXT_FILE)>

// grab the filestream
const fs = require('fs');

// define func to find most frequent char in a string
const getMostFrequentCharacter = (str) => {
    let frequentChar = "";
    let occurrences = 0;

    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = i; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }
        if (count > occurrences) {
            occurrences = count;
            frequentChar = str[i];
        }
    }

    return {
        char: frequentChar,
        num: occurrences
    }
}

// grab the command line arguments
const commands = process.argv;

// check we've got correct number args
if (commands.length !== 3) {
    console.log('One file name must be passed as an argument. Try again...');
} else {
    // read file data
    fs.readFile(commands[2], 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        // create array of strings per line and for each find most frequent characters
        const stringLines = data.split("\n");
        stringLines.map(str => {
            const {char, num } = getMostFrequentCharacter(str);
            console.log(char, " ", num);
        })
    });
}

