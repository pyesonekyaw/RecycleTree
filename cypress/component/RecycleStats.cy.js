import RecycleStats from "@/components/RecycleHowAh/RecycleStats";

describe("RecycleStats Component", () => {
  beforeEach(() => {
    cy.mount(<RecycleStats />);
  });

  it("should render graph bar info for 2010 correctly", () => {
    cy.wait(2000);
    cy.get("#SvgjsPath1020").click();
    cy.get(".apexcharts-tooltip-title").should("contain.text", "2010");
    cy.get(".apexcharts-tooltip-series-group").should("contain.text", "22");
  });

  it("should render graph bar info for 2020 correctly", () => {
    cy.wait(2000);
    cy.get("#apexchartsRecyclingRates").click(420, 290);
    cy.get(".apexcharts-tooltip-title").should("contain.text", "2020");
    cy.get(".apexcharts-tooltip-series-group").should("contain.text", "13");
  });
});
