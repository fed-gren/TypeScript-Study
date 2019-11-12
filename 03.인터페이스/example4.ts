interface Person4 {
  name: string;
  hello(age: number): void;  //함수 설명.
}

const p41: Person4 = {
  name: 'Gren',
  hello: function (age: number) {
    console.log(this.name, age);
  }
}

const p42: Person4 = {
  name: 'Gren',
  hello() {  //es6

  }
}

//함수는 선언할 때가 아니라, 사용(호출)할 때 타입 체크를 한다. 그래서 위에서는 에러가 없어..요 ㅠ
// p42.hello();