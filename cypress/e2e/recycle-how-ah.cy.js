describe("Recycle How Ah", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/recycle-how-ah/");
  });

  // testing page text
  it('should contain "RecycleHowAh" h1 title', () => {
    cy.get("h1").contains("RecycleHowAh");
  });

  // testing accordion tabs
  it('Clicking "What is Recyclable?" accordion title should toggle Recyclables element visibility', () => {
    cy.get('[data-cy="recyclables"]').should("not.exist");
    cy.get("h2").contains("What is Recyclable?").click();
    cy.get('[data-cy="recyclables"]').should("be.visible");
    cy.get("h2").contains("What is Recyclable?").click();
    cy.get('[data-cy="recyclables"]').should("not.exist");
  });

  it('Clicking "Dispose Waste Responsibly" accordion title should toggle DisposeWaste element visibility', () => {
    cy.get('[data-cy="dispose-waste"]').should("not.exist");
    cy.get("h2").contains("Dispose Waste Responsibly").click();
    cy.get('[data-cy="dispose-waste"]').should("be.visible");
    cy.get("h2").contains("Dispose Waste Responsibly").click();
    cy.get('[data-cy="dispose-waste"]').should("not.exist");
  });

  it('Clicking "Determine Recyclability of Item" accordion title should toggle Stepper element visibility', () => {
    cy.get('[data-cy="stepper"]').should("not.exist");
    cy.get("h2").contains("Determine Recyclability of Item").click();
    cy.get('[data-cy="stepper"]').should("be.visible");
    cy.get("h2").contains("Determine Recyclability of Item").click();
    cy.get('[data-cy="stepper"]').should("not.exist");
  });

  it('Clicking "Recycling Statistics in Singapore" accordion title should toggle RecycleStats element visibility', () => {
    cy.get('[data-cy="recycle-stats"]').should("not.exist");
    cy.get("h2").contains("Recycling Statistics in Singapore").click();
    cy.get('[data-cy="recycle-stats"]').should("be.visible");
    cy.get("h2").contains("Recycling Statistics in Singapore").click();
    cy.get('[data-cy="recycle-stats"]').should("not.exist");
  });
});
