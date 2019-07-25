const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readUserInput = (question) => new Promise(resolve => {
    rl.question(question + "\n", resolve);
})

const countOfMovies = 3;

const fillVideoStore = async () => {
    for (let i = 0; i < countOfMovies;i++){
        const movieName = await readUserInput("Enter movie name:")
        console.log(movieName)
        const movieRating = await readUserInput("Enter movie rating:")
        console.log(movieRating)
    } 
}

const rentVideo = async () => {
    const userName = await readUserInput("Your name:")
    console.log(userName)
    const movieName = await readUserInput("Enter movie name:")
    console.log(movieName)
}

const returnVideo = () => {
}

const waitForUserInput = async function () {
    console.log("Choose the operation you want to perform ")
    console.log("Choose 0 for EXIT")
    console.log("Choose 1 to fill video store")
    console.log("Choose 2 to rent video (as user)")
    console.log("Choose 3 to return video (as user)")

    const command = await readUserInput("Command:")

    switch (parseInt(command)) {
        case 0:
            process.exit(0)
            break;
        case 1:
            await fillVideoStore()
            break;
        case 2:
            await rentVideo()
            break;
        case 3:
            returnVideo()
            break;
        default:
            break;
    }
    await waitForUserInput();
}

waitForUserInput()