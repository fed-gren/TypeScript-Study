interface Person1 {
  name: string;
  age: number;
}

// type Person2 = {
//   name: string;
//   age: number;
// };
// type alias.

function hello1(person: Person1): void {
  console.log(`hello, I'm ${person.name}`);
}

const p1: Person1 = { //인터페이스에 정의한 타입 property를 가지고 있지 않으면 에러로 알려줌.
  name: 'gren',
  age: 28
}

hello1(p1); //Person1에서 정의한 최소한의 타입을 만족해야만 대입 가능