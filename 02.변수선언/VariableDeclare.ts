function foo() {
  // 'a'를 캡쳐합니다
  return a;
}

// 잘못된 호출로 'foo'가 선언되기 전에 'a'가 선언됩니다.
// 여기서 런타임 오류가 발생해야합니다.
foo();

let a;


function f(x: number) {
  console.log(x);
  var x = 2;
  console.log(x);
  var x = 1;
  console.log(x);

  if (true) {
    var x = 0;
  }
  console.log(x);
}

f(3);

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

const mat = [[1,2,3],[4,5,6]];
console.log(sumMatrix(mat));
