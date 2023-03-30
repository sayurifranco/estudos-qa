// O que são testes de unidade?

// Testes de unidades consistem em ações para garantir que 
// uma unidade de código (classe, método ou função) funcione 
// de maneira adequada. Visa garantir que essas partes menores 
// sejam válidas independentemente do programa todo.

// Quando desejamos trabalhar com TDD, devemos ter em mente 
// que a utilização e definição dos testes de unidade são 
// fundamentais para assegurar a correta validação de um trecho 
// de código. Para ilustrar melhor o uso de testes de unidade, 
// considere o exemplo a seguir.

// Criando testes de unidade
// Aqui temos um método que aplica um desconto, em reais, ao 
// valor de um produto, também definido em reais. Para isso, 
// começamos escrevendo a função de teste dessa funcionalidade 
// em um arquivo chamado desconto.js e comparando o retorno da 
// função aplicarDesconto com o valor esperado, o que chamamos 
// de asserção ou assert (em Inglês):

function aplicarDescontoTeste(){
    // Dá desconto de 5 reais no produto de preço 20
    return aplicarDesconto(20,5) === 15;
}

// console.log('A aplicação de desconto está funcionando? ');
// console.log(aplicarDescontoTeste());

//  Quando executamos o código desconto.js, vamos obter um erro, 
// pois a função aplicarDesconto() não existe. E é justamente 
// isso que precisamos visualizar.

// Com essa informação em mente, já sabemos o resultado que 
// desejamos obter ao executar a função aplicarDesconto(). 
// Agora, para fazer dar certo, criamos a função para obter 
// exatamente o resultado esperado. Lembrando que, nesse ponto, 
// criamos o código da maneira mais simples possível.

function aplicarDesconto(preco, desconto){
    return preco - desconto;
}

// Ao executar novamente o arquivo desconto.js, veremos que o 
// resultado dos testes será válido.

// Seguindo as etapas do TDD, agora precisamos refatorar o 
// código e pensar em condições para garantir que o código 
// funcione da maneira mais adequada. Um exemplo de melhoria 
// que pode ser implementado é garantir que o preço do desconto 
// oferecido seja menor que o valor do produto. Caso contrário, 
// teremos um desconto maior que o permitido, gerando um valor 
// negativo como resultado.

// Refatorando o código definido inicialmente, chegamos ao 
// seguinte resultado:

function aplicarDesconto(preco, desconto){
   if (desconto > valor)
       return 0;     

   return preco - desconto;
}

// Ao executar o arquivo de testes, podemos confirmar que os 
// dois testes passam na avaliação.

// Quando trabalhamos com testes de unidade, devemos garantir 
// a cobertura do nosso código, ou seja, devemos “prever” os 
// cenários possíveis em uma situação real. Por exemplo, a 
// partir desse código, podemos inserir condições para comparar 
// se o desconto tem valor negativo ou se o preço fornecido é 
// negativo, seja por um erro de digitação ou utilização de 
// algum método.

// A preocupação aqui não é pensar em todas as possibilidades, 
// mas criar assertivas que garantam uma boa cobertura de 
// código. A decisão do quanto o seu código deve abranger deve 
// ser analisada junto à equipe de desenvolvimento.