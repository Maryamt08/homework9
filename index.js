// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  name: "name",
  message: "What is your name?"
},
  {
    
    type: "input",
    name: "title",
    message: "What is your project titled?"
  },
  {
    type: "input",
    name: "description",
    message: "Briefly describe your project"
  },
  {
    type: "input",
    name: "install",
    message: "Are there any installations required?"
  },
  {
    type: "input",
    name: "use",
    message: "What is the use of the application"
  },
  {
    type: "input",
    name: "contributions",
    message: "Are there any other contributors to this project?"
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions if applicable"
  },
  {
    type: "input",
    message: "Any additional information about the project?",
    name: "projectInfo",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Your README.md file has been generated")
});
}

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  wirte
});

// TODO: Create a function to initialize app
function init() {
  runInquirer();
}
