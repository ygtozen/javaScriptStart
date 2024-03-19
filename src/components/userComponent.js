import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component yüklendi");

let userService = new UserService();

let user1 = new User(1, "Yiğit", "Özen", "Bandırma");
let user2 = new User(1, "Engin", "Demiroğ", "Ankara");

userService.add(user1);
userService.add(user2);


console.log(userService.list());
console.log(userService.getById(1));



// prototyping
let customer = {id:1, firstName:"Yiğit"};
customer.lastName = "Özen";
console.log(customer.lastName);