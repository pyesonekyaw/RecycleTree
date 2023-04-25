import BinSlider from "@/components/RecycleGoWhere/BinSlider";

describe("BinSlider Component", () => {
  it("should accept slider value = 1", () => {
    cy.mount(<BinSlider value={[1]} />);
  });
  it("should accept slider value = 5", () => {
    cy.mount(<BinSlider value={[5]} />);
  });
  it("should accept slider value = 10", () => {
    cy.mount(<BinSlider value={[10]} />);
  });
});
