Para rodar o projeto, precisa instalar o node.js e o cypress
- uma vez baixado e instalado o node.js
- abrir o powershell e no diretorio do projeto usar npm install cypress

Para rodar o projeto
- abra o VS Code ou outro ambiente de desenvolvimento:
- abra a pasta do projeto
- no terminal digite: npm run cypress:open
- aguarde até que a janela do cypress abra.
- click em login.spec.js para abrir a execução dos testes

Testes realizados:
- Realizar login
- Listar os usuários
- Cadastrar um usuário
- Deve deletar um usuário
- Deve cadastrar um produto
- Deve consultar os produtos
- Deve consultar carrinho de compras
- Deve cadastrar um carrinho de compras
- Deve consultar um carrinho de compras específico
- Deve deletar um carrinho de compras ao concluir a compra
- Deve deletar um carrinho ao cancelar a compra
