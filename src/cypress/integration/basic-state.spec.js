/* eslint-disable no-undef */
import {BASIC_DIV_CLASS} from "../../../constants"
describe("basic-state", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basic-state");
  });
  it("input can be modified", () => {
    const text = "privet";
    cy.get(".input-cy").type(text);
    cy.get(BASIC_DIV_CLASS).contains(text);
  });
});
