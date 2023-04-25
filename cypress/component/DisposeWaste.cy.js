import DisposeWaste from "@/components/RecycleHowAh/DisposeWaste";

describe("DisposeWaste Component", () => {
  beforeEach(() => {
    cy.mount(<DisposeWaste />);
  });

  it("should open the tab when clicked", () => {
    cy.get(":nth-child(1) > h3.flex").click(30, 20);
    cy.get(".w-full > :nth-child(1)").contains("Tzu Chi Foundation");
  });

  it("an opened tab should close when another is opened", () => {
    cy.get(":nth-child(1) > h3.flex").click(30, 20);
    cy.get(":nth-child(2) > h3.flex").click(30, 20);
    cy.get(".w-full > :nth-child(1)")
      .contains("Tzu Chi Foundation")
      .should("not.exist");
    cy.get(".w-full > :nth-child(2)").contains("composting guide");
  });
});
