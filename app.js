class Customer {
    firstName;
    lastName;
    age;
    gender;
    mobNumber;
    accNumber;
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mob;
        this.accNumber = acc;
    }
}
class Bank {
    cusomer = [];
    account = [];
}
let myBank = new Bank();
let cus = new Customer("Arsalan", "Iqbal", 34, "Male", 3661389, 100340640);
let cus2 = new Customer("Ali", "Iqbal", 30, "Male", 99212121, 164043029);
console.log(cus);
console.log(cus2);
export {};
