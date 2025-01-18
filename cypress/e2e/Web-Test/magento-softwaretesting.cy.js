describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/">Create an Account')
    cy.get('#firstname')
    cy.get('#lastname')
    cy.get('#lastname')
    cy.get('#lastname')
    cy.get('#lastname')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
  })
})