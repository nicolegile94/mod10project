const Employee = require('../lib/Employee.js')

test('creates an Employee object', () => {
    const employee = new Employee('nameTest', 'idTest', 'emailTest', 'roleTest');

    expect(employee.name).toBe('nameTest');
    expect(employee.id).toBe('idTest');
    expect(employee.email).toBe('emailTest');
    expect(employee.role).toBe('roleTest');
});

test("gets Employee's name", () => {
    const employee = new Employee('nameTest', 'idTest', 'emailTest', 'roleTest');

    expect(employee.getName()).toBe('nameTest');
});

test("gets Employee's ID", () => {
    const employee = new Employee('nameTest', 'idTest', 'emailTest', 'roleTest');

    expect(employee.getID()).toBe('idTest');
});

test("gets Employee's email", () => {
    const employee = new Employee('nameTest', 'idTest', 'emailTest', 'roleTest');

    expect(employee.getEmail()).toBe('emailTest');
});

test("gets Employee's Role", () => {
    const employee = new Employee('nameTest', 'idTest', 'emailTest', 'roleTest');

    expect(employee.getRole()).toBe('Employee');
});