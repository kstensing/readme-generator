// TODO: Include packages needed for this application
//const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = (data) => {
    return inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a description of the project (What was your motivation? Why did you build this project? What problem does it solve? What did you learn? (Required)',
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage: Provide instructions and examples for use. (Required) Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your project usage information!');
                return false;
            }
        }
    },
    { 
        type: 'input',
        name: 'credits',
        message: 'Credits: List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
        default: false
    },
    {
        type: 'input',
        name: 'license',
        message: 'License: The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter your project license information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Badges:(Optional) include any badges if you would like.',
        default: false
    },
    {
        type: 'input',
        name: 'features',
        message: 'Features:(Optional) if you would like to include features, list those here.',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute:(Optional) if you would like other developers to contribute to the project, list the instructions here.',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:(Optional) if you have written tests for your application, provide examples and how to run them.',
        default: false
    },
])
//Not sure here
.then(writeToFile => {
    questions.push(data);
    writeToFile(data.title, data)
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
