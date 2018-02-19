var isDone = true;
//var x: isDone = "Teste"; - Error
var height = 6;
var seller = "Bob";
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
var notSure = 4;
notSure = "Changed to string";
notSure = false;
var listOfAny = [1, true, "free"];
listOfAny[1] = 100;
function warnUser() {
    alert("This does not return anything, only prints a message");
}
