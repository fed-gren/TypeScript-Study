//* Bool
let isDone: boolean = false;


// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


//* String
let color: string = 'blue';
color = 'red';
let myName: string = 'Mike';
let sentence: string = `Hello, my name is ${myName}`;


//* Array
let list: number[] = [1, 2, 3];
let list2: Array<string> = ['a', 'b', 'c'];
// let list3: Array<string> = ['a', 'b', 1]; //error


//* Tuple
// 튜플 타입 선언
let x: [number, string];
// 초기화
x = [10, 'hello'];
// 오류
// x = ['hello', 10];

// console.log(x[0].substr(1));  //result: Error
console.log(x[1].substr(1));  //result: ello

//? 왜 에러가 나지!??!?!?!
// x[3] = 'world';
// console.log(x[5].toString());
// x[6] = true;


//* Enum
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(c);
console.log(colorName);


//* Any
let notSure: any = 4;
// notSure.ifItExists(); //runtime에 ifItExists라는 메소드가 있을 수 있다.
notSure.toFixed();
// notSure.substring();  //Error지만 컴파일 타임에 검사하지 않음.

let prettySure: Object = 4;
// prettySure.toFixed();  //Error

let anyList: any[] = [1, true, 'tree'];
anyList[1] = 100;
console.log(anyList);


//* Void
function warnUser(): void {
  console.log('My message');
}

let unusable: void = undefined;


//* Null, Undefined
let u: undefined = undefined;
let n: null = null;
let u2: number = undefined;  //--strictNullChecks => Error!


//* Never
//반환된 함수에는 연결할수 없는 end-point가 있어서는 안된다.
//즉, 그냥 에러를 던지면서 프로그램이 종료 되는데, 반환값으로 무엇을 할 일이 절대 없으므로 never를 반환한다.
function myError(message: string): never {
  throw new Error(message);
}

function myFail() {
  return myError('Something failed');
}


//* Type assertion
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
console.log(strLength);

let otherValue: any = 'this is a string';
let textLength: number = (someValue as string).length;
console.log(textLength);
