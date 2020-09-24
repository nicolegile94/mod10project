const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('creates new Intern object', () => {
    const intern = new Intern();

    expect(intern.school).toEqual(expect.any(String));
});

test("gets Intern's school", () => {
    const intern = new Intern();

    expect(intern.getSchool()).toHaveProperty('school');
});

test("gets Intern's role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toHaveProperty('role');
});