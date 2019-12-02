//Class

class Person<T extends string | number, K> {
  //? T는 string, number만 상속받는 타입이다.
  name!: T; //!는 nullable이다. null, undefined를 허용한다.
  age!: K;

  constructor(name: T, age: K) {

  }
}

const p5 = new Person('Gren', 28);
// new Person<number>('Gren');
// p5.age = 'male'; //error. age's type is number
