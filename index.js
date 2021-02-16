const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer  = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const idArray = [];
const teamArray = [];

const indexMenu = () => {

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
        })
    }




}

indexMenu();