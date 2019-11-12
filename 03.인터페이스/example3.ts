//타입에 상관없는 속성 추가 가능한 인터페이스

interface Person3 {
  //name require, age optional, rest property can be any type
  name: string;
  age?: number;
  //indexible type (string)
  [index: string]: any;
}

const p3: Person3 = {
  name: 'Gren',
  age: 29,
  gender: ['male', 'female']
}