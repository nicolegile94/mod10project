const Employee = require('../lib/Employee.js')

test('creates an Employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets Employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toHaveProperty('name');
});

test("gets Employee's ID", () => {
    const employee = new Employee('Dave');

    expect(employee.getID()).toHaveProperty('id');
});

test("gets Employee's email", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets Employee's Role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toHaveProperty('role');
});