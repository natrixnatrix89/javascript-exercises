const inquirer = require("inquirer");

const moviesInStore = [{ name: "Godfather", rating: 5 }];

async function rentVideo() {
  const { choices, name } = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?'
    },
    {
      name: 'choices',
      type: 'checkbox',
      message: 'Which ones do you want?',
      choices: moviesInStore.map(movie => ({ name: movie.name, value: movie }))
    }
  ]);
  console.log(`Oh, ${name}. ${choices.map(c => c.name).join(", ")} is a good choice.`);
}

async function returnVideo() {
  const { name, movie } = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?'
    },
    {
      name: 'movie',
      type: 'list',
      message: 'Which one would you like to return?',
      choices: moviesInStore.map(movie => ({ name: movie.name, value: movie }))
    }
  ]);
}

async function fillVideoStore() {
  let = addMore = true;
  while (addMore) {
    const { movieName, movieRating, more } = await inquirer.prompt([
      { type: 'input', name: 'movieName', message: 'Enter movie name' },
      { type: 'number', name: 'movieRating', message: 'Enter movie rating' },
      { type: 'confirm', name: 'more', message: 'Would you like to add more?' }
    ]);
    addMore = more;
  }
}

async function app() {
  const { user } = await inquirer.prompt([{
    type: 'list',
    name: 'user',
    message: 'Welcome to our video store. Who are you?',
    choices: [ 'User', 'Admin', {name: `I don't want to be here. Let me go`, value: false} ]
  }]);
  if (user === 'Admin') {
    console.log("Hello Admin. I guess you're here to fill our store.");
    await fillVideoStore();
  } else if (user === 'User') {
    console.log("Hello User");
    const { intent } = await inquirer.prompt([{ type: 'list', name: 'intent',
      message: 'What do you want to do?',
      choices: [
        { name: 'Rent a video', value: 'rent' },
        { name: 'Return a video', value: 'return'}
      ]}]);
      intent === 'rent' ? await rentVideo() : await returnVideo();
  } else {
    return;
  }

  console.log("Okay. Thanks and Bye!");

  // Start from beginning
  app();
}

app();