# Projeto NightOut

Este é o repositório do projeto **[Nome do Projeto]**, desenvolvido com **Node.js**, **TypeScript**, **Prisma** e **PostgreSQL**. Este README descreve como configurar e rodar o projeto localmente de forma técnica e detalhada.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (>= v18)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)
- [PostgreSQL](https://www.postgresql.org/) (>= v15)
- [Git](https://git-scm.com/)

## Passo a passo para rodar o projeto

### 1. Clonar o repositório
git clone https://github.com/usuario/nome-do-repositorio.git
cd nome-do-repositorio

### 2. Instalar dependências
npm install

### 3. Configurar o banco de dados PostgreSQL
CREATE DATABASE nome_do_banco;

DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"

### 4. Rodar migrações do Prisma
npx prisma migrate dev --name init

### 5. Gerar cliente Prisma
npx prisma generate

### 6. Compilar TypeScript
npx tsc

### 7. Rodar Aplicação
npm run dev


## Estrutura
/src
  /core
    /web
      /controllers
      /routes
      /cfs
      /types
/prisma
  schema.prisma
  migrations/
package.json
tsconfig.json
.env

## Tecnologias utilizadas
Node.js
TypeScript
Prisma ORM
PostgreSQL
npm

## Contribuição
Faça um fork do repositório.
Crie uma branch: git checkout -b feature/nome-da-feature
Faça commit das alterações: git commit -m "Descrição da feature"
Envie para o repositório remoto: git push origin feature/nome-da-feature
Abra um Pull Request.
