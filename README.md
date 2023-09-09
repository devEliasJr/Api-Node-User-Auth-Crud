## Sistema Back End para Autentificação e CRUD de usuários

Este projeto é uma API Rest construída em Node.js com Express. O fluxo de trabalho desempenhado pelo projeto é essencial a inumeros sistemas de modo geral, pois, lida com a autenticação e as operações de CRUD de usuários.

O projeto segue as melhores práticas de desenvolvimento em TypeScript, incluindo a divisão de funcionalidades da API em Controllers, Services e UseCases, além da utilização de arquivos DTO e roteamento bem definido.

Este projeto proporciona uma experiência completa de integração com o Front-End desenvolvido em React, mas também pode ser facilmente utilizado em outras interfaces Front-End, como Next, Vue, Angular, e assim por diante.

Front End - React:

```bash
 https://github.com/devEliasJr/Front-User-Auth
```
### Tecnologias
- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Docker com Docker Compose

## Regras Funcionais da API:

- Cadastro de novos usuários
- Login e Autenticação via email e senha
- Identificação do usuário e geração de AcessToken JWT
- Buscar um usuário pelo ID
- Buscar todos os usuários
- Atualização dos dados dos usuários
- Deleção de usuários
- Endpoints privados: Solicitação e verificação de tokens de acesso
- As senhas inseridas serão devidamente criptografadas antes de serem armazenadas.

## Endpoints da aplicação
### Rotas Públicas
- `POST - /users` - Registro de novos usuários
- `POST - /users/auth` - Rota de Login e autentificação

### Rotas Privadas - Authorization: Acess Token
- `GET - /users` - Recuperar todos os usuarios da aplicação
- `GET - /users/:id` - Recuperar um usuario
- `DELETE - /users/:id`  - Deleta um usuario
- `PUT - /users/:id` - Atualiza os dados de um usuario

## Como Iniciar o Projeto

Para começar a utilizar este projeto, siga os passos abaixo:

### 1. Clone o repositório:

```bash
 git https://github.com/devEliasJr/Api-Node-User-Auth-Crud .
```

### 2. Crie um arquivo .env seguindo o padrao do .env.example(obrigatório)

### 3. Execute e implante as migrações

```bash
 npx prisma migrate dev
```

```bash
 npx prisma migrate deploy
```
### 4. Inicie o container docker (Node + Postegres)

```bash
 docker compose up -d
```
### 5. O projeto estará disponivel em:

```bash
 http://localhost:3333/
```
