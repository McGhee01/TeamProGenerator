
const fs = require("fs");const inquirer = require("inquirer");
const generateHTML = require("./Template/generateHTML");

// TODO: Create an array of questions for user input
const questions = [];

// The array below is a variable.
inquirer
  .prompt([
    //   Questions for Employee
    {
      type: "input",
      message: " Who is the employee of your team?",
      //Whatever you type in name string will appear once node is ran.
      name: `name`
    },
    {
      type: "input",
      message: " Please type your manager ID now.",
      name: `id`,
    },
    {
      type: "input",
      message: " What is the email of this person?",
      name: `email`,
    },
    {
      type: "input",
      message: " Please enter the name of the employee here.",
      name: `getName`,
    },
    {
      type: "input",
      message: " What is the employee's ID?",
      name: `getId`,
    },
    {
      type: "input",
      message: "What is the email of tis employee? ",
      name: `getEmail`,
    },
    {
      type: "input",
      message: " What is the role of this employee?",
      name: `getRole`,
    },
]) 

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;
 console.log(data)
    fs.writeFile(filename, generateHTML([data]), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  //convert 'data' into a string
  //use 'data' in writeToFile
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
