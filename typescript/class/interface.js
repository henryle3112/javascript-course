var Elephant = /** @class */ (function () {
    function Elephant() {
    }
    Elephant.prototype.move = function () {
        console.log("Elephant move!");
    };
    return Elephant;
}());
var elephant = new Elephant();
elephant.move();
