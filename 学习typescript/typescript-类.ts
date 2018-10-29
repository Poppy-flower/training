class Student{
    fullName: string;
    constructor(public firstName, public middleIntial, public lastName){
        this.fullName = firstName + " " + middleIntial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string
}

function greeter(person: Person){
    return "Hello" + person.firstName + " " + person.lastName;
}

let user = new Student("Chen", "Xiao", "Hong");

document.body.innerHTML = greeter(user);