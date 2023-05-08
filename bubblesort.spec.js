describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    spyOn(window, "swap").and.callThrough(); // espiar la función swap()
    expect(bubbleSort([])).toEqual([]);
    expect(swap).not.toHaveBeenCalled(); // verificar que no se llama
  });

  it("Arreglo ordenado", function () {
    spyOn(window, "swap").and.callThrough(); // espiar la función swap()
    expect(bubbleSort([8, 5, 3, 1, 4, 7, 9])).toEqual([1, 3, 4, 5, 7, 8, 9]);
    expect(swap).toHaveBeenCalledTimes(9); // verificar que se llama 6 veces
  });

  it("Arreglo a la inversa ordenado debe terminar ordenado", function () {
    spyOn(window, "swap").and.callThrough(); // espiar la función swap()
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(swap).toHaveBeenCalledTimes(3); // verificar que se llama 3 veces
  });
});
