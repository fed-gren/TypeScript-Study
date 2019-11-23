function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];

function double(arg: string | number | boolean[]) {
  if (typeof arg === 'string') {
    return `${arg}${arg}`;
  } else if (typeof arg === 'number') {
    return arg * 2;
  } else if (Array.isArray(arg)) {
    return arg.concat(arg);
  }
}

const num = double(3); // number
const str = double('ab'); // string
const arr = double([true, false]); // boolean[]

console.log(num, str, arr);