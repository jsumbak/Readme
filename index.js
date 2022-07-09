// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "projectDescription"
    },
    {
        type: 'list',
        message: 'What type of license does your project have?',
        name: 'license',
        choices: [ "MIT",
        "Unlicense",
        "Apache",
        "GNU",
        "BSD",
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribution"
    },

];


inquirer.prompt(questions)
.then((answers) => {
    console.log(answers)
    fs.writeFile("ReadMe.md", generateMarkdown(answers), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("success!");
        }
    });
});

