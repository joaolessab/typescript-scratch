//Interfaces work like a contract
interface iStudent{
    name: string;
    email: string;
    age?: number; //Nullable
    register(): void;
}

//Class that implements the Interface and calls it function
class Student implements iStudent{
    constructor(public name: string, public email: string, public age?: number){ }

    register(): void{
        console.log("Aluno cadastrado com sucesso.");
    }
}

//Main function
function run(student: iStudent){
    student.register();
}

//Passing student params and calling Main function
var student = new Student("João", "joaovitorlessa@gmail.com", 24);
run(student);