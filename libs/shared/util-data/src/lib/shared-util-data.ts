export interface MultipleSortParam {
  property: string;
  direction: number;
}

export const multipleSortArray = (
  array: any[],
  sortBy: MultipleSortParam[]
) => {
  return array.slice().sort((objectA, objectB) => {
    let i = 0;
    let result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (objectA[sortBy[i].property].toString() <
        objectB[sortBy[i].property].toString()
          ? -1
          : objectA[sortBy[i].property].toString() >
            objectB[sortBy[i].property].toString()
          ? 1
          : 0);
      i++;
    }
    return result;
  });
};
