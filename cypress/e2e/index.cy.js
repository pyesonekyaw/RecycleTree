function mockLocation(latitude, longitude) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
        (cb, err) => {
          if (latitude && longitude) {
            return cb({ coords: { latitude, longitude } });
          }
          throw err({ code: 1 });
        }
      );
    },
  };
}

describe("Recycle Go Where", () => {
  // visiting recycle go where page with mock location at 238 Choa Chu Kang Central
  beforeEach(() => {
    cy.visit(
      "http://localhost:3000/",
      mockLocation(1.3788684531587554, 103.74825218502244)
    );
  });

  // testing page text
  it('should contain "RecycleGoWhere" h1 title', () => {
    cy.get("h1").contains("RecycleGoWhere");
  });

  // testing info card
  it("should show info card", () => {
    cy.get('[data-cy="info-card"]').should("exist");
  });

  it("should hide info card after displaying search results", () => {
    cy.get('[data-cy="search-btn"]').click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="info-card"]').should("not.exist");
  });

  // testing suggestion feature
  it("should show location suggestions after typing", () => {
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]').contains(
      "Holland Village, Singapore"
    );
  });

  // testing search bin feature
  it("should be able to change number of bins with range slider", () => {
    cy.get('[data-cy="bin-slider"]').click("right");
    cy.get('[data-cy="search-btn"]').click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="bin-accordion"]')
      .find('[data-cy="individual-bin"]')
      .should("have.length", 10);
  });

  it("should show nearby bins based on user's current location after clicking search button", () => {
    cy.get('[data-cy="search-btn"]').click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("238 CHOA CHU KANG CENTRAL");
  });

  it("should show nearby bins based on selected location from suggestions", () => {
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]')
      .contains("Holland Village, Singapore")
      .click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("12 HOLLAND VISTA");
  });

  // testing individual bin text
  it('should contain "Does it exist", "Cleanliness Rating", and "ratings" after selecting a bin', () => {
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]')
      .contains("Holland Village, Singapore")
      .click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("12 HOLLAND VISTA").click();
    cy.get('[data-cy="search-results"]').contains("Does it exist");
    cy.get('[data-cy="search-results"]').contains("Cleanliness Rating");
    cy.get('[data-cy="search-results"]').contains("ratings");
  });

  // testing vote feature
  it("should be able to vote Yes or No after selecting a bin", () => {
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]')
      .contains("Holland Village, Singapore")
      .click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("12 HOLLAND VISTA").click();
    cy.get('[data-cy="search-results"]')
      .contains("Does it exist")
      .parent()
      .within(() => {
        cy.contains("Yes:").should("not.be.disabled");
        cy.contains("No:").should("not.be.disabled");
      });
  });

  it("vote buttons should be disabled after voting Yes or No", () => {
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]')
      .contains("Holland Village, Singapore")
      .click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("12 HOLLAND VISTA").click();
    cy.get('[data-cy="search-results"]')
      .contains("Does it exist")
      .parent()
      .within(() => {
        cy.contains("Yes:").click();
        cy.contains("Yes:").should("be.disabled");
        cy.contains("No:").should("be.disabled");
      });
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="search"]').type("Holland");
    cy.get('[data-cy="search-suggestions"]')
      .contains("Holland Village, Singapore")
      .click();
    cy.get('[data-cy="search-results"]', { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get('[data-cy="search-results"]').contains("12 HOLLAND VISTA").click();
    cy.get('[data-cy="search-results"]')
      .contains("Does it exist")
      .parent()
      .within(() => {
        cy.contains("No:").click();
        cy.contains("Yes:").should("be.disabled");
        cy.contains("No:").should("be.disabled");
      });
  });
});
