describe("Recycle Can Meh?", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/recycle-can-meh/");
    // waiting for gradio app to be visible
    cy.get('[data-cy="gradio-app"]', { timeout: 10000 }).should("be.visible");
  });

  // testing page text
  it('should contain "RecycleCanMeh" h1 title', () => {
    cy.get("h1").contains("RecycleCanMeh");
  });

  it('should contain "Inputs" h2 title', () => {
    cy.get("h2").contains("Inputs");
  });

  it('should contain "Outputs" h2 title', () => {
    cy.get("h2").contains("Outputs");
  });

  // testing input
  it("input should be initially empty", () => {
    cy.get('input[type="file"]').should("have.value", "");
  });

  it('input section should be have "Drop Image Here" and "Click to Upload" placeholder text', () => {
    cy.get('[data-testid="image"]').contains("Drop Image Here");
    cy.get('[data-testid="image"]').contains("Click to Upload");
  });

  // testing prediction feature
  it('should show prediction results after uploading an image and click "Submit"', () => {
    cy.get('input[type="file"]').selectFile(
      {
        contents: "cypress/fixtures/images/plastic-bottle-sample.jpg",
        fileName: "plastic-bottle-sample.jpg",
        mimeType: "image/jpeg",
      },
      { force: true }
    );
    cy.wait(1000);
    cy.contains("Submit").click();

    cy.get("#component-15").contains("Plastic");
    cy.get("#component-16").contains("Plastic Container or Bottle");
  });

  it("should have five examples", () => {
    cy.get("#component-18 > .gallery").within(() => {
      cy.get("button").should("have.length", 5);
    });
  });

  it('should show prediction results after choosing an example and click "Submit"', () => {
    cy.get("#component-18 > .gallery > button > img").eq(0).click();
    cy.wait(3000);
    cy.contains("Submit").click();
    cy.get("#component-15").contains("Metal");
    cy.get("#component-16").contains("Metal Can or Container");

    cy.get("#component-18 > .gallery > button").eq(1).click();
    cy.wait(3000);
    cy.contains("Submit").click();
    cy.get("#component-15").contains("Plastic");
    cy.get("#component-16").contains("Plastic Container or Bottle");

    cy.get("#component-18 > .gallery > button").eq(2).click();
    cy.wait(3000);
    cy.contains("Submit").click();
    cy.get("#component-15").contains("Paper");
    cy.get("#component-16").contains("Paper Bag");

    cy.get("#component-18 > .gallery > button").eq(3).click();
    cy.wait(3000);
    cy.contains("Submit").click();
    cy.get("#component-15").contains("Glass");
    cy.get("#component-16").contains("Glassware");

    cy.get("#component-18 > .gallery > button").eq(4).click();
    cy.wait(3000);
    cy.contains("Submit").click();
    cy.get("#component-15").contains("Others");
    cy.get("#component-16").contains("Electronic Waste");
  });
});
