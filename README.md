# To-Do List

Desenvolvedor: Thiago Ferreira Ribeiro

Trilha: FullStack

## 1. Descrição do projeto

Este projeto é uma aplicação de gerenciamento de tarefas (To-Do List), desenvolvida com **Angular** e **Angular Material**, com o objetivo de proporcionar uma interface visualmente agradável, responsiva e intuitiva para os usuários. A aplicação inicialmente permite a criação, visualização, marcação e exclusão de tarefas, com destaque para a capacidade de marcar uma tarefa como concluída, alterando o estilo visual do card para indicar sua finalização.

A aplicação utiliza o **json-server** para simular uma API REST, facilitando o gerenciamento das tarefas e permitindo que as mesmas sejam persistidas entre as sessões.

### Principais Funcionalidades:
- Adicionar novas tarefas.
- Marcar/desmarcar tarefas como concluídas (com destaque visual).
- Remover tarefas.
- Interface responsiva, adaptada para diferentes tamanhos de tela.

## 2. Instruções de como executar a aplicação

### Pré-requisitos:
- **Node.js** instalado (você pode verificar a versão com o comando `node -v`).
- **Angular CLI** instalado globalmente. Se não estiver instalado, você pode fazê-lo com o comando:

      npm install -g @angular/cli

### Passo a passo para rodar a aplicação:
#### 1. Clone o repositório:
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <nome_da_pasta_clonada>

#### 2. Instale as dependências:
Dentro da pasta do projeto, execute:

    npm install

#### 3. Inicie o json-server:
O `json-server` simula uma API REST para salvar as tarefas. Para iniciar o servidor, execute o seguinte comando:

    npx json-server --watch db.json

#### 4. Inicie a aplicação Angular:
Em outro terminal (deixe o json-server rodando), execute:

    ng serve

A aplicação será executada no ambiente de desenvolvimento. Acesse a aplicação pelo navegador em: `http://localhost:4200`

## Estrutura de Pastas:
- `src/`: Contém os arquivos de código fonte da aplicação.
- `service/`: Contém o arquivo com os métodos para comunicação com o banco de dados json
- `tasks/`: Componentes relacionados ao gerenciamento das tarefas.
- `db.json`: Arquivo que serve como banco de dados simulado para o json-server.

## 3. Tecnologias utilizadas
As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

### Frontend:
- **Angular**: Framework para construção da interface web.
- **Angular Material**: Biblioteca de componentes de UI, utilizados para criar uma interface moderna e responsiva.
- **TypeScript**: Linguagem de programação tipada utilizada para desenvolver com Angular.
- **HTML5** e **CSS3**: Linguagens de marcação e estilo utilizadas para construir a interface visual.

### Backend (simulado):
- **json-server**: Ferramenta para simular uma API REST utilizando o arquivo db.json, onde as tarefas são armazenadas.

## 4. Possíveis melhorias futuras
Algumas melhorias podem ser implementadas nas próximas versões do projeto, tais como:

### Funcionalidades:
- **Edição de tarefas**: Implementar a possibilidade de editar o título de uma tarefa.
- **Filtros de visualização**: Adicionar filtros para visualizar apenas tarefas concluídas, não concluídas, ou todas.
- **Datas de vencimento**: Permitir o usuário definir uma data de vencimento para as tarefas e destacar aquelas que estão próximas ou ultrapassaram o prazo.
- **Ordenação das tarefas**: Adicionar a funcionalidade para ordenar as tarefas por título, data de criação ou status (concluída/não concluída).

### Interface:
- **Notificações**: Exibir mensagens de sucesso ou erro ao criar, atualizar ou excluir tarefas.
- **Melhoria na responsividade**: Ajustes finos para garantir uma experiência ainda mais fluida em dispositivos móveis.

### Integração:
- **Autenticação de usuários**: Implementar um sistema de login, permitindo que cada usuário tenha sua própria lista de tarefas.
- **Integração com banco de dados real**: Substituir o json-server por uma API real e persistir os dados em um banco de dados como MongoDB ou PostgreSQL.