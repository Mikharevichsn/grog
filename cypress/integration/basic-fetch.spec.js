/* eslint-disable no-undef */
describe("basic-fetch", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basic-fetch");
  });
  it("List is not empty", () => {
    cy.get(".ul-cy > li").should("have.length", 4);
  });
  it("Every li tag has author and title", () => {
    cy.get(".ul-cy > li").each((el) =>
      cy
        .wrap(el)
        .contains("автор", { matchCase: false })
        .and("contain", "title")
    );
  });
});
