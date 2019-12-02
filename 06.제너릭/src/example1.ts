function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

function helloAny(message: any): any {
  return message;
}

helloAny('name');
helloString('name');
helloNumber(36);

function helloGeneric<T>(message: T): T {  //아직 T라는 타입이 뭔지 모름
                                           //<T>라고 작성하면 타입 변수를 쓰겠다는 의미.
                                           //T는 타입 변수명임. 임의로 변경 가능
  return message; //이제 message로 들어온 타입을 반환하므로 타입 추론이 가능하다.
}

helloGeneric("Gren");  //이 경우는, 인자로부터 추론해서 T에 타입을 넣고 리턴 타입으로 사용하게 됨.
helloGeneric(3);
// helloGeneric<number>('Gren');  //! Error 사용할 때 여기엔 어떤 타입이 인자로 들어가는지 정해주는 것
//* 즉, Generic 타입을 쓰면 검증하고, 쓰지않으면 추론한다.
//! any랑은 완전히 다른 것임!!!!!