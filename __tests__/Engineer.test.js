const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('creates new Engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets Engineer's github", () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toHaveProperty('github');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toHaveProperty('role');
})
