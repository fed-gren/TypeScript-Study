const obj = {a: 1, b: 'a'};

let {a, b}: {a:number, b: string} = obj;
console.log(a, b);