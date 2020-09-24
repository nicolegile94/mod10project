const Employee = require('./Employee');

function Intern() {
    this.school = "school"
    this.role = "Intern"
};

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