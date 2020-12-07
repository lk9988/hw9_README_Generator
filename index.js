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
		name: 'task',
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
		choices: ['1', '2', '3'],
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
];

// function to write README file
function writeToFile(fileName, data) {
	// data is from response that was passed from function init
	const content = generateMarkdown(data);
	// call generateMarkdown function and pass response data
	// because generateMarkdown returns string, need to create variable and store
	fs.writeFile(fileName, content, (err) => {
		if (err) console.log(err);
	});
}

// function to initialize program
function init() {
	inquirer.prompt(questions).then((response) => {
		console.log(response);

		writeToFile('HomeWork_README.md', response);
		// if (response.task) {
		// 	// add Task
		// }
	});
}

// function call to initialize program
init();
