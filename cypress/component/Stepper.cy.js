import Stepper from "@/components/RecycleHowAh/Stepper";

describe("Stepper Component", () => {
  beforeEach(() => {
    cy.mount(<Stepper />);
  });

  //First answer to stepper is incorrect
  it("Stepper 1st-F", () => {
    cy.get(".bg-red-500").click();
    cy.get(".mt-4").should("contain.text", "Not recyclable!");
  });

  //third answer to stepper is incorrect
  it("Stepper 3rd-F", () => {
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".bg-red-500").click();
    cy.get(".mt-4").should("contain.text", "Not recyclable!");
  });

  //backward from last step
  it("Stepper back button from last step", () => {
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".bg-blue-500").click();
    cy.get(".bg-blue-500").click();
    cy.get(".bg-blue-500").click();
    cy.get(":nth-child(1) > .ml-4 > .text-xl").should(
      "contain.text",
      "Is it contaminated with food/drinks?"
    );
  });

  // All answers to stepper are correct and reset button is pressed
  it("Stepper all pass and reset", () => {
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".bg-green-500").click();
    cy.get(".mt-4").should("contain.text", "Recyclable!");
    cy.get(".px-4").click();
    cy.get(":nth-child(1) > .ml-4 > .text-xl").should(
      "contain.text",
      "Is it contaminated with food/drinks?"
    );
  });
});
