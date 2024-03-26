function main() {
    const MAX = 10;
    let answer, guess;

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    answer = Math.floor(Math.random() * MAX) + 1;

    rl.question(`I'm thinking of a number between 1 and ${MAX}. Guess what it is: `, (input) => {
        guess = parseInt(input);

        if (guess === answer)
            console.log("You got it! Good guessing!");
        else {
            console.log("That is not correct, sorry.");
            console.log("The number was " + answer);
        }

        rl.close();
    });
}

main();
