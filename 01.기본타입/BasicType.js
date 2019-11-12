//* Bool
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//* String
var color = 'blue';
color = 'red';
var myName = 'Mike';
var sentence = "Hello, my name is " + myName;
//* Array
var list = [1, 2, 3];
var list2 = ['a', 'b', 'c'];
// let list3: Array<string> = ['a', 'b', 1]; //error
//* Tuple
// 튜플 타입 선언
var x;
// 초기화
x = [10, 'hello'];
// 오류
// x = ['hello', 10];
// console.log(x[0].substr(1));  //result: Error
console.log(x[1].substr(1)); //result: ello
//? 왜 에러가 나지!??!?!?!
// x[3] = 'world';
// console.log(x[5].toString());
// x[6] = true;
//* Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(c);
console.log(colorName);
//* Any
var notSure = 4;
// notSure.ifItExists(); //runtime에 ifItExists라는 메소드가 있을 수 있다.
notSure.toFixed();
// notSure.substring();  //Error지만 컴파일 타임에 검사하지 않음.
var prettySure = 4;
// prettySure.toFixed();  //Error
var anyList = [1, true, 'tree'];
anyList[1] = 100;
console.log(anyList);
//* Void
function warnUser() {
    console.log('My message');
}
var unusable = undefined;
//* Null, Undefined
var u = undefined;
var n = null;
var u2 = undefined; //--strictNullChecks => Error!
//* Never
//반환된 함수에는 연결할수 없는 end-point가 있어서는 안된다.
//즉, 그냥 에러를 던지면서 프로그램이 종료 되는데, 반환값으로 무엇을 할 일이 절대 없으므로 never를 반환한다.
function myError(message) {
    throw new Error(message);
}
function myFail() {
    return myError('Something failed');
}
//* Type assertion
var someValue = 'this is a string';
var strLength = someValue.length;
console.log(strLength);
var otherValue = 'this is a string';
var textLength = someValue.length;
console.log(textLength);
