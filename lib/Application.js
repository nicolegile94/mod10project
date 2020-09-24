const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Application() {
    this.manager;
    this.engineer = [];
    this.intern;
}

Application.prototype.initializeApplication = function() {
    inquirer
    //team manager's info
        //team manager's name
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is the Team Manager's name?"
        })
        //destructure name from the prompt object
        .then(({ name }) => {
            this.manager = new Manager(name);

            //test the object creation
            console.log(this.manager)
        })
};

module.exports = Application;