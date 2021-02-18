const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {
    finished
} = require('stream');

const idArray = [];
const teamArray = [];

const indexMenu = () => {
    // function to prompt user for required manager information
    const teamManager = () => {
        inquirer.prompt([{
                type: 'input',
                name: 'managerName',
                message: "What is your manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is your manager's id?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your manager's email address?",
                validate: function (email) {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is your manager's office number?"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber)
            teamArray.push(manager)
            idArray.push(answers.managerId);
            teamMember();
        });
    }
    // Prompt for user to choose either an enigeer or intern to add to team and call connected functions to employee type
    const teamMember = () => {
        inquirer.prompt([{
                type: 'list',
                name: 'teamChoice',
                message: 'What roles do you want to add?',
                choices: [
                    'Engineer',
                    'Intern',
                    "I'm finished, make my team."
                ]
            }

        ]).then(choice => {
            switch (choice.teamChoice) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    createTeam();
            }
        });
    };

    const createEngineer = () => {
        inquirer.prompt([{
                    type: 'input',
                    name: 'engineerName',
                    message: "What is your engineer's name?"
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your engineer's id?"
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your engineer's email address?",
                    validate: function (email) {
                        // Regex mail check (return true if valid mail)
                        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is your engineer's github's username?"
                }
            ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
                teamArray.push(engineer);
                idArray.push(answers.engineerId);
                teamMember();
            });
    }

    const createIntern = () => {
        inquirer.prompt([{
                    type: 'input',
                    name: 'internName',
                    message: "What is your intern's name?"
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: "What is your intern's id?"
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is your intern's email address?",
                    validate: function (email) {
                        // Regex mail check (return true if valid mail)
                        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is your intern's school name?"
                }
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
                teamArray.push(intern);
                idArray.push(answers.internId);
                teamMember();
            });
    }

    const createTeam = () => {
        inquirer.prompt([{
            type: 'list',
            name: 'menu',
            message: "Would like to add another team member?",
            choices: [
                'Yes',
                "No I'm finished"

            ]
        }]).then(answers => {
            const team = new InternTeam(answers.internName, answers.internId, answers.internEmail, answers.school);
            teamArray.push(intern);
            idArray.push(answers.internId);
            teamMember();
        });
    }

    teamManager();
}

indexMenu();