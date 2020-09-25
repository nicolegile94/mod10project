const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Application() {
    this.manager;
    this.engineer = [];
    this.intern;
}

Application.prototype.managerQuestions = function() {
    inquirer
    //team manager's info
        .prompt(
        //team manager's name
        {
            type: 'text',
            name: 'nameManager',
            message: "What is the Team Manager's name?"
        },
        //Manager's ID
        {
            type: 'text',
            name: 'idManager',
            message: "What is the Team Manager's ID?"
        },
        //Manager's Email
        {
            type: 'text',
            name: 'emailManager',
            message: "What is the Team Manager's email?"
        },
        //Manager's Office Numnber
        {
            type: 'text',
            name: 'officeNumber',
            message: "What is the Team Manager's office number?"
        })
        .then(

        )
};

Application.prototype.engineerQuestions = function() {
    inquirer
    .prompt(
        {
            type: 'text',
            name: 'nameEngineer',
            message: "What is the Engineer's name?"
        },
        {
            type: 'text',
            name: 'idEngineer',
            message: "What is the Engineer's ID?"
        },
        {
            type: 'text',
            name: 'emailEngineer',
            message: "What is the Engineer's email address?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the Engineer's github username?"
        }
    )
    .then
}

Application.prototype.internQuestions = function() {
    inquirer
    .prompt(
        {
            type: 'text',
            name: 'nameIntern',
            message: "What is the Intern's name?"
        },
        {
            type: 'text',
            name: 'idIntern',
            message: "What is the Intern's ID?"
        },
        {
            type: 'text',
            name: 'emailIntern',
            message: "What is the Intern's email?"
        },
        {
            type: 'text',
            name: 'school',
            message: "What is the Intern's school?"
        }
    )
}

module.exports = Application;