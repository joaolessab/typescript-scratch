var isDone: boolean = true;
//var x: isDone = "Teste"; - Error

var height: number = 6;

var seller: string = "Bob";

var list: Array<number> = [1, 2, 3];
var list2:number[] = [1, 2, 3];

enum Color{Red = 1, Green = 2, Blue = 3};
var c: Color = Color.Green;
var colorName: string = Color[2];

var notSure: any = 4;
notSure = "Changed to string"; 
notSure = false;

var listOfAny: any[] = [1, true, "free"];
listOfAny[1] = 100;

function warnUser(): void{
    alert("This does not return anything, only prints a message");
}