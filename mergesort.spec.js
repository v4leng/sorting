describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("mergeSort", function () {
  it("es capaz de ordenar un arreglo desordenado", function () {
    expect(mergeSort([2, 6, 5, 3, 4, 1])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
