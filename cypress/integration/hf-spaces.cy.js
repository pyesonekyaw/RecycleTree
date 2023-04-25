import Script from "next/script";

describe("Hugging Face Spaces", () => {
  it("hf spaces should render on page as a gradio app", () => {
    cy.mount(
      <>
        <gradio-app
          src="https://pyesonekyaw-recycletree.hf.space"
          data-cy="gradio-app"
        ></gradio-app>
        <Script
          type="module"
          src="https://gradio.s3-us-west-2.amazonaws.com/3.19.1/gradio.js"
        />
      </>
    );
    cy.get('[data-cy="gradio-app"]', { timeout: 10000 }).should("be.visible");
  });

  it("hf spaces should show prediction feature", () => {
    cy.mount(
      <>
        <gradio-app
          src="https://pyesonekyaw-recycletree.hf.space"
          data-cy="gradio-app"
        ></gradio-app>
        <Script
          type="module"
          src="https://gradio.s3-us-west-2.amazonaws.com/3.19.1/gradio.js"
        />
      </>
    );
    cy.get('[data-cy="gradio-app"]', { timeout: 10000 }).contains(
      "Check whether your trash is recyclable or not!"
    );
  });
});
