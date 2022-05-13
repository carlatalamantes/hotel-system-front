describe('Log in test',  () => {
  it('Log in',() => {
      cy.visit('https://hotelsystemteamdinamita.herokuapp.com/home')

      cy.contains('Log in').click()

      cy.url().should('include', '/login')

      cy.get('input[name="email"]')
        .type('admin@gmail.com')

      cy.get('input[name="password"]')
        .type('Admin')

      cy.contains('SIGN IN').click()

      cy.url().should('include', '/profile')

      
  })
})

