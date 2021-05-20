describe('Home', () => {
beforeEach(() => {
    const baseURL = 'http://localhost:3000'
    cy.visit(baseURL)
})

it('should see a flashcard component on homepage', () => {
    cy.get(".mainHomepage").should("be.visible");
})

it ('should have a title', () => {
    cy.get('h1').should('contain', 'Frontend Interview Flashcards');
})

it("should have a sub-heading", () => {
  cy.get("h2").should("contain", "Choose your interview path below");
});

it("should have a two buttons", () => {
  cy.get('button').first().should("contain", "Behavioral");
  cy.get("button").last().should("contain", "Technical");
});

it("should be able to click the behavioral button and be taken to another page", () => {
  cy.get("button").first().should("contain", "Behavioral").click()
});

it("should be able to click the behavioral button and be taken to a landing page", () => {
  cy.get("button").last().should("contain", "Technical").click();
});

})