const Employee = require('../lib/Employee');

test('creates new employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Set employee name', () => {
    const testEmpName = "Alex"
    const employee = new Employee(testEmpName);
    expect(employee.name).toBe(testEmpName);
});

test('Set employee ID', () => {
    const testEmpId = 1234;
    const employee = new Employee("Alex", testEmpId);
    expect(employee.id).toBe(testEmpId);
});

test('Set employee email', () => {
    const testEmpEmail = "al@website.com"
    const employee = new Employee("Alex", 1234, testEmpEmail);
    expect(employee.email).toBe(testEmpEmail);
});

test('Get employee name', () => {
    const empName = "Alex";
    const employee = new Employee(empName);
    expect(employee.getEmpName()).toBe(empName);
});

test('Get employee ID', () => {
    const empId = 1234;
    const employee = new Employee("Alex", empId);
    expect(employee.getEmpId()).toBe(empId);
});

test('Get employee email', () => {
    const empEmail = "al@website.com";
    const employee = new Employee("Alex", 1234, empEmail);
    expect(employee.getEmpEmail()).toBe(empEmail);
});

test('Get employee title', () => {
    const empTitle = "Employee"
    const employee = new Employee("Alex", 1234, "al@website.com");
    expect(employee.getEmpTitle()).toBe(empTitle);
});