describe("Home", () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000";
    cy.visit(baseURL);
  });

  it("should see a flashcard component on homepage", () => {
    cy.get(".mainHomepage").should("be.visible");
  });

  it("should have a title", () => {
    cy.get("h1").should("contain", "Frontend Interview Flashcards");
  });

  it("should have a sub-heading", () => {
    cy.get("h2").should("contain", "Choose your interview path below");
  });

  it("should have a two buttons", () => {
    cy.get("button").first().should("contain", "Behavioral");
    cy.get("button").last().should("contain", "Technical");
  });

  it("should be able to click the behavioral button and be taken to another page", () => {
    cy.get("button").first().should("contain", "Behavioral").click();
  });

  it("should be able to click the behavioral button and be taken to a landing page", () => {
    cy.get("button").last().should("contain", "Technical").click();
  });
});

describe('Behavioral', () => {
beforeEach(() => {
    const baseURL = 'http://localhost:3000/behavioral'
    cy.visit(baseURL)
})

it('should display a behavioral question', () => {
    cy.get(".question").should("be.visible");
})

it("should display a back arrow", () => {
  cy.get("img").should("be.visible");
});

it("should take you back to the homepage if you click the back arrow", () => {
  cy.get("img").click().get(".mainHomepage").should("be.visible")
});

it("should display a left arrow", () => {
  cy.get('.left-arrow').should('be.disabled')
});

it("should display a right arrow", () => {
  cy.get(".right-arrow").should("be.visible");
});

it("should allow a user to click on the right arrow and be taken to another question", () => {
  cy.get(".right-arrow").click().get(".question").should("be.visible");
});
})