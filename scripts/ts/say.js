var Student = /** @class */ (function () {
    function Student(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.fullname = firstName + " " + LastName;
    }
    return Student;
}());
//function say(person: iPerson) - Line type removed because I have a class too
function say(person) {
    return "Hello " + person.firstname;
}
var user = { firstname: "João Vitor", lastname: "Lessa" };
//var user = {firstname: 10, lastname: 11};
//That would cause error because TypeScript compiler would detected that variable is not a string
var user2 = new Student("João Vitor", "Barros");
console.log(say(user));
console.log(say(user2));
