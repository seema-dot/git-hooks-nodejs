const mult=  require('../src/mult')

it('Should return correct mult', () => {
    const result =mult(2,5)
    expect(result).toBe(10)
})