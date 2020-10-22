it('deve retornar o resultado da soma de x + y', () => {
  const res = function (x: number, y: number) {
    return x + y
  }

  expect(res(3, 5)).toBe(8)
})
