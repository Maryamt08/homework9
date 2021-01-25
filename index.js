// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
    
    type: "input",
    name: "projecttitle",
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
    message: "Are there any contribution rules?"
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions if applicable"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
