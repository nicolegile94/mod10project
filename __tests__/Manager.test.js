const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('testName', 'testID', 'testEmail', 'testOfficeNumber', 'testRole');

    expect(manager.officeNumber).toBe('testOfficeNumber');
});

test("gets Manager's role", () => {
    const manager = new Manager('testName', 'testID', 'testEmail', 'testOfficeNumber', 'testRole');

    expect(manager.getRole()).toBe('Manager');
})