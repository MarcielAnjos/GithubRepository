///<reference types="cypress" />

    let token;

describe('Testes de API Desafio', () => {

    before(() => {
        cy.getToten('fulano@qa.com,teste')
            .then(tkn => {
                token = tkn;
            })
    })


    
    it('Listar os usuários ', () => {
        cy.request({
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/usuarios',
        }) .its('body.usuarios').should('not.be.empty')
    })

    it('Cadastrar um usuário', () => {
        cy.request({
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/usuarios',
            body: {
                    "nome": "Fulana dois da Silva",
                    "email": "fulana2@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
            },
            failOnStatusCode: false
        }).as('response')  // armazena a resposta da requisição
    })

    it('Deve deletar um usuário', () => {
        cy.request({
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/usuarios/63c9e1a0bde8c90016d9f2e',
        }) .its('status').should('equal', 200)
    })
    
    it('Deve cadastrar um produto', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: { Authorization: `Bearer ${token}` } ,
            body: {
                "nome": "Logitech MX Vertical",
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381
            },
            failOnStatusCode: false
        }).as('response')  // armazena a resposta da requisição
    })

    it('Deve consultar os produtos', () => {
        cy.request({
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/produtos',
        }) .as('response')  // armazena a resposta da requisição

        cy.get('@response').its('status').should('equal', 200) // verifica o status da resposta
        cy.get('@response').its('body.produtos').should('not.be.empty') // verifica se a lista de produtos não está vazia
    })

    it('Deve consultar carrinho de compras', () => {
        cy.request({
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/carrinhos',
        }) .as('response')  // armazena a resposta da requisição    

        cy.get('@response').its('status').should('equal', 200) // verifica o status da resposta
        cy.get('@response').its('body.carrinhos').should('not.be.empty') // verifica se a lista de carrinhos não está vazia
    })
    
    it('Deve cadastrar um carrinho de compras', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/carrinhos',
            //headers: { Authorization: `Bearer ${token}` } ,
            body: {
                 "produtos": [
                    {
                    "idProduto": "BeeJh5lz3k6kSIzA",
                    "quantidade": 1
                    },
                    {
                    "idProduto": "YaeJ455lz3k6kSIzA",
                    "quantidade": 3
                    }
                ]
            },
            failOnStatusCode: false
        }).as('response')  // armazena a resposta da requisição

    })

    it('Deve consultar um carrinho de compras específico', () => {
        cy.request({
            method: 'GET',
            headers: {Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/carrinhos/qbMqntef4iTOwWfg',
        }) .as('response')  // armazena a resposta da requisição    
        cy.get('@response').its('status').should('equal', 200) // verifica o status da resposta
        cy.get('@response').its('body.produtos').should('not.be.empty') // verifica se a lista de produtos do carrinho não está vazia
    })

    it('Deve deletar um carrinho de compras ao concluir a compra', () => {
        cy.request({
            method: 'DELETE',
            headers: {Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/carrinhos/qbMqntef4iTOwWfg',
            failOnStatusCode: false
        }) .as('response')  // armazena a resposta da requisição    
        cy.get('@response').its('status').should('equal', 405) // verifica o status da resposta
    })

    it('Deve deletar um carrinho ao cancelar a compra', () => {
        cy.request({
            method: 'DELETE',
            headers: {Authorization: `Bearer ${token}` } ,
            url: 'https://serverest.dev/carrinhos/qbMqntef4iTOwWfg',
            failOnStatusCode: false
        }) .as('response')  // armazena a resposta da requisição    
        cy.get('@response').its('status').should('equal', 405) // verifica o status da resposta
    })
})
