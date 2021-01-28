// 3. importeren

const multiply = require('./index').multiply;

// 4. testen

test('multiply() function should return of result of multiply 2 numbers', () => {
    // ARRANGE
    const num1 = 4
    const num2 = 3

    // ACT
    cont result = multiply(num1, num2);

    // ASSERT
    expect.(result).toBe(12);
});