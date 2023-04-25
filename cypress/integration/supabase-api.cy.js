import BinAccordion from "@/components/RecycleGoWhere/BinAccordion";
import { supabase } from "utils/supabaseClient";

const mockLocation = {
  lat_input: 1.3788684531587554,
  long_input: 103.74825218502244,
};

async function getNearbyBins(maxi) {
  const { data } = await supabase.rpc("nearby_bins_2", {
    lat_input: mockLocation.lat_input,
    long_input: mockLocation.long_input,
    maxi,
  });
  return data;
}

describe("Supabase API", () => {
  // test edge cases (1-10 bins)
  it("should render 1 bin when requesting 1 bin", async () => {
    const bins = await getNearbyBins(1);
    cy.mount(<BinAccordion bins={bins} />);
    cy.find('[data-cy="individual-bin"]').should("have.length", 1);
  });
  it("should render 10 bins when requesting 10 bin", async () => {
    const bins = await getNearbyBins(10);
    cy.mount(<BinAccordion bins={bins} />);
    cy.find('[data-cy="individual-bin"]').should("have.length", 10);
  });
});
