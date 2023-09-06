## Sistema Back End para Autentificação e CRUD de usuários

Este projeto é uma API Rest construída em Node.js com Express, que é bem estruturada e organizada. Ela desempenha um papel essencial em muitos sistemas, cuidando da autenticação e das operações CRUD de usuários. Você poderá facilmente adicionar funcionalidades novas partir dessa base sólida.

O projeto segue as melhores práticas de desenvolvimento em TypeScript, incluindo a divisão de funcionalidades da API em Controllers, Services e UseCases, além da utilização de arquivos DTO e roteamento bem definido.

Este projeto proporciona uma experiência completa de integração com o Front-End desenvolvido em React, mas também pode ser facilmente utilizado em outras interfaces Front-End, como Next, Vue, Angular, e assim por diante.

Front End - React:

```bash
 https://github.com/devEliasJr/Front-User-Auth
```
### Tecnologias
- Node.js
- Express
- Prisma ORM
- TypeScript
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

## Como Iniciar o Projeto

Para começar a utilizar este projeto, siga os passos abaixo:

### 1. Clone o repositório:

```bash
 git https://github.com/devEliasJr/Api-Node-User-Auth-Crud .
```

### 2. Instale as dependências do projeto

```bash
 npm install
```

### 3. No arquivo schema.prisma mude o provider para o seu banco de dados

```bash
 provider = "nomedobanco"
```

### 4. Crie um arquivo .env seguindo o padrao do .env.example

### 5. Execute as Migrations

```bash
 npx prisma migrate dev
```

### 6 Inicie o servidor

```bash
 npm run dev
```

### 7. O projeto estará disponivel em:

```bash
 http://localhost:3333/
```
