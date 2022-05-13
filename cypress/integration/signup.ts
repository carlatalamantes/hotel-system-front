describe('Signup in test',  () => {
    it('Sign up',() => {
        cy.visit('https://hotelsystemteamdinamita.herokuapp.com/home')
  
        cy.contains('Register').click()
  
        cy.url().should('include', '/signup')
        
        cy.get('input[name="cellphone"]')
          .type('3221092873')

        cy.get('input[name="email"]')
          .type('ejemplo@gmail.com')
  
        cy.get('input[name="password"]')
          .type('Admin')

        cy.get('input[name="confirmPassword"]')
          .type('Admin')
        
        cy.get('input[name="name"]').type('Alfonso')

        cy.get('input[name="first_lastname"]').type('Rodriguez')
  
        cy.get('button[type="submit"]').click()
  
        
  
        
    })
  })
  