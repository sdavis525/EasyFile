// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
   {
    type: "input",
    name: "username",
    message: "Enter your GitHub Username (Required)",
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      }
      else {
        console.log("Please enter your Github Username");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "project",
    message: "Enter your project title (Required)",
    validate: projectInput => {
      if (projectInput) {
        return true;
      }
      else {
        console.log("Please enter your project title");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (Required)",
    validate: emailInput => {
      if (emailInput) {
        return true;

      }
      else {
        console.log("Please enter your email address");
        return false;
      }
    }
  },

  { 
      type: "input",
      name:"description",
      message:"Provide a short description explaining the what, why, and how of your project."
},

{ 
    type: "input",
    name:"installation",
    message:"What are the steps required to install your project? "
},

{ 
    type: "input",
    name:"usage",
    message:"Provide instructions and examples for use. Include screenshots as needed. "
},

{ 
  type: "list",
  name:"license",
  message:"please select your license type",
  choices: ["MIT", "Boost", "Unlicense"]
},



{ 
    type: "input",
    name:"contribution",
    message:"List your collaborators, if any"
},

{ 
    type: "input",
    name:"test",
    message:"please provide examples on how to run your program, if any"
},

];





// TODO: Create a function to initialize app


// Function call to initialize app
init();