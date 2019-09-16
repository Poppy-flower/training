var Student = /** @class */ (function () {
    function Student(firstName, middleIntial, lastName) {
        this.firstName = firstName;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleIntial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello" + person.firstName + " " + person.lastName;
}
var user = new Student("Chen", "Xiao", "Hong");
document.body.innerHTML = greeter(user);
