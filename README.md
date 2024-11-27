# Projeto Transportadora SENAI

## Descrição

Este é o projeto **Transportadora SENAI**, desenvolvido com uma arquitetura full-stack. O backend foi implementado em Java utilizando o framework **Spring Boot**, enquanto o frontend foi construído com **React** para fornecer uma interface de usuário moderna e responsiva. O objetivo do sistema é gerenciar operações de transporte, como cadastro de clientes, gerenciamento de pedidos e acompanhamento de entregas.

## Tecnologias Utilizadas

### Backend

- **Java 21**
- **Spring Boot 3.3.4**
  - Spring Data JPA
  - Spring Web
  - DevTools
- **Banco de Dados**: MySQL
- **Dependências Auxiliares**:
  - Lombok (facilita a geração de código boilerplate)

### Frontend

- **React** com JavaScript/TypeScript
- **React Router Dom** (para gerenciamento de rotas)
- **React Hot Toast** (para notificações)
- **Tailwind CSS** (para estilização)

## Configuração do Ambiente

### Pré-requisitos

- **Java 21** instalado e configurado.
- **MySQL** instalado e configurado.
- **Node.js** (versão recomendada: LTS) e npm/yarn para o frontend.
- Ferramentas como **Maven** e um IDE de sua preferência (recomenda-se IntelliJ IDEA e Visual Studio Code).

### Dependências

As dependências são gerenciadas por Maven (backend) e npm (frontend). Após clonar o projeto, execute:

**Para o backend:**

```bash
mvn clean install
```

**Para o frontend:**

```bash
cd frontend
npm install (caso necessário)
```

## Como Executar

### Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/NathanAlmeida2006/ProjetoFinal.git
   ```
2. Navegue até o diretório do backend:
   ```bash
   cd backend
   ```
3. Execute o projeto:
   ```bash
   mvn spring-boot:run
   ```

O backend estará disponível em `http://localhost:8080`.

### Frontend

1. Navegue até o diretório do frontend:
   ```bash
   cd frontend
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
---

O frontend estará disponível em `http://localhost:5173`.

