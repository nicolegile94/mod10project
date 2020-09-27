const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('creates new Engineer object', () => {
    const engineer = new Engineer('testName', 'testID', 'testEmail', 'testGitHub', 'testRole');

    expect(engineer.github).toBe('testGitHub');
});

test("gets Engineer's github", () => {
    const engineer = new Engineer('testName', 'testID', 'testEmail', 'testGitHub', 'testRole');

    expect(engineer.getGithub()).toBe('testGitHub');
});

test("gets Engineer's role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
})
