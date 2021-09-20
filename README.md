## APIRest criada em Node.

### Tecnologias Utilizadas

1. Git
2. Node.js
3. Mongoose (NoSQL)

#### Após fazer o download e a instalação dos programas, siga os passos abaixo:

1. Faça o clone do projeto, Abra o terminal do git e execute o comando: <br>
   `git clone https://github.com/TeixeiraFP/API_Hamburgueria.git `

2. Execute em um terminal dentro da pasta onde foi hospedado o clone do projeto o comando:<br>
   ` npm install`  
   **_O comando npm instal irá instalar todas dependências necessárias para o funcionamento do projeto_**
   **_no arquivo package.json você tem acesso a qual são essas dependência._**

3. Para utilização do mongoose, você deve ter instalado o mongoDB, faça o download no link abaixo:<br>
   `https://www.mongodb.com/try/download/community` <br>
   **_Depois de instalar, abra o cmd e rode o servidor mongo com o comando:_** ` mongod`

4. Por fim Com todas dependências instaladas e o servidor mongo rodando, execute o comando: <br>
   `npm run dev`

5. As rota são:<br>
   **_OBS:_** As infos devem ser passadas em formato JSON no body.<br>

   POST: `"/auth/registerNewCustomer"` <br>
   `{` <br>
   `"name": "Nelson Mandela",` <br>
   `"email": "Mandela@outlook.com.br",` <br>
   `"password": "1234567"` <br>
   ` }` <br>

   POST: `"/auth/authentication"` <br><br>

   POST: `"/products/productsOrder"` <br>
   GET: ` "/products/currentePackage/:productId"` <br><br>

   POST: `"/portability/portabilityRequest"` <br>
   GET: `"/portability/portabilities/:portabilityId` <br>

### Sobre

Projeto foi feito utilizando **Node.js**, **Express** e **Mongoose**. Na organização do código utilizeia arquitetura MVC, separando em **Models** e **Controllers** com a possibilidade de posteriormente desenvolver a **View**.
