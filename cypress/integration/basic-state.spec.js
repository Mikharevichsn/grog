/* eslint-disable no-undef */
describe("basic-state", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basic-state");
  });
  it("input can be modified", () => {
    const text = "privet";
    cy.get(".input-cy").type(text);
    cy.get(".data-cy").contains(text);
  });
});
