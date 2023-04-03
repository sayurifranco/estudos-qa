const { calculator } = require("../functions/calculator")

test('Sum test: 1, 1', function() {
    expect(calculator.sum(1,1)).toBe(2);
});

test('Subract 1, 1', function() {
    expect(calculator.subtract(1,1)).toBe(0)
})

test('Multiply 1, 1', function() {
    expect(calculator.multiply(1,1)).toBe(1)
})

test('Divide 1, 1', function() {
    expect(calculator.divide(1,1)).toBe(1)
})