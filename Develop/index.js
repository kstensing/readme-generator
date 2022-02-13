// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = (data) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a description of the project (What was your motivation? Why did you build this project? What problem does it solve? What did you learn? (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: Provide instructions and examples for use. (Required) Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.'
    },
    { 
        type: 'input',
        name: 'credits',
        message: 'Credits: List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'License: The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Badges:(Optional) include any badges if you would like.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features:(Optional) if you would like to include features, list those here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute:(Optional) if you would like other developers to contribute to the project, list the instructions here.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:(Optional) if you have written tests for your application, provide examples and how to run them.'
    },
])
//Not sure here
.then(writeToFile => {
    questions.push(data);
})
    
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (err) throw Error(err);
    console.log('Readme complete! Check out README.md to see the output!');
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
