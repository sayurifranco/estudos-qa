/**
 * soma
 * subtração
 * multiplicação
 * divisão
 */

const { calculadora } = require('./calculadora.js');

test('soma de 2 números', () => {
    expect(calculadora.soma(2, 2)).toBe(4);
});

test('subtração de 2 números', () => {
    expect(calculadora.subtracao(4, 2)).toBe(2);
});

test('multiplicação de 2 números', () => {
    expect(calculadora.multiplicacao(2, 3)).toBe(6);
});

test('divisão de 2 números', () => {
    expect(calculadora.divisao(6, 2)).toBe(3);
});