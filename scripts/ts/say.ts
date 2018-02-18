interface iPerson{
    firstname: string;
    lastname: string;
}

function say(person: iPerson){
    return "Hello " + person.firstname;
}

var user = {firstname: "João Vitor", lastname: "Lessa"};

//var user = {firstname: 10, lastname: 11};
//That would cause error because TypeScript compiler would detected that variable is not a string

console.log(say(user));