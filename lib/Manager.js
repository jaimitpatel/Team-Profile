const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, role, email, office) {
        super(name, id, role, email);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;