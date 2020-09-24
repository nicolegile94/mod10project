const Employee = require('./Employee');

function Engineer() {
    this.github = "testgithub"
    this.role = "Engineer"
};

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