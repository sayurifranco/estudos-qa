const calculadora = {
    soma(numero_1, numero_2){
        return numero_1 + numero_2;
    },
    
    subtracao(numero_1, numero_2){
        return numero_1 - numero_2;
    },

    multiplicacao(numero_1, numero_2){
        return numero_1 * numero_2;
    },

    divisao(numero_1, numero_2){
        return numero_1 / numero_2;
    }
}

module.exports = {
    calculadora
};

// × soma de 2 números (4 ms)
                                                                                                                               
//   ● soma de 2 números                                                                                                          

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 0

//        9 |
//       10 | test('soma de 2 números', () => {
//     > 11 |     expect(calculadora.soma(2, 2)).toBe(4);
//          |                                    ^
//       12 | });

//       at Object.toBe (calculadora.test.js:11:36)

// Test Suites: 1 failed, 1 total                                                                                                 
// Tests:       1 failed, 1 total                                                                                                 
// Snapshots:   0 total
// Time:        0.501 s, estimated 1 s
// Ran all test suites.