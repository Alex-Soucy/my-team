class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    }

    getEmpName() {
        return this.name;
    }

    getEmpId() {
        return this.id;
    }

    getEmpEmail() {
        return this.email;
    }

    getEmpTitle() {
        return this.title;
    }
}


module.exports = Employee;