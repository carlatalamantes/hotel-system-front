describe('Log in test',  () => {
    it('Log in',() => {
        cy.visit('https://hotelsystemteamdinamita.herokuapp.com/home')
  
        cy.contains('Log in').click()
  
        cy.url().should('include', '/login')
  
        cy.get('input[name="email"]')
          .type('test@test.com')
  
        cy.get('input[name="password"]')
          .type('contracontra')
  
        cy.contains('SIGN IN').click()
  
        cy.url().should('include', '/profile')

        cy.contains('Book now').click()

        cy.url().should('include', '/rooms')

        cy.get('button[class="btn btn-light"]').first().click()

        cy.url().should('include', '/booking/')

        cy.get('input[formcontrolname="guest_count"]').type('2')

        cy.get('input[formcontrolname="start_date"]').type('2020-05-01')

        cy.get('input[formcontrolname="end_date"]').type('2020-05-02')

        cy.get('button[class="btn btn-dark"]').click()
  
        
    })
  })
  