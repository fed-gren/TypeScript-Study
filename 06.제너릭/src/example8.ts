/**
 * 제너릭을 유용하게 사용할 수 있는 예제
 * keyof에 대해 알아야 함.
 */

interface Person8 {
  name: string;
  age: number;
}

type a = keyof Person8;

const person8 = {
  name: 'Gren',
  age: 28,
}


// keyof T => name과 age의 union 타입이 될 것이다.
function getProperty<T, K extends keyof T>(person: T, key: K): T[K] {
  return person[key];
}

// getProperty(person8, 'neme');  //name이라는 property가 있어야 한다고 error
getProperty(person8, 'name');
getProperty(person8, 'age');

function setProperty<T, K extends keyof T>(person: T, key:K, value: T[K]): void {
  person[key] = value;
}

setProperty(person8, 'age', 29);
// setProperty(person8, 'age', 'asd');  //error! 설정 될 value의 타입을 추론해서 보여줌.



type PartialPerson8 = Partial<Person8>;
// Partial<Person8>의 결과는 아래와 같다.
// const person8 = {
//   name?: 'Gren',
//   age?: 28,
// }

type ReadonlyPerson8 = Readonly<Person8>;
// const person8 = {
//   readonly name: 'Gren',
//   readonly age: 28,
// }

type pickedType = Pick<Person8, 'name'>;
type pickedType2 = Pick<Person8, 'age'>;