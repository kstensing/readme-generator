// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//use this syntax for the license/badges
const generateLink = appLink => {
  if (!appLink) {
    return '';
  }

  return `
  Click this [Link](https://${appLink}) for the application.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## This was created using ${data.languages} 

  ## Usage
  ${data.usage}


  ${generateLink(data.link)}

  The application should resemble the image below: 
  ![Landing Page](${data.screenshot})



  ## License

    [https://choosealicense.com/](https://choosealicense.com/${data.license})

`;
}

module.exports = generateMarkdown;
