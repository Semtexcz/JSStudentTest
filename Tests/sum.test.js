const sum = require("../Lesson0/sum")

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('adds -4 + 2 to equal -2', () => {
    expect(sum(-4,2)).toBe(-2)
})
