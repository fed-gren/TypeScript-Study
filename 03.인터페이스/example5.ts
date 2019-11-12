//구현. 인터페이스는 클래스에 상속할 수 없음. 대신 '구현'을 함
interface IPerson5 {
  name: string;
  age: number;
}

class Person5 implements IPerson5 {
  name: string = 'Gren';  //구현하는 파트. 여기에 값을 대입한 건, 기본값을 대입한건가?
  age: number = 28;
}