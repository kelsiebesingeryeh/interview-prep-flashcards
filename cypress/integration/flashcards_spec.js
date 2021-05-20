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
  cy.get("img").click();
  cy.url("http://localhost:3000").get(".mainHomepage").should("be.visible");
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

describe("Technical Landing Page", () => {
  beforeEach(() => {
    const baseURL = "http://localhost:3000/technical";
    cy.visit(baseURL);
  });

  it("should display a title", () => {
    cy.get(".subCategoryTitle").should("be.visible");
  });

  it("should display a back arrow", () => {
    cy.get("img").should("be.visible");
  });

  it("should take you back to the homepage if you click the back arrow", () => {
    cy.get("img").click()
    cy.url("http://localhost:3000").get(".mainHomepage").should("be.visible");
  });

  it("should display 4 different buttons for category paths", () => {
    cy.get(".subCategoryButton").first().should("contain", "HTML/CSS");
    cy.get(".subCategoryButton").eq(1).should("contain", "Computer Science");
    cy.get(".subCategoryButton").eq(2).should("contain", "JavaScript");
    cy.get(".subCategoryButton").last().should("contain", "React");
  });

  it("should allow a user to click on the HTML/CSS path and be taken to that page", () => {
    cy.get(".subCategoryButton")
      .first()
      .click()
      .url("http://localhost:3000/technical/htmlCSS");
  });

  it("should allow a user to click on the Computer Science path and be taken to that page", () => {
    cy.get(".subCategoryButton")
      .eq(1)
      .click()
      .url("http://localhost:3000/technical/computerScience");
  });

  it("should allow a user to click on the JavaScript path and be taken to that page", () => {
    cy.get(".subCategoryButton")
      .eq(2).click()
      .url("http://localhost:3000/technical/javascript");
  });

  it("should allow a user to click on the React path and be taken to that page", () => {
    cy.get(".subCategoryButton")
      .last()
      .click()
      .url("http://localhost:3000/technical/react");
  });

});