interface Person2 {
  name: string;
  age?: number; //없어도 되지만 있으면 number 타입! optional property
}

const p21 = {
  name: 'gren'
};

const p22 = {
  name: 'gren',
  age: 28
}

function hello2(person: Person2): void {
  //age가 optional
  if(person.age === undefined) return;  //type guard

  console.log(`hello, I'm ${person.name} ${person.age.toString()}`);
}

hello2(p21);
hello2(p22);