const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "teampage.html");

const render = require("./src/create-html");

const teamMembers = []

function applicationFunction() {

    function managerQuestions() {
        inquirer
        //team manager's info
            .prompt([
            //team manager's name
            {
                type: 'input',
                name: 'nameManager',
                message: "What is the Team Manager's name?"
            },
            //Manager's ID
            {
                type: 'input',
                name: 'idManager',
                message: "What is the Team Manager's ID?"
            },
            //Manager's Email
            {
                type: 'input',
                name: 'emailManager',
                message: "What is the Team Manager's email?"
            },
            //Manager's Office Numnber
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Team Manager's office number?"
            }
        ])
            .then( answers => {
                const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeNumber, 'Manager');
                teamMembers.push(manager);
                applicationMenu();
            }
        )
    };

    function engineerQuestions() {
        inquirer
    .prompt([
        {
            type: 'input',
            name: 'nameEngineer',
            message: "What is the Engineer's name?"
        },
        {
            type: 'input',
            name: 'idEngineer',
            message: "What is the Engineer's ID?"
        },
        {
            type: 'input',
            name: 'emailEngineer',
            message: "What is the Engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.github, 'Engineer');
        teamMembers.push(engineer);
        applicationMenu();
    });
    };

    function internQuestions() {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameIntern',
                message: "What is the Intern's name?"
            },
            {
                type: 'input',
                name: 'idIntern',
                message: "What is the Intern's ID?"
            },
            {
                type: 'input',
                name: 'emailIntern',
                message: "What is the Intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?"
            }
        ])
        .then(answers => {
            const intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.school, 'Intern');
            teamMembers.push(intern);
            applicationMenu();
        });
    };
  
    function applicationMenu() {
        inquirer
        .prompt([
            {
            type: "list",
                name: "initialMenu",
                message: "Would you like to add a new team member?",
                choices: ["Engineer", "Intern", "No, my team is complete"]
            }
        ])
        .then(userChoice => {
            switch (userChoice.initialMenu) {
                case "Engineer":
                    engineerQuestions();
                    break;
                case "Intern":
                    internQuestions();
                    break;
                case "No, my team is complete":
                createTeam();
            }
        });
    };

    function createTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    managerQuestions();
}

applicationFunction();

