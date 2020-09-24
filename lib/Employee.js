function Employee(name) {
    this.name = name;

    //update with inquirer things
    this.id = 1
    this.email = "testemail"
    this.role = "Employee"
}

Employee.prototype.getName = function() {
    return {
        name: this.name
    };
};

Employee.prototype.getID = function() {
    return {
        id: this.id
    };
};

Employee.prototype.getEmail = function() {
    return {
        email: this.email
    };
};

Employee.prototype.getRole = function() {
    return {
        role: this.role
    };
};

module.exports = Employee