// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    return `
  # ${answers.name}
  # ${answers.userName}
  # ${answers.title}
  # ${answers.description}
  # ${answers.install}
  # ${answers.use}
  # ${answers.contributions}
  # ${answers.test}
  # ${answers.projectInfo}
  `;
  }
  
  module.exports = generateMarkdown;
