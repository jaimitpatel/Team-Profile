const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email);
        this.git = github;
    }

    getGitHub() {
        return this.git;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;