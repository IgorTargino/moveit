<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="./public/icons/logo-full.svg" alt="Project logo"></a>
</p>

![Teste](./src/assets/moveit.gif)
## 📝 Tópicos

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pre-requisitos)
- [Usage](#usage)
- [Instalação](#instalação)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 Sobre o projeto

O Moveit é um cronometro, porém com alguns caracteriscas a mais, dentre elas a possibilidade de resolver desafios a cada 25min com o intuito de tornar o ambiente de desenvolvimento mais produtivo e saúdavel.


## ⚙️ Funcionalidades
- [x] Front-end;
  - [x] Pagina Principal;
  - [x] Cronômetro;
  - [x] Desafios;
  - [x] Barra de Experiência;
  - [x] Notificação ao encerrar o ciclo;
  - [x] Botão de Falhei - Cancela Desafio e Reseta Cronômetro;
  - [x] Botão de Completei - Adiciona Experiência do Desafio e Reseta Cronômetro;
  - [x] Apresenta um Modal quando usuário sobe de nível;
  - [x] Os dados do usuário são salvos em cookies;

### Funcionalidades extras
- [x] Troca de temas da interface(claro e escuro);
  - [x] Refatoração de css modules para styled components;
  - [x] Tema atual é salvo em localstorage;
- [x] SideBar;
  - [x] Botão de logout;
  - [x] Botão de troca de temas;
- [x] Página de Login;
  - [x] Layout completo;
  - [x] Autenticação com GitHub pelo NextAuth;
- [x] A aplicação está responsiva;
- [x] A aplicação está totalmente funcional em produção;
## Como executar o projeto
### Pré-requisitos
- git 
- Node.js
- NPM ou Yarn
### Variáveis de Ambiente
Além das ferramentas anteriores é necessária criar uma váriavel de ambiente .env.local na raiz do projeto e adicionar as seguintes variáveis

GITHUB_CLIENT_ID="É pego no Auth do seu github"

GITHUB_CLIENT_SECRET="É pego no Auth do seu github"

NEXTAUTH_URL="URL base do seu site, como http://localhost:3000 ou https://pomodoro-clock-ebon.vercel.app/login

### Instalação
```
# Abra o terminal e copie este repositório com o comando
$ git clone https://github.com/IgorTargino/moveit.git

# Acesse a pasta do projeto no prompt de comando 
$ cd 

# Instale as dependências
yarn install
ou
$ npm install

# Execute a aplicação
$ yarn dev
ou
$ npm run dev

# Acesse http://localhost:3000 no seu navagador.
```
## 🚀 Tecnologias 
Tecnologias utilizadas para desenvolver o projeto:
- Next.js
- React.js
- Typescript
- Styled-Components
- Context
- js-cookies
- React-icons
- NextAuth

## 🦸‍♂️ **Autor**

<p>
 <sub><strong>🌟 Igor Targino Marinho🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-IgorTargino-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/igor-targino/)](https://www.linkedin.com/in/igor-targino/)
[![Gmail Badge](https://img.shields.io/badge/-igortargino01@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:igortargino01@gmail.com)](mailto:igortargino01@gmail.com)

>Este projeto foi desenvolvido com ❤️ por **[Igor Targino](https://github.com/IgorTargino)**, com o instrutor **[Diego Fernandes](https://www.linkedin.com/in/diego-schell-fernandes/)** durante a **[Next Level Week # 4 - Trilha ReactJS](https://nextlevelweek.com/)** da **[Rocketseat](https://rocketseat.com.br)** 💜<br> 
Se te ajudou, dá ⭐, vai me ajudar também 😉