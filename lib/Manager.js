const Employee = require('./Employee');

function Manager() {
    this.officeNumber = 5;
    this.role = "Manager"
}

Manager.prototype.getRole = function() {
    return {
        role: this.role
    }
};

module.exports = Manager;