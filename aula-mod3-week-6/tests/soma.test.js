const soma = require('./../src/soma')

test('Adicione 1 + 2 e resulte em 3', () => {

    expect(soma(1, 2)).toBe(3);

});

test('Adicione 1 + 2 e não resulte em 5', () => {

    expect(soma(1, 2)).not.toBe(5);

});

