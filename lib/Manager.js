const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = role
    }

    getRole() {
        return "Manager"
    }

    getofficeNumber() {
        return this.officeNumber
    }
};

module.exports = Manager;