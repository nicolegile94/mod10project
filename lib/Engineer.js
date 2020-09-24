const Employee = require('./Employee');

function Engineer(name, id, email, github, role) {
    this.name = name;
    this.id = id;
    this.email = email,
    this.github = github
    this.role = role
};

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getGithub = function() {
    return {
        github: this.github
    }
};

Engineer.prototype.getRole = function() {
    return {
        role: this.role
    }
}

module.exports = Engineer;