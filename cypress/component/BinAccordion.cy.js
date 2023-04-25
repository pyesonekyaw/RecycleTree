import BinAccordion from "@/components/RecycleGoWhere/BinAccordion";

const bins_1 = [
  {
    name: "238 CHOA CHU KANG CENTRAL, Singapore 680238",
    location: "POINT(103.7482099971412 1.379146254391805)",
    dist_meters: 40.12213496,
    lat: 1.3791462543918,
    lon: 103.748209997141,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
];

const bins_10 = [
  {
    name: "238 CHOA CHU KANG CENTRAL, Singapore 680238",
    location: "POINT(103.7482099971412 1.379146254391805)",
    dist_meters: 24.50628341,
    lat: 1.3791462543918,
    lon: 103.748209997141,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "237 CHOA CHU KANG CENTRAL, Singapore 680237",
    location: "POINT(103.7482874020921 1.379447498753876)",
    dist_meters: 57.17698859,
    lat: 1.37944749875388,
    lon: 103.748287402092,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "239 CHOA CHU KANG CENTRAL, Singapore 680239",
    location: "POINT(103.7475484417083 1.379448763493492)",
    dist_meters: 97.93991336,
    lat: 1.37944876349349,
    lon: 103.747548441708,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "236 CHOA CHU KANG CENTRAL, Singapore 680236",
    location: "POINT(103.7482096354835 1.379815805107637)",
    dist_meters: 98.0118976,
    lat: 1.37981580510764,
    lon: 103.748209635484,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "235 CHOA CHU KANG CENTRAL, Singapore 680235",
    location: "POINT(103.7487492019683 1.379756642944512)",
    dist_meters: 106.1520597,
    lat: 1.37975664294451,
    lon: 103.748749201968,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "818 KEAT HONG MIRAGE, CHOA CHU KANG AVENUE 1, Singapore 680818",
    location: "POINT(103.7488267784014 1.378026160244996)",
    dist_meters: 118.12909052,
    lat: 1.378026160245,
    lon: 103.748826778401,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "123 TECK WHYE LANE, Singapore 680123",
    location: "POINT(103.7494576871691 1.379196354566081)",
    dist_meters: 136.20737917,
    lat: 1.37919635456608,
    lon: 103.749457687169,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "234 CHOA CHU KANG CENTRAL, Singapore 680234",
    location: "POINT(103.7481376341795 1.380206946834906)",
    dist_meters: 141.76829292,
    lat: 1.38020694683491,
    lon: 103.748137634179,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "818A KEAT HONG MIRAGE, CHOA CHU KANG AVENUE 1, Singapore 681818",
    location: "POINT(103.7484887719528 1.377629359691988)",
    dist_meters: 146.11709325,
    lat: 1.37762935969199,
    lon: 103.748488771953,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
  {
    name: "122 TECK WHYE LANE, Singapore 680122",
    location: "POINT(103.7496306977932 1.378518975439272)",
    dist_meters: 158.93441616,
    lat: 1.37851897543927,
    lon: 103.749630697793,
    rating_number: 0,
    rating_score: 0,
    existence_yes: 0,
    existence_no: 0,
  },
];

describe("BinAccordion Component", () => {
  // test IndividualBin props
  it("should render IndividualBin props correctly", async () => {
    cy.mount(<BinAccordion bins={bins_1} />);

    cy.get('[data-cy="individual-bin"]').contains(bins_1[0].name);
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].location)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]').contains(
      `${bins_1[0].dist_meters.toFixed(2)} meters away`
    );
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].lat)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].lon)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]')
      .contains(`${bins_1[0].rating_number} ratings`)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]')
      .contains(`Yes: ${bins_1[0].existence_yes}`)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]')
      .contains(`No: ${bins_1[0].existence_no}`)
      .should("not.exist");

    cy.get('[data-cy="individual-bin"]').click();

    cy.get('[data-cy="individual-bin"]').contains(bins_1[0].name);
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].location)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]').contains(
      `${bins_1[0].dist_meters.toFixed(2)} meters away`
    );
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].lat)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]')
      .contains(bins_1[0].lon)
      .should("not.exist");
    cy.get('[data-cy="individual-bin"]').contains(
      `${bins_1[0].rating_number} ratings`
    );
    cy.get('[data-cy="individual-bin"]').contains(
      `Yes: ${bins_1[0].existence_yes}`
    );
    cy.get('[data-cy="individual-bin"]').contains(
      `No: ${bins_1[0].existence_no}`
    );
  });

  // test edge cases (1-10 bins)
  it("should render 1 bin when bins length is 1", async () => {
    // const bins = await getNearbyBins(1);
    cy.mount(<BinAccordion bins={bins_1} />);
    cy.find('[data-cy="individual-bin"]').should("have.length", 1);
  });
  it("should render 10 bin when bins length is 10", async () => {
    // const bins = await getNearbyBins(10);
    cy.mount(<BinAccordion bins={bins_10} />);
    cy.find('[data-cy="individual-bin"]').should("have.length", 10);
  });
});
