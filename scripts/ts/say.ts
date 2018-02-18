class Student{
    fullname: string;
    constructor(public firstName, public LastName){
        this.fullname = firstName + " " + LastName;
    }
}

interface iPerson{
    firstname: string;
    lastname: string;
}

//function say(person: iPerson) - Line type removed because I have a class too
function say(person){
    return "Hello " + person.firstname;
}

var user = {firstname: "João Vitor", lastname: "Lessa"};
//var user = {firstname: 10, lastname: 11};
//That would cause error because TypeScript compiler would detected that variable is not a string

var user2 = new Student("João Vitor", "Barros");

console.log(say(user));
console.log(say(user2));