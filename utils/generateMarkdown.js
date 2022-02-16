// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// const renderLicenseBadge = license => {
//   if (!license) {
//     return '';
//   } 
//   return `
//   [https://choosealicense.com/](https://choosealicense.com/${data.license})`
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  * [License](#license)
  * [Usage](#usage)
  * [Questions](#questions)

  ## Installation
  To install the dependencies, run the following command: 
      "${data.installation}"

  ## Tests
  To run tests, run the following command: 
      ''${data.test}''

  ## License

  [https://choosealicense.com/](https://choosealicense.com/${data.license})

  ## Usage
  ${data.usage}
  ${generateLink(data.link)}


  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at <${data.email}>.  You can find more of my work on GitHub at ${githubLink(data.username)}.

`;
}

module.exports = generateMarkdown;
