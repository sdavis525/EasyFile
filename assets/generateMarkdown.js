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
  } else if (licenseType === 'Mozilla') { "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    
  } else {
    licenseType = altLicense
  }
  return licenseType;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license)
  let licenseLink = license;
  let altLicense = ''
  
  if(license === 'MIT') { 
    licenseLink= "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)"
  
  } else if (license === 'Boost') { 
    licenseLink= "[https://opensource.org/licenses/BSL-1.0](https://opensource.org/licenses/BSL-1.0)"
  
  } else if (licenseLink === 'Mozilla') { 
    licenseLink= "[https://opensource.org/licenses/MPL-2.0](https://opensource.org/licenses/MPL-2.0)"
    
  } else {
    licenseLink = altLicense
  }
  return licenseLink;




};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  let licenseSection = license;
  let altLicense = ''
  
  if(licenseSection === 'MIT') { 
    
  } else if (licenseSection === 'Boost') { 
    link= "[https://opensource.org/licenses/BSL-1.0](https://opensource.org/licenses/BSL-1.0)"
  
  } else if (licenseSection === 'Mozilla') { 
    link= "[https://opensource.org/licenses/MPL-2.0](https://opensource.org/licenses/MPL-2.0)"
    
  } else {
    licenseSection = altLicense
  }
  return licenseSection;

}

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
  ${renderLicenseLink(data.license)}

 ` 
;
}

module.exports = generateMarkdown;

