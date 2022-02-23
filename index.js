
// // const fs = require("fs");
// // const inquirer = require("inquirer");
// // const Engineer = require("./Library/engineer");
// // // const Engineer = require("./Library/engineer2");
// // // const Engineer = require("./Library/engineer3");
// // const Intern = require("./Library/intern");
// // const Manager = require("./Library/manager");
// // const generateHTML = require("./Template/generateHTML");

// // // TODO: Create an array of questions for user input
// // const questions = [];

// // // The array below is a variable.
// // inquirer
// //   .prompt([
// //     //   Questions for Employee
// //     {
// //       type: "input",
// //       message: " Who is the employee of your team?",
// //       //Whatever you type in name string will appear once node is ran.
// //       name: `name`
// //     },
// //     {
// //       type: "input",
// //       message: " Please type your manager ID now.",
// //       name: `id`,
// //     },
// //     {
// //       type: "input",
// //       message: " What is the email of this person?",
// //       name: `email`,
// //     },
// //     {
// //       type: "input",
// //       message: " Please enter the name of the employee here.",
// //       name: `getName`,
// //     },
// //     {
// //       type: "input",
// //       message: " What is the employee's ID?",
// //       name: `getId`,
// //     },
// //     {
// //       type: "input",
// //       message: "What is the email of tis employee? ",
// //       name: `getEmail`,
// //     },
// //     {
// //       type: "input",
// //       message: " What is the role of this employee?",
// //       name: `getRole`,
// //     },

// // ]) 

// // .then(function({name, role, id, email}) {
// //   let roleInfo = "";
// //   if (role === "Engineer") {
// //       roleInfo = "GitHub username";
// //   } else if (role === "Intern") {
// //       roleInfo = "school name";
// //   } else {
// //       roleInfo = "office phone number";
// //   }
// //   inquirer.prompt([{
// //       message: `Enter team member's ${roleInfo}`,
// //       name: "roleInfo"
// //   },
// //   {
// //       type: "list",
// //       message: "Would you like to add more team members?",
// //       choices: [
// //           "yes",
// //           "no"
// //       ],
// //       name: "moreMembers"
// //   }])
// //   .then(function({roleInfo, moreMembers}) {
// //       let newMember;
// //       if (role === "Engineer") {
// //           newMember = new Engineer(name, id, email, roleInfo);
// //       } else if (role === "Intern") {
// //           newMember = new Intern(name, id, email, roleInfo);
// //       } else {
// //           newMember = new Manager(name, id, email, roleInfo);
// //       }
// //       employees.push(newMember);
// //       addHtml(newMember)
// //       .then(function() {
// //           if (moreMembers === "yes") {
// //               addMember();
// //           } else {
// //               finishHtml();
// //           }
// //       });
      
// //   });
// // });




// //   //convert 'data' into a string
// //   //use 'data' in writeToFile
  

// // // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();



// const fs = require("fs");
// const inquirer = require("inquirer");
// const Engineer = require("./Library/engineer");
// // const Engineer = require("./Library/engineer2");
// // const Engineer = require("./Library/engineer3");
// const Intern = require("./Library/intern");
// const Manager = require("./Library/manager");
// const generateHTML = require("./Template/generateHTML");

// const employees = [];

// function initApp() {
//     startHtml();
//     addMember();
// }

// function addMember() {
//     inquirer.prompt([{
//         message: "Enter team member's name",
//         name: "name"
//     },
//     {
//         type: "list",
//         message: "Select team member's role",
//         choices: [
//             "Engineer",
//             "Intern",
//             "Manager"
//         ],
//         name: "role"
//     },
//     {
//         message: "Enter team member's id",
//         name: "id"
//     },
//     {
//         message: "Enter team member's email address",
//         name: "email"
//     }])
//     .then(function({name, role, id, email}) {
//         let roleInfo = "";
//         if (role === "Engineer") {
//             roleInfo = "GitHub username";
//         } else if (role === "Intern") {
//             roleInfo = "school name";
//         } else {
//             roleInfo = "office phone number";
//         }
//         inquirer.prompt([{
//             message: `Enter team member's ${roleInfo}`,
//             name: "roleInfo"
//         },
//         {
//             type: "list",
//             message: "Would you like to add more team members?",
//             choices: [
//                 "yes",
//                 "no"
//             ],
//             name: "moreMembers"
//         }])
//         .then(function({roleInfo, moreMembers}) {
//             let newMember;
//             if (role === "Engineer") {
//                 newMember = new Engineer(name, id, email, roleInfo);
//             } else if (role === "Intern") {
//                 newMember = new Intern(name, id, email, roleInfo);
//             } else {
//                 newMember = new Manager(name, id, email, roleInfo);
//             }
//             employees.push(newMember);
//             addHtml(newMember)
//             .then(function() {
//                 if (moreMembers === "yes") {
//                     addMember();
//                 } else {
//                     finishHtml();
//                 }
//             });
            
//         });
//     });
// }

// // function renderHtml(memberArray) {
// //     startHtml();
// //     for (const member of memberArray) {
// //         addHtml(member);
// //     }
// //     finishHtml();
// // }

// function startHtml() {
//     const html = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <title>Team Profile</title>
//     </head>
//     <body>
//         <nav class="navbar navbar-dark bg-dark mb-5">
//             <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
//         </nav>
//         <div class="container">
//             <div class="row">`;
//     fs.writeFile("./Template/index.html", html, function(err) {
//         if (err) {
//             console.log(err);
//         }
//     });
//     console.log("start");
// }

// function addHtml(member) {
//     return new Promise(function(resolve, reject) {
//         const name = member.getName();
//         const role = member.getRole();
//         const id = member.getId();
//         const email = member.getEmail();
//         let data = "";
//         if (role === "Engineer") {
//             const gitHub = member.getGithub();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Engineer</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">GitHub: ${gitHub}</li>
//             </ul>
//             </div>
//         </div>`;
//         } else if (role === "Intern") {
//             const school = member.getSchool();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Intern</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">School: ${school}</li>
//             </ul>
//             </div>
//         </div>`;
//         } else {
//             const officePhone = member.getOfficeNumber();
//             data = `<div class="col-6">
//             <div class="card mx-auto mb-3" style="width: 18rem">
//             <h5 class="card-header">${name}<br /><br />Manager</h5>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email Address: ${email}</li>
//                 <li class="list-group-item">Office Phone: ${officePhone}</li>
//             </ul>
//             </div>
//         </div>`
//         }
//         console.log("adding team member");
//         fs.appendFile("./Template/index.html", data, function (err) {
//             if (err) {
//                 return reject(err);
//             };
//             return resolve();
//         });
//     });
    
            
    
        
    
    
// }

// function finishHtml() {
//     const html = ` </div>
//     </div>
    
// </body>
// </html>`;

//     fs.appendFile("./Template/index.html", html, function (err) {
//         if (err) {
//             console.log(err);
//         };
//     });
//     console.log("end");
// }

// // addMember();
// // startHtml();
// // addHtml("hi")
// // .then(function() {
// // finishHtml();
// // });
// initApp();

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./Library/engineer");
// const Engineer = require("./Library/engineer2");
// const Engineer = require("./Library/engineer3");
const Intern = require("./Library/intern");
const Manager = require("./Library/manager");
const generateHTML = require("./Template/generateHTML");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

// function renderHtml(memberArray) {
//     startHtml();
//     for (const member of memberArray) {
//         addHtml(member);
//     }
//     finishHtml();
// }

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./Template/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./Template/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./Template/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

// addMember();
// startHtml();
// addHtml("hi")
// .then(function() {
// finishHtml();
// });
initApp();