
class Customer {

    firstName: string
    lastName: string
    age: number
    gender: string
    mobNumber: number
    accNumber: number

    constructor(fName:string,lName:string,age:number,gender:string,mob:number,acc:number){

        this.firstName=fName
        this.lastName=lName
        this.age=age
        this.gender=gender
        this.mobNumber=mob
        this.accNumber=acc
    }
    
}

interface BankAccount {
    accNumber: number
    balance: number
}

class Bank {
    cusomer: Customer[] = []
    account: BankAccount[] = []
}

let myBank = new Bank();

let cus = new Customer("Arsalan", "Iqbal", 34, "Male", 3661389, 100340640);
let cus2 = new Customer("Ali", "Iqbal", 30, "Male", 99212121, 164043029);

console.log(cus);
console.log(cus2);