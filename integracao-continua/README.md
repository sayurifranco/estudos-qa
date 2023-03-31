* O que é integração contínua?

Consiste em uma prática de desenvolvimento de software, atualmente bastante difundida dentro da cultura DevOps, em que os desenvolvedores com frequência juntam suas alterações de código em um repositório central. Depois disso, criações e testes são executados. 

Uma definição bastante conhecida é:

Integração contínua é uma prática de desenvolvimento de software onde todos os membros de um time integram seu trabalho frequentemente, geralmente cada pessoa integra pelo menos diariamente — podendo haver múltiplas integrações por dia.

Geralmente, a integração contínua se refere ao estágio de criação ou integração do processo de lançamento de software, além de originar um componente de automação. Podemos dizer que os principais objetivos da integração contínua são:

encontrar e investigar bugs mais rapidamente; melhorar a qualidade do software; reduzir o tempo para validar e lançar novas atualizações e versões.
Imagine a seguinte situação: você faz parte de uma equipe de desenvolvimento de software que contém profissionais em diferentes cidades e até mesmo países. Cada um fica responsável por uma parte específica de um projeto. Eventualmente, o código que cada um faz precisa ser testado e validado junto com os demais arquivos feitos por cada desenvolvedor. Com esse cenário em mente, você consegue imaginar problemas e dificuldades existentes?

É justamente nessa parte do processo que devemos fazer uso das técnicas e procedimentos de integração contínua, a fim de garantir, entre outras coisas, compilações contínuas, execução de testes automatizados e validações de segurança.

* Como funciona a integração contínua?

Cada empresa ou equipe de um projeto pode definir suas próprias regras para executar códigos e validações em arquivos, e existem várias técnicas e ferramentas para isso. O fator principal é o reconhecimento dessas atividades e a definição de procedimentos que devem ser seguidos por toda a equipe.

Com a integração contínua, os desenvolvedores frequentemente confirmam um repositório compartilhado usando um sistema de controle de versão como o Git. Antes de cada confirmação, os desenvolvedores podem escolher executar testes de unidade locais em seus códigos como uma camada de verificação extra, anterior à integração.

* O que é entrega contínua?

A entrega contínua é uma evolução da Integração contínua. Além das práticas da integração contínua, a entrega contínua visa garantir que o código esteja apto para entrar em ambiente de produção.

Para isso, é necessário que: 

o deploy do código nos ambientes de homologação e desenvolvimento possa ser realizado de forma simplificada;  seja possível executar testes unitários;Inspeções finais e validações de segurança sejam executadas de maneira adequada e rápida.
Assim, eventuais problemas serão identificados rapidamente, acelerando o processo de disponibilização de novas funcionalidades para os usuários.

* Pipeline de implantação

Um dos desafios de um ambiente de compilação e teste automatizado é que é desejável que sua compilação seja rápida, para que possa obter feedback rápido, mas testes abrangentes levam muito tempo para serem executados.

Um pipeline de implantação é uma maneira de lidar com isso dividindo sua compilação em estágios. A cada estágio, maior é a confiança, porém, geralmente ao custo de tempo extra. Nos estágios iniciais pode ocorrer a maioria dos problemas, gerando um feedback mais rápido, enquanto os estágios posteriores geralmente são mais lentos e a maioria dos problemas é identificada por meio de sondagem.

Normalmente, o primeiro estágio de um pipeline de implantação fará qualquer compilação e fornecerá binários para estágios posteriores. Os estágios posteriores podem incluir verificações manuais, como quaisquer testes que não possam ser automatizados. Os estágios podem ser automáticos ou exigir autorização humana para prosseguir. Eles podem ser paralelizados em muitas máquinas para acelerar a construção. A implantação na produção geralmente é o estágio final de um pipeline.

Mais amplamente, o trabalho do pipeline de implantação é detectar quaisquer alterações que levem a problemas na produção. Isso pode incluir problemas de desempenho, segurança ou usabilidade. Um pipeline de implantação deve permitir a colaboração entre os vários grupos envolvidos na entrega de software e fornecer a todos visibilidade sobre o fluxo de alterações no sistema, juntamente com uma trilha de auditoria completa.

* Builds e testes automatizados

Até aqui já comentamos sobre a utilização de um sistema para controle de versão (Git), com o qual é possível criarmos branches, montar fluxos de trabalho com regras e diretrizes bem definidas para que uma equipe consiga realizar todas as atividades de validação antes de um envio para o servidor remoto. A ideia é que, com a execução correta da integração contínua, nos afastamos o mínimo possível do nosso ramo master principal.

Mas com todas essas alterações e fluxos alternativos vem outra questão. Como podemos garantir a qualidade do código? A resposta é: testes. No caso da integração contínua, precisaremos utilizar testes automatizados. O ideal é que a cada alteração seja realizado um novo teste automatizado, para termos certeza de que nenhum problema será gerado.

Testes fazem parte da construção do software Devem ser realizados antes de um commit A prática de TDD pode ajudar nesse processo
Os testes demorados podem ser uma barreira para a integração contínua, por isso é preciso atenção. O ideal é que, a cada pequena modificação no código, este passe por testes para garantir a sua funcionalidade e correta utilização por outras partes do código.

* Tipos de teste

Existem diversas categorias e diferentes níveis de testes automatizados. Aqui destacamos três: testes unitários, testes de integração e testes funcionais.

Os testes unitários verificam unidades como métodos e funções dentro do programa. São os testes mais rápidos, baratos de escrever e sua manutenção é simples.

Os testes de integração são de um nível mais alto, e testam a relação de elementos como, por exemplo, um banco de dados e o software. A realização desses testes é mais lenta, afinal possuem grau um maior de complexidade.

Os testes funcionais têm por finalidade testar o sistema por completo e garantir a correta utilização das funcionalidades pelo ponto de vista do cliente.

* Build Automatizado

Quando falamos em build automatizado, estamos nos referindo ao processo que tem por finalidade verificar se todos os componentes do nosso código fonte estão sendo integrados de maneira correta. Esse processo geralmente é manual, conforme o passar do tempo se torna uma tarefa repetitiva e propensa a erros. 

Um processo de build geralmente é composto pelos seguintes passos:

1. Recuperar a última versão do controlador de fontes

2. Executar o Build

3. Executar os planos de teste (unitários, integração, interface, etc)

4. Executar o Deploy para o ambiente

Quando estamos criando um processo de build, devemos ter atenção às seguintes questões:

1. Com qual frequência o processo de build deve ser executado?

2. Em caso de falha durante alguma etapa do processo, qual é o plano de rollback mais adequado?

3. O processo é fácil de manter e executar?

Para cada linguagem, tecnologia ou ambiente de programação, existe um processo de build próprio e que deve ser seguido pela equipe de desenvolvimento a fim de garantir a segurança das aplicações e manutenibilidade de todo o projeto. Até mesmo projetos em nuvens adotam ações de build automatizados.

O importante aqui é reconhecer que essa ação existe e que cada vez mais é preciso entender o funcionamento de outras tratativas quando falamos em software.

* CI e CD

Continuous Integration (CI) tem a ver com o quanto o código que foi desenvolvido ou alterado, nesse instante, é compatível com todo o resto do código de um determinado projeto, enquanto que Continuous Delivery (CD) tem relação direta com a atividade de colocar o software no ar, disponível para o usuário.

Imagine, como exemplo, que você desenvolveu uma feature nova para um determinado projeto (criação de uma tela, ajuste de um trecho de código ou correção de um bug). Ao realizar testes unitários e/ou de integração, você garante que a integração contínua do código junto aos demais códigos foi definida da maneira correta.

Somente após essa validação feita, podemos considerar que o código, junto com o projeto em si, está pronto para ser enviado para produção. É um processo simples no que diz respeito a atividades realizadas, mas que vem sendo cada vez mais adotado em diversas empresas e cenários a fim de garantir uma boa qualidade de escrita do código e segurança das funcionalidades criadas.

Vale lembrar que todos os conceitos vistos nos slides anteriores compõem a parte teórica por trás do tema de integração contínua, sua importância, atuação dentro de um projeto de software, possibilidade de realizar testes automatizados e, por fim, prover o código ao usuário final.