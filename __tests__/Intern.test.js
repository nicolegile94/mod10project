const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('creates new Intern object', () => {
    const intern = new Intern('testName', 'testID', 'testEmail', 'testSchool', 'testRole');

    expect(intern.school).toBe('testSchool');
});

test("gets Intern's school", () => {
    const intern = new Intern('testName', 'testID', 'testEmail', 'testSchool', 'testRole');

    expect(intern.getSchool()).toBe('testSchool');
});

test("gets Intern's role", () => {
    const intern = new Intern('testName', 'testID', 'testEmail', 'testSchool', 'testRole');

    expect(intern.getRole()).toBe('Intern');
});