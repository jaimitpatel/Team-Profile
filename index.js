const Manager = require('./lib/Manager')
const Employee = require ('./lib/Employee')
const Intern = require ('./lib/Intern')
const Engineer = require('./lib/Engineer')
const inquirer = require('inquirer')
const path = require('path')
const fs= require('fs')
const outputdir = path.resolve(__dirname, 'output')
const outputpath= path.join(outputdir, 'team.html')
const render = require('./lib/Generatehtml')


const teamMembers = []
const idArr = []

function teamCreate() {
    
    function createManager() {
        console.log('Lets create the team!')
        inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter the Managers name.',
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter a name.'                
            }
         },
         {  type: 'input',
             name: 'managerId',
             message: 'Please enter the managers ID.',
            validate: answer => {
            if (answer !== '') {
                return true;
            }
            return 'Please enter an ID.';
            }
         },
         {
             type: 'input',
             name: 'managerEmail',
             message: 'Please enter the managers email.',
             validate: answer => {
                 if (answer !== '') {
                     return true;
                 }
                 return 'Please enter an email.'
             }
         },
         {
            type: 'input',
            name: 'managerOffice',
            message: 'Please enter managers office number.',
            validate: answer => {
               if (answer !== ''); {
                return true;
                }
                return 'Please enter an office number.';
            }
        }
     ]).then(answers => {
         const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
         teamMembers.push(manager);
         idArr.push(answers.managerId)
         createTeam();
     })
     }

     function createTeam() {

        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'What would you like to add next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'End selection'
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    createHTML();
            }
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Please enter engineers name.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter a name.';
                }
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Please enter engineers ID.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter an ID';
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please enter engineers email.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter an email.';
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'Please enter engineers GitHub username?',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter the engineers GitHub username.';
                }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArr.push(answers.engineerId);
            createTeam();
        });
    }

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Please enter interns name.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter a name.';
                }
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Please enter interns id.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter an ID.';
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Please enter the interns email.',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter an email.';
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school did the intern attend?',
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Please enter a school.';
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArr.push(answers.internId);
            createTeam();
        });
    }
    
    function createHTML() {

        fs.writeFileSync(outputpath, render(teamMembers), "utf-8");

        console.log('Generating team profile, please check output folder! ');

        }
    

    createManager();

}

teamCreate()