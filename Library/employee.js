
// Make these as broad statements. YOU CAN ALWAYS USE THIS AGAIN
class Employee {
    constructor(name, id,email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // This will return your name
    getName() {       return this.empName;    }

    getId() {       return this.id;    }

    getEmail() {       return this.email;    }
    
    getRole() {       return this.role;    }
  }

module.exports = Employee