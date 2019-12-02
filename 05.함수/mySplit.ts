function split(str: string, str2: string): string[] {
  let a = str.split(" ");
  let b = str2.split(" ");
  return a.concat(b);
};

let mySplit: (t1: string, t2: string) => string[] = split;
console.log(mySplit('Hi my name is', "Lee Eun bin"));