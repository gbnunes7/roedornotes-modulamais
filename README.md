# Roedor Notes

Seja bem vindo ao meu repositório, Roedor Notes. 


# Introduction

Bem-vindo ao meu repositório, Roedor Notes! Este projeto foi criado para resolver o desafio do registro de Grandes Roedores, onde desenvolvi tanto o backend quanto o frontend da aplicação. No backend, implementei uma API robusta utilizando Express e Sequelize para interagir com um banco de dados MySQL, garantindo operações CRUD eficientes e seguras. No frontend, utilizei React com Vite e Tailwind CSS, criando uma interface responsiva e intuitiva. A aplicação permite registrar, filtrar, editar e excluir registros de roedores, oferecendo uma experiência completa e funcional para o usuário.
Projeto feito para avaliação técnica de estágio.

## Table of Content

- [Introduction](#introduction)
- [Key Features](#keys-feature)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployed Version](#deployed-version)
- [Conclusion](#conclusion)

## Key Features

- **Detalhes do Roedor:** Ao clicar em cima de um roedor na página de roedores, te leva para a página desse mesmo roedor com maiores detalhes.

- **Registrar:** Formulário para registrar novos roedores.

- **Delete:** Botão para deletar roedores.

- **Edit:**Botão para editar o roedor.

- **Filtro por Habitat:** Sistema de filtro baseado no habitat, que na página de roedores só mostra os roedores baseados no habitat.

- **Menu Hamburguer:** Menu Hamburguer para navegar entre páginas.


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
- 
- **Dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env` no projeto.
- **Express**: Framework minimalista e flexível para construir APIs e servidores no Node.js.
- **MySQL2**: Driver para conectar e interagir com bancos de dados MySQL no Node.js.
- **Nodemon**: Ferramenta que monitora mudanças no código e reinicia automaticamente o servidor durante o desenvolvimento.
- **Sequelize**: ORM (Object-Relational Mapping) para trabalhar com bancos de dados relacionais, como MySQL, de forma mais simples e estruturada.

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/gbnunes7/roedornotes-modulamais.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd roedornotes-modulamais
   ```

3. **Install the dependencies**:

   - For Frontend:
   
     ```bash
     cd frontend && npm install
     ```

   - For Backend:

     ```bash
     cd backend && npm install
     ```

## Running the Application

- **To run the frontend**:

  ```bash
  npm run dev
  ```

  This starts the React application on `http://localhost:5173` (or another available port).

- **To run the backend**:

  ```bash
  npm start
  ```

  This initializes the Express server, typically on `http://localhost:8080`.

- **To run both simultaneously**:

  ```bash
  npm run start
  ```

  This will invoke `concurrently` to start both the front and back ends.

Ensure that the frontend and backend are configured to run on separate ports to avoid conflicts.

## Deployed Version

You can also visit the deployed version of the application [here]().


## Conclusion

O projeto Roedor Notes oferece uma solução abrangente para o registro e gerenciamento de informações sobre Grandes Roedores. Através da combinação de uma API poderosa construída com Express e Sequelize e uma interface amigável desenvolvida em React, a aplicação proporciona uma experiência fluida e intuitiva para os usuários.

Com funcionalidades como registro de novos roedores, filtragem por habitat e edição de informações, o sistema é altamente funcional e flexível. O foco em boas práticas de desenvolvimento, como a separação de responsabilidades e a utilização de uma arquitetura MVC, assegura que a aplicação seja escalável e fácil de manter.

Sinta-se à vontade para explorar, contribuir ou sugerir melhorias para este projeto!
---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/gbnunes7/roedornotes-modulamais/issues).

**Made by [Gabriel Melo](https://github.com/gbnunes7)**.
