class Employee {
    constructor(name, id, role, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Employee