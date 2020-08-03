/* eslint-disable no-undef */
import {
  ROUTE_INTER_FETCH,
  BASE_PROJECT_URL,
  FORM_TEST,
  INPUT_TEST,
  DIV_TEST,
} from "../../constants";
describe("inter-fetch", () => {
  const testValue = "Вася";
  beforeEach(() => {
    cy.visit(`${BASE_PROJECT_URL}${ROUTE_INTER_FETCH}`);
  });
  it("form is present", () => {
    cy.get(FORM_TEST);
  });
  it("form has an input", () => {
    cy.get(FORM_TEST).within(() => {
      cy.get(INPUT_TEST);
    });
  });
  it("input is valid", () => {
    cy.get(INPUT_TEST).type(testValue);
    cy.get(INPUT_TEST).should("have.value", testValue);
  });
  it("form submission does not reload the page", () => {
    cy.get(INPUT_TEST).type(testValue);
    cy.get(FORM_TEST).submit();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(`${BASE_PROJECT_URL}${ROUTE_INTER_FETCH}`);
    });
  });
  it("submitting forms yields result in proper format", () => {
    cy.get(INPUT_TEST).type(testValue);
    cy.get(FORM_TEST).submit();
    cy.get(DIV_TEST)
      .contains(testValue)
      .contains("title", { matchCase: false })
      .contains("author", { matchCase: false });
  });
});
