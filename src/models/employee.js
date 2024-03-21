import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) {
        super(id, firstName, lastName, city, age) // Bunları User class'ından extends aldık
        this.salary = salary
    }
}