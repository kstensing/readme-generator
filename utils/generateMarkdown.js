// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `[![License: (${license})](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
};



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return '';
  } else if (license == "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license == "GNU") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license == "Apache 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/)"
  } else if (license == "None") {
    return '';
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  } else if (license == "None") {
    return '';
  } else {
    return '## License'
  }
};

const githubLink = usernameLink => {
  if (!usernameLink) {
    return '';
  }
  return `
  [${usernameLink}](https://gihub.com/${usernameLink})
  `
};

//use this syntax for the license/badges
const generateLink = appLink => {
  if (!appLink) {
    return '';
  }

  return `
  Click this [Link](https://${appLink}) for the application.
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Usage](#usage)
  * [Questions](#questions)


  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Installation
  To install the dependencies, run the following command: 
      "${data.installation}"

  ## Tests
  To run tests, run the following command: 
      "${data.test}"

  ## Contributing
  ${data.contributing}
  
  ## Usage
  ${data.usage}
  ${generateLink(data.link)}


  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.  You can find more of my work on GitHub at ${githubLink(data.username)}.

`;
}

module.exports = generateMarkdown;