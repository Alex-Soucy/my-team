const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const Engineer = require("../lib/Engineer");

test('Sets Github name to employee', () => {
    const testGhName = "GitHub-Name";
    const employee = new Engineer("Alex", 1234, "al@website.com", testGhName);
    expect(employee.github).toBe(testGhName);
});

test('Check for correct return of title', () => {
    const testEmpTitle = "Engineer";
    const employee = new Engineer("Alex", 1234, "al@website.com", "GitHub-Name");
    expect(employee.getEmpTitle()).toBe(testEmpTitle);
});

test('Get Github name', () => {
    const testGhName = "GitHub-Name";
    const employee = new Engineer("Alex", 1234, "al@website.com", testGhName);
    expect(employee.getGitHubName()).toBe(testGhName);
});
