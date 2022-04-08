// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  let licenseType = license;
  let altLicense = ''
  
  if(licenseType === 'MIT') {
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (licenseType === 'Boost') {
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (licenseType === 'Unlicense') {
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else {
    licenseType = altLicense
  }
  return licenseType;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
  
  ## username:
  ${data.username}
  
 
  ## project:
  ${data.project}

  
  ## email:
  ${data.email}
  

  ## description:
  ${data.description}
  
 
  ## installation:
  ${data.installation}

  
  ## usage:
  ${data.usage}
  
  
  ## contribution:
  ${data.contribution}
  
  
  ## test
  ${data.test}
  
  
  ## license:
  ${data.license}
  
  
  
  ${renderLicenseBadge(data.license)}

 ` 
;
}

module.exports = generateMarkdown;

