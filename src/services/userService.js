import { users } from "../data/users.js";
import DataError from "../models/dataErrors.js";

export default class UserService {

    constructor(loggerService) {
        this.employees = [];
        this.customers = [];
        this.errors = [];
        this.loggerService = loggerService;
    }

    load() { // Gelen datayı employee ve custome olarak ayrıcak
        for (const user of users) {
            //console.log(user)
            switch (user.type) {
                case "customer": 
                if(!this.checkCustomerValidityForErrors(user)) { 
                    this.customers.push(user);
                }                  
                    break;
                case "employee": 
                if(!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user);
                }                   
                    break;
            
                default:
                    this.errors.push(new DataError("Wrong user type", user)); 
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user) { // Bazı alanları zorunlu olmasıonı istiyoruz mesela       
        let requiredFields = "id firstName lastName age city".split(" "); // boşluğa göre metni parçalar, arra döndürür
        let hasErrors = false; // hata yoksa false
        for (const field of requiredFields) {
            if(!user[field]) { // Bu alanlar yoksa
                hasErrors = true; // hata varsa true
                this.errors.push(
                    new DataError(`Validation problem. Field is required ${field}`, user));
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))) { // age sayı değilse 
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user));
        } 

        return hasErrors;
    }

    checkEmployeeValidityForErrors(user) { // Bazı alanları zorunlu olmasıonı istiyoruz mesela       
        let requiredFields = "id firstName lastName age city salary".split(" "); // boşluğa göre metni parçalar, arra döndürür
        let hasErrors = false; // hata yoksa false
        for (const field of requiredFields) {
            if(!user[field]) { // Bu alanlar yoksa
                hasErrors = true; // hata varsa true
                this.errors.push(
                        new DataError(`Validation problem. Field is required ${field}`, user));
            }
        }
        return hasErrors;
    }

    add(user) {
        //this.users.push(user);
        this.loggerService.log(user)
    }

    list() {
        //return this.users;
    }

    getById(id) {
        //return this.users.find(u => u.id === id);
    }

}