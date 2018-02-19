//Class that implements the Interface and calls it function
var Student = /** @class */ (function () {
    function Student(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Student.prototype.register = function () {
        console.log("Aluno cadastrado com sucesso.");
    };
    return Student;
}());
//Main function
function run(student) {
    student.register();
}
//Passing student params and calling Main function
var student = new Student("João", "joaovitorlessa@gmail.com", 24);
run(student);