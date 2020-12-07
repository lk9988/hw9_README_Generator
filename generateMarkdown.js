// function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage )
  - [Licens](#License )
  - [Contributing](#Contributing)
  - [Test](#Test )
  - [Question](#Question )
 

  ## Installation 

  ${data.installation}


  ## Usage 

  ${data.usage}

  [!${data.screenshotTitle}](${data.screenshotFilePath})
  
  ## License 
  
  [![${data.license}](https://img.shields.io/badge/License-${data.license}-success)]


  ## Contributing

  ${data.contributing}


  ## Test 

  ${data.test}


  ## Question 

  My GitHub: https://github/${data.github}

  Email: <${data.email}> 

`;
}

module.exports = generateMarkdown;
