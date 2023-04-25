import Recyclables from "@/components/RecycleHowAh/Recyclables";

describe("Recyclables Component", () => {
  beforeEach(() => {
    cy.mount(<Recyclables />);
  });

  //checking if image and text for paper is there
  it("should render paper tab correctly", () => {
    cy.get(":nth-child(1) > .h-80")
      .find("img")
      .should("have.attr", "src")
      .should("include", "paper.jpg");
    cy.get(":nth-child(1) > .flex");
    cy.get(":nth-child(1) > .flex > :nth-child(2)").should(
      "contain.text",
      "Yes"
    );
    cy.get(":nth-child(1) > .flex > :nth-child(3)").should(
      "contain.text",
      "No"
    );
  });

  //checking if image and text for others is there
  it("should render others tab correctly", () => {
    cy.get(":nth-child(5) > .h-80")
      .find("img")
      .should("have.attr", "src")
      .should("include", "others.jpg");
    cy.get(":nth-child(5) > .flex");
    cy.get(":nth-child(5) > .flex > :nth-child(2)").should(
      "contain.text",
      "Yes"
    );
    cy.get(":nth-child(5) > .flex > :nth-child(3)").should(
      "contain.text",
      "No"
    );
  });
});
