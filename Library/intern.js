const { Module } = require("module");

// Make these as broad statements. YOU CAN ALWAYS USE THIS AGAIN
class Intern {
    constructor(school) {
      this.school = school;

    }
    // This will return your name
    getSchool() {       return this.school;    }

    getRole() {       return "Intern";    }
   
  }

module.exports = Intern