/**
 * 상황 1.
 * 배열이긴 한데, 어떤 타입의 배열이 들어올지 모른다.
 * 그냥 배열 들어오면 순회하면서 출력
 */

type AnyArray<T> = T[];
const arrayPrint = (array: AnyArray<any>): void => {
  for (let value of array) {
    console.log(value);
  }
}

arrayPrint([1,2]);
arrayPrint(['a', 'b']);
arrayPrint([true, false]);