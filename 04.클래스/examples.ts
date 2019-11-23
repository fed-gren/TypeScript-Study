class Animal {
  private _leg: number = 0;
  protected _eye: number = 0;
}

class Person extends Animal {
  constructor(protected _name: string, protected _age: number) {
    super();
  }

  hello(): void {
    console.log(this._name);
  }

  bye = (): void => {

  }
}

const person = new Person('Gren', 28);
console.log(person);
person.hello();


class Child extends Person {
  _name: string = 'Jr';

  constructor() {
    super('Kim', 22);
  }
}

const child:Child = new Child();
child.hello();