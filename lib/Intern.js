const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, role, email, school) {
        super(name, id, role, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Intern;