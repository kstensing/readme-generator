// TODO: Include packages needed for this application
//const { prompt } = require('inquirer');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
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
                message: 'Provide a description of the project (Required)',
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
                message: 'Installation: What command should be run to install dependencies? (ex. "npm install")(Required)',
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
                name: 'test',
                message: 'What command should be run to run tests? (ex. "npm test") (Required)',
                validate: testInput => {
                    if (testInput) {
                        return true;
                    } else {
                        console.log('Please enter your test command!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license would you like to use?',
                choices: ['None', 'MIT', 'GNU', 'Apache 2.0'],
                //need a way to enter no license
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage: What does the user need to know about using the repo? (Required)',
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
                type: 'confirm',
                name: 'confirmLink',
                message: 'Would you like to add a link to the application?',
                default: true
            },
            {
                type: 'input',
                name: 'link',
                message: 'Provide the application link.',
                when: ({
                    confirmLink
                }) => confirmLink
            },

            // {
            //     type: 'input',
            //     name: 'license',
            //     message: 'License: The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
            //     validate: licenseInput => {
            //         if (licenseInput) {
            //             return true;
            //         } else {
            //             console.log('Please enter your project license information!');
            //             return false;
            //         }
            //     }
            // },
        ])
        
        .then(data => {
            console.log("testing data: ", data);

            // 






            const md = generateMarkdown(data);

            writeToFile("readme.md", md)
        })

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // if (err) throw Error(err);
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
        console.log('Readme complete! Check out README.md to see the output!');
    })

};

// TODO: Create a function to initialize app
function init() {
    questions();
};

// Function call to initialize app
init();