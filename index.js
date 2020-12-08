// we will run node with this file
// this file contains primary application

// REQUIRE package.
const inquirer = require('inquirer');
// require the inquirer package.
const fs = require('fs');
// require the file-system package.
const generateMarkdown = require('./generateMarkdown');
// require generateMarkdown function from other file to use in this file

// array of questions for user
const questions = [
	{
		type: 'input',
		message: 'What is Title of your project?',
		name: 'title',
	},
	{
		type: 'input',
		message: 'Describe your project.',
		name: 'description',
	},
	{
		type: 'input',
		message: 'Enter this project intallation instruction.',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'Provide usage information.',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Enter title for screenshot of this project.',
		name: 'screenshotTitle',
	},
	{
		type: 'input',
		message: 'Enter relative filepath of the screenshot.',
		name: 'screenshotFilePath',
	},
	{
		type: 'list',
		message: 'Select the License',
		name: 'license',
		choices: ['MIT', 'Apache-2.0', 'AGPL-3.0', 'unlicense'],
	},
	{
		type: 'input',
		message: 'List contributors of this project.',
		name: 'contributing',
	},
	{
		type: 'input',
		message: 'Provide any test information for this project.',
		name: 'tests',
	},
	{
		type: 'input',
		message: 'What is your github username?',
		name: 'github',
	},
	{
		type: 'input',
		message: 'What is your email?',
		name: 'email',
	},
];

// function to write README file
function writeToFile(fileName, data) {
	// data is from response that was passed from function init
	const content = generateMarkdown(data);
	// call generateMarkdown function and pass response data
	// because generateMarkdown returns string, need to create variable and store
	fs.writeFile(fileName, content, (err) => {
		if (err) throw err;
		console.log('New README file successfully generated');
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then((response) => {
		console.log(response);

		writeToFile('New_README.md', response);
	});
}

// function call to initialize program
init();
