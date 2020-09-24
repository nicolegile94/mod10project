const Employee = require('./Employee');

function Manager(name, id, email, officeNumber, role) {
    this.name = name;
    this.id = id;
    this.email = email,
    this.officeNumber = officeNumber;
    this.role = role
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return {
        role: this.role
    }
};

module.exports = Manager;