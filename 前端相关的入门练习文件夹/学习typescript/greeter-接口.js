function greeter(person) {
    return "Hello" + person.firstName + person.lastName;
}
var user = {
    firstName: "Chen",
    lastName: "Hong"
};
document.body.innerHTML = greeter(user);
