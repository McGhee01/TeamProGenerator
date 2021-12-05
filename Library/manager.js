// This allows all info from employee to here: Part 1
const Employee = require("./employee");

// This allows all info from employee to here: Part 2
class Manager extends Employee {
    constructor(name, id, email, office) {
        // Below (super) is what we are grabbing/keeping from the original (employee.js). AKA Copy and paste 
        super(name,id, email);

        this.getOfficeNumber = this.getOfficenumber; 
        }

        getOfficeNumber () {    return this.getOfficeNumber;    }
        
        getRole () {    return 'Manager';   }
}
module.exports = Manager;
