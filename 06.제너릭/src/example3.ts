//Array & Tuple

function helloArray<T>(message: T[]):T {
  return message[0];
};

console.log(helloArray(['hello', 'world']));
console.log(helloArray(['hello', 5]));  //error 안나는 이유, string|number의 union 타입
//0 인덱스를 반환하니까 무조건 string인데 union 타입을 반환해서 이렇게 작성하면 안됨.

function helloTuple<T, K> (message: [T, K]): T {
  return message[0];
};

console.log(helloTuple(['hello', 'world']));
console.log(helloTuple(['hello', 5]));
//이런 경우, 반환 타입 추론 가능
// console.log(helloTuple([1,2,3])); //error.