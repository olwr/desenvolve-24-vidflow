# VidFlow

[![socials](https://img.shields.io/badge/linkedin-oliverbenites-steelblue?style=plastic&logo=linkedin&logoColor=0077B5&labelColor=white "socials")](https://www.linkedin.com/in/oliwerb/) 
[![contact](https://img.shields.io/badge/protonmail-darkslateblue?style=plastic&logo=protonmail&logoColor=darkslateblue&labelColor=white "socials")](mailto:olwrrb@protonmail.com") 
[![contact](https://img.shields.io/badge/gmail-firebrick?style=plastic&logo=gmail&logoColor=B22222&labelColor=white "socials")](mailto:benites.olivr@gmail.com.com")

Projeto desenvolvido durante o curso de consumo de API e tratamento de dados no programa Desenvolve, projeto promovido pelo Grupo Boticário e a escola Alura. O objetivo foi adicionar e consumir uma API fake que alimenta o VidFlow com os vídeos (urls, títulos, descrições, etc).

A barra de pesquisa e os botões de categoria também estão funcionais, podendo pesquisar e filtrar entre os vídeos enviados pela API fake.

### Tecnologias
![ide: vs code](https://img.shields.io/badge/IDE-visual_studio_code-lightblue?style=plastic&logo=visualstudiocode&logoColor=0078D4&labelColor=white&color=0078D4)
![tech: git](https://img.shields.io/badge/git-orangered?style=plastic&logo=git&logoColor=FF4500&labelColor=white)
![lang: html](https://img.shields.io/badge/lang.-html-darkorange?style=plastic&logo=html5&logoColor=FF8C00&labelColor=white)
![lang: css](https://img.shields.io/badge/lang.-css-royalblue?style=plastic&logo=css3&logoColor=4169E1&labelColor=white)
![lang: javascript](https://img.shields.io/badge/lang.-javascript-gold?style=plastic&logo=javascript&logoColor=FFD700&labelColor=191919)
![environment: node.js](https://img.shields.io/badge/environment-node.js-seagreen?style=plastic&logo=node.js&logoColor=3CB371&label=environment&labelColor=212121&color=3CB371)

## Como Executar

Caso o código seja executado sem seguir os seguintes passos, ao invés dos vídeos irá aparecer uma mensagem do tratamento de erro:

![alt text](img/Screenshot_Error.png)

Para que ele seja executado da forma esperada, é necessário rodar a API fake.

**1. Instalar o Node.js**

A versão do Node.js utilizada nesse projeto foi a v20.11.0.

**2. Instalar o JSON Server**

- No terminal ou prompt de comando
- Para instalar globalmente, é necessário digitar este comando:

```shell
npm install -g json-server
```

**3. Permitir a Política de Execução de Scripts (Windows)**

Caso você utilize o WIndows, é necessário mudar política de execução antes de executar o JSON Server.

- No PowerShell (como administrador), execute o seguinte comando:

```shell
Get-ExecutionPolicy
```

Se o retorno for `Restricted`, que é o padrão, é necessário mudar a política para permitir a execução de scripts.

- Para permitir, basta executar o comando:

```shell
Set-ExecutionPolicy RemoteSigned
```

O PowerShell pode solicitar confirmação para realizar a operação. Pressione "S" (Sim) ou "Y" (Yes) dependendo da linguagem do seu terminal.

- Ao finalizar o teste do projeto, é uma boa prática reverter a política de execução de scripts para o valor original para garantir a segurança do sistema. Para isso é só executar:

```shell
Set-ExecutionPolicy Restricted
```

Mas caso você queira utilizar o JSON Server novamente, será necessário alterar a política de execução para "RemoteSigned" mais uma vez.

**4. Inicializar o JSON Server**

- Abrir o terminal integrado da sua IDE, ou outro terminal, mas com o cuidado que esteja executando dentro da pasta do projeto
- Executar o seguinte comando:

```shell
json-server --watch backend/videos.json
```

O JSON Server será iniciado e começará a servir uma API REST falsa com base nos dados do arquivo videos.json, o que vai permitir o consumo dos dados para o VidFlow.

### Print

![alt text](/img/Screenshot_VidFlow.jpeg)
