/* eslint-disable no-undef */
import { DIV_TEST, INPUT_TEST } from "../../constants";
describe("basic-state", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/basic-state");
  });
  it("input can be modified", () => {
    const text = "privet";
    cy.get(INPUT_TEST).type(text);
    cy.get(DIV_TEST).contains(text);
  });
});
