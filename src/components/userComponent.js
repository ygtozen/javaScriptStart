import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcers/logging/logger.js";
import User from "../models/user.js";
import Customer from "../models/customer.js";
import UserService from "../services/userService.js";

console.log("User Component yüklendi");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Yiğit", "Özen", "Bandırma");
let user2 = new User(2, "Engin", "Demiroğ", "Ankara");

userService.add(user1);
userService.add(user2);


//console.log(userService.list());
//console.log(userService.getById(1));

// prototyping
let customer = {id:1, firstName:"Yiğit"};
customer.lastName = "Özen";
console.log(customer.lastName);

console.log("-------------");
userService.load();

let customerToAdd = new Customer(1, "Seda", "Yılmaz", "Ankara", "asdasd")
customerToAdd.type = "customer"
userService.add(customerToAdd);

console.log(userService.customers); // customer[] - userService
console.log(userService.employees); // employee[] - userService
console.log(userService.errors); // errors[] - userService
console.log(userService.getCustomersSorted());
