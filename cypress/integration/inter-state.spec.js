/* eslint-disable no-undef */
describe("inter-state", () => {
  const text = "privet";
  beforeEach(() => {
    cy.visit("http://localhost:3000/inter-state");
  });
  it("input can be modified", () => {
    cy.get(".input-cy").type(text);
    cy.get(".input-cy").should("have.value", text);
  });
  it("button can be clicked", () => {
    cy.get(".button-cy").click();
  });
  it("after button is clicked new field is added", () => {
    cy.get(".input-cy").type(text);
    cy.get(".button-cy").click();
    cy.get(".item-cy")
  })
  it("multiple clicks create multiple divs", () => {
    cy.get(".input-cy").type(text);
    cy.get(".button-cy").click();
    cy.get(".button-cy").click();
    cy.get(".button-cy").click();
    cy.get(".item-cy").should("have.length", 3)
  })
  it("added elements have correct format", () => {
    cy.get(".input-cy").type(text);
    cy.get(".button-cy").click();
    cy.get(".button-cy").click();
    cy.get(".button-cy").click();
    cy.get(".item-cy").each((el, i) => {
      console.log(cy.wrap(el))
      cy.wrap(el).should("have.text", String(i)+text+i)
    })
  })
});
