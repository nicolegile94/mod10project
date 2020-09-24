const Employee = require('./Employee');

function Intern(name, id, email, school, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = role;
};

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype.getSchool = function() {
    return {
        school: this.school
    }
};

Intern.prototype.getRole = function() {
    return {
        role: this.role
    }
};

module.exports = Intern;