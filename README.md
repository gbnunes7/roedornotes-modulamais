# Roedor Notes

Seja bem-vindo ao meu repositório, Roedor Notes. 

## Introduction

Bem-vindo ao meu repositório, Roedor Notes! Este projeto foi criado para resolver o desafio do registro de roedores, onde desenvolvi tanto o backend quanto o frontend da aplicação. No backend, implementei uma API robusta utilizando Express e Sequelize para interagir com um banco de dados MySQL, garantindo operações CRUD eficientes e seguras. No frontend, utilizei React com Vite e Tailwind CSS, criando uma interface responsiva e intuitiva. A aplicação permite registrar, filtrar, editar e excluir registros de roedores, oferecendo uma experiência completa e funcional para o usuário.  
Projeto feito para avaliação técnica de estágio.

## Table of Content

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployed Version](#deployed-version)
- [Conclusion](#conclusion)

## Key Features

- **Detalhes do Roedor:** Redireciona para a página desse roedor com mais detalhes.
- **Registrar:** Formulário para registrar novos roedores.
- **Deletar:** Botão para deletar roedores.
- **Editar:** Botão para editar o roedor.
- **Filtro por Habitat:** Sistema de filtro baseado no habitat, que na página de roedores apenas mostra os roedores do habitat selecionado.
- **Menu Hamburger:** Menu Hamburger para navegar entre páginas.

## Technologies Used

**Front-end:** 

- **React**: Biblioteca para construir interfaces de usuário.
- **TypeScript**: Adiciona segurança de tipos ao código JavaScript.
- **Vite**: Ferramenta de build rápida com configuração mínima para projetos front-end.
- **React Router DOM**: Biblioteca para gerenciar navegação e rotas em aplicações React.
- **Tailwind CSS**: Framework CSS utility-first para criar interfaces responsivas e estilizadas rapidamente.
- **Axios**: Biblioteca para fazer requisições HTTP e lidar com dados de API.
- **React Icons**: Biblioteca para utilizar ícones de forma fácil em projetos React.

**Back-end:**

- **CORS**: Middleware que permite o controle de acesso entre diferentes domínios em aplicações web.
- **Dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env` no projeto.
- **Express**: Framework minimalista e flexível para construir APIs e servidores no Node.js.
- **MySQL2**: Driver para conectar e interagir com bancos de dados MySQL no Node.js.
- **Nodemon**: Ferramenta que monitora mudanças no código e reinicia automaticamente o servidor durante o desenvolvimento.
- **Sequelize**: ORM (Object-Relational Mapping) para trabalhar com bancos de dados relacionais, como MySQL, de forma mais simples e estruturada.

## Installation

Antes de começar, certifique-se de que você tem `node` e `npm` instalados em sua máquina.

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/gbnunes7/roedornotes-modulamais.git
   ```

2. **Navegue até o repositório**:

   ```bash
   cd roedornotes-modulamais
   ```

## **Running the Application**:

### Usando Docker
Para rodar a aplicação usando Docker, siga os passos abaixo:

1. **Build os containers**:
   ```bash
   docker-compose up --build
   ```
Isso criará e iniciará os containers definidos no seu arquivo docker-compose.yml

2. **Acessar a aplicação:**
   - O frontend estará disponível em http://localhost:5173 (ou outra porta disponível).
   - O backend estará disponível em http://localhost:8080.

### Sem docker
- **Instale as dependências frontend**:
  ```bash
  cd frontend && npm install
  ```
  - **Instale as dependências backend**:
  ```bash
  cd backend && npm install
  ```
## Para rodar a aplicação:
- **Para o frontend**
  ```bash
  npm run dev
  ```

  Isso inicia a aplicação React em http://localhost:5173 (ou outra porta disponível).

- **Para o backend**:

  ```bash
  npm start
  ```

  This initializes the Express server, typically on `http://localhost:8080`.

- **Para rodar ambos simultaneamente**:

  ```bash
  npm run start
  ```

Isso invocará concurrently para iniciar tanto o frontend quanto o backend.


Certifique-se de que o frontend e o backend estão configurados para rodar em portas diferentes para evitar conflitos.

## Deployed Version

Você também pode visitar o deploy [here]().


## Conclusion

O projeto Roedor Notes oferece uma solução abrangente para o registro e gerenciamento de informações sobre roedores. Através da combinação de uma API poderosa construída com Express e Sequelize e uma interface amigável desenvolvida em React, a aplicação proporciona uma experiência fluida e intuitiva para os usuários.

Com funcionalidades como registro de novos roedores, filtragem por habitat e edição de informações, o sistema é altamente funcional e flexível. O foco em boas práticas de desenvolvimento, como a separação de responsabilidades e a utilização de uma arquitetura MVC, assegura que a aplicação seja escalável e fácil de manter.

Sinta-se à vontade para explorar, contribuir ou sugerir melhorias para este projeto!

Se você encontrar algum bug ou tiver um pedido de recurso, por favor, abra uma issue no [GitHub](https://github.com/gbnunes7/roedornotes-modulamais/issues).

**Made by [Gabriel Melo](https://github.com/gbnunes7)**.
