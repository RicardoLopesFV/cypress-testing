describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Adiciona um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste')
    cy.get('input[placeholder="E-mail"]').type('joao@teste.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Adicionar').click()

    cy.contains('João Teste').should('exist')
  })

  it('Edita um contato', () => {
    cy.contains('João Teste')
      .parent()
      .within(() => {
        cy.contains('Editar').click()
      })

    cy.get('input[placeholder="Nome"]').clear().type('João Editado')
    cy.get('input[placeholder="E-mail"]').clear().type('joaoeditado@teste.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888')
    cy.contains('Salvar').click()

    cy.contains('João Editado').should('exist')
  })

  it('Remove um contato', () => {
    cy.contains('João Editado')
      .parent()
      .within(() => {
        cy.contains('Remover').click()
      })

    cy.contains('João Editado').should('not.exist')
  })
})
