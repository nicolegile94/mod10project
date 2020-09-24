const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager');

test('creates a Manager obkect', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets Manager's role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toHaveProperty('role');
})