const { Module } = require("module");
const Employee = require("../Library/employee");

// Make these as broad statements. YOU CAN ALWAYS USE THIS AGAIN
class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name,id, email);
    this.school = school;
      

    }
    // This will return your name
    getSchool() {       return this.school;    }

    getRole() {       return "Intern";    }
   
  }

module.exports = Intern