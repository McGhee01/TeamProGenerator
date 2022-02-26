// This allows all info from employee to here: Part 1
const Employee = require("./employee");

// This allows all info from employee to here: Part 2
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Below (super) is what we are grabbing/keeping from the original (employee.js). AKA Copy and paste 
        super(name,id, email);
        this.github = github; 
    }
    

    getGithub () {  return this.github;  }

        getRole () {    return 'Engineer';  }
}
module.exports = Engineer;
