// Criar testes em Jest permite várias possibilidades além 
// dos testes de unidade, por exemplo:

// Testar um componente isoladamente

// Testar a API pública de um componente (propriedades e 
// métodos @api, eventos)
// Testar a interação básica do usuário (como ação de clicks)

// Permite verificar a saída DOM de um componente
// Verificar se os eventos disparam quando esperado

// Primeiros comandos

// Para entender melhor como o Jest funciona, vamos considerar
// um exemplo de código onde recebemos um email e devemos 
// verificar sua validade:

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

module.exports = validateEmail;

// Aqui, não precisamos entender como a expressão regular 
// acima funciona. Vamos nos concentrar no entendimento geral 
// da função. Devemos pensar da seguinte maneira:

// “Bem, eu tenho um código que recebe um email. Quais 
// condições eu preciso analisar para verificar se ele é 
// válido ou não?”

// Como sabemos que um email é válido? Podemos pensar em 
// duas condições:

// Todo email contém um domínio associado (@nomedominio.com);
// O nome de usuário contém pelo menos 1 caractere.
// Com isso em mente, agora podemos criar um código utilizando 
// funções do Jest que possa representar as condições acima. 
// Assim:

// nome do arquivo emailValido.test.js

const validateEmail = require('./emailValido');

test('validateEmail deve retornar verdadeiro para xxx@ultima.com', () => {
    expect(validateEmail('xxx@ultima.com')).toBeTruthy();
});

// A função test() é fornecida pelo próprio Jest e recebe 
// dois argumentos:

// string — descrição do que está sendo testado
// function — função sem argumentos que irá testar o nosso 
// código
// Observe que escrevemos um teste a partir das condições que 
// pensamos lá em cima. No código, estamos testando se a nossa 
// função validateEmail() irá retornar true para o valor de 
// string “xxx@ultima.com”.

// Podemos ainda criar um teste para o caso de ser fornecido 
// um email sem um valor de domínio válido (ausência do símbolo 
// de ‘@’). Como ficaria? Basta editar o mesmo arquivo do 
// código de testes. Assim:

test('validateEmail deve retornar falso para xxxZultima.com', () => {
    expect(validateEmail('xxxZultima.com')).toBeFalsy();
});

// Os comandos test(), toBeTruthy(), toBeFalsy() são funções 
// existentes dentro da biblioteca do Jest. Além desses, 
// existem outros que possibilitam a criação e utilização 
// para diversos cenários.