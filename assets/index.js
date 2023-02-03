const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        name: 'projectTitle',
        type: 'input',
        message: 'Enter the title of your project:'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description of your project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter installation instructions:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter usage information:'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Enter contribution guidelines:'
    },
    {
        name: 'tests',
        type: 'input',
        message: 'Enter test instructions:'
    },
    {
        name: 'githubUsername',
        type: 'input',
        message: 'Enter your GitHub username:'
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:'
    },
    {
        name: 'license',
        type: 'list',
        message: 'Choose a license for your project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'None'
        ]
    },
];

inquirer.prompt(questions).then(answers => {
    const { projectTitle, description, installation, usage, contributing, tests, githubUsername, email, license } = answers;

    let licenseBadge = '';
    let licenseText = '';
    if (license !== 'None') {
        licenseBadge = `[![License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
        licenseText = `## License\nThis project is licensed under the ${license} license.`;
    }

    const readme = `
# ${projectTitle}
${licenseBadge}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## Questions
Feel free to contact me at ${email} with any questions or for collaboration. You can also find me on GitHub at [${githubUsername}](https://github.com/${githubUsername}).

${licenseText}
`;

    fs.writeFile('README.md', readme, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('README.md created successfully!');
        }
    });
});