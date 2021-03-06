const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getTitle() {
        return "Engineer";
    }

    getGitHubName() {
        return this.github;
    }
}



module.exports = Engineer;