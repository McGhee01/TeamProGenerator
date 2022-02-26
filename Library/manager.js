// This allows all info from employee to here: Part 1
const Employee = require("./employee");

// This allows all info from employee to here: Part 2
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Below (super) is what we are grabbing/keeping from the original (employee.js). AKA Copy and paste 
        super(name,id, email);

        this.officeNumber = officeNumber; 
        }
        getRole () {    return 'Manager';   }

        getOfficeNumber () {    return this.officeNumber;    }
        
}
module.exports = Manager;
