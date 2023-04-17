const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMd');
console.log("Welcome to my README generator");
console.log("Answer the following questions to generate a README");

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: your_Input => {
      if (your_Input) {
        return true;
      } else {
        console.log('Enter title to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project.',
    validate: your_description => {
      if (your_description) {
        return true;
      } else {
        console.log('Enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the steps for installation.',
    validate: your_installation => {
      if (your_installation) {
        return true;
      } else {
        console.log('Enter the steps of the installation to continue.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
    validate: your_usage => {
      if (your_usage) {
        return true;
      } else {
        console.log('Enter the information on how to use project.');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license that will best suit your project.',
    choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
    validate: your_license => {
      if (your_license) {
        return true;
      } else {
        console.log('Select a license for the project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How can users contribute to this project?',
    validate: your_contribution => {
      if (your_contribution) {
        return true;
      } else {
        console.log('Provide information on how to contribute to the project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How does the user test this project?',
    validate: your_test => {
      if (your_test) {
        return true;
      } else {
        console.log('Explain how to test this project.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your Github Username (Required)',
    validate: github_input => {
      if (github_input) {
        return true;
      } else {
        console.log('Please enter your Github username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email for those who may have questions about the generator?',
    validate: email_input => {
      if (email_input) {
        return true;
      } else {
        console.log('Please enter your email');
        return false;
      }
    }
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! You can now preview your README file");
