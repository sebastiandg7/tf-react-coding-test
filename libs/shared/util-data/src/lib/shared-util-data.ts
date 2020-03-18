export interface MultipleSortParam<K> {
  property: keyof K;
  direction: number;
}

export function multipleSortArray<T>(
  array: T[],
  sortBy: MultipleSortParam<T>[]
): T[] {
  const arrayCopy = array.slice();
  arrayCopy.sort((objectA, objectB) => {
    let i = 0;
    let result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        compareValues(objectA[sortBy[i].property], objectB[sortBy[i].property]);
      i++;
    }
    return result;
  });
  return arrayCopy;
}

export const compareValues = (valueA: any, valueB: any): number => {
  let result = 0;

  if (typeof valueA === 'number' && typeof valueB === 'number') {
    const numberA = Number(valueA);
    const numberB = Number(valueB);
    result = numberA < numberB ? -1 : numberA > numberB ? 1 : 0;
  } else {
    result =
      valueA.toString() < valueB.toString()
        ? -1
        : valueA.toString() > valueB.toString()
        ? 1
        : 0;
  }

  return result;
};
