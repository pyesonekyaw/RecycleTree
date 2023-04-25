import NavBar from "@/components/navigation/NavBar";
import Router from "next/router";

describe("NavBar Component", () => {
  context("stubbing out `useRouter` hook", () => {
    let router;

    beforeEach(() => {
      router = {
        back: cy.stub().as("routerBack"),
      };

      cy.stub(Router, "useRouter").returns(router);
    });

    it("should render RECYCLE GO WHERE? NavItem", () => {
      cy.mount(<NavBar />);
      cy.contains("RECYCLE GO WHERE");
    });

    it("should render RECYCLE CAN MEH? NavItem", () => {
      cy.mount(<NavBar />);
      cy.contains("RECYCLE CAN MEH?");
    });

    it("should render RECYCLE HOW AH? NavItem", () => {
      cy.mount(<NavBar />);
      cy.contains("RECYCLE HOW AH?");
    });

    it("should render Logo", () => {
      cy.mount(<NavBar />);
      cy.get('[data-cy="logo"]').should("be.exist");
    });
  });
});
