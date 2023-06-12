# Resolução do desafio

## Introdução

Inicialmente foi optado em trabalhar com uma Arquitetura em Camadas ('Routers', 'Controllers', 'Services', 'Repositories' e 'Middlewares') principalmente pelos seguintes motivos:
- **Segregação de responsabilidades:** cada camada tem uma restabilidade específica.
- **Manutenibilidade:** a separação clara de responsabilidades facilita a localização de problemas, a identificação de pontos de melhoria e a implementação de novos recursos ou correções de bugs
- **Testabilidade:** facilita a criação de testes unitários e a realização de testes de integração, melhorando a qualidade do código e aumentando a confiança nas alterações realizadas.

### Camadas e suas responsabilidades:

#### Routers
Definir as rotas da aplicação por entidades. Dessa forma cada entidade tem suas rotas definidas em um so local independente das demais. Neste desafio trabalhamos apenas com a entidade 'users'. Essa camada é a responsável por chamar a camada dos 'Controllers'.

#### Controllers
Esta camada lida om a lógica de controle e coordenação das requisições HTTP recebidas pela aplicação, ou seja, interpreta as requisições, chama a camada de 'Services' e prepara a resposta HTTP ap cliente.

#### Services
 É responsável por conter a lógica de negócio do aplicativo. Ela lida com as regras e operações específicas do domínio do sistema, encapsulando a lógica complexa e coordenando a manipulação dos dados, ou seja, chamando a camada de 'Repository'.

#### Repositories
É responsável por interagir com a fonte de dados persistente, como um banco de dados, sistema de arquivos ou serviço externo. Como neste desafio utiliza dados em mock, sem persistir em banco de dados, nesta camada foi implementada a lógica que geralmente é realizada pelo banco de dados, dessa forma, caso opte-se em implementar um banco de dados para armazenar os dados dos usuários, esta camada que deverá sofrer as alterações com as queries ao banco. Dessa forma, as outras camadas não precisaram de alteração.

#### Middlewares
Tem a responsabilidade de processar e manipular as requisições e respostas HTTP antes que elas alcancem os controllers ou sejam enviadas de volta ao cliente. Essa camada adiciona funcionalidades intermediárias ao fluxo da aplicação, realizando ações como validação, autenticação, autorização, manipulação de cabeçalhos, tratamento de erros e muito mais. Nesta aplicação foi criado o middleware para Autenticação, permitindo acesso as rodas 'DELETE /users' e 'PUT /users' apenas para requisições com autorizadas.

## Melhorias globais realizadas

* Foi simulado um banco de dados na pasta 'db'. As buscas tanto relacionado ao 'name' quanto ao 'id' são feitas utilizando o conceito de hashtable, o que torna a busca mais eficiente uma vez que a complexidade de tempo cai para O(1) ao invés de de uma busca utilizando 'for' em todo o array que é de O(n). Em contrapartida há necessidade de mais espaço para armazenar os dados das hastables.

* Criado método para criação de um 'id' único, baseado no valor máximo do 'id' encontrado na base de dados ao iniciar a aplicação. Cada 'id' novo é criado dinamicamente a medida que novas inserções são feitas no banco fake.

* Criado condição de que o 'name' seja único, uma vez que são realizadas operações de delete e pelo 'name'. Dessa forma nunca haverá dois usuários com o mesmo nome e nem será possível apagar os dados de um usuário indesejado.

* Substituição de 'var' por 'const': Garante o uso de variáveis imutáveis, evitando que uma variável receba acidentalmente um valor não esperado, ainda mais pelo fato de que 'var' tem escopo global, enquanto que 'const' tem escopo de bloco.

* Remoção da dependência 'body-parser': como esta aplicação usa uma versão do express maior do que a 4.16, não há mais a necessidade do uso de 'body-parser'

* Uso de arquitetura em camada: já citado seus benefícios.

* Uso de 'template literals' ao invés de concatenação: forma mais atual de inserir variáveis em uma string, além de permitir o uso de certas expressões. Torna o código mais legível.

* Uso de manipulador de Erros: permite manipular melhor os erros gerados pela aplicação, criar erros personalizados e respostas de erros ao cliente.

* Udo de .env: permite salvar dados sensíveis da aplicação que não devem ser exposto, como chave de segurança JWT; permite criar variáveis que independem do código e garantem uma flexibilidade, como definir uma porta para aplicação. Nesta aplicação foi usado a varável PORT, para definir uma porta diferente da padrão sem a necessidade de alterar o código.

* adição de script para iniciar a aplicação. 

* nomenclatura das variáveis: variáveis com nomes semânticos que ajuda na interpretação do código por humanos. :boy: :man: :woman:


## Melhorias teste1.js

GET em /user 
GET em /users 

Validação do parâmetro 'name' sem quebrar a aplicação e gerando resposta adequada ao cliente.
Busca com complexidade de tempo O(1), ou seja, o tempo de busca do dado não depende do tamanho da base dados.

## Melhorias teste2.js

POST em /users

Corrigido erro do nome da variável 'job'.
Validação dos parâmetros 'name' e 'job' sem quebrar a aplicação e gerando resposta adequada ao cliente.
Validação que evita a criação de usuários com 'name' já existente na base de dados.
Inserção de 'id' ao usuário criado.
Resposta adequada: HTTP status 201 para entidades que são criadas.


## Melhorias teste3.js

DELETE em /users

Validação do parâmetro 'name' sem quebrar a aplicação e gerando resposta adequada ao cliente.
Busca com complexidade de tempo O(1), ou seja, o tempo de busca do dado não depende do tamanho da base dados.
Resposta ao cliente em JSON com campo message.

## Melhorias teste4.js

PUT em /users

Validação do parâmetro 'id' sem quebrar a aplicação e gerando resposta adequada ao cliente.
Busca com complexidade de tempo O(1), ou seja, o tempo de busca do dado não depende do tamanho da base dados.
Validação que evita a atualizar os dados de um usuário com 'name' já existente de outro usuário.


## Melhorias teste5.js

GET /users/access

Validação do parâmetro 'name' sem quebrar a aplicação e gerando resposta adequada ao cliente.
Busca com complexidade de tempo O(1), ou seja, o tempo de busca do dado não depende do tamanho da base dados.

## Melhorias teste6.js

Criado middleware de autenticação para proteger as rotas DELETE /users e PUT /users. A autenticação escolhida é um exemplo de como usar autenticação pelo Header da requisição HTTP, neste caso deve receber um campo "Authorization" com  "Bearer token_jwt_test", no qual 'token_jwt_test' em uma aplicação real deve ser substituído por uma chave JWT, que deve ter sido criada pela própria aplicação e verificado com a função .verify() da biblioteca 'jsonwebtoken', por exemplo.

Para testar como está implementado neste desafio, inclua o seguinte dado ho 'Header' da requisição HTTP:
```"Authorization": "Bearer token_jwt_test"```

## Como Rodar a aplicação

1. Clonar este repositório;

```bash
git clone git@github.com:victor-azevedo/api-users.git
cd api-users
```

2. Instalar as dependência:

```bash
npm i
```

3. Criar `.env` baseado no `.env.example`, se desejar alterar a porta que a aplicação vai 'rodar';

4. Iniciar a aplicação:

```bash
npm start
```

Application default PORT: 3000.


### Autenticação

Rotas autenticadas:

DELETE /users?name={name}
PUT /users?id={id}

Autenticação simulando Bearer token. Enviar no Header da requisição HTTP:
```"Authorization": "Bearer token_jwt_test"```


## Conclusão

A aplicação passou ter uma estrutura organizacional que permite uma escalabilidade e melhor manutenção. Implementado busca por 'hashtable', o que melhora substancialmente o tempo de busca em dados de dimensões elevadas. Possui uma melhor leitura e interpretação do código po humanos. Melhoria de desempenho, gerenciamento de erros evitando 'crash' da aplicação e melhores resposta ao cliente.
Melhoria podem ser feitas com testes unitário e integração e uma rota ta documentação.

